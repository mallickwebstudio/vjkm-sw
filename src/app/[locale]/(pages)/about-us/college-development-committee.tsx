import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card, CardContent } from '@/components/ui/card'
import { Building2, HeartPulse, GraduationCap, ShieldCheck } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function CollegeDevelopmentCommittee() {
    const t = await getTranslations("governingBody.cdc");

    const initiatives = [
        {
            icon: Building2,
            title: t("c1Title"),
            description: t("c1Desc"),
            iconColor: "text-sky bg-sky/10 border-sky/30"
        },
        {
            icon: HeartPulse,
            title: t("c2Title"),
            description: t("c2Desc"),
            iconColor: "text-emerald bg-emerald/10 border-emerald/30"
        },
        {
            icon: GraduationCap,
            title: t("c3Title"),
            description: t("c3Desc"),
            iconColor: "text-amber bg-amber/10 border-amber/30"
        },
        {
            icon: ShieldCheck,
            title: t("c4Title"),
            description: t("c4Desc"),
            iconColor: "text-purple bg-purple/10 border-purple/30"
        }
    ];

    return (
        <Section id="cdc">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription className="max-w-xl">
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {initiatives.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-card border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <CardContent className="p-6 space-y-4">
                                <div className={`p-3 rounded-xl border w-fit ${item.iconColor}`}>
                                    <IconComp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">
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
