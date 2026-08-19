
export const collegeSlugs = [
  "vjkm-self-finance-college-of-bsw",
  "vjkm-self-finance-college-of-msw",
] as const;

export type CollegeSlugs = typeof collegeSlugs[number];

export const courseSlugs = [
  "bachelor-of-social-work",
  "master-of-social-work",
] as const;

export type CourseSlugs = typeof courseSlugs[number];
