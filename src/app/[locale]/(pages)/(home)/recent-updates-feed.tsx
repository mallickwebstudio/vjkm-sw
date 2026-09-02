import React from 'react'
import Link from 'next/link'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Calendar, ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function RecentUpdatesFeed() {
    const t = await getTranslations("home.recentUpdates");

    const updates = [
        {
            title: t("u1Title"),
            category: t("u1Category"),
            date: t("u1Date"),
            summary: t("u1Summary"),
            badgeVariant: "bg-emerald/10 text-emerald-tone border-emerald/30"
        },
        {
            title: t("u2Title"),
            category: t("u2Category"),
            date: t("u2Date"),
            summary: t("u2Summary"),
            badgeVariant: "bg-sky/10 text-sky-tone border-sky/30"
        },
        {
            title: t("u3Title"),
            category: t("u3Category"),
            date: t("u3Date"),
            summary: t("u3Summary"),
            badgeVariant: "bg-amber/10 text-amber-tone border-amber/30"
        }
    ];

    return (
        <Section className="bg-slate-muted">
            <div className="lg:flex lg:justify-between lg:items-end">
                <SectionHeader align="left">
                    <SectionTitle>
                        {t("h2")}
                    </SectionTitle>
                    <SectionDescription>
                        {t("subheading")}
                    </SectionDescription>
                </SectionHeader>

                <Link
                    href="/news-and-updates"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "mt-2"
                    )}
                >
                    {t("cta")}
                    <ArrowRight />
                </Link>
            </div>

            <SectionContent className="md:grid-cols-3 gap-6">
                {updates.map((item, idx) => (
                    <Card key={idx} className="bg-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                        <CardContent className="py-4 space-y-3">
                            <div className="flex items-center justify-between gap-2">
                                <Badge variant="outline" className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${item.badgeVariant}`}>
                                    {item.category}
                                </Badge>
                                <div className="flex items-center text-xs text-slate-tone gap-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>{item.date}</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-foreground leading-snug hover:text-emerald-tone transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-tone leading-relaxed pt-1">
                                {item.summary}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </SectionContent>
        </Section>
    )
}
