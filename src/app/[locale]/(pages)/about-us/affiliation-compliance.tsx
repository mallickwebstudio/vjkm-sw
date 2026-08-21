import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Landmark, ShieldCheck, FileCheck, Award } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function AffiliationCompliance() {
    const t = await getTranslations("aboutCollege.compliance");

    const items = [
        {
            icon: Landmark,
            title: t("item1Title"),
            description: t("item1Desc"),
            badgeVariant: "bg-emerald/20 text-emerald-tone border-emerald/40"
        },
        {
            icon: ShieldCheck,
            title: t("item2Title"),
            description: t("item2Desc"),
            badgeVariant: "bg-sky/20 text-sky-tone border-sky/40"
        },
        {
            icon: FileCheck,
            title: t("item3Title"),
            description: t("item3Desc"),
            badgeVariant: "bg-amber/20 text-amber-tone border-amber/40"
        },
        {
            icon: Award,
            title: t("item4Title"),
            description: t("item4Desc"),
            badgeVariant: "bg-purple/20 text-purple border-purple/40"
        }
    ];

    return (
        <Section id="compliance" className="bg-slate text-slate-foreground">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription className="text-sky-muted max-w-xl">
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-slate-800/80 border-slate-700 text-slate-100 shadow-md hover:border-emerald/50 transition-all flex flex-col justify-between">
                            <CardContent className="p-6 space-y-4">
                                <div className="p-3 rounded-xl bg-slate-700/60 border border-slate-600 text-emerald-tone w-fit">
                                    <IconComp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
