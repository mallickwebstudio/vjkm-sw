import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { Calendar, Globe, Trophy } from 'lucide-react'

export function EventsCelebrationsSection() {
    const events = [
        { icon: Globe, title: "World Social Work Day", desc: "Annual celebration featuring keynote addresses by veteran social activists, poster competitions, and field exhibition stalls." },
        { icon: Calendar, title: "Annual Cultural Festival", desc: "Vibrant multi-day festival showcasing folk dance, music performance, drama, and traditional attire competitions." },
        { icon: Trophy, title: "Annual Sports Meet", desc: "Inter-departmental athletic competitions including cricket, football, tug-of-war, and track field events." }
    ];

    return (
        <Section id="events-and-celebrations" className="scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Events & Campus Celebrations</SectionTitle>
                <SectionDescription>Celebrating diversity, academic achievements, and cultural heritage throughout the year.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-card border border-border p-6 space-y-3 shadow-sm">
                            <div className="p-3 rounded-xl bg-amber/10 text-amber-tone w-fit">
                                <IconComp className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">{item.desc}</p>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
