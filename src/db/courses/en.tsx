import { Course } from '@/types/course';
import { sharedCoursesData } from './shared';

export const coursesData: Course[] = [
    {
        ...sharedCoursesData["bsw"],
        title: "Bachelor of Social Work (BSW)",
        type: "Undergraduate",
        applicationDeadline: "As per the Government Norms (GCAS)",
        fees: "As per the Government Norms",
        batchStarts: "16th of July Onwards",
        studyHours: "10:30 AM to 02:00 PM",
        eligibility: "12th Pass (Any stream) from GSHSEB or any equivalent recognized board.",
        subjects: ["Introduction to Social Work", "Social Problems in India", "Human Growth & Development", "Field Work / NGO Practicum"],
        desc: "The Bachelor of Social Work (BSW) is a structured degree aimed at developing professionals capable of deploying social welfare initiatives, community corrections, and development programs.",
        details: {
            description: (
                <>
                    <p>The Bachelor of Social Work (BSW) is a structured degree aimed at developing professionals capable of deploying social welfare initiatives, community corrections, and development programs.</p>
                    <p>It combines structural sociology models with active field interventions to manage structural vulnerabilities directly.</p>
                </>
            ),
            detailedDescription: (
                <>
                    <p>The coursework targets contemporary Indian social issues, human growth paradigms, welfare legislation, and localized community operational frameworks.</p>
                    <p>Students spend multiple days every week assigned to rural areas or NGO operations to practice community organizing, profile data gathering, and counseling methods.</p>
                </>
            ),
            whyStudy: (
                <>
                    <p>It swaps passive theoretical lecture models for live field execution, developing advanced project management, communication, and crisis handling skills.</p>
                    <p>It acts as the primary professional credential needed to secure corporate social responsibility (CSR) execution tracks or international NGO postings.</p>
                </>
            )
        },
    },
    {
        ...sharedCoursesData["msw"],
        title: "Master of Social Work (MSW)",
        type: "Postgraduate",
        applicationDeadline: "As per the Government Norms (GCAS)",
        fees: "As per the Government Norms",
        batchStarts: "16th of July Onwards",
        studyHours: "10:30 AM to 02:00 PM",
        eligibility: "Graduation in any discipline (Arts, Science, Commerce, BSW, etc.) from a recognized university.",
        subjects: ["Social Case Work", "Community Organization", "Social Work Research", "Human Resource Management", "Concurrent Field Work"],
        desc: "The Master of Social Work (MSW) is an advanced postgraduate program designed to build clinical counselors, industrial HR managers, and corporate CSR heads.",
        details: {
            description: (
                <>
                    <p>The Master of Social Work (MSW) is an advanced postgraduate program designed to build clinical counselors, industrial HR managers, and corporate CSR heads.</p>
                    <p>It emphasizes statistical research, labor law frameworks, and advanced psychiatric social work interventions.</p>
                </>
            ),
            detailedDescription: (
                <>
                    <p>The curriculum details advanced social research methodologies, industrial dispute management, personnel administration, and behavioral clinical counseling.</p>
                    <p>Students execute complex quantitative research projects and handle concurrent long-term organizational placements inside corporate environments or major non-profits.</p>
                </>
            ),
            whyStudy: (
                <>
                    <p>It allows you to pivot into corporate Human Resource Management roles or secure advanced labor welfare executive posts across manufacturing facilities.</p>
                    <p>It establishes the authoritative structural research background necessary to consult for state policy agencies, international bodies, or global foundation setups.</p>
                </>
            )
        },
    },
];