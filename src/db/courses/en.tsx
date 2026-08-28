import { Course } from '@/types/course';
import { sharedCoursesData } from './shared';

export const coursesData: Course[] = [
    {
        ...sharedCoursesData["bsw"],
        title: "Bachelor of Social Work (BSW)",
        shortTitle: "BSW",
        type: "Undergraduate Program",
        applicationDeadline: "As per Government & College Norms (GCAS & Self-Finance)",
        fees: "As per Government & University Norms",
        batchStarts: "16th of July Onwards",
        studyHours: "10:30 AM to 02:00 PM",
        eligibility: "10+2 (Higher Secondary) in any stream (Arts, Commerce, Science) from GSHSEB or any recognized board.",
        subjects: [
            "Introduction to Social Work",
            "Social Problems & Indian Society",
            "Human Growth & Personality Development",
            "Social Work Research & Statistics",
            "Social Legislation & Human Rights",
            "Concurrent Fieldwork Practicum"
        ],
        desc: "The Bachelor of Social Work (BSW) is a foundational 3-year professional degree aimed at equipping students with community development techniques, social intervention models, and fieldwork management skills.",
        details: {
            description: (
                <>
                    <p>The Bachelor of Social Work (BSW) program is engineered to build frontline social development professionals, community organizers, and social welfare practitioners.</p>
                    <p>Affiliated with Shri Govind Guru University (SGGU), Godhra, the program combines core sociology, psychology, and legal frameworks with active hands-on field exposure.</p>
                </>
            ),
            detailedDescription: (
                <>
                    <p>Coursework explores contemporary Indian social issues, rural and urban community structures, child and women welfare laws, and counseling methodologies.</p>
                    <p>Students spend multiple days each week assigned to local non-governmental organizations (NGOs), Panchayati Raj institutions, and government social defense departments.</p>
                </>
            ),
            whyStudy: (
                <>
                    <p>Replaces purely theoretical learning with 500+ hours of direct community field interventions.</p>
                    <p>Acts as an essential prerequisite for civil services preparation, master's degree specialization (MSW), and international NGO careers.</p>
                </>
            ),
            highlights: [
                "500+ Hours of Concurrent Fieldwork Exposure",
                "7-Day Mandatory Annual Rural Immersion Camp",
                "Direct Engagement with 50+ NGO & Government Partners",
                "Civil-Services & NGO Management Aligned Curriculum",
                "Dedicated On-Campus GCAS & Self-Finance Admission Cell"
            ],
            fieldworkDetails: "Students execute 2 days of concurrent field work per week at designated social agencies, primary healthcare centers, and rural Panchayats, alongside a compulsory 7-day annual rural orientation camp.",
            specializations: [
                { title: "Community Organization & Rural Welfare", desc: "Focuses on grassroots village adoption, Panchayati Raj governance, and self-help group (SHG) mobilization." },
                { title: "Child & Women Empowerment", desc: "Covers juvenile justice frameworks, maternal healthcare advocacy, and women entrepreneurship initiatives." },
                { title: "Social Legislation & Human Rights", desc: "Provides foundational training in labor protection acts, fundamental rights, and legal aid clinics." }
            ],
            semesterStructure: [
                { semester: "Semester 1", title: "Foundations of Social Work", subjects: ["History & Philosophy of Social Work", "Sociology for Social Workers", "Human Growth & Development - I", "Field Work Practicum - I"] },
                { semester: "Semester 2", title: "Indian Social Dynamics", subjects: ["Social Problems in Contemporary India", "Psychology for Social Work", "Social Work Methods", "Field Work Practicum - II"] },
                { semester: "Semester 3", title: "Community Work & Research", subjects: ["Community Organization & Development", "Social Work Research & Statistics", "Social Legislation in India", "Field Work Practicum - III"] },
                { semester: "Semester 4", title: "Welfare Administration", subjects: ["Social Welfare Administration", "Health & Hygiene Practice", "Working with Groups (Social Group Work)", "Field Work Practicum - IV"] },
                { semester: "Semester 5", title: "Rural & Tribal Development", subjects: ["Rural & Tribal Community Development", "Counseling & Guidance Principles", "Disaster Management & CSR", "Field Work Practicum - V"] },
                { semester: "Semester 6", title: "Field Integration & Research Project", subjects: ["Project Formulation & NGO Management", "Human Rights & Social Justice", "Fieldwork Dissertation & Viva-Voce", "Block Placement Internship"] }
            ],
            careerOutcomes: [
                { role: "Community Organizer", desc: "Directing grassroots rural upliftment programs and self-help groups." },
                { role: "NGO Project Officer", desc: "Managing non-profit field projects, grant execution, and field surveys." },
                { role: "Social Welfare Inspector", desc: "Working with government social defense departments and welfare boards." },
                { role: "CSR Field Specialist", desc: "Executing corporate social responsibility projects for industrial houses." }
            ]
        },
    },
    {
        ...sharedCoursesData["msw"],
        title: "Master of Social Work (MSW)",
        shortTitle: "MSW",
        type: "Postgraduate Program",
        applicationDeadline: "As per Government & College Norms (GCAS & Self-Finance)",
        fees: "As per Government & University Norms",
        batchStarts: "16th of July Onwards",
        studyHours: "10:30 AM to 02:00 PM",
        eligibility: "Bachelor's degree (Graduation) in any stream (Arts, Science, Commerce, BSW, B.Com, B.Sc, B.A., BBA, etc.) from a recognized university.",
        subjects: [
            "Social Case Work & Group Work",
            "Human Resource Management & Industrial Relations",
            "Medical & Psychiatric Social Work",
            "Corporate Social Responsibility (CSR)",
            "Quantitative Research & Dissertation",
            "Block Internship Practicum"
        ],
        desc: "The Master of Social Work (MSW) is an advanced 2-year postgraduate degree designed to groom industrial HR managers, corporate CSR leaders, clinical counselors, and social policy researchers.",
        details: {
            description: (
                <>
                    <p>The Master of Social Work (MSW) degree is an elite postgraduate qualification offering specialized training in Human Resource Management (HR/IR), Medical & Psychiatric Social Work, and CSR Leadership.</p>
                    <p>Affiliated with Shri Govind Guru University (SGGU), Godhra, the curriculum emphasizes personnel management, labor law compliance, quantitative data analytics, and organizational behavior.</p>
                </>
            ),
            detailedDescription: (
                <>
                    <p>Scholars engage in rigorous industrial disputes analysis, hospital welfare counseling, NGO administration, and multi-disciplinary empirical research projects.</p>
                    <p>Includes mandatory 30-day block internships inside corporate industrial facilities, multi-specialty hospitals, or national non-profit foundations.</p>
                </>
            ),
            whyStudy: (
                <>
                    <p>Enables direct entry into Corporate HR, Industrial Relations (IR), and ESG management cadres in major manufacturing hubs across Gujarat.</p>
                    <p>Qualifies graduates for clinical social worker posts in government psychiatric centers, district hospitals, and international development agencies.</p>
                </>
            ),
            highlights: [
                "Specialization Tracks: HR/IR, Medical & Psychiatric Social Work, Rural Welfare",
                "30-Day Mandatory Corporate & Industrial Block Internship",
                "Independent Empirical Research Dissertation & Viva-Voce",
                "Campus Recruitment Drive & CSR Industry Linkages",
                "Approved by SGGU University with 200 Intake Capacity"
            ],
            fieldworkDetails: "Includes concurrent field work placement 2 days per week, a 7-day intensive rural immersion camp, and a 30-day corporate block internship with quantitative dissertation publication.",
            specializations: [
                { title: "Human Resource Management (HR / IR)", desc: "Specializes in labor law compliance, industrial relations, employee welfare, performance management, and HR analytics." },
                { title: "Medical & Psychiatric Social Work (MPSW)", desc: "Focuses on hospital clinical social work, mental health counseling, psychiatric rehabilitation, and patient welfare." },
                { title: "Community Development & CSR", desc: "Prepares specialists for corporate CSR strategy execution, ESG auditing, rural micro-finance, and NGO administration." }
            ],
            semesterStructure: [
                { semester: "Semester 1", title: "Advanced Social Work Theory", subjects: ["Advanced Social Case Work", "Social Group Work & Dynamics", "Human Growth & Behavior", "Concurrent Fieldwork Practicum - I"] },
                { semester: "Semester 2", title: "Industrial Relations & Healthcare", subjects: ["Labor Welfare & Social Security Laws", "Medical & Social Psychology", "Social Work Research Methodology", "Concurrent Fieldwork Practicum - II"] },
                { semester: "Semester 3", title: "Specialization Modules & CSR", subjects: ["Corporate Social Responsibility (CSR) & ESG", "Industrial Relations & Trade Unions", "Psychiatric Social Work & Mental Health", "Concurrent Fieldwork & Research Thesis"] },
                { semester: "Semester 4", title: "Dissertation & Block Internship", subjects: ["Strategic HR Management & Organizational Behavior", "Social Policy & Development Planning", "30-Day Corporate Block Internship", "Master's Dissertation & Viva-Voce"] }
            ],
            careerOutcomes: [
                { role: "HR & Labor Welfare Officer", desc: "Managing employee relations, payroll, industrial compliance, and personnel policies." },
                { role: "CSR Head / ESG Coordinator", desc: "Leading corporate foundation grants, sustainability audits, and community development." },
                { role: "Medical Social Worker", desc: "Counseling patients, executing hospital welfare schemes, and rehabilitation logistics." },
                { role: "Development Consultant", desc: "Working with international agencies (UN, UNICEF, NITI Aayog projects) and policy think tanks." }
            ]
        },
    },
];