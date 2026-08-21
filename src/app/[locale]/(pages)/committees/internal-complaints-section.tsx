import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, HeartHandshake } from 'lucide-react'

export function InternalComplaintsSection() {
    return (
        <Section id="internal-complaint-committee" className="bg-slate text-slate-foreground scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Internal Complaints Committee (ICC / POSH)</SectionTitle>
                <SectionDescription className="text-sky-muted max-w-xl">
                    Statutory committee ensuring gender equity, prevention of sexual harassment, and safe campus environment.
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-slate-800/80 border-slate-700 text-slate-100 p-6 space-y-3">
                    <div className="p-3 rounded-xl bg-slate-700/60 text-sky-tone w-fit">
                        <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">POSH Act Compliance</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Formed strictly under Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 with female presiding officer and external NGO member.
                    </p>
                </Card>

                <Card className="bg-slate-800/80 border-slate-700 text-slate-100 p-6 space-y-3">
                    <div className="p-3 rounded-xl bg-slate-700/60 text-emerald-tone w-fit">
                        <HeartHandshake className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Confidential Redressal</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Strict confidentiality guaranteed for all complaints. Formal inquiry procedures conducted within statutory timelines with support counseling.
                    </p>
                </Card>
            </SectionContent>
        </Section>
    )
}
