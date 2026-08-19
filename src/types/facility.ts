import { CollegeSlugs, CourseSlugs } from '@/types/index';

export type FacilityCategory =
    | "labs"
    | "sports"
    | "academic-infrastructure"
    | "research-facilities"
    | "student-facilities"
    | "Accessibility & Safety";

export type ReferenceSlug = CollegeSlugs | CourseSlugs;

export type FacilityShared = {
    slug: string;
    thumbnail: string;
    imageSrcs: string[];
    categorySlugs: FacilityCategory[];
    referenceSlugs: ReferenceSlug[];
};
export type FacilityLocalized = {
    title: string;
    description: string;
};

export type Facility = FacilityShared & FacilityLocalized;