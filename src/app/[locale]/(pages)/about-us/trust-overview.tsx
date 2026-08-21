import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Building2, History, HeartHandshake, GraduationCap, CheckCircle2 } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function TrustOverview() {
    const t = await getTranslations("aboutTrust.overview");

    const highlights = [
        {
            icon: History,
            title: t("item1Title"),
            description: t("item1Desc"),
            color: "text-amber bg-amber/10 border-amber/30"
        },
        {
            icon: GraduationCap,
            title: t("item2Title"),
            description: t("item2Desc"),
            color: "text-emerald bg-emerald/10 border-emerald/30"
        },
        {
            icon: HeartHandshake,
            title: t("item3Title"),
            description: t("item3Desc"),
            color: "text-sky bg-sky/10 border-sky/30"
        },
        {
            icon: Building2,
            title: t("item4Title"),
            description: t("item4Desc"),
            color: "text-purple bg-purple/10 border-purple/30"
        }
    ];

    return (
        <Section className="bg-slate-muted">
            <SectionHeader align="center">
                <SectionTitle className="text-3xl md:text-4xl font-extrabold text-foreground">
                    {t("h2")}
                </SectionTitle>
                <SectionDescription className="text-slate-tone text-base md:text-lg max-w-2xl">
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((item, idx) => {
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

            {/* Trust Principles Bar */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-sm font-bold text-foreground">{t("principle1Title")}</h4>
                        <p className="text-xs text-slate-tone">{t("principle1Desc")}</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-sm font-bold text-foreground">{t("principle2Title")}</h4>
                        <p className="text-xs text-slate-tone">{t("principle2Desc")}</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-sm font-bold text-foreground">{t("principle3Title")}</h4>
                        <p className="text-xs text-slate-tone">{t("principle3Desc")}</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}
