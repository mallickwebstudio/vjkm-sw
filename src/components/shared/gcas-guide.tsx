import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { MousePointerClick, Building, FileCheck } from 'lucide-react'
import { siteConfig } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'

export async function GcasGuide({ className }: { className?: string }) {
    const t = await getTranslations("home.gcasGuide")

    const steps = [
        {
            icon: MousePointerClick,
            step: "01",
            title: t("step1Title"),
            description: t("step1Desc"),
        },
        {
            icon: Building,
            step: "02",
            title: t("step2Title"),
            description: t("step2Desc"),
        },
        {
            icon: FileCheck,
            step: "03",
            title: t("step3Title"),
            description: t("step3Desc"),
        },
    ]

    return (
        <Section id="gcas-guidance" className={className || "bg-slate text-slate-foreground scroll-mt-20"}>
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription>
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="md:grid-cols-3 gap-8 relative">
                {steps.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-slate-800/80 border-slate-700 text-slate-100 relative overflow-hidden shadow-lg hover:border-emerald/50 transition-all group p-6">
                            <div className="absolute top-0 right-0 bg-emerald text-white font-extrabold text-lg px-4 py-2 rounded-bl-xl shadow-sm">
                                {item.step}
                            </div>
                            <div className="p-3 rounded-xl bg-slate-700/60 text-emerald-tone w-fit group-hover:scale-105 transition-transform">
                                <IconComp className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white pt-2">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.description}</p>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
