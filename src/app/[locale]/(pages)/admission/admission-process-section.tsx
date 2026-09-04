import React from 'react'
import { Link } from '@/i18n/navigation'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
    MousePointerClick,
    CheckCircle2,
    ArrowDown,
    ExternalLink,
    GraduationCap,
    Clock,
    Users,
    Building2,
    ArrowRight,
    Award,
    ShieldCheck,
    Check,
    Sparkles,
    PhoneCall,
    HelpCircle
} from 'lucide-react'

export function AdmissionProcessSection() {
    const seatPrograms = [
        {
            id: "bsw",
            title: "Bachelor of Social Work",
            shortTitle: "BSW",
            level: "Undergraduate Degree (UG)",
            intake: "70 Seats",
            intakeBadge: "70 Approved Seats",
            duration: "3 Years (6 Semesters)",
            university: "SGGU, Godhra",
            aisheCode: "C-75887",
            theme: {
                accent: "emerald",
                border: "border-emerald/30 hover:border-emerald/60",
                glow: "shadow-emerald/5",
                badgeBg: "bg-emerald text-emerald-foreground",
                pillBg: "bg-emerald/10 text-emerald-tone border-emerald/20",
                iconBg: "bg-emerald/10 text-emerald-tone border-emerald/20",
                buttonVariant: "emerald" as const,
                tag: "bg-emerald/10 text-emerald font-semibold",
            },
            eligibility: "10+2 (Higher Secondary) in any stream (Arts, Commerce, or Science) from GSHSEB, CBSE, or any recognized State/Central Board.",
            highlights: [
                "500+ Hours of Concurrent Fieldwork Practicum",
                "7-Day Compulsory Annual Rural Orientation Camp",
                "Direct Industry & NGO Exposure with 50+ Partners",
                "Strong Foundation for Civil Services & NGO Careers"
            ],
            quotas: [
                { name: "GCAS Gujarat Portal Quota", desc: "Centralized merit admission & university choice selection" },
                { name: "Direct Self-Finance Quota", desc: "Campus walk-in verification & direct institutional enrollment" }
            ],
            detailsLink: "/courses/bsw",
            applyLink: "https://gcasstudent.gujgov.edu.in",
        },
        {
            id: "msw",
            title: "Master of Social Work",
            shortTitle: "MSW",
            level: "Postgraduate Degree (PG)",
            intake: "200 Seats",
            intakeBadge: "200 Approved Seats",
            duration: "2 Years (4 Semesters)",
            university: "SGGU, Godhra",
            aisheCode: "C-70245",
            specialTag: "Largest Intake in Region",
            theme: {
                accent: "sky",
                border: "border-sky/30 hover:border-sky/60",
                glow: "shadow-sky/5",
                badgeBg: "bg-sky text-sky-foreground",
                pillBg: "bg-sky/10 text-sky-tone border-sky/20",
                iconBg: "bg-sky/10 text-sky-tone border-sky/20",
                buttonVariant: "sky" as const,
                tag: "bg-sky/10 text-sky font-semibold",
            },
            eligibility: "Bachelor's Degree (Graduation) in any discipline (B.A., B.Com, B.Sc, BSW, BBA, BCA, etc.) from any UGC-recognized university.",
            highlights: [
                "Specializations: HR/IR, Medical & Psychiatric Social Work, Rural Dev",
                "30-Day Mandatory Corporate / Industrial Block Internship",
                "Advanced Quantitative Research Dissertation & Data Analytics",
                "Strong Corporate Placement Track Record & Alumni Network"
            ],
            quotas: [
                { name: "GCAS Gujarat Portal Quota", desc: "State-level centralized counseling on GCAS portal" },
                { name: "Direct Self-Finance Quota", desc: "Institutional Self-Finance seat allocation & guidance" }
            ],
            detailsLink: "/courses/msw",
            applyLink: "https://gcasstudent.gujgov.edu.in",
        }
    ];

    return (
        <div id="admission-process" className="scroll-mt-20">
            <Hero
                imageSrc="/images/gallery/short-pick/09.webp"
                imageAlt="Admission Process and Counseling at VJKM College"
                variant="left"
                className="flex items-center bg-slate min-h-[50vh]"
            >
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
                    <Badge variant="outline" className="h-6 bg-amber/10 text-amber-tone border-amber/30 font-semibold text-xs [&>svg]:size-3! mb-2">
                        <Sparkles />
                        Approved Seat Intake 2026-27
                    </Badge>
                    <SectionTitle>Seat Matrix & Eligibility</SectionTitle>
                    <SectionDescription>Official intake capacity, recognized university affiliation, and eligibility criteria for BSW & MSW admissions.</SectionDescription>
                </SectionHeader>
                <SectionContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {seatPrograms.map((program) => (
                        <Card
                            key={program.id}
                            className={cn(
                                "relative overflow-hidden bg-card border-2 transition-all duration-300 shadow-md hover:shadow-xl p-0 gap-0 rounded-2xl flex flex-col justify-between group",
                                program.theme.border,
                                program.theme.glow
                            )}
                        >
                            {/* Top Corner Ribbon / Seat Counter */}
                            <div className="absolute top-0 right-0 z-10 flex items-center">
                                {program.specialTag && (
                                    <span className="hidden sm:inline-block bg-amber text-amber-foreground font-extrabold text-[0.65rem] uppercase tracking-wider px-2.5 py-1.5 rounded-bl-md shadow-xs mr-1">
                                        {program.specialTag}
                                    </span>
                                )}
                                <div className={cn(
                                    "font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-xs flex items-center gap-1.5",
                                    program.theme.badgeBg
                                )}>
                                    <span className="w-2 h-2 rounded-full bg-current animate-pulse opacity-90" />
                                    {program.intakeBadge}
                                </div>
                            </div>

                            {/* Card Top Section */}
                            <div className="p-6 sm:p-8 space-y-6">
                                {/* Header: Icon + Level + Title */}
                                <div className="flex items-start gap-4 pt-2">
                                    <div className={cn(
                                        "p-3.5 rounded-2xl border shrink-0 transition-transform duration-300 group-hover:scale-105",
                                        program.theme.iconBg
                                    )}>
                                        <GraduationCap className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-1 pr-24 sm:pr-28">
                                        <span className={cn(
                                            "inline-block text-[0.7rem] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-md border",
                                            program.theme.pillBg
                                        )}>
                                            {program.level}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl font-black text-foreground font-heading tracking-tight leading-snug">
                                            {program.title} <span className="text-muted-foreground font-medium">({program.shortTitle})</span>
                                        </h3>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
                                            <span>{program.university}</span>
                                            <span className="opacity-40">•</span>
                                            <span className="font-mono text-[0.7rem] bg-muted px-1.5 py-0.5 rounded">AISHE: {program.aisheCode}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Quick Specs Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-xl bg-muted/60 dark:bg-slate/40 border border-border/70 text-xs">
                                    <div className="space-y-0.5">
                                        <span className="text-[0.68rem] text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                                            <Users className="w-3 h-3 opacity-70" /> Intake
                                        </span>
                                        <p className="font-bold text-foreground text-sm">{program.intake}</p>
                                    </div>
                                    <div className="space-y-0.5">
                                        <span className="text-[0.68rem] text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                                            <Clock className="w-3 h-3 opacity-70" /> Duration
                                        </span>
                                        <p className="font-bold text-foreground text-sm">{program.duration.split(' ')[0]} {program.duration.split(' ')[1]}</p>
                                    </div>
                                    <div className="space-y-0.5">
                                        <span className="text-[0.68rem] text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                                            <Building2 className="w-3 h-3 opacity-70" /> Affiliation
                                        </span>
                                        <p className="font-bold text-foreground text-sm">SGGU Godhra</p>
                                    </div>
                                    <div className="space-y-0.5">
                                        <span className="text-[0.68rem] text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                                            <ShieldCheck className="w-3 h-3 opacity-70" /> Code
                                        </span>
                                        <p className="font-mono font-bold text-foreground text-sm">{program.aisheCode}</p>
                                    </div>
                                </div>

                                {/* Eligibility Callout Box */}
                                <div className={cn(
                                    "rounded-xl p-4 border space-y-1.5",
                                    program.id === 'bsw' ? 'border-emerald/20 bg-emerald/5' : 'border-sky/20 bg-sky/5'
                                )}>
                                    <div className="flex items-center gap-2">
                                        <Award className={cn("w-4 h-4 shrink-0", program.id === 'bsw' ? 'text-emerald' : 'text-sky')} />
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                                            Minimum Eligibility Criteria
                                        </h4>
                                    </div>
                                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed pl-6">
                                        {program.eligibility}
                                    </p>
                                </div>

                                {/* Dual Admission Quota Channels */}
                                <div className="space-y-2">
                                    <h4 className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                                        Admission Modes & Quotas
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                        {program.quotas.map((quota, qIdx) => (
                                            <div key={qIdx} className="p-2.5 rounded-lg border border-border bg-background/60 flex items-start gap-2">
                                                <CheckCircle2 className={cn("w-3.5 h-3.5 mt-0.5 shrink-0", program.id === 'bsw' ? 'text-emerald' : 'text-sky')} />
                                                <div>
                                                    <p className="font-semibold text-foreground text-xs leading-tight">{quota.name}</p>
                                                    <p className="text-[0.7rem] text-muted-foreground leading-snug mt-0.5">{quota.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="space-y-2">
                                    <h4 className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                                        Key Program Highlights
                                    </h4>
                                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                                        {program.highlights.map((highlight, hIdx) => (
                                            <li key={hIdx} className="flex items-center gap-2">
                                                <Check className={cn("w-3.5 h-3.5 shrink-0", program.id === 'bsw' ? 'text-emerald' : 'text-sky')} />
                                                <span className="text-foreground/85">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Card Footer Actions */}
                            <div className="p-4 sm:p-6 bg-muted/40 border-t border-border flex flex-wrap items-center justify-between gap-3">
                                <Link
                                    href={program.detailsLink}
                                    className={cn(buttonVariants({ variant: "outline", size: "sm" }), "font-medium text-xs")}
                                >
                                    View Curriculum & Details
                                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                </Link>
                                <a
                                    href={program.applyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(buttonVariants({ variant: program.theme.buttonVariant, size: "sm" }), "font-bold text-xs shadow-xs")}
                                >
                                    Apply via GCAS
                                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                                </a>
                            </div>
                        </Card>
                    ))}
                </SectionContent>

                {/* Bottom Help Desk Callout Banner */}
                <div className="mt-8 max-w-4xl mx-auto p-4 sm:p-6 rounded-2xl bg-card border border-border shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-center sm:text-left">
                        <div className="p-2.5 rounded-xl bg-amber/10 text-amber-tone shrink-0 hidden sm:block">
                            <HelpCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-sm sm:text-base font-bold text-foreground">Need Guidance with GCAS College Selection or Direct Quota?</h4>
                            <p className="text-xs text-muted-foreground">Our campus counselors assist students with university preference codes, document verification, and direct self-finance registration.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <a href="#gcas-guidance" className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}>
                            GCAS Guide
                            <ArrowDown className="w-3.5 h-3.5 ml-1" />
                        </a>
                        <a href="#admission-inquiry" className={cn(buttonVariants({ variant: "amber", size: "sm" }))}>
                            Contact Helpdesk
                            <PhoneCall className="w-3.5 h-3.5 ml-1" />
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    )
}
