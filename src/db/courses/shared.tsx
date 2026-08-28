import { CourseShared } from "@/types/course";

export const sharedCoursesData = {
    bsw: {
        slug: "bachelor-of-social-work",
        aliasSlugs: ["bsw"],
        thumbnail: "/images/courses/bachelor-of-social-work.webp",
        seats: "70 Seats",
        duration: "3 Years (6 Semesters)",
        aisheCode: "C-75887",
        collegeSlug: "vjkm-self-finance-college-of-bsw",
    },
    msw: {
        slug: "master-of-social-work",
        aliasSlugs: ["msw"],
        thumbnail: "/images/courses/master-of-social-work.webp",
        seats: "200 Seats",
        aisheCode: "C-70245",
        duration: "2 Years (4 Semesters)",
        collegeSlug: "vjkm-self-finance-college-of-msw",
    },
} satisfies Record<string, CourseShared>;