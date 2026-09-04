import React from 'react'
import Link from 'next/link'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ExternalLink, GraduationCap, Award, ShieldCheck } from 'lucide-react'
import { getCoursesData } from '@/lib/fetcher'
import { getLocale, getTranslations } from 'next-intl/server'

import { siteConfig } from '@/lib/metadata'

export default async function HeroSection() {
    const locale = await getLocale();
    const t = await getTranslations("home.hero");
    const courseData = getCoursesData(locale);

    return (
        <Hero
            imageSrc="/images/facilities/main-ground-0.webp"
            imageAlt="VJKM College Campus and Academic Ground"
            variant="left"
            className="flex items-center bg-slate"
        >
            <HeroContent className="max-w-3xl">
                {/* Badges Bar (Left untouched as per requirement) */}
                <div className="space-y-2 mb-2">
                    <Badge variant="outline" className="h-6 bg-sky/10 text-sky-tone border-sky/30 font-medium text-sm [&>svg]:size-3.5!">
                        <ShieldCheck />
                        Managed by
                        <Link className='underline underline-offset-2 hover:underline-offset-4' href={siteConfig.trustUrl} target='_blank' rel="noopener noreferrer">{siteConfig.trustName.en}</Link>
                    </Badge> <br />
                    <Badge variant="outline" className="h-6 bg-amber/10 text-amber-tone border-amber/30 font-medium text-sm [&>svg]:size-3.5!">
                        <Award />
                        Affiliated with <Link className='underline underline-offset-2 hover:underline-offset-4' href="https://sggu.ac.in/" target='_blank' rel="noopener noreferrer">Shri Govind Guru University</Link>
                    </Badge> <br />
                    <Badge variant="outline" className="h-6 bg-teal/10 text-teal-400 border-teal/30 font-medium text-sm [&>svg]:size-3.5!">
                        <Award />
                        Recognized by <Link className='underline underline-offset-2 hover:underline-offset-4' href="https://www.ugc.gov.in/" target='_blank' rel="noopener noreferrer">University Grants Commission</Link>
                    </Badge> <br />
                    <Badge variant="outline" className="h-6 bg-purple/10 text-purple-400 border-purple/30 font-medium text-sm [&>svg]:size-3.5!">
                        AISHE Code:
                        BSW - {courseData.find(item => item.slug === "bachelor-of-social-work")?.aisheCode} |
                        MSW - {courseData.find(item => item.slug === "master-of-social-work")?.aisheCode}
                    </Badge>
                </div>

                <HeroH1 className="h1 font-extrabold text-white">
                    {t("h1Title")}
                </HeroH1>

                <HeroP className="max-w-2xl">
                    {t("p")}
                </HeroP>

                {/* Primary & Secondary CTAs */}
                <HeroCta>
                    <Link
                        href="https://gcasstudent.gujgov.edu.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            buttonVariants({ variant: "amber", size: "lg" }),
                        )}
                    >
                        {t("ctaGcas")}
                        <ExternalLink />
                    </Link>
                    <Link
                        href="/courses"
                        className={cn(
                            buttonVariants({ variant: "secondary", size: "lg" }),
                        )}
                    >
                        <GraduationCap className='text-emerald' />
                        {t("ctaExplore")}
                    </Link>
                </HeroCta>

                {/* Stat Chips Bar (Left untouched as per requirement) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border/50 w-full">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
                            270 <span className="text-sky-tone text-lg ml-0.5">Seats</span>
                        </span>
                        <span className="text-xs text-slate-foreground/70 font-medium">BSW (70) & MSW (200)</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
                            2 <span className="text-amber-tone text-lg ml-0.5">Days</span>
                        </span>
                        <span className="text-xs text-slate-foreground/70 font-medium">Fieldwork / Week</span>
                    </div>
                </div>
            </HeroContent>
        </Hero>
    )
}
