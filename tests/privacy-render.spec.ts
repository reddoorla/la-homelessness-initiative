// The privacy page's landmark and meta description must not depend on the draft
// flag. PRIVACY_POLICY_DRAFT is `true` today, so the smoke suite only ever sees
// the draft render; this spec renders the component server-side with `draft`
// both ways, through the site's own Vite config (so `$lib` and the Svelte
// compiler resolve as they do in a build). It opens no page, so it needs no
// browser. P1-97, #81: the fleet render check marked the site Broken for a
// /privacy with no `<main>` and no `<meta name="description">`.
import { test, expect } from "@playwright/test";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer, type ViteDevServer } from "vite";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

let vite: ViteDevServer;

test.beforeAll(async () => {
  vite = await createServer({
    root: repoRoot,
    configFile: resolve(repoRoot, "vite.config.ts"),
    logLevel: "silent",
    server: { middlewareMode: true, hmr: false, ws: false },
    appType: "custom",
  });
});

test.afterAll(async () => {
  await vite?.close();
});

async function renderPrivacy(draft: boolean) {
  const { render } = (await vite.ssrLoadModule("svelte/server")) as typeof import("svelte/server");
  const page = await vite.ssrLoadModule("/src/routes/privacy/+page.svelte");
  const { SITE_SERVICES } = await vite.ssrLoadModule("/src/lib/privacy/services.ts");
  return render(page.default, {
    props: {
      data: {
        privacy: {
          legalName: "Example Co",
          contactEmail: "privacy@example.com",
          effectiveDate: "2026-11-03",
          draft,
          services: SITE_SERVICES,
        },
      },
    },
  });
}

for (const draft of [true, false]) {
  test(`/privacy renders a main landmark and a meta description with draft=${draft}`, async () => {
    const { head, body } = await renderPrivacy(draft);
    const tag = head.match(/<meta\b[^>]*\sname=["']description["'][^>]*>/i)?.[0];
    expect(tag, "meta description tag").toBeTruthy();
    const content = tag?.match(/\scontent=(["'])(.*?)\1/i)?.[2] ?? "";
    expect(content.trim(), "meta description content").not.toBe("");
    const main = body.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";
    expect(main, "main landmark wrapping the whole policy").toMatch(/<article\b[\s\S]*<\/article>/);
    // The draft flag still gates what it is meant to gate.
    expect(head.includes('name="robots"'), "noindex only while draft").toBe(draft);
  });
}
