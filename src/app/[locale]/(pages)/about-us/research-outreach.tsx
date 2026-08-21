import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, HeartHandshake, ShieldAlert, Building2 } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function ResearchOutreach() {
    const t = await getTranslations("facultyAndStaff.research");

    const initiatives = [
        {
            icon: BookOpen,
            title: t("r1Title"),
            description: t("r1Desc"),
            color: "text-emerald bg-emerald/10 border-emerald/30"
        },
        {
            icon: ShieldAlert,
            title: t("r2Title"),
            description: t("r2Desc"),
            color: "text-rose bg-rose/10 border-rose/30"
        },
        {
            icon: HeartHandshake,
            title: t("r3Title"),
            description: t("r3Desc"),
            color: "text-sky bg-sky/10 border-sky/30"
        },
        {
            icon: Building2,
            title: t("r4Title"),
            description: t("r4Desc"),
            color: "text-purple bg-purple/10 border-purple/30"
        }
    ];

    return (
        <Section id="research" className="bg-slate-muted">
            <SectionHeader align="center">
                <SectionTitle className="text-3xl md:text-4xl font-extrabold text-foreground">
                    {t("h2")}
                </SectionTitle>
                <SectionDescription className="text-slate-tone text-base md:text-lg max-w-2xl">
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {initiatives.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-card border border-border shadow-sm hover:shadow-md transition-all">
                            <CardContent className="p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className={`p-3 rounded-xl border ${item.color}`}>
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-slate-tone leading-relaxed">
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
