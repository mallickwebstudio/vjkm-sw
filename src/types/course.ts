import { CollegeSlugs, CourseSlugs } from "@/types/index";

export type CourseShared = {
    slug: CourseSlugs;
    thumbnail: string;
    seats: string | null;
    collegeSlug: CollegeSlugs;
    duration: string;
};

export type CourseLocalized = {
    title: string;
    type: string;
    applicationDeadline: string;
    fees: string;
    batchStarts: string;
    studyHours: string;
    eligibility: string;
    subjects: string[];
    desc: string;
    details: {
        description: React.ReactNode;
        detailedDescription: React.ReactNode;
        whyStudy: React.ReactNode;
    };
};

export type Course = CourseShared & CourseLocalized;
