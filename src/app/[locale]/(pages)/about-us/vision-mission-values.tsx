import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Eye, Target, Heart } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function VisionMissionValues() {
    const t = await getTranslations("aboutCollege.philosophy");

    const cards = [
        {
            icon: Eye,
            title: t("visionTitle"),
            description: t("visionDesc"),
            badgeVariant: "bg-sky/15 text-sky-tone border-sky/30",
            iconColor: "text-sky bg-sky/10 border-sky/30"
        },
        {
            icon: Target,
            title: t("missionTitle"),
            description: t("missionDesc"),
            badgeVariant: "bg-emerald/15 text-emerald-tone border-emerald/30",
            iconColor: "text-emerald bg-emerald/10 border-emerald/30"
        },
        {
            icon: Heart,
            title: t("valuesTitle"),
            description: t("valuesDesc"),
            badgeVariant: "bg-amber/15 text-amber-tone border-amber/30",
            iconColor: "text-amber bg-amber/10 border-amber/30"
        }
    ];

    return (
        <Section id="vision-mission">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription className="max-w-xl">
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-card border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <CardContent className="p-6 space-y-4">
                                <div className={`p-3 rounded-xl border w-fit ${item.iconColor}`}>
                                    <IconComp className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
