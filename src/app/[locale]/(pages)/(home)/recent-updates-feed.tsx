import React from 'react'
import Link from 'next/link'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Calendar, Tag, ArrowRight } from 'lucide-react'

const updates = [
    {
        title: "Annual 7-Day Rural Immersion Camp Organized in Panchmahal",
        category: "Rural Camp",
        date: "August 15, 2026",
        summary: "MSW scholars conducted PRA (Participatory Rural Appraisal) surveys, health awareness camps, and literacy drives across 5 village panchayats.",
        badgeVariant: "bg-emerald/10 text-emerald-tone border-emerald/30"
    },
    {
        title: "State Level Workshop on CSR Policy & Environmental Ethics",
        category: "Academic Seminar",
        date: "July 28, 2026",
        summary: "Keynote lectures by leading CSR heads from Vadodara industrial cluster detailing modern ESG reporting frameworks for social workers.",
        badgeVariant: "bg-sky/10 text-sky-tone border-sky/30"
    },
    {
        title: "Blood Donation & Health Checkup Drive at VJKM Campus",
        category: "Community Welfare",
        date: "June 14, 2026",
        summary: "In collaboration with Red Cross Society, over 180 units of blood were collected with participation from BSW & MSW student volunteers.",
        badgeVariant: "bg-amber/10 text-amber-tone border-amber/30"
    }
]

export default function RecentUpdatesFeed() {
    return (
        <Section className="bg-slate-muted">
            <SectionHeader align="center">
                <Badge variant="amber-outline" type="heading">
                    News & Events
                </Badge>
                <SectionTitle>
                    Latest Campus Activities & Field Highlights
                </SectionTitle>
                <SectionDescription>
                    Stay informed about recent rural camps, academic seminars, blood donation drives, and research publications.
                </SectionDescription>
            </SectionHeader>

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

            <div className="text-center">
                <Link
                    href="/news-and-updates"
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                    )}
                >
                    View All News, Events & Circulars
                    <ArrowRight />
                </Link>
            </div>
        </Section>
    )
}

