import { FacilityShared, ReferenceSlug } from "@/types/facility";

const listAllCoursesColleges: ReferenceSlug[] = ["vjkm-self-finance-college-of-bsw", "vjkm-self-finance-college-of-msw"]

export const sharedFacilitiesData = {
    cricket: {
        slug: "cricket-ground",
        thumbnail: "/images/facilities/campus/cricket-ground-0.webp",
        categorySlugs: ["sports"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/campus/cricket-ground-0.webp",
        ],
    },
    ground: {
        slug: "main-campus-ground",
        thumbnail: "/images/facilities/campus/main-ground-0.webp",
        categorySlugs: ["sports"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/campus/main-ground-0.webp",
            "/images/facilities/campus/main-ground-1.webp",
            "/images/facilities/campus/main-ground-2.webp",
        ],
    },
    ncc: {
        slug: "ncc-cadet-cell",
        thumbnail: "/images/facilities/academic/ncc-0.webp",
        categorySlugs: ["academic-infrastructure"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/academic/ncc-0.webp",
            "/images/facilities/academic/ncc-1.webp",
            "/images/facilities/academic/ncc-2.webp",
            "/images/facilities/academic/ncc-3.webp",
            "/images/facilities/academic/ncc-4.webp",
            "/images/facilities/academic/ncc-5.webp",
            "/images/facilities/academic/ncc-6.webp",
            "/images/facilities/academic/ncc-7.webp",
        ],
    },
    gym: {
        slug: "campus-fitness-gym",
        thumbnail: "/images/facilities/campus/gym-0.webp",
        categorySlugs: ["sports"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/campus/gym-0.webp",
        ],
    },
    football: {
        slug: "football-ground",
        thumbnail: "/images/facilities/campus/football-ground-0.webp",
        categorySlugs: ["sports"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/campus/football-ground-0.webp",
            "/images/facilities/campus/football-ground-1.webp",
        ],
    },
    yoga: {
        slug: "yoga-and-wellness-center",
        thumbnail: "/images/facilities/academic/yoga-1.webp",
        categorySlugs: ["academic-infrastructure"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/academic/yoga-1.webp",
            "/images/facilities/academic/yoga-2.webp",
            "/images/facilities/academic/yoga-3.webp",
            "/images/facilities/academic/yoga-4.webp",
        ],
    },
    auditorium: {
        slug: "campus-auditorium",
        thumbnail: "/images/facilities/academic/auditorium-0.webp",
        categorySlugs: ["academic-infrastructure"],
        referenceSlugs: listAllCoursesColleges,
        imageSrcs: [
            "/images/facilities/academic/auditorium-0.webp",
            "/images/facilities/academic/auditorium-1.webp",
            "/images/facilities/academic/auditorium-2.webp",
            "/images/facilities/academic/auditorium-3.webp",
            "/images/facilities/academic/auditorium-4.webp",
            "/images/facilities/academic/auditorium-5.webp",
            "/images/facilities/academic/auditorium-6.webp",
            "/images/facilities/academic/auditorium-7.webp",
        ],
    },
} satisfies Record<string, FacilityShared>;
