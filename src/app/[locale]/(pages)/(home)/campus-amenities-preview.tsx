import React from 'react'
import Link from 'next/link'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Monitor, BookOpenCheck, Laptop, Video, Trophy, ShieldCheck, ArrowRight } from 'lucide-react'

const amenities = [
    {
        icon: Monitor,
        title: "Smart AV Classrooms",
        description: "Equipped with interactive projectors, high-speed Wi-Fi, and acoustic seating for dynamic seminars.",
    },
    {
        icon: BookOpenCheck,
        title: "Central Social Work Library",
        description: "5,000+ volumes, government research reports, international journals, and digital e-catalog access.",
    },
    {
        icon: Laptop,
        title: "Computer & Field Data Lab",
        description: "Dedicated IT hub with statistical analysis software (SPSS) for field survey & research projects.",
    },
    {
        icon: Video,
        title: "Multipurpose Conference Hall",
        description: "Host venue for university workshops, guest lectures, state level NGO meets, and student cultural fests.",
    },
    {
        icon: Trophy,
        title: "Sports Turf & Recreation",
        description: "Outdoor sports grounds for cricket, volleyball, and indoor games facilities fostering student wellness.",
    },
    {
        icon: ShieldCheck,
        title: "Safe & Inclusive Campus",
        description: "CCTV monitored premises, dedicated Girls' Common Room, and active Anti-Ragging Cell.",
    }
]

export default function CampusAmenitiesPreview() {
    return (
        <Section className="">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader className="text-center max-w-3xl mx-auto mb-12">
                    <Badge variant="outline" className="mx-auto bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30 px-3 py-1 font-semibold text-xs rounded-full uppercase tracking-wider mb-2">
                        Campus Life & Facilities
                    </Badge>
                    <SectionTitle className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                        Modern Infrastructure Built for Growth
                    </SectionTitle>
                    <SectionDescription className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
                        Designed to provide students with a holistic learning environment, combining tech-enabled learning with lush campus spaces.
                    </SectionDescription>
                </SectionHeader>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {amenities.map((item, idx) => {
                        const IconComp = item.icon
                        return (
                            <Card key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-500/40 hover:shadow-md transition-all group">
                                <CardContent className="p-6 space-y-3">
                                    <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 w-fit group-hover:scale-105 transition-transform">
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/campus/virtual-tour"
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "border-slate-300 dark:border-slate-700 inline-flex items-center px-4 py-2 rounded-md text-sm font-medium"
                        )}
                    >
                        Take Interactive 360° Virtual Campus Tour
                        <ArrowRight className="w-4 h-4 ml-2 text-sky-500" />
                    </Link>
                </div>
            </div>
        </Section>
    )
}

