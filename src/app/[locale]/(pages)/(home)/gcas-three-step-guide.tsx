import React from 'react'
import Link from 'next/link'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MousePointerClick, Building, FileCheck, ExternalLink, ChevronRight } from 'lucide-react'

export default function GcasThreeStepGuide() {
    return (
        <Section className="bg-slate text-slate-foreground">
            <SectionHeader align="center">
                <Badge variant="sky-outline" type="heading">
                    Admission Walkthrough 2026-27
                </Badge>
                <SectionTitle>
                    How to Apply via Gujarat Common Admission Services (GCAS)
                </SectionTitle>
                <SectionDescription className="text-sky-muted max-w-xl">
                    Admissions for BSW and MSW courses are centralized through the official Gujarat Government Portal. Follow these 3 easy steps.
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="md:grid-cols-3 gap-8 relative">
                {/* Step 1 */}
                <Card className="bg-slate-800/80 border-slate-700 text-slate-100 relative overflow-hidden shadow-lg hover:border-emerald/50 transition-all group">
                    <div className="absolute top-0 right-0 bg-emerald text-white font-extrabold text-lg px-4 py-2 rounded-bl-xl shadow-sm">
                        01
                    </div>
                    <CardContent className="p-6 pt-8 space-y-4">
                        <div className="p-3.5 rounded-xl bg-emerald/10 text-emerald-tone w-fit">
                            <MousePointerClick className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-tone transition-colors">
                            Online GCAS Portal Registration
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Visit <strong className="text-emerald-tone">gcasstudent.gujgov.edu.in</strong>, register with your mobile number, fill basic personal details, and upload qualifying marksheets.
                        </p>
                    </CardContent>
                </Card>

                {/* Step 2 */}
                <Card className="bg-slate-800/80 border-slate-700 text-slate-100 relative overflow-hidden shadow-lg hover:border-sky/50 transition-all group">
                    <div className="absolute top-0 right-0 bg-sky text-white font-extrabold text-lg px-4 py-2 rounded-bl-xl shadow-sm">
                        02
                    </div>
                    <CardContent className="p-6 pt-8 space-y-4">
                        <div className="p-3.5 rounded-xl bg-sky/10 text-sky-tone w-fit">
                            <Building className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-sky-tone transition-colors">
                            Select VJKM SF College (SGGU)
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Under university preference, select <strong className="text-sky-tone">Shri Govind Guru University (SGGU)</strong> and choose VJKM Self-Finance College for BSW or MSW programs.
                        </p>
                    </CardContent>
                </Card>

                {/* Step 3 */}
                <Card className="bg-slate-800/80 border-slate-700 text-slate-100 relative overflow-hidden shadow-lg hover:border-amber/50 transition-all group">
                    <div className="absolute top-0 right-0 bg-amber text-white font-extrabold text-lg px-4 py-2 rounded-bl-xl shadow-sm">
                        03
                    </div>
                    <CardContent className="p-6 pt-8 space-y-4">
                        <div className="p-3.5 rounded-xl bg-amber/10 text-amber-tone w-fit">
                            <FileCheck className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-tone transition-colors">
                            Campus Verification & Admission
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Visit our dedicated campus helpdesk (Room 102) with original marksheets, caste certificate, and LC for instant verification and seat confirmation.
                        </p>
                    </CardContent>
                </Card>
            </SectionContent>

            {/* Direct Action Bar */}
            <div className="p-4 rounded-2xl bg-linear-to-r from-slate-700 via-slate-800 to-sky-950 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-1 text-center sm:text-left">
                    <h4 className="text-lg font-bold flex items-center gap-2 justify-center sm:justify-start">
                        <span>Need help filling your GCAS application?</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300">
                        Our campus admission counselors assist students free of charge with document scanning and online form submission.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <a
                        href="https://gcasstudent.gujgov.edu.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            buttonVariants({ variant: "default", size: "lg" }),
                        )}
                    >
                        Open Official GCAS Portal
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <Link
                        href="/admission/gcas-guidance"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                        )}
                    >
                        View Full Step-by-Step Guide
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </Section>
    )
}

