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
        badgeVariant: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
    },
    {
        title: "State Level Workshop on CSR Policy & Environmental Ethics",
        category: "Academic Seminar",
        date: "July 28, 2026",
        summary: "Keynote lectures by leading CSR heads from Vadodara industrial cluster detailing modern ESG reporting frameworks for social workers.",
        badgeVariant: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30"
    },
    {
        title: "Blood Donation & Health Checkup Drive at VJKM Campus",
        category: "Community Welfare",
        date: "June 14, 2026",
        summary: "In collaboration with Red Cross Society, over 180 units of blood were collected with participation from BSW & MSW student volunteers.",
        badgeVariant: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30"
    }
]

export default function RecentUpdatesFeed() {
    return (
        <Section className=" bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader className="text-center max-w-3xl mx-auto mb-12">
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 px-3 py-1 font-semibold text-xs rounded-full uppercase tracking-wider mb-2">
                        News & Events
                    </Badge>
                    <SectionTitle className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                        Latest Campus Activities & Field Highlights
                    </SectionTitle>
                    <SectionDescription className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
                        Stay informed about recent rural camps, academic seminars, blood donation drives, and research publications.
                    </SectionDescription>
                </SectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {updates.map((item, idx) => (
                        <Card key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <CardContent className="p-6 space-y-3">
                                <div className="flex items-center justify-between gap-2">
                                    <Badge variant="outline" className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${item.badgeVariant}`}>
                                        {item.category}
                                    </Badge>
                                    <div className="flex items-center text-xs text-slate-400 gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug hover:text-emerald-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                                    {item.summary}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/news-and-updates"
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "border-slate-300 dark:border-slate-700 inline-flex items-center px-4 py-2 rounded-md text-sm font-medium"
                        )}
                    >
                        View All News, Events & Circulars
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </Section>
    )
}

