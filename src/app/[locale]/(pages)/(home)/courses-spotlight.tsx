import React from 'react'
import Link from 'next/link'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GraduationCap, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function CoursesSpotlight() {
    const t = await getTranslations("home.coursesSpotlight");

    return (
        <Section>
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription className='max-w-xl'>
                    {t("subheading")}
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
                                        {t("bsw.badge")}
                                    </Badge>
                                    <CardTitle className="mt-1 text-2xl font-bold">
                                        {t("bsw.title")}
                                    </CardTitle>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground pt-2 leading-relaxed">
                                {t("bsw.desc")}
                            </p>
                        </CardHeader>

                        <CardContent className="pt-4 space-y-4">
                            <div className="grid grid-cols-2 gap-3 py-3 border-y text-xs">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Clock className="w-4 h-4 text-emerald shrink-0" />
                                    <span><strong>{t("bsw.durationLabel")}</strong> {t("bsw.duration")}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Users className="w-4 h-4 text-emerald shrink-0" />
                                    <span><strong>{t("bsw.eligibilityLabel")}</strong> {t("bsw.eligibility")}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase text-muted-foreground tracking-wider">{t("bsw.highlightsTitle")}</h4>
                                <ul className="space-y-2 text-xs text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald shrink-0" />
                                        <span>{t("bsw.highlight1")}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald shrink-0" />
                                        <span>{t("bsw.highlight2")}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald shrink-0" />
                                        <span>{t("bsw.highlight3")}</span>
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
                            {t("bsw.ctaDetails")}
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
                            {t("bsw.ctaApply")}
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
                                        {t("msw.badge")}
                                    </Badge>
                                    <CardTitle className="mt-1 text-2xl font-bold">
                                        {t("msw.title")}
                                    </CardTitle>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground pt-2 leading-relaxed">
                                {t("msw.desc")}
                            </p>
                        </CardHeader>

                        <CardContent className="pt-4 space-y-4">
                            <div className="grid grid-cols-2 gap-3 py-3 border-y text-xs">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Clock className="w-4 h-4 text-sky shrink-0" />
                                    <span><strong>{t("msw.durationLabel")}</strong> {t("msw.duration")}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Users className="w-4 h-4 text-sky shrink-0" />
                                    <span><strong>{t("msw.eligibilityLabel")}</strong> {t("msw.eligibility")}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase text-muted-foreground tracking-wider">{t("msw.highlightsTitle")}</h4>
                                <ul className="space-y-2 text-xs text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-sky shrink-0" />
                                        <span>{t("msw.highlight1")}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-sky shrink-0" />
                                        <span>{t("msw.highlight2")}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-sky shrink-0" />
                                        <span>{t("msw.highlight3")}</span>
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
                            {t("msw.ctaDetails")}
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
                            {t("msw.ctaApply")}
                        </a>
                    </CardFooter>
                </Card>
            </SectionContent>
        </Section>
    )
}
