import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, UserCheck, Landmark, GraduationCap, Building2 } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function BoardOfGovernors() {
    const t = await getTranslations("governingBody.board");

    const members = [
        {
            name: "Shri Shashikant H. Patel",
            role: t("roleChair"),
            category: "Management Nominee",
            badgeColor: "bg-amber/15 text-amber-tone border-amber/30",
            icon: Shield
        },
        {
            name: "Shri Dilipbhai N. Patel",
            role: t("roleViceChair"),
            category: "Management Nominee",
            badgeColor: "bg-amber/15 text-amber-tone border-amber/30",
            icon: Shield
        },
        {
            name: "Shri Thakorbhai K. Patel",
            role: t("roleSec"),
            category: "Management Nominee",
            badgeColor: "bg-amber/15 text-amber-tone border-amber/30",
            icon: Shield
        },
        {
            name: "Shri Mukesh V. Vasaiwala",
            role: t("roleJointSec"),
            category: "Management Nominee",
            badgeColor: "bg-amber/15 text-amber-tone border-amber/30",
            icon: Shield
        },
        {
            name: "SGGU University Nominee",
            role: t("roleUniversity"),
            category: "University Representative (SGGU)",
            badgeColor: "bg-emerald/15 text-emerald-tone border-emerald/30",
            icon: Landmark
        },
        {
            name: "Education Department Nominee",
            role: t("roleGovt"),
            category: "State Govt Representative",
            badgeColor: "bg-purple/15 text-purple border-purple/30",
            icon: Building2
        },
        {
            name: "Vankar Jagruti Priteshkumar",
            role: t("rolePrincipalBsw"),
            category: "Ex-Officio Member Secretary",
            badgeColor: "bg-sky/15 text-sky-tone border-sky/30",
            icon: GraduationCap
        },
        {
            name: "Maulikkumar Patel",
            role: t("rolePrincipalMsw"),
            category: "Ex-Officio Member Secretary",
            badgeColor: "bg-sky/15 text-sky-tone border-sky/30",
            icon: GraduationCap
        }
    ];

    return (
        <Section id="board-of-governors" className="bg-slate-muted">
            <SectionHeader align="center">
                <SectionTitle className="text-3xl md:text-4xl font-extrabold text-foreground">
                    {t("h2")}
                </SectionTitle>
                <SectionDescription className="text-slate-tone text-base md:text-lg max-w-2xl">
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {members.map((member, idx) => {
                    const IconComp = member.icon
                    return (
                        <Card key={idx} className="bg-card border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <CardContent className="p-6 space-y-3">
                                <div className="flex items-center justify-between gap-2">
                                    <Badge variant="outline" className={`text-xs px-2.5 py-0.5 rounded-md font-semibold border ${member.badgeColor}`}>
                                        <IconComp className="w-3 h-3 mr-1" />
                                        {member.category}
                                    </Badge>
                                </div>
                                <h3 className="text-lg font-bold text-foreground pt-1">
                                    {member.name}
                                </h3>
                                <p className="text-xs text-slate-tone leading-relaxed font-medium">
                                    {member.role}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
