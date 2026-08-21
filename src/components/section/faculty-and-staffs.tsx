import React from 'react'
import Image from 'next/image'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, Shield } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export interface FacultyMember {
    name: string;
    image: string;
    designation: string;
    badgeVariant?: "amber" | "sky" | "teal" | "emerald" | "secondary";
    qualification: string;
    expertise?: string;
}

export const defaultFacultyMembers: FacultyMember[] = [
    {
        name: "Vankar Jagruti Priteshkumar",
        image: "/images/faculty/vankar-jagruti-priteshkumar-chair-1.webp",
        designation: "I/C PRINCIPAL - BSW",
        badgeVariant: "amber",
        qualification: "BCOM, SDOM, MSW",
    },
    {
        name: "Maulikkumar Patel",
        image: "/images/faculty/maulikkumar-patel.webp",
        designation: "I/C Principal - MSW",
        badgeVariant: "amber",
        qualification: "Ph.D. in Social Work",
        expertise: "Gender Studies, Domestic Violence, Mental Health",
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
        qualification: "MCOM",
    },
    {
        name: "Parmar Anjuben Natubhai",
        image: "/images/faculty/parmar-anjuben-natubhai.webp",
        designation: "Admin",
        badgeVariant: "secondary",
        qualification: "B.com",
    },
];

export interface FacultyAndStaffsProps {
    id?: string;
    title?: string;
    description?: string;
    className?: string;
    members?: FacultyMember[];
}

export default async function FacultyAndStaffs({
    id = "faculty-and-staff",
    title,
    description,
    className,
    members = defaultFacultyMembers,
}: FacultyAndStaffsProps) {
    const t = await getTranslations("aboutCollege.faculty");

    const sectionTitle = title || t("h2");
    const sectionDesc = description || t("subheading");

    return (
        <Section id={id} className={className}>
            <SectionHeader align="center">
                <SectionTitle>
                    {sectionTitle}
                </SectionTitle>
                <SectionDescription className="max-w-xl">
                    {sectionDesc}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member, idx) => (
                    <Card key={idx} className="py-0 border border-border shadow-sm hover:shadow-md transition-all group overflow-hidden bg-card">
                        <div className="relative aspect-4/5 w-full overflow-hidden bg-muted">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover object-top select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 top-auto pt-8 pb-3 gap-2 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                                <div className="px-4">
                                    <Badge className="text-xs [&>svg]:size-3 font-bold" variant={(member.badgeVariant || "secondary") as any}>
                                        <Shield />
                                        {member.designation}
                                    </Badge>

                                    <h3 className="text-base font-bold text-white transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs font-semibold text-emerald-tone gap-1 flex items-start">
                                        <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                                        {member.qualification}
                                    </p>
                                    {member.expertise && (
                                        <p className="text-[11px] text-white/70 pt-0.5 leading-tight">
                                            {member.expertise}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </SectionContent>
        </Section>
    )
}
