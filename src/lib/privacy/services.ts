/**
 * Which third parties this site hands visitor data to, for /privacy.
 *
 * The starter derives this at build time from the source tree
 * (reddoor-starter `scripts/privacy-services.ts`). That derivation misreads this
 * site: `+page.svelte` links to eight partner organisations' YouTube channels, and
 * with no CSP to consult the starter counts any `www.youtube.com` string as an
 * embed, so the policy would claim the site shows YouTube video. It shows none.
 * A bespoke single page changes its services rarely and by hand, so they are
 * declared here instead, each with the line that makes it true.
 */
export type PrivacyServices = {
  /** src/routes/api/forms/+server.ts: `createIngestEndpoint`. */
  forms: boolean;
  /** No widget renders in src/, though the Netlify env holds a sitekey. */
  turnstile: boolean;
  newsletter: boolean;
  /** src/hooks.client.ts starts the GA4 tag. */
  ga4: boolean;
  /** sveltekit.config.js: adapter-netlify. */
  netlify: boolean;
  /** src/app.html: use.typekit.net. */
  adobeFonts: boolean;
  googleFonts: boolean;
  vimeo: boolean;
  youtube: boolean;
};

export const SITE_SERVICES: PrivacyServices = {
  forms: true,
  turnstile: false,
  newsletter: false,
  ga4: true,
  netlify: true,
  adobeFonts: true,
  googleFonts: false,
  vimeo: false,
  youtube: false,
};
