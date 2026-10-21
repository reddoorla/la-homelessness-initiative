# LA Homelessness Initiative — Work Journal

Running log of build work: what was done, why, and where it landed.
Chronological — newest entry at the bottom.

The convention is in [CLAUDE.md](../CLAUDE.md) under "The work journal". In
short: every working session appends a dated entry, prose over bullets, why
over what, and history is never edited to be right — a later entry corrects an
earlier one and says so.

---

## 2026-09-05 — Journal opened, and 89 commits of history summarised rather than reconstructed (`chore/work-journal`)

The journal starts today, so this first entry is a **backfill**: a coarse
summary written from the commit log, not from memory. Detail below this line is
trustworthy; detail above it is not, and nothing here should be cited as though
someone wrote it down at the time. For anything before 2026-09-05 the commit log
is the record.

**What this repo is.** A bespoke single-page SvelteKit site — `<title>Hearts and
Minds` — making the case on homelessness in Los Angeles County: six full-screen
frames the visitor advances through, an emergency-help modal, a "myths" panel
whose claims shatter on click, animated statistics, and a wall of partner
organisations. There is no CMS. Every word is hard-coded in
`src/routes/+page.svelte`, all 2,613 lines of it; `$lib/stores/activeFrame` holds
which frame is showing and `Panel.svelte` translates the rest off-screen.

**The eras.** 89 commits, one author, in two very different modes. **67 land in
ten weeks of 2024** (20 in May, 38 in June, 9 in July) — the original hand-built
animation work, with commit messages to match: "shattering first pass", "moved
the bench up", "moving svgs up on mobiel for toolbar", "bob". Then the site sits
still: **one commit in all of 2025**, adding `robots.txt`. It returns in
**2026-06** (14) and **2026-07** (7), and that burst is fleet adoption rather
than feature work — the Svelte 5 stack (#1), the org's reusable CI workflow and
renovate preset (#3), Node 24 and pnpm 11 (#5), Typekit folded into the shared
kit `noj4tji` and loaded async (#6, #7), the contact form moved off reCAPTCHA +
SendGrid onto central ingest (#8), a11y labelling (#9), then `/health` (#15) and
a smoke suite (#16). One content change hides in there: `ed67a26` re-framed the
copy from youth mental health to county-wide.

**The naming has never agreed with itself.** Repo `la-homelessness-initiative`,
Netlify site `la-homelessness-general`, page title "Hearts and Minds",
`.env.example` forms slug `youth-mental-health` — all one site. Nothing breaks;
it just costs a few minutes every time someone hunts for the deploy.

**State as of this entry.** `main` at `5c59adc` (2026-08-02), unmoved since, no
open PRs. The checkout was parked on `ci/wire-smoke-tests` at `20e8f83` —
squash-merged as #21 on 2026-07-16 and nine commits behind `main` — clean tree,
nothing in flight, so this branch was cut from `origin/main` instead: a PR off
that stale base would have proposed reverting nine merged commits, the
security-advisory clearance in #25 among them. Half a dozen abandoned
`renovate/*` branches remain on the remote with no PRs attached.

**What changed today.** `CLAUDE.md` and this file, nothing else.

## 2026-10-06 — Search Console verification tag on the live domain

The operator asked to add Search Console to "lahomelessness" and gave the HTML-tag verification token. Two repos match the name. The tag goes here because this repo is the one with a custom domain: its Netlify site owns `www.lahomelessnessawareness.org`, and la-homelessness-youth is marked `no custom domain`, so a Search Console property can only verify on this one. The `<meta name="google-site-verification">` sits in `src/app.html`, beside the other static head tags, rather than in the page's `<svelte:head>`. That way it ships on every route, including the error page, and does not depend on hydration. A smoke test asserts the tag and its exact token on `/`. It fails with the tag removed and passes with it in place. Google's own Verify button is the real check, and it can only pass after this deploys.

## 2026-10-19 — SvelteKit 3 and adapter-netlify 7 on `createKitConfig` (branch `claude/p1-53-kit3`, replaces #51 and #52)

Renovate opened kit 3 (#51) and adapter-netlify 7 (#52) as two separate PRs, and neither can land alone: adapter 7 peers kit ^3, and kit 3 refuses to start beside a `svelte.config.js` (`config_file_unsupported`). This is the factory-shaped port (reddoor-maintenance P1-53), done the way la-homelessness-youth#32 did it, since that repo was split from this one in July and the two still share their routes almost line for line. `@reddoorla/maintenance` went from ^0.97.0 to ^0.109.0 (installed 0.109.0, peer range `^2.0.0 || ^3.0.0`), whose `createKitConfig` takes kit 3's top-level options and adds the `$lib` aliases kit 3 no longer provides. Kit resolved to 3.1.0, the adapter to 7.0.1. The bump broke nothing else here: the eslint, playwright and forms exports this site uses are unchanged.

Kit 3 exposes only the environment variables a `src/env.ts` declares. Before this change the forms endpoint and `/health` read `FORMS_INGEST_URL`, `FORMS_INGEST_TOKEN` and `PUBLIC_TURNSTILE_SITE_KEY` through `$env/dynamic/*`; on kit 3 without a declaration those are `undefined` with only a build warning, so the contact form would have stopped delivering while every check stayed green. All three are now declared (the token and URL private, the sitekey public) and read through `$app/env`. A preview of the build with all three set answered `/health` with `{"ok":true,"prismic":"skipped","forms":{"ingestUrl":true,"ingestToken":true,"turnstile":true}}`. The `/dev` layout's `dev` flag moved from `$app/environment` to `$app/env`. No `prerender.origin` was ever set here and every route is `prerender = false`, so nothing bakes an origin: a build with `URL` set leaves zero files under `build/` containing `sveltekit-prerender`, before and after.

The starter's kit-config gate is `tests/kit-config.spec.ts`, a Playwright spec rather than the starter's vitest file, because `pnpm test` here is the smoke suite and is what CI runs. It opens no page. Of its four mutations, three turned the spec red on its own assertion (a `$app/stores` import in `Panel.svelte`, `paths.origin` set, `FORMS_INGEST_TOKEN` undeclared). The fourth, a restored `svelte.config.js`, went red one step earlier: Playwright's web server is a vite dev server, which refused to start on `config_file_unsupported`, so the spec's own existence check never ran. It is still a red `pnpm test`, and `pnpm build` fails the same way.

One belief corrected: the `config.alias` deprecation that kit 3.1.0 now prints on every sync, build and test run is expected, not a defect of the port. `createKitConfig` sets `alias` on purpose, because kit 3 dropped `$lib`; moving to subpath imports is a later change. svelte-check reports 0 errors and 0 warnings, as it did on staging.

## 2026-10-20 — The suggestion form is covered by the fleet's form-e2e probe (`claude/od31-form-e2e-testmode`, into `staging`)

The nightly form-e2e probe in reddoor-maintenance refuses to submit to a site whose `/health` does not declare `forms.testMode`, because an unmarked probe is a real lead. It also needs a `<form>` in the DOM at `domcontentloaded` on `/contact` or `/`. Here the form was the suggestion modal, behind `{#if isSuggestionModalActive}`, absent from the DOM until a click, and `/contact` 404'd. Operator decision 31 (reddoor-maintenance#779) put this site and four others in one PR each, this one into a `staging` recut from `main`.

The modal now stays in the DOM while closed, invisible and `inert`, with a CSS transition (400 ms, translate and opacity from the left) standing in for the `fly` that only ran on an `{#if}` mount. `/contact` 301s to `/?<query>#contact`; the homepage opens the modal for that hash, then drops it so a reload stays closed. The client built its JSON from bound state, which the probe's injected hidden input is not part of, so it reads `testMode` from the form element; `/api/forms` forwards it as top-level `testMode: true` and `/health` declares it. "THANK YOU!" carries `role="status"`, and the layout sets `html[data-hydrated]`.

**Tried and reverted.** An always-present `role="status"` wrapper, so the thanks would be announced reliably, was a flex item of the modal's `gap-20 items-center` column: it added an 80 px gap under the form and centred the thank-you. `role="status"` went back on the thank-you block, and the announcement is #58, which also records why an `sr-only` sibling would be worse (Playwright counts a 1 px box as visible, so the probe would pass before any submission). The form's id was `contact`, so `/#contact` scrolled the opened modal 48 px; it is `contact-form` now.

**The probe cannot see a broken forward.** Against a local fixture that declares `testMode` and drops it, maintenance's real runner reported success. So the smoke suite starts a capture ingest (`tests/smoke/ingest-capture.ts`, a free port per run), `playwright.config.ts` forces `FORMS_INGEST_URL` at it, and `tests/smoke/contact-form-e2e.spec.ts` submits the real form and asserts on the body ingest would receive. Each brief mutation turns it red: the server dropping `testMode` (1 of 5), reading it from bound state (1 of 5), no `role="status"` (2 of 5), a broken hash opener (3 of 5). Against this branch's production build, with ingest pointed at a local capture server, the real runner followed the 301, opened the modal, and the captured body carried `testMode: true`.

## 2026-10-21 — `main-gate` waits for the activity feed to reach the PR head (`claude/main-gate-activity-retry`, into `staging`)

`main-gate` proves that only `reddoor-renovate[bot]` pushed to a fast-track branch by reading the repository activity feed, and that feed is eventually consistent. On 2026-10-21 it listed nothing 22–24 seconds after Renovate created the branch for reddoorla/la-homelessness-initiative#65, a vite security patch, so the gate failed closed and the PR sat red until it was re-run by hand. The file here is now reddoor-maintenance's template from reddoorla/reddoor-maintenance#1625, byte for byte. It trusts the feed only once the newest entry is the PR's head commit and the feed lists a `branch_creation`, reading again for up to 60 seconds before it fails closed. Retrying merely until the feed was non-empty was the first draft, and review rejected it: a partly filled feed could show Renovate's creation without a stranger's later push. The stranger-pusher check is unchanged. `pull_request_target` runs `main`'s copy, so this takes effect at the next promotion. The test, the mutations and the live dry run are in reddoor-maintenance's `docs/journal/2026-10-21-1440-main-gate-activity-retry.md`.
