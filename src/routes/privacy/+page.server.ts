import { SITE_SERVICES } from "$lib/privacy/services";
import { PRIVACY_POLICY_DRAFT } from "$lib/privacy/policy";
import type { PageServerLoad } from "./$types";

/**
 * The policy's owner and contact. Empty renders the page's own placeholders
 * ("[client legal name]"), which is how the starter ships too; the values are
 * the client's to give, not ours to guess.
 */
const PRIVACY = { legalName: "", contactEmail: "", effectiveDate: "" };

export const load: PageServerLoad = () => ({
  title: "Privacy Policy",
  noindex: PRIVACY_POLICY_DRAFT,
  privacy: { ...PRIVACY, draft: PRIVACY_POLICY_DRAFT, services: SITE_SERVICES },
});
