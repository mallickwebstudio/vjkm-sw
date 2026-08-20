import React from 'react'
import Link from 'next/link'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GraduationCap, Clock, Users, BookOpen, Download, ArrowRight, CheckCircle } from 'lucide-react'

export default function CoursesSpotlight() {
    return (
        <Section className="">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader className="text-center max-w-3xl mx-auto mb-12">
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 px-3 py-1 font-semibold text-xs rounded-full uppercase tracking-wider mb-2">
                        Academic Degree Programs
                    </Badge>
                    <SectionTitle className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                        Undergraduate & Postgraduate Social Work Excellence
                    </SectionTitle>
                    <SectionDescription className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
                        Affiliated with Shri Govind Guru University (SGGU), Godhra. Designed to blend academic theory with intensive fieldwork exposure.
                    </SectionDescription>
                </SectionHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* BSW Card */}
                    <Card className="relative overflow-hidden border-2 border-emerald-500/20 hover:border-emerald-500/50 transition-all shadow-lg hover:shadow-xl bg-white dark:bg-slate-900 flex flex-col justify-between">
                        <div className="absolute top-0 right-0 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-bl-lg shadow-sm">
                            70 Intake Seats
                        </div>
                        <div>
                            <CardHeader className="p-6 pb-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                                        <GraduationCap className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mb-1">
                                            Undergraduate Program
                                        </Badge>
                                        <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                                            Bachelor of Social Work (BSW)
                                        </CardTitle>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 pt-2 leading-relaxed">
                                    A foundational 3-year degree equipping students with community development skills, field survey techniques, and social intervention frameworks.
                                </p>
                            </CardHeader>

                            <CardContent className="p-6 pt-0 space-y-4">
                                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 dark:border-slate-800 text-xs">
                                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                        <Clock className="w-4 h-4 text-emerald-500" />
                                        <span><strong>Duration:</strong> 3 Years (6 Semesters)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                        <Users className="w-4 h-4 text-emerald-500" />
                                        <span><strong>Eligibility:</strong> 10+2 Any Stream</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Key Highlights</h4>
                                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                            <span>Weekly mandatory field visits to local NGOs & Panchayats</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                            <span>7-Day Annual Rural Orientation Camp</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                            <span>Foundation in Psychology, Sociology & Social Legislation</span>
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </div>

                        <CardFooter className="p-6 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                            <Link
                                href="/courses/bsw"
                                className={cn(
                                    buttonVariants({ variant: "outline", size: "sm" }),
                                    "text-xs border-slate-300 dark:border-slate-700"
                                )}
                            >
                                Course Syllabus & Details
                                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                            </Link>
                            <a
                                href="https://gcasstudent.gujgov.edu.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    buttonVariants({ variant: "default", size: "sm" }),
                                    "bg-emerald-600 hover:bg-emerald-500 text-white text-xs"
                                )}
                            >
                                Apply BSW via GCAS
                            </a>
                        </CardFooter>
                    </Card>

                    {/* MSW Card */}
                    <Card className="relative overflow-hidden border-2 border-sky-500/20 hover:border-sky-500/50 transition-all shadow-lg hover:shadow-xl bg-white dark:bg-slate-900 flex flex-col justify-between">
                        <div className="absolute top-0 right-0 bg-sky-600 text-white font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-bl-lg shadow-sm">
                            200 Intake Seats
                        </div>
                        <div>
                            <CardHeader className="p-6 pb-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                                        <GraduationCap className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mb-1">
                                            Postgraduate Program
                                        </Badge>
                                        <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                                            Master of Social Work (MSW)
                                        </CardTitle>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 pt-2 leading-relaxed">
                                    An advanced 2-year master's program specializing in Human Resource Management, CSR Leadership, and Medical & Psychiatric Social Work.
                                </p>
                            </CardHeader>

                            <CardContent className="p-6 pt-0 space-y-4">
                                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 dark:border-slate-800 text-xs">
                                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                        <Clock className="w-4 h-4 text-sky-500" />
                                        <span><strong>Duration:</strong> 2 Years (4 Semesters)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                        <Users className="w-4 h-4 text-sky-500" />
                                        <span><strong>Eligibility:</strong> Bachelor Degree Any Stream</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Key Highlights</h4>
                                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                                            <span>Specialization tracks: HR/IR, Medical Social Work & Rural Development</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                                            <span>30-Day Mandatory Corporate / NGO Block Internship</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                                            <span>Research Dissertation & Published Project Work</span>
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </div>

                        <CardFooter className="p-6 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                            <Link
                                href="/courses/msw"
                                className={cn(
                                    buttonVariants({ variant: "outline", size: "sm" }),
                                    "text-xs border-slate-300 dark:border-slate-700"
                                )}
                            >
                                Course Syllabus & Details
                                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                            </Link>
                            <a
                                href="https://gcasstudent.gujgov.edu.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    buttonVariants({ variant: "default", size: "sm" }),
                                    "bg-sky-600 hover:bg-sky-500 text-white text-xs"
                                )}
                            >
                                Apply MSW via GCAS
                            </a>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </Section>
    )
}

