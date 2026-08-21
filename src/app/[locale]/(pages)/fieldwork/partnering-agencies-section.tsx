import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { Building2, HeartHandshake, ShieldCheck } from 'lucide-react'

export function PartneringAgenciesSection() {
    const categories = [
        { icon: HeartHandshake, title: "50+ Partner NGOs & Foundations", desc: "Non-profit organizations working in child welfare, women empowerment, tribal health, and disability rehabilitation." },
        { icon: Building2, title: "Corporate CSR Units", desc: "Industrial CSR foundations across Vadodara, Halol, Savli, & Bharuch for HR and CSR project placements." },
        { icon: ShieldCheck, title: "Govt Social Defense Departments", desc: "Juvenile justice homes, District Child Protection Units (DCPU), One Stop Centers, & civil hospitals." }
    ];

    return (
        <Section id="partnering-agencies" className="bg-slate text-slate-foreground scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Partnering Agencies & CSR Units</SectionTitle>
                <SectionDescription className="text-sky-muted max-w-xl">
                    Strong collaborative network across non-profits, government departments, and corporate foundations.
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-slate-800/80 border-slate-700 text-slate-100 p-6 space-y-3 shadow-md">
                            <div className="p-3 rounded-xl bg-slate-700/60 text-emerald-tone w-fit">
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
