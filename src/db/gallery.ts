import { facilitiesData } from "./facilities/en";

export type GalleryImage = {
    src: string;
    alt: string;
};

export type GalleryEvent = GalleryImage[];

export type GalleryYear = {
    [eventName: string]: GalleryEvent;
};

export type Gallery = {
    [category: string]: GalleryYear;
};

export const galleryData: Gallery = {
    "Campus": {
        "moments": [
            {
                src: "/images/gallery/moments/01.webp",
                alt: "Vadodara Jilla Kelavani Mandal Moments with students and staffs",
            },
            {
                src: "/images/gallery/moments/02.webp",
                alt: "Vadodara Jilla Kelavani Mandal Moments with students and staffs",
            },
            {
                src: "/images/gallery/moments/03.webp",
                alt: "Vadodara Jilla Kelavani Mandal Moments with students and staffs",
            },
            {
                src: "/images/gallery/moments/04.webp",
                alt: "Vadodara Jilla Kelavani Mandal Moments with students and staffs",
            },
            {
                src: "/images/gallery/moments/05.webp",
                alt: "Vadodara Jilla Kelavani Mandal Moments with students and staffs",
            },
            {
                src: "/images/gallery/moments/06.webp",
                alt: "Vadodara Jilla Kelavani Mandal Moments with students and staffs",
            },
            {
                src: "/images/gallery/moments/07.webp",
                alt: "Vadodara Jilla Kelavani Mandal Moments with students and staffs",
            },
            {
                src: "/images/gallery/moments/08.webp",
                alt: "Vadodara Jilla Kelavani Mandal Moments with students and staffs",
            },
            {
                src: "/images/gallery/moments/09.webp",
                alt: "Vadodara Jilla Kelavani Mandal Moments with students and staffs",
            },
            {
                src: "/images/gallery/moments/10.webp",
                alt: "Vadodara Jilla Kelavani Mandal Moments with students and staffs",
            },
            {
                src: "/images/gallery/moments/11.webp",
                alt: "Vadodara Jilla Kelavani Mandal Moments with students and staffs",
            },
            {
                src: "/images/gallery/moments/12.webp",
                alt: "Vadodara Jilla Kelavani Mandal Moments with students and staffs",
            },
        ],
        "colleges": [
            {
                src: "/images/colleges/scpf-0.webp",
                alt: "Smt. Savitaben Chunibhai Patel Fartikuiwala Commerce College Image",
            },
            {
                src: "/images/colleges/scpf-1.webp",
                alt: "Smt. Savitaben Chunibhai Patel Fartikuiwala Commerce College Image",
            },
            {
                src: "/images/colleges/scpf-2.webp",
                alt: "Smt. Savitaben Chunibhai Patel Fartikuiwala Commerce College Image",
            },
            {
                src: "/images/colleges/scpf-3.webp",
                alt: "Smt. Savitaben Chunibhai Patel Fartikuiwala Commerce College Image",
            },
            {
                src: "/images/colleges/scpf-4.webp",
                alt: "Smt. Savitaben Chunibhai Patel Fartikuiwala Commerce College Image",
            },
            {
                src: "/images/colleges/cnpf-0.webp",
                alt: "Shri C.N.P.F. Arts & D.N. Science College Image",
            },
            {
                src: "/images/colleges/cnpf-1.webp",
                alt: "Shri C.N.P.F. Arts & D.N. Science College Image",
            },
            {
                src: "/images/colleges/cnpf-2.webp",
                alt: "Shri C.N.P.F. Arts & D.N. Science College Image",
            },
            {
                src: "/images/colleges/cnpf-3.webp",
                alt: "Shri C.N.P.F. Arts & D.N. Science College Image",
            },
            {
                src: "/images/colleges/cnpf-4.webp",
                alt: "Shri C.N.P.F. Arts & D.N. Science College Image",
            },
            {
                src: "/images/colleges/mnc-0.webp",
                alt: "Seth Motilal Nathabhai Contractor College of Education Image",
            },
            {
                src: "/images/colleges/mnc-1.webp",
                alt: "Seth Motilal Nathabhai Contractor College of Education Image",
            },
            {
                src: "/images/colleges/mnc-2.webp",
                alt: "Seth Motilal Nathabhai Contractor College of Education Image",
            },
            {
                src: "/images/colleges/mnc-3.webp",
                alt: "Seth Motilal Nathabhai Contractor College of Education Image",
            },
            {
                src: "/images/colleges/mnc-4.webp",
                alt: "Seth Motilal Nathabhai Contractor College of Education Image",
            },
            {
                src: "/images/colleges/scpf-0.webp",
                alt: "Self Finance Law College Image",
            },
            {
                src: "/images/colleges/scpf-1.webp",
                alt: "Self Finance Law College Image",
            },
            {
                src: "/images/colleges/scpf-2.webp",
                alt: "Self Finance Law College Image",
            },
            {
                src: "/images/colleges/scpf-3.webp",
                alt: "Self Finance Law College Image",
            },
            {
                src: "/images/colleges/scpf-4.webp",
                alt: "Self Finance Law College Image",
            },
            {
                src: "/images/colleges/amct-0.webp",
                alt: "AMCT Nursing Institute Image",
            },
            {
                src: "/images/colleges/amct-1.webp",
                alt: "AMCT Nursing Institute Image",
            },
            {
                src: "/images/colleges/amct-2.webp",
                alt: "AMCT Nursing Institute Image",
            },
            {
                src: "/images/colleges/amct-3.webp",
                alt: "AMCT Nursing Institute Image",
            },
            {
                src: "/images/colleges/amct-2.webp",
                alt: "AMCT Nursing Institute Image",
            },
            {
                src: "/images/colleges/jsc-0.webp",
                alt: "Junior Science College Image",
            },
        ],
        "facilities": facilitiesData.flatMap((facility) =>
            facility.imageSrcs.slice(0,2).map((src) => ({
                src,
                alt: facility.title + " Image",
            }))
        ),
    },
    // "2026": {
    // },
}
