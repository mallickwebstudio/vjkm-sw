import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { Trophy, Dumbbell, Heart } from 'lucide-react'

export function SportsFitnessSection() {
    const facilities = [
        { icon: Trophy, title: "Outdoor Sports Turf & Grounds", desc: "Dedicated cricket pitch, football turf, volleyball court, and badminton arena for intra-college tournaments." },
        { icon: Dumbbell, title: "Campus Fitness Gym", desc: "Well-equipped indoor fitness gym featuring modern strength training equipment, treadmills, and exercise cycles." },
        { icon: Heart, title: "Yoga & Wellness Center", desc: "Peaceful yoga and meditation center promoting mental health, stress management, and holistic wellness." }
    ];

    return (
        <Section id="sports-and-fitness" className="scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Sports & Fitness Infrastructure</SectionTitle>
                <SectionDescription>Promoting physical athletic excellence, teamwork, and holistic mental wellness.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {facilities.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-card border border-border p-6 space-y-3 shadow-sm">
                            <div className="p-3 rounded-xl bg-emerald/10 text-emerald-tone w-fit">
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
