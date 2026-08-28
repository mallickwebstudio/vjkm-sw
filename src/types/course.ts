import { CollegeSlugs, CourseSlugs } from "@/types/index";

export type CourseShared = {
    slug: CourseSlugs | string;
    aliasSlugs?: string[];
    thumbnail: string;
    seats: string | null;
    aisheCode: string;
    collegeSlug: CollegeSlugs;
    duration: string;
};

export type CourseSemesterModule = {
    semester: string;
    title: string;
    subjects: string[];
};

export type CourseSpecialization = {
    title: string;
    desc: string;
};

export type CourseLocalized = {
    title: string;
    shortTitle?: string;
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
        highlights?: string[];
        fieldworkDetails?: string;
        specializations?: CourseSpecialization[];
        semesterStructure?: CourseSemesterModule[];
        careerOutcomes?: { role: string; desc: string }[];
    };
};

export type Course = CourseShared & CourseLocalized;
