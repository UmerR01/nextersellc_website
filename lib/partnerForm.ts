// Shared by the partner enquiry form (components/PartnerForm.tsx) and its API
// route (app/api/partner-inquiry/route.ts) so both validate against the same
// option lists and length limits.

export const EMPLOYEES = ["1 to 10", "11 to 50", "51 to 200", "201 to 500", "501 to 1,000", "More than 1,000"];

export const PARTNERSHIP_TYPES = [
  "Technology partner",
  "Referral partner",
  "Reseller partner",
  "Delivery and implementation partner",
  "Strategic alliance",
  "Other",
];

export const SOURCES = ["Search engine", "LinkedIn", "Referral", "Event or conference", "Social media", "Other"];

export const LIMITS = {
  name: 50,
  email: 254,
  phone: 20,
  industry: 100,
  message: 1000,
} as const;

export const MIN_LENGTH = {
  industry: 2,
  message: 10,
} as const;
