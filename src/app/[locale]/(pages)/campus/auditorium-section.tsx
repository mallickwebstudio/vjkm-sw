import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card, CardContent } from '@/components/ui/card'
import { Volume2, Users, Mic, Shield } from 'lucide-react'

export function AuditoriumSection() {
    const specs = [
        {
            icon: Users,
            title: "Seating Capacity",
            desc: "Accommodates 300+ attendees with comfortable theater-style seating for college assemblies and conventions."
        },
        {
            icon: Volume2,
            title: "Acoustics & Sound",
            desc: "Professional sound system, surround acoustic paneling, and lapel/stage microphones."
        },
        {
            icon: Mic,
            title: "Stage & Lighting",
            desc: "Elevated main stage with stage lighting controls, podium setups, and green room facilities."
        },
        {
            icon: Shield,
            title: "Safety & AC",
            desc: "Centralized air conditioning, emergency fire exits, and safety compliance systems."
        }
    ];

    return (
        <Section id="auditorium" className="bg-slate text-slate-foreground scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Central Auditorium</SectionTitle>
                <SectionDescription className="text-sky-muted max-w-xl">
                    Premier venue for institutional seminars, cultural festivals, academic convocations, and annual functions.
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {specs.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-slate-800/80 border-slate-700 text-slate-100 shadow-md hover:border-sky/50 transition-all flex flex-col justify-between">
                            <CardContent className="p-6 space-y-3">
                                <div className="p-3 rounded-xl bg-slate-700/60 text-sky-tone w-fit">
                                    <IconComp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    {item.desc}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
