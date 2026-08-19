import { CourseShared } from "@/types/course";

export const sharedCoursesData = {
    bsw: {
        slug: "bachelor-of-social-work",
        thumbnail: "/images/courses/bachelor-of-social-work.webp",
        seats: "70 Seats",
        duration: "3",
        collegeSlug: "vjkm-self-finance-college-of-bsw",
    },
    msw: {
        slug: "master-of-social-work",
        thumbnail: "/images/courses/master-of-social-work.webp",
        seats: "200 Seats",
        duration: "2",
        collegeSlug: "vjkm-self-finance-college-of-msw",
    },
} satisfies Record<string, CourseShared>;