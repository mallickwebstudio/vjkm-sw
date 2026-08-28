import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MousePointerClick, CheckCircle2, ArrowDown, ExternalLink } from 'lucide-react'

export function AdmissionProcessSection() {
    const seatInfo = [
        { title: "BSW (Bachelor of Social Work)", count: "70 Intake Seats", mode: "GCAS Portal & Direct Self-Finance", desc: "Eligibility: 10+2 (Higher Secondary) in any stream from recognized board." },
        { title: "MSW (Master of Social Work)", count: "200 Intake Seats", mode: "GCAS Portal & Direct Self-Finance", desc: "Eligibility: Graduation (Bachelor's degree) in any discipline from recognized university." }
    ];

    return (
        <div id="admission-process" className="scroll-mt-20">
            <Hero variant="left" className="flex items-center bg-slate min-h-[50vh]">
                <HeroContent className="max-w-3xl">
                    <Badge variant="outline" className="h-6 bg-amber/10 text-amber-tone border-amber/30 font-medium text-sm [&>svg]:size-3.5! mb-2">
                        <MousePointerClick />
                        GCAS Portal & Direct Self-Finance Admissions Open 2026-27
                    </Badge>
                    <HeroH1 className="h1 font-extrabold text-white">
                        Admission Process & Eligibility
                    </HeroH1>
                    <HeroP className="max-w-2xl">
                        Admissions for BSW and MSW courses can be secured through the GCAS Gujarat Portal or directly via College Self-Finance quota as per SGGU and Gujarat Government guidelines.
                    </HeroP>
                    <HeroCta>
                        <a
                            href="https://gcasstudent.gujgov.edu.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "amber", size: "lg" }))}
                        >
                            Apply via GCAS Portal
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <a href="#gcas-guidance" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
                            Step-by-Step Guide
                            <ArrowDown className="w-4 h-4 ml-1" />
                        </a>
                    </HeroCta>
                </HeroContent>
            </Hero>

            <Section className="bg-slate-muted">
                <SectionHeader align="center">
                    <SectionTitle>Seat Matrix & Eligibility</SectionTitle>
                    <SectionDescription>Official intake capacity and eligibility criteria for BSW and MSW admissions.</SectionDescription>
                </SectionHeader>
                <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {seatInfo.map((item, idx) => (
                        <Card key={idx} className="bg-card border border-border p-6 space-y-3 shadow-sm">
                            <Badge variant="secondary" className="bg-amber/10 text-amber-tone font-bold">{item.count}</Badge>
                            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">{item.desc}</p>
                            <div className="pt-2 border-t border-border text-xs font-semibold text-emerald-tone flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4" />
                                Mode: {item.mode}
                            </div>
                        </Card>
                    ))}
                </SectionContent>
            </Section>
        </div>
    )
}
