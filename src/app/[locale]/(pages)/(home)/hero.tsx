import React from 'react'
import Link from 'next/link'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ExternalLink, GraduationCap, Award, ShieldCheck } from 'lucide-react'
import { getCoursesData } from '@/lib/fetcher'
import { getLocale } from 'next-intl/server'

export default async function HeroSection() {
    const locale = await getLocale();
    const courseData = getCoursesData(locale);

    return (
        <Hero variant="left" className="flex items-center bg-slate">
            <HeroContent className="max-w-3xl">
                {/* Badges Bar */}
                <div className="space-y-2 mb-2">
                    <Badge variant="outline" className="h-6 bg-sky/10 text-sky-tone border-sky/30 font-medium text-sm [&>svg]:size-3.5!">
                        <ShieldCheck />
                        Managed by
                        <Link className='underline underline-offset-2 hover:underline-offset-4' href="https://vadodarajillakelavanimandal.com/" target='_blank'>Vadodara Jilla Kelavani Mandal</Link> Trust Legacy Since 1957
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
                    Shaping Future <span className="bg-linear-to-r from-emerald-tone via-teal to-sky-tone bg-clip-text text-transparent">Social Work</span> Leaders & Change Makers
                </HeroH1>

                <HeroP className="max-w-2xl">
                    Vadodara Jilla Kelavani Mandal (VJKM) Self-Finance College offers premier <strong className="text-white font-semibold">BSW (Bachelor of Social Work)</strong> and <strong className="text-white font-semibold">MSW (Master of Social Work)</strong> degree programs focused on fieldwork, community empowerment, and CSR leadership.
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
                        Apply via GCAS Portal
                        <ExternalLink />
                    </Link>
                    <Link
                        href="/courses"
                        className={cn(
                            buttonVariants({ variant: "secondary", size: "lg" }),
                        )}
                    >
                        <GraduationCap className='text-emerald' />
                        Explore BSW & MSW
                    </Link>
                </HeroCta>

                {/* Stat Chips Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border/50 w-full">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
                            67+ <span className="text-emerald-tone text-lg ml-0.5">Yrs</span>
                        </span>
                        <span className="text-xs text-slate-foreground/70 font-medium">Trust Educational Legacy</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
                            270 <span className="text-sky-tone text-lg ml-0.5">Seats</span>
                        </span>
                        <span className="text-xs text-slate-foreground/70 font-medium">BSW (70) & MSW (200)</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
                            50+ <span className="text-amber-tone text-lg ml-0.5">NGOs</span>
                        </span>
                        <span className="text-xs text-slate-foreground/70 font-medium">Fieldwork Partner Network</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
                            100%
                        </span>
                        <span className="text-xs text-slate-foreground/70 font-medium">Field Placement Support</span>
                    </div>
                </div>
            </HeroContent>
        </Hero>
    )
}

