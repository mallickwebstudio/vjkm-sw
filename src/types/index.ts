import { Locale } from "@/i18n/routing";

export type { Course } from "./course";
export type { Facility } from "./facility";
export type { Opportunity } from "./opportunity";


export type LocalePageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export type LocaleProps = {
  locale: Locale;
  className?: string;
};

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
