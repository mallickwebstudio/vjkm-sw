import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function TestimonialCarousel() {
    const t = await getTranslations("home.testimonials");

    const testimonials = [
        {
            quote: t("t1Quote"),
            name: t("t1Name"),
            degree: t("t1Degree"),
            role: t("t1Role"),
            organization: t("t1Org"),
            avatarInitial: "PP",
            color: "bg-emerald text-white"
        },
        {
            quote: t("t2Quote"),
            name: t("t2Name"),
            degree: t("t2Degree"),
            role: t("t2Role"),
            organization: t("t2Org"),
            avatarInitial: "RS",
            color: "bg-sky text-white"
        },
        {
            quote: t("t3Quote"),
            name: t("t3Name"),
            degree: t("t3Degree"),
            role: t("t3Role"),
            organization: t("t3Org"),
            avatarInitial: "AP",
            color: "bg-amber text-white"
        }
    ];

    return (
        <Section>
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription>
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="md:grid-cols-3 gap-6">
                {testimonials.map((item, idx) => (
                    <Card key={idx} className="bg-card border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-4 right-4 text-muted/30 pointer-events-none">
                            <Quote className="w-12 h-12 opacity-80" />
                        </div>
                        <CardContent className="p-6 space-y-4 relative z-10 flex flex-col justify-between h-full">
                            <div className="space-y-3">
                                <div className="flex items-center gap-1 text-amber-tone">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-tone" />
                                    ))}
                                </div>
                                <p className="text-xs sm:text-sm text-slate-tone leading-relaxed italic">
                                    &quot;{item.quote}&quot;
                                </p>
                            </div>

                            <div className="pt-4 border-t border-border flex items-center gap-3 mt-4">
                                <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center font-bold text-sm shrink-0 shadow-xs`}>
                                    {item.avatarInitial}
                                </div>
                                <div className="space-y-0.5 min-w-0">
                                    <h4 className="text-sm font-bold text-foreground truncate">
                                        {item.name}
                                    </h4>
                                    <p className="text-xs font-semibold text-emerald-tone truncate">
                                        {item.role}
                                    </p>
                                    <p className="text-[11px] text-slate-tone truncate">
                                        {item.organization} • <span className="text-slate-tone font-medium">{item.degree}</span>
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </SectionContent>
        </Section>
    )
}
