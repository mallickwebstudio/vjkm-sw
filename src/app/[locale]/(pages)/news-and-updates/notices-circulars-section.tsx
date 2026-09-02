import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Bell, FileText, ArrowDown, Download } from 'lucide-react'

export function NoticesCircularsSection() {
    const notices = [
        { date: "Aug 20, 2026", category: "Exam", title: "SGGU End-Semester Examination Timetable 2026", desc: "Official exam schedule for BSW Sem 2, 4, 6 and MSW Sem 2, 4." },
        { date: "Aug 15, 2026", category: "Admission", title: "GCAS & Direct Self-Finance Seat Allocation Round 2", desc: "Document verification instructions for candidates applying for VJKM BSW & MSW seats via GCAS or Self-Finance." },
        { date: "Aug 10, 2026", category: "Academic", title: "7-Day Rural Immersion Camp Orientation", desc: "Orientation meeting for MSW Semester 3 rural camp practicum allocation." }
    ];

    return (
        <div id="notices-and-circulars" className="scroll-mt-20">
            <Hero
                imageSrc="/images/facilities/auditorium-5.webp"
                imageAlt="Notices and Circulars at VJKM College"
                variant="left"
                className="flex items-center bg-slate min-h-[50vh]"
            >
                <HeroContent className="max-w-3xl">
                    <Badge variant="outline" className="h-6 bg-amber/10 text-amber-tone border-amber/30 font-medium text-sm [&>svg]:size-3.5! mb-2">
                        <Bell />
                        Latest Campus Announcements
                    </Badge>
                    <HeroH1 className="h1 font-extrabold text-white">
                        Notices & University Circulars
                    </HeroH1>
                    <HeroP className="max-w-2xl">
                        Official announcements, SGGU exam timetables, GCAS & Direct Self-Finance admission verification updates, and administrative circulars.
                    </HeroP>
                    <HeroCta>
                        <a href="#upcoming-events" className={cn(buttonVariants({ variant: "amber", size: "lg" }))}>
                            Upcoming Events
                            <ArrowDown className="w-4 h-4 ml-1" />
                        </a>
                    </HeroCta>
                </HeroContent>
            </Hero>

            <Section className="bg-slate-muted">
                <SectionHeader align="center">
                    <SectionTitle>Official Circulars Table</SectionTitle>
                    <SectionDescription>Filterable list of latest institutional and university notices.</SectionDescription>
                </SectionHeader>
                <SectionContent className="space-y-4 max-w-4xl mx-auto">
                    {notices.map((item, idx) => (
                        <Card key={idx} className="bg-card border border-border p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="bg-amber/10 text-amber-tone text-[11px]">{item.category}</Badge>
                                    <span className="text-xs text-slate-tone font-medium">{item.date}</span>
                                </div>
                                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                                <p className="text-xs text-slate-tone">{item.desc}</p>
                            </div>
                            <button className={cn(buttonVariants({ variant: "outline", size: "sm" }), "shrink-0")}>
                                <Download className="w-3.5 h-3.5 mr-1.5" />
                                Download PDF
                            </button>
                        </Card>
                    ))}
                </SectionContent>
            </Section>
        </div>
    )
}
