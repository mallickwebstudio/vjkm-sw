import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { Award, TrendingUp, CheckCircle } from 'lucide-react'

export function PlacementRecordsSection() {
    const stats = [
        { label: "Overall Placement Rate", value: "85%+", icon: TrendingUp },
        { label: "Active Agency Partners", value: "50+", icon: Award },
        { label: "Highest CTC Package", value: "₹4.5 LPA", icon: CheckCircle }
    ];

    return (
        <Section id="placement-records" className="scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Placement Records & Metrics</SectionTitle>
                <SectionDescription>Consistent track record of placing BSW & MSW graduates in reputable organizations.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-card border border-border p-6 text-center space-y-2 shadow-sm">
                            <div className="p-3 rounded-xl bg-amber/10 text-amber-tone w-fit mx-auto">
                                <IconComp className="w-6 h-6" />
                            </div>
                            <div className="text-3xl font-extrabold text-foreground">{item.value}</div>
                            <div className="text-xs sm:text-sm text-slate-tone font-medium">{item.label}</div>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
