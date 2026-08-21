import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card, CardContent } from '@/components/ui/card'
import { Monitor, Laptop, Video } from 'lucide-react'

export function ClassroomsLabsSection() {
    const facilities = [
        {
            icon: Monitor,
            title: "Smart Podium Classrooms",
            description: "Spacious, well-ventilated lecture halls equipped with interactive smart podiums, digital projectors, and ergonomic seating.",
            badge: "Tech-Enabled"
        },
        {
            icon: Laptop,
            title: "Computer Laboratory & SPSS Desk",
            description: "High-speed computer lab equipped with statistical software (SPSS) for student research data entry, field survey analysis, and IT literacy.",
            badge: "Research & Data"
        },
        {
            icon: Video,
            title: "Audio-Visual Seminar Halls",
            description: "Acoustically treated halls equipped with sound systems and video conferencing for guest lectures, workshops, and student presentations.",
            badge: "A/V Enabled"
        }
    ];

    return (
        <Section id="classrooms-and-labs" className="scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Classrooms & Laboratories</SectionTitle>
                <SectionDescription>Modern academic infrastructure designed for interactive learning and empirical social research.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {facilities.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-card border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <CardContent className="p-6 space-y-4">
                                <div className="p-3 rounded-xl bg-sky/10 text-sky-tone w-fit">
                                    <IconComp className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-tone leading-relaxed">
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
