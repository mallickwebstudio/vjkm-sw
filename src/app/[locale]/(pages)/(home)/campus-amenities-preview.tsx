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
        <Section>
            <SectionHeader align="center">
                <Badge variant="sky-outline" type="heading">
                    Campus Life & Facilities
                </Badge>
                <SectionTitle>
                    Modern Infrastructure Built for Growth
                </SectionTitle>
                <SectionDescription>
                    Designed to provide students with a holistic learning environment, combining tech-enabled learning with lush campus spaces.
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {amenities.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="border shadow-sm hover:border-sky/40 hover:shadow-md transition-all group">
                            <CardContent className="py-4 space-y-3">
                                <div className="p-3 rounded-xl bg-sky-muted text-sky w-fit group-hover:scale-105 transition-transform">
                                    <IconComp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold group-hover:text-sky-tone transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}

