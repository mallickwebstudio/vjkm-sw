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
    badgeVariant?: "amber" | "sky" | "teal" | "secondary";
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
    {
        name: "Parmar Khemchandbhai Raysingbhai",
        image: "/images/faculty/parmar-khemchandbhai-raysingbhai.webp",
        designation: "PEON",
        badgeVariant: "secondary",
        qualification: "10th",
    },
]

export default async function FacultyAndStaffs({ id }: { id?: string }) {
    const t = await getTranslations("aboutCollege.faculty")

    return (
        <Section id={id} className="bg-background">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription>
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {defaultFacultyMembers.map((member, idx) => (
                    <Card key={idx} className="border shadow-xs hover:border-primary/40 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
                        <CardContent className="p-0 flex flex-col items-center text-center">
                            <div className="relative w-full aspect-4/3 bg-slate-100 overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300 object-top"
                                />
                            </div>

                            <div className="p-5 space-y-2 w-full">
                                <Badge variant={member.badgeVariant || "secondary"} className="text-[11px] font-bold tracking-wide">
                                    {member.designation}
                                </Badge>

                                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                                    {member.name}
                                </h3>

                                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-1">
                                    <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
                                    <span>{member.qualification}</span>
                                </div>

                                {member.expertise && (
                                    <div className="pt-2 border-t border-border/50 text-[11px] text-slate-tone line-clamp-2 italic">
                                        &ldquo;{member.expertise}&rdquo;
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </SectionContent>
        </Section>
    )
}
