import React from 'react'
import Link from 'next/link'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Shield, Target, Award, Compass, ArrowRight, CheckCircle2, History } from 'lucide-react'

export default function AboutSnapshot() {
    return (
        <Section className="bg-slate-50 dark:bg-slate-900/50 ">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Trust Narrative */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                            <History className="w-3.5 h-3.5" />
                            <span>Established 1957 • 67+ Years of Excellence</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                            Vadodara Jilla Kelavani Mandal (VJKM) Trust
                        </h2>

                        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                            Founded with a profound vision to democratize quality education across rural and semi-urban Gujarat, <strong className="text-slate-900 dark:text-white font-semibold">VJKM Trust</strong> has been a cornerstone of socio-educational advancement for over six decades.
                        </p>

                        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                            Our Self-Finance Social Work College continues this legacy by offering professional <strong className="text-slate-900 dark:text-white font-semibold">BSW and MSW</strong> degree programs that blend rigorous academic pedagogy with practical field immersions, preparing students for impactful careers in NGOs, CSR, healthcare, and public welfare.
                        </p>

                        {/* Pillars List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">SGGU University Affiliation</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Approved by Shri Govind Guru University, Godhra</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Fieldwork Focused Pedagogy</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Weekly field visits, block placements & rural camps</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Inclusive Financial Aid</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Support for Digital Gujarat & MYSY scholarships</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Dedicated GCAS Desk</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">On-campus admission helpdesk & document verification</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <Link
                                href="/about-us"
                                className={cn(
                                    buttonVariants({ variant: "default" }),
                                    "bg-slate-900 dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 text-white font-medium inline-flex items-center px-4 py-2 rounded-md text-sm"
                                )}
                            >
                                Learn More About VJKM Trust & Management
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Mission Cards */}
                    <div className="lg:col-span-5 space-y-4">
                        <Card className="border-l-4 border-l-emerald-600 bg-white dark:bg-slate-800 shadow-md">
                            <CardContent className="p-6 space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                                    To be a benchmark institution in social work education, empowering youth with empathy, professional ethics, and leadership skills to drive sustainable community transformation.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-sky-600 bg-white dark:bg-slate-800 shadow-md">
                            <CardContent className="p-6 space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-md bg-sky-50 dark:bg-sky-950/50 text-sky-600">
                                        <Compass className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Mission</h3>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                                    Nurture social work professionals through experiential fieldwork, research, inter-disciplinary learning, and institutional partnerships across Gujarat and India.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-amber-600 bg-white dark:bg-slate-800 shadow-md">
                            <CardContent className="p-6 space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-600">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Values</h3>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                                    Social Justice, Human Dignity, Community Service, Environmental Stewardship, and Transparent Governance.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Section>
    )
}

