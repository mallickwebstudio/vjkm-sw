import { FacilityShared, ReferenceSlug } from "@/types/facility";

const listAllCoursesColleges: ReferenceSlug[] = ["vjkm-self-finance-college-of-bsw", "vjkm-self-finance-college-of-msw"]

export const sharedFacilitiesData = {
    cricket: {
        slug: "cricket-ground",
        thumbnail: "/images/facilities/cricket-ground-0.webp",
        categorySlugs: ["sports"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/cricket-ground-0.webp",
        ],
    },
    ground: {
        slug: "main-campus-ground",
        thumbnail: "/images/facilities/main-ground-0.webp",
        categorySlugs: ["sports"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/main-ground-0.webp",
            "/images/facilities/main-ground-1.webp",
            "/images/facilities/main-ground-2.webp",
        ],
    },
    ncc: {
        slug: "ncc-cadet-cell",
        thumbnail: "/images/facilities/ncc-0.webp",
        categorySlugs: ["academic-infrastructure"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/ncc-0.webp",
            "/images/facilities/ncc-1.webp",
            "/images/facilities/ncc-2.webp",
            "/images/facilities/ncc-3.webp",
            "/images/facilities/ncc-4.webp",
            "/images/facilities/ncc-5.webp",
            "/images/facilities/ncc-6.webp",
            "/images/facilities/ncc-7.webp",
        ],
    },
    gym: {
        slug: "campus-fitness-gym",
        thumbnail: "/images/facilities/gym-0.webp",
        categorySlugs: ["sports"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/gym-0.webp",
        ],
    },
    football: {
        slug: "football-ground",
        thumbnail: "/images/facilities/football-ground-0.webp",
        categorySlugs: ["sports"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/football-ground-0.webp",
            "/images/facilities/football-ground-1.webp",
        ],
    },
    yoga: {
        slug: "yoga-and-wellness-center",
        thumbnail: "/images/facilities/yoga-1.webp",
        categorySlugs: ["sports"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/yoga-1.webp",
            "/images/facilities/yoga-2.webp",
            "/images/facilities/yoga-3.webp",
            "/images/facilities/yoga-4.webp",
        ],
    },
    auditorium: {
        slug: "campus-auditorium",
        thumbnail: "/images/facilities/auditorium-0.webp",
        categorySlugs: ["academic-infrastructure"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/auditorium-0.webp",
            "/images/facilities/auditorium-1.webp",
            "/images/facilities/auditorium-2.webp",
            "/images/facilities/auditorium-3.webp",
            "/images/facilities/auditorium-4.webp",
            "/images/facilities/auditorium-5.webp",
            "/images/facilities/auditorium-6.webp",
            "/images/facilities/auditorium-7.webp",
        ],
    },
} satisfies Record<string, FacilityShared>;
