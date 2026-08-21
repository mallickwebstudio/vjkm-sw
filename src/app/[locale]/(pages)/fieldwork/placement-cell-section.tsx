import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { Target, Users, Calendar } from 'lucide-react'

export function PlacementCellSection() {
    const pillars = [
        { icon: Target, title: "Career Guidance & Resume Building", desc: "Mock interviews, CV formatting, and professional grooming workshops for final-year students." },
        { icon: Calendar, title: "On-Campus Recruitment Drives", desc: "Organizing annual placement drives with corporate CSRs, INGOs, HR consultancies, & health foundations." },
        { icon: Users, title: "Student Placement Committee", desc: "Student-led placement council coordinating directly with hiring managers and field agencies." }
    ];

    return (
        <Section id="placement-cell" className="scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Training & Placement Cell</SectionTitle>
                <SectionDescription>Facilitating career transitions into professional social work, HR management, and CSR leadership.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillars.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-card border border-border p-6 space-y-3 shadow-sm">
                            <div className="p-3 rounded-xl bg-sky/10 text-sky-tone w-fit">
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
