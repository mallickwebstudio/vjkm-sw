import React from 'react'
import Link from 'next/link'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ExternalLink, GraduationCap, Award, ShieldCheck, Users, BookOpen, Building2 } from 'lucide-react'

export default function HeroSection() {
    return (
        <Hero variant="left" className="min-h-[85vh] flex items-center bg-slate-950">
            <HeroContent className="max-w-3xl py-6">
                {/* Badges Bar */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 px-3 py-1 font-medium text-xs rounded-full">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                        VJKM Trust Legacy Since 1957
                    </Badge>
                    <Badge variant="outline" className="bg-sky-500/10 text-sky-400 border-sky-500/30 px-3 py-1 font-medium text-xs rounded-full">
                        <Award className="w-3.5 h-3.5 mr-1.5 text-sky-400" />
                        Affiliated with SGGU Godhra
                    </Badge>
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/30 px-3 py-1 font-medium text-xs rounded-full">
                        AISHE Code: C-65481
                    </Badge>
                </div>

                <HeroH1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                    Shaping Future <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">Social Work</span> Leaders & Change Makers
                </HeroH1>

                <HeroP className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
                    Vadodara Jilla Kelavani Mandal (VJKM) Self-Finance College offers premier <strong className="text-white font-semibold">BSW (Bachelor of Social Work)</strong> and <strong className="text-white font-semibold">MSW (Master of Social Work)</strong> degree programs focused on fieldwork, community empowerment, and CSR leadership.
                </HeroP>

                {/* Primary & Secondary CTAs */}
                <HeroCta className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                    <a 
                        href="https://gcasstudent.gujgov.edu.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cn(
                            buttonVariants({ variant: "default", size: "lg" }),
                            "bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-7 shadow-lg shadow-emerald-950/50 transition-all text-base rounded-md h-auto py-2.5"
                        )}
                    >
                        Apply via GCAS Portal
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <Link 
                        href="/courses"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-100 font-medium px-6 text-base rounded-md h-auto py-2.5"
                        )}
                    >
                        <GraduationCap className="w-4 h-4 mr-2 text-teal-400" />
                        Explore BSW & MSW
                    </Link>
                </HeroCta>

                {/* Stat Chips Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/80 w-full">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
                            67+ <span className="text-emerald-400 text-lg ml-0.5">Yrs</span>
                        </span>
                        <span className="text-xs text-slate-400 font-medium">Trust Educational Legacy</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
                            270 <span className="text-sky-400 text-lg ml-0.5">Seats</span>
                        </span>
                        <span className="text-xs text-slate-400 font-medium">BSW (70) & MSW (200)</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
                            50+ <span className="text-amber-400 text-lg ml-0.5">NGOs</span>
                        </span>
                        <span className="text-xs text-slate-400 font-medium">Fieldwork Partner Network</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
                            100%
                        </span>
                        <span className="text-xs text-slate-400 font-medium">Field Placement Support</span>
                    </div>
                </div>
            </HeroContent>
        </Hero>
    )
}

