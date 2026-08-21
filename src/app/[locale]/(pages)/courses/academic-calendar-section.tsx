import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Calendar, Clock, CheckCircle } from 'lucide-react'

export function AcademicCalendarSection() {
    const timelines = [
        { term: "Odd Semester (Sem 1, 3, 5)", dates: "July - December 2026", exam: "December 2026 (SGGU Exam)" },
        { term: "Even Semester (Sem 2, 4, 6)", dates: "January - May 2027", exam: "May 2027 (SGGU Exam)" }
    ];

    return (
        <div id="academic-calendar" className="scroll-mt-20">
            <Hero variant="left" className="flex items-center bg-slate min-h-[40vh]">
                <HeroContent className="max-w-3xl">
                    <Badge variant="outline" className="h-6 bg-sky/10 text-sky-tone border-sky/30 font-medium text-sm [&>svg]:size-3.5! mb-2">
                        <Calendar />
                        Academic Timelines 2026-27
                    </Badge>
                    <HeroH1 className="h1 font-extrabold text-white">
                        Academic Calendar & Exam Schedule
                    </HeroH1>
                    <HeroP className="max-w-2xl">
                        Semester commencement dates, internal mid-term assessment timelines, fieldwork submission deadlines, & SGGU university examination schedule.
                    </HeroP>
                </HeroContent>
            </Hero>

            <Section className="bg-slate-muted">
                <SectionHeader align="center">
                    <SectionTitle>Semester Schedule & Timelines</SectionTitle>
                    <SectionDescription>Key dates for BSW & MSW academic sessions.</SectionDescription>
                </SectionHeader>

                <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {timelines.map((item, idx) => (
                        <Card key={idx} className="bg-card border border-border p-6 space-y-3 shadow-sm">
                            <Badge variant="secondary" className="bg-sky/10 text-sky-tone font-bold">{item.term}</Badge>
                            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Clock className="w-5 h-5 text-sky-tone" />
                                {item.dates}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-tone font-medium flex items-center gap-1.5 pt-2 border-t border-border">
                                <CheckCircle className="w-4 h-4 text-emerald-tone" />
                                Examination: {item.exam}
                            </p>
                        </Card>
                    ))}
                </SectionContent>
            </Section>
        </div>
    )
}
