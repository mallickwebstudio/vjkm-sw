import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { FileCheck, Building, HelpCircle } from 'lucide-react'
import { siteConfig } from '@/lib/metadata'

export function GcasGuidanceSection() {
    const steps = [
        { icon: FileCheck, title: "1. Online Registration", desc: "Visit gcasstudent.gujgov.edu.in, register with email/mobile, & pay portal fee." },
        { icon: Building, title: "2. College Preference Selection", desc: `Select '${siteConfig.trustName.en} ${siteConfig.name.en}' on GCAS portal.` },
        { icon: HelpCircle, title: "3. Verification & Helpdesk", desc: `Bring original documents to ${siteConfig.name.en} Admission Helpdesk for instant verification.` }
    ];

    return (
        <Section id="gcas-guidance" className="scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>GCAS Step-by-Step Guidance</SectionTitle>
                <SectionDescription>Follow these 3 simple steps to secure your admission at VJKM BSW & MSW College.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((item, idx) => {
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
