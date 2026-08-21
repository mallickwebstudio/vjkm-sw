import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Monitor, BookOpenCheck, Laptop, Video, Trophy, ShieldCheck } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function CampusAmenitiesPreview() {
    const t = await getTranslations("home.amenities");

    const amenities = [
        {
            icon: Monitor,
            title: t("item1Title"),
            description: t("item1Desc"),
        },
        {
            icon: BookOpenCheck,
            title: t("item2Title"),
            description: t("item2Desc"),
        },
        {
            icon: Laptop,
            title: t("item3Title"),
            description: t("item3Desc"),
        },
        {
            icon: Video,
            title: t("item4Title"),
            description: t("item4Desc"),
        },
        {
            icon: Trophy,
            title: t("item5Title"),
            description: t("item5Desc"),
        },
        {
            icon: ShieldCheck,
            title: t("item6Title"),
            description: t("item6Desc"),
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

            <SectionContent className="sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {amenities.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="border shadow-sm hover:border-sky/40 hover:shadow-md transition-all group">
                            <CardContent className="py-4 space-y-3">
                                <div className="p-3 rounded-xl bg-sky-muted text-sky w-fit group-hover:scale-105 transition-transform">
                                    <IconComp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold group-hover:text-sky-tone transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
