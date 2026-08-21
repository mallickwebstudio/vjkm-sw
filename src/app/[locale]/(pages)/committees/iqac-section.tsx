import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ShieldCheck, FileText, ArrowDown, Award, CheckCircle } from 'lucide-react'

export function IqacSection() {
    const initiatives = [
        { title: "Continuous Academic Audits", desc: "Regular internal quality monitoring of curriculum execution, field logbooks, and student attendance." },
        { title: "Faculty Training Seminars", desc: "Organizing workshops on research methodologies, SPSS data analysis, and NEP implementation." },
        { title: "Student Feedback Mechanism", desc: "Structured feedback collection from students, alumni, and NGO field agency supervisors." }
    ];

    return (
        <div id="iqac" className="scroll-mt-20">
            <Hero variant="left" className="flex items-center bg-slate min-h-[50vh]">
                <HeroContent className="max-w-3xl">
                    <Badge variant="outline" className="h-6 bg-emerald/10 text-emerald-tone border-emerald/30 font-medium text-sm [&>svg]:size-3.5! mb-2">
                        <ShieldCheck />
                        Quality Assurance & Compliance
                    </Badge>
                    <HeroH1 className="h1 font-extrabold text-white">
                        Internal Quality Assurance Cell (IQAC)
                    </HeroH1>
                    <HeroP className="max-w-2xl">
                        Ensuring institutional academic excellence, transparent governance, continuous evaluation, and compliance with SGGU and NAAC standards.
                    </HeroP>
                    <HeroCta>
                        <a href="#anti-ragging-cell" className={cn(buttonVariants({ variant: "emerald", size: "lg" }))}>
                            Statutory Committees
                            <ArrowDown className="w-4 h-4 ml-1" />
                        </a>
                    </HeroCta>
                </HeroContent>
            </Hero>

            <Section className="bg-slate-muted">
                <SectionHeader align="center">
                    <SectionTitle>IQAC Quality Pillars</SectionTitle>
                    <SectionDescription>Institutional initiatives ensuring transparent academic standards and feedback loops.</SectionDescription>
                </SectionHeader>
                <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {initiatives.map((item, idx) => (
                        <Card key={idx} className="bg-card border border-border shadow-sm p-6 space-y-3">
                            <div className="p-3 rounded-xl bg-emerald/10 text-emerald-tone w-fit">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">{item.desc}</p>
                        </Card>
                    ))}
                </SectionContent>
            </Section>
        </div>
    )
}
