// import { collegesData as collegesEn } from "@/db/colleges/en";
// import { collegesData as collegesGu } from "@/db/colleges/gu";
import { facilitiesData as facilitiesEn } from "@/db/facilities/en";
import { facilitiesData as facilitiesGu } from "@/db/facilities/gu";
import { coursesData as coursesEn } from "@/db/courses/en";
import { coursesData as coursesGu } from "@/db/courses/gu";
import { opportunitiesData as opportunitiesEn } from "@/db/opportunities/en";
import { opportunitiesData as opportunitiesGu } from "@/db/opportunities/gu";
// import { cellsData as cellsEn } from "@/db/cells/en";
// import { cellsData as cellsGu } from "@/db/cells/gu";
import type { Course, Facility, Opportunity } from "@/types";
import { Locale } from "next-intl";

// const colleges: Record<Locale, College[]> = {
//     en: collegesEn,
//     gu: collegesGu,
// } as const;

const courses: Record<Locale, Course[]> = {
    en: coursesEn,
    gu: coursesGu,
} as const;

const facilities: Record<Locale, Facility[]> = {
    en: facilitiesEn,
    gu: facilitiesGu,
} as const;

const opportunities: Record<Locale, Opportunity[]> = {
    en: opportunitiesEn,
    gu: opportunitiesGu,
} as const;

// const cells: Record<Locale, Cells[]> = {
//     en: cellsEn,
//     gu: cellsGu,
// } as const;

// export function getCollegesData(locale: Locale): College[] {
//     return colleges[locale];
// }

export function getCoursesData(locale: Locale): Course[] {
    return courses[locale];
}

export function getFacilitiesData(locale: Locale): Facility[] {
    return facilities[locale];
}

export function getOpportunitiesData(locale: Locale): Opportunity[] {
    return opportunities[locale];
}

// export function getCellsData(locale: Locale): Cells[] {
//     return cells[locale];
// }

export function getAllDatas(locale: Locale) {
    return {
        // collegesData: getCollegesData(locale),
        coursesData: getCoursesData(locale),
        facilitiesData: getFacilitiesData(locale),
        opportunitiesData: getOpportunitiesData(locale),
    };
}

