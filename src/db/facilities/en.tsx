import { Facility } from "@/types/facility";
import { sharedFacilitiesData } from "./shared";

export const facilitiesData: Facility[] = [
    {
        ...sharedFacilitiesData["auditorium"],
        title: "Central Auditorium",
        description: "A large-scale indoor assembly arena hosting institutional events, guest panels, and cultural initiatives. It features acoustic wall panels, multi-tier seating structures, and integrated audio-visual infrastructure.",
    },
    {
        ...sharedFacilitiesData["cricket"],
        title: "Cricket Ground",
        description: "A spacious turf ground featuring a prepared center pitch, optimized boundaries, and clear training net configurations for campus team practices and inter-collegiate matches.",
    },
    {
        ...sharedFacilitiesData["ground"],
        title: "Main Campus Ground",
        description: "An expansive outdoor athletic facility engineered for multi-sport activities. It contains marked areas for field track activities, parade practices, and institutional sports gatherings.",
    },
    {
        ...sharedFacilitiesData["gym"],
        title: "Campus Fitness Gym",
        description: "An indoor exercise space containing resistance machines, free weights, and stretching areas. It supports the physical fitness of general sports candidates and physical education scholars.",
    },
    {
        ...sharedFacilitiesData["football"],
        title: "Football Ground",
        description: "A natural turf playing field curated to standard measurements for football practice, institutional sports meets, and tactical recreational modules.",
    },
    {
        ...sharedFacilitiesData["ncc"],
        title: "NCC Cadet Cell",
        description: "The commanding administrative cell for the National Cadet Corps unit on campus. It retains testing frameworks, parade uniforms, storage, and planning nodes for regional defense training camps.",
    },
    {
        ...sharedFacilitiesData["yoga"],
        title: "Yoga & Wellness Center",
        description: "An indoor open floor configured for holistic posture execution, respiration mechanics training, and wellness lecture sessions, utilizing physical exercise mats and audio layouts.",
    },
];