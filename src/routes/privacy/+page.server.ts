import { SITE_SERVICES } from "$lib/privacy/services";
import { PRIVACY_POLICY_DRAFT } from "$lib/privacy/policy";
import type { PageServerLoad } from "./$types";

/**
 * The policy's owner and contact. The client gave no values, so on the
 * operator's word (2026-11-03, reddoor-maintenance#921: "if there's no value
 * default to reddoor") the policy names Reddoor. Empty strings would render
 * the page's own placeholders ("[client legal name]").
 */
const PRIVACY = {
  legalName: "Reddoor Creative",
  contactEmail: "info@reddoorla.com",
  effectiveDate: "2026-11-03",
};

export const load: PageServerLoad = () => ({
  title: "Privacy Policy",
  noindex: PRIVACY_POLICY_DRAFT,
  privacy: { ...PRIVACY, draft: PRIVACY_POLICY_DRAFT, services: SITE_SERVICES },
});
