import { CollegeSlugs, CourseSlugs } from '@/types/index';

type ReferenceSlug = CollegeSlugs | CourseSlugs;

export type OpportunityShared = {
    slug: string;
    thumbnail: string;
    referenceSlugs: ReferenceSlug[];
};

export type OpportunityLocalized = {
    title: string;
    description: string;
};

export type Opportunity = OpportunityShared & OpportunityLocalized;