import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Award, GraduationCap, Building, Sparkles } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function LegacyTimeline() {
    const t = await getTranslations("aboutTrust.timeline");

    const milestones = [
        {
            year: t("m1Year"),
            title: t("m1Title"),
            description: t("m1Desc"),
            icon: Building,
            badgeVariant: "bg-amber/20 text-amber-tone border-amber/40"
        },
        {
            year: t("m2Year"),
            title: t("m2Title"),
            description: t("m2Desc"),
            icon: GraduationCap,
            badgeVariant: "bg-sky/20 text-sky-tone border-sky/40"
        },
        {
            year: t("m3Year"),
            title: t("m3Title"),
            description: t("m3Desc"),
            icon: Award,
            badgeVariant: "bg-emerald/20 text-emerald-tone border-emerald/40"
        },
        {
            year: t("m4Year"),
            title: t("m4Title"),
            description: t("m4Desc"),
            icon: Calendar,
            badgeVariant: "bg-purple/20 text-purple border-purple/40"
        },
        {
            year: t("m5Year"),
            title: t("m5Title"),
            description: t("m5Desc"),
            icon: Sparkles,
            badgeVariant: "bg-teal/20 text-teal-400 border-teal/40"
        }
    ];

    return (
        <Section id="timeline" className="bg-slate text-slate-foreground">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription className="text-sky-muted max-w-xl">
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="relative border-l-2 border-slate-700/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8 my-4">
                {milestones.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <div key={idx} className="relative group">
                            {/* Dot / Icon Badge */}
                            <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 size-7 sm:size-9 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-white group-hover:border-emerald-tone transition-colors">
                                <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-tone" />
                            </div>

                            <Card className="bg-slate-800/80 border-slate-700 text-slate-100 shadow-md hover:border-emerald/50 transition-all">
                                <CardContent className="p-5 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <Badge variant="outline" className={`text-xs px-2.5 py-0.5 rounded-md font-extrabold ${item.badgeVariant}`}>
                                            {item.year}
                                        </Badge>
                                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-tone transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
