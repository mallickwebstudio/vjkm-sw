import React from 'react'
import Link from 'next/link'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GraduationCap, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function CoursesSpotlight() {
    return (
        <Section>
            <SectionHeader align="center">
                <Badge variant="amber-outline" type="heading">
                    Academic Degree Programs
                </Badge>
                <SectionTitle>
                    Undergraduate & Postgraduate Social Work Excellence
                </SectionTitle>
                <SectionDescription className='max-w-xl'>
                    Affiliated with Shri Govind Guru University (SGGU), Godhra. Designed to blend academic theory with intensive fieldwork exposure.
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="lg:grid-cols-2 gap-8">
                {/* BSW Card */}
                <Card className="pb-0 relative h-fit hover:border-emerald/50 transition-all shadow-lg hover:shadow-xl border-2 border-emerald/20 overflow-hidden">
                    <div className="absolute top-0 right-0 bg-emerald text-emerald-foreground font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-bl-lg shadow-sm">
                        70 Intake Seats
                    </div>
                    <div>
                        <CardHeader className='pt-4'>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 rounded-xl bg-emerald-muted text-emerald">
                                    <GraduationCap className="w-7 h-7" />
                                </div>
                                <div>
                                    <Badge variant="secondary">
                                        Undergraduate Program
                                    </Badge>
                                    <CardTitle className="mt-1 text-2xl font-bold">
                                        Bachelor of Social Work (BSW)
                                    </CardTitle>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground pt-2 leading-relaxed">
                                A foundational 3-year degree equipping students with community development skills, field survey techniques, and social intervention frameworks.
                            </p>
                        </CardHeader>

                        <CardContent className="pt-4 space-y-4">
                            <div className="grid grid-cols-2 gap-3 py-3 border-y text-xs">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Clock className="w-4 h-4 text-emerald shrink-0" />
                                    <span><strong>Duration:</strong> 3 Years (6 Semesters)</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Users className="w-4 h-4 text-emerald shrink-0" />
                                    <span><strong>Eligibility:</strong> 10+2 Any Stream</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Key Highlights</h4>
                                <ul className="space-y-2 text-xs text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald shrink-0" />
                                        <span>Weekly mandatory field visits to local NGOs & Panchayats</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald shrink-0" />
                                        <span>7-Day Annual Rural Orientation Camp</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald shrink-0" />
                                        <span>Foundation in Psychology, Sociology & Social Legislation</span>
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </div>

                    <CardFooter className="py-4 bg-muted flex flex-wrap justify-between border-t">
                        <Link
                            href="/courses/bsw"
                            className={cn(
                                buttonVariants({ variant: "outline", size: "sm" }),
                            )}
                        >
                            Course Syllabus & Details
                            <ArrowRight />
                        </Link>
                        <a
                            href="https://gcasstudent.gujgov.edu.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                buttonVariants({ variant: "emerald", size: "sm" }),
                            )}
                        >
                            Apply BSW via GCAS
                        </a>
                    </CardFooter>
                </Card>

                {/* MSW Card */}
                <Card className="pb-0 relative h-fit hover:border-sky/50 transition-all shadow-lg hover:shadow-xl border-2 border-sky/20 overflow-hidden">
                    <div className="absolute top-0 right-0 bg-sky text-sky-foreground font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-bl-lg shadow-sm">
                        200 Intake Seats
                    </div>
                    <div>
                        <CardHeader className="pt-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 rounded-xl bg-sky-muted text-sky">
                                    <GraduationCap className="w-7 h-7" />
                                </div>
                                <div>
                                    <Badge variant="secondary">
                                        Postgraduate Program
                                    </Badge>
                                    <CardTitle className="mt-1 text-2xl font-bold">
                                        Master of Social Work (MSW)
                                    </CardTitle>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground pt-2 leading-relaxed">
                                An advanced 2-year master&apos;s program specializing in Human Resource Management, CSR Leadership, and Medical & Psychiatric Social Work.
                            </p>
                        </CardHeader>

                        <CardContent className="pt-4 space-y-4">
                            <div className="grid grid-cols-2 gap-3 py-3 border-y text-xs">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Clock className="w-4 h-4 text-sky shrink-0" />
                                    <span><strong>Duration:</strong> 2 Years (4 Semesters)</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Users className="w-4 h-4 text-sky shrink-0" />
                                    <span><strong>Eligibility:</strong> Bachelor Degree Any Stream</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Key Highlights</h4>
                                <ul className="space-y-2 text-xs text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-sky shrink-0" />
                                        <span>Specialization tracks: HR/IR, Medical Social Work & Rural Development</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-sky shrink-0" />
                                        <span>30-Day Mandatory Corporate / NGO Block Internship</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-sky shrink-0" />
                                        <span>Research Dissertation & Published Project Work</span>
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </div>

                    <CardFooter className="py-4 bg-muted flex flex-wrap justify-between border-t">
                        <Link
                            href="/courses/msw"
                            className={cn(
                                buttonVariants({ variant: "outline", size: "sm" }),
                            )}
                        >
                            Course Syllabus & Details
                            <ArrowRight />
                        </Link>
                        <a
                            href="https://gcasstudent.gujgov.edu.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                buttonVariants({ variant: "sky", size: "sm" }),
                            )}
                        >
                            Apply MSW via GCAS
                        </a>
                    </CardFooter>
                </Card>
            </SectionContent>
        </Section>
    )
}

