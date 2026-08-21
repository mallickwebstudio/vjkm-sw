import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { Sparkles, BookOpen, TreePine } from 'lucide-react'

export function ClubsCellsSection() {
    const clubs = [
        { icon: Sparkles, title: "Cultural & Fine Arts Club", desc: "Nurturing creative talent in performing arts, traditional garba, street theater, and fine arts exhibitions." },
        { icon: BookOpen, title: "Debate & Civil Services Circle", desc: "Weekly mock debates, current affairs discussions, and competitive exam guidance for GPSC/UPSC aspirants." },
        { icon: TreePine, title: "Eco & Environmental Club", desc: "Promoting green campus initiatives, tree plantation drives, and plastic-free campaign awareness." }
    ];

    return (
        <Section id="clubs-and-cells" className="bg-slate text-slate-foreground scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Student Clubs & Creative Circles</SectionTitle>
                <SectionDescription className="text-sky-muted max-w-xl">
                    Student-led extra-curricular clubs encouraging leadership, artistic expression, and competitive excellence.
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {clubs.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-slate-800/80 border-slate-700 text-slate-100 p-6 space-y-3 shadow-md">
                            <div className="p-3 rounded-xl bg-slate-700/60 text-sky-tone w-fit">
                                <IconComp className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
