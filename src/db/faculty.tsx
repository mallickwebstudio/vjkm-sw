import React, { type ReactNode } from "react";

export interface FacultyMember {
    type?: string;
    name: string;
    image: string;
    imageSrc?: string;
    designation: string;
    badgeVariant?: "amber" | "sky" | "teal" | "secondary";
    badgeColor?: string;
    qualification: string;
    expertise?: string;
    department?: string;
    principalMessage?: ReactNode;
    message?: ReactNode;
}

export const defaultFacultyMembers: FacultyMember[] = [
    {
        type: "principal",
        name: "Vankar Jagruti Priteshkumar",
        image: "/images/faculty/vankar-jagruti-priteshkumar-chair-1.webp",
        imageSrc: "/images/faculty/vankar-jagruti-priteshkumar-chair-1.webp",
        designation: "I/C PRINCIPAL - BSW",
        department: "Bachelor of Social Work (BSW)",
        badgeVariant: "amber",
        badgeColor: "bg-emerald/15 text-emerald-tone border-emerald/30",
        qualification: "BCOM, SDOM, MSW",
        principalMessage: (
            <p>
                Welcome to VJKM BSW College. Our undergraduate social work program is committed to developing young change-makers with core field survey skills, community outreach, and social advocacy.
            </p>
        ),
    },
    {
        type: "principal",
        name: "Maulikkumar Patel",
        image: "/images/faculty/maulikkumar-patel.webp",
        imageSrc: "/images/faculty/maulikkumar-patel.webp",
        designation: "I/C Principal - MSW",
        department: "Master of Social Work (MSW)",
        badgeVariant: "amber",
        badgeColor: "bg-amber/15 text-amber-tone border-amber/30",
        qualification: "Ph.D. in Social Work",
        expertise: "Gender Studies, Domestic Violence, Mental Health",
        principalMessage: (
            <div className="space-y-2 not-italic text-slate-tone text-xs sm:text-sm leading-relaxed">
                <h4 className="font-semibold text-sm sm:text-base">
                    Welcome to V.J.K.M. Self Finance College of M.S.W., Dabhoi
                </h4>
                <p>
                    It gives me immense pleasure to welcome you to V.J.K.M. Self Finance College of M.S.W., Dabhoi, an institution committed to excellence in social work education, professional development, and meaningful service to society.
                </p>
                <p>
                    Social Work is not merely an academic discipline or a profession; it is a commitment to human dignity, social justice, equality, and positive social change. With this vision, our institution strives to provide students with quality education, practical knowledge, professional skills, and strong ethical values.
                </p>
                <p>
                    We firmly believe that true education extends beyond the four walls of the classroom. Through fieldwork, community engagement, practical training, seminars, workshops, and social activities, our students gain valuable real-life experiences and develop the confidence and competence required to work effectively with individuals, families, groups, and communities.
                </p>
                <p>
                    Dabhoi and its surrounding rural and semi-urban areas provide a unique and enriching environment for understanding social realities and applying social work knowledge in practice. Our students are encouraged to engage with communities, understand social challenges, and develop practical solutions with sensitivity and professionalism.
                </p>
                <p>
                    With the dedicated guidance of our faculty members, we focus on nurturing knowledge, skills, leadership, empathy, professional ethics, and social responsibility among our students.
                </p>
                <p>
                    Our vision goes beyond providing a degree. We aspire to develop young professionals who can build successful careers while remaining committed to the welfare of society and contributing meaningfully to the development of the nation.
                </p>
                <p>
                    I warmly invite students and parents to become a part of our educational journey and to join us in our mission of learning, serving, empowering, and transforming society.
                </p>
                <blockquote className="my-3 p-3.5 rounded-xl bg-amber/10 border-l-4 border-amber text-foreground font-medium italic text-xs sm:text-sm">
                    &ldquo;Education empowers individuals, and Social Work empowers society.&rdquo;
                </blockquote>
                <div className="pt-2 border-t border-border/70 text-xs">
                    <p className="text-muted-foreground">With Best Wishes,</p>
                    <p className="font-semibold text-foreground mt-0.5">Principal</p>
                </div>
            </div>
        ),
    },
    {
        name: "Sirajmehdi Lokhandwala",
        image: "/images/faculty/sirajmehdi-lokhandwala.webp",
        designation: "Assistant Professor",
        badgeVariant: "sky",
        qualification: "MSW-HR",
    },
    {
        name: "Charmi Panchal",
        image: "/images/faculty/charmi-panchal.webp",
        designation: "Assistant Professor",
        badgeVariant: "sky",
        qualification: "MSW-HR",
    },
    {
        name: "Patel Divya Prahladbhai",
        image: "/images/faculty/patel-divya-prahladbhai.webp",
        designation: "Admin Head",
        badgeVariant: "teal",
        qualification: "M.COM",
    },
    {
        name: "Parmar Anjuben Natubhai",
        image: "/images/faculty/parmar-anjuben-natubhai.webp",
        designation: "Admin",
        badgeVariant: "secondary",
        qualification: "B.com",
    },
    {
        name: "Tadavi Prakash Kumar K.",
        image: "/images/faculty/prakash.webp",
        designation: "Assistant Professor &  Academic Head",
        badgeVariant: "sky",
        qualification: "B.A., M.S.W., Diploma in Counselling",
    },
    {
        name: "Nikita P. Kulkarni",
        image: "/images/faculty/nikita.webp",
        designation: "Assistant Professor",
        badgeVariant: "sky",
        qualification: "B.A, M.S.W",
    },
    {
        name: "Rathwa Surekha R.",
        image: "/images/faculty/surekha.webp",
        designation: "Assistant Professor",
        badgeVariant: "sky",
        qualification: "B.COM, M.S.W",
    },
];

export const facultyMembers = defaultFacultyMembers;

export const principalsData = defaultFacultyMembers.filter(
    (member) => member.type === "principal" || Boolean(member.principalMessage || member.message)
);

export const principals = principalsData;
