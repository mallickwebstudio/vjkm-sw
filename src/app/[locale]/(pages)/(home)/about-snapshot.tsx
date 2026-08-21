import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Section, SectionContent } from '@/components/section/section'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Target, Award, Compass, ArrowRight, CheckCircle2, History } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function AboutSnapshot() {
    const t = await getTranslations("home.aboutSnapshot");

    const trusteesData = [
        {
            name: t("trustee1Name"),
            designation: t("trustee1Designation"),
            imageSrc: "/images/trustees/shashikant-patel-new.webp",
        },
        {
            name: t("trustee2Name"),
            designation: t("trustee2Designation"),
            imageSrc: "/images/trustees/dilip-patel-new.webp",
        },
        {
            name: t("trustee3Name"),
            designation: t("trustee3Designation"),
            imageSrc: "/images/trustees/thakor-patel-new.webp",
        },
        {
            name: t("trustee4Name"),
            designation: t("trustee4Designation"),
            imageSrc: "/images/trustees/mukesh-vasaiwala-new.webp",
        },
    ];

    const pillars = [
        {
            title: t("pillar1Title"),
            desc: t("pillar1Desc"),
        },
        {
            title: t("pillar2Title"),
            desc: t("pillar2Desc"),
        },
        {
            title: t("pillar3Title"),
            desc: t("pillar3Desc"),
        },
        {
            title: t("pillar4Title"),
            desc: t("pillar4Desc"),
        },
    ];

    return (
        <Section className="bg-slate-muted">
            <SectionContent className="lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Trust Narrative */}
                <div className="lg:col-span-7 space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                        {t("h2")}
                    </h2>

                    <p className="text-slate-tone text-base md:text-lg leading-relaxed">
                        {t("p")}
                    </p>

                    {/* Trustee Cards */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {trusteesData.map((trustee, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border shadow-xs">
                                <div className="relative size-20 rounded-sm overflow-hidden shrink-0 border border-border bg-muted">
                                    <Image
                                        src={trustee.imageSrc}
                                        alt={trustee.name}
                                        fill
                                        className="object-cover object-top select-none pointer-events-none"
                                    />
                                </div>
                                <div className="min-w-0 h-full flex-1 flex flex-col justify-end">
                                    <h4 className="text-sm font-bold">{trustee.name}</h4>
                                    <p className="py-px px-1 w-fit bg-amber text-amber-foreground text-xs rounded-xs">
                                        {trustee.designation}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pillars List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {pillars.map((pillar, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-card border border-border shadow-xs">
                                <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-foreground">{pillar.title}</h4>
                                    <p className="text-xs text-slate-tone">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-2">
                        <Link
                            href="/about-us"
                            className={cn(
                                buttonVariants({ variant: "slate" }), "whitespace-break-spaces"
                            )}
                        >
                            {t("cta")}
                            <ArrowRight />
                        </Link>
                    </div>
                </div>

                {/* Right Column: Mission Cards */}
                <div className="lg:col-span-5 space-y-4">
                    <Card className="border-x-4 border-x-emerald bg-card shadow-md">
                        <CardContent className="p-6 space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-md bg-emerald-muted text-emerald">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">{t("visionTitle")}</h3>
                            </div>
                            <p className="text-sm text-slate-tone leading-relaxed pt-1">
                                {t("visionDesc")}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-x-4 border-x-sky bg-card shadow-md">
                        <CardContent className="p-6 space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-md bg-sky-muted text-sky">
                                    <Compass className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">{t("missionTitle")}</h3>
                            </div>
                            <p className="text-sm text-slate-tone leading-relaxed pt-1">
                                {t("missionDesc")}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-x-4 border-x-amber bg-card shadow-md">
                        <CardContent className="p-6 space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-md bg-amber-muted text-amber">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">{t("valuesTitle")}</h3>
                            </div>
                            <p className="text-sm text-slate-tone leading-relaxed pt-1">
                                {t("valuesDesc")}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionContent>
        </Section>
    )
}
