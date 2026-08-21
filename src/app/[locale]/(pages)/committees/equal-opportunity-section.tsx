import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { Users, Scale } from 'lucide-react'

export function EqualOpportunitySection() {
    return (
        <Section id="sc-st-obc-minority-cell" className="scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>SC/ST/OBC & Minority Cell</SectionTitle>
                <SectionDescription>Promoting social inclusion, equal opportunity, and scholarship assistance for reserved category students.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border border-border p-6 space-y-3 shadow-sm">
                    <div className="p-3 rounded-xl bg-amber/10 text-amber-tone w-fit">
                        <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Equal Opportunity Pillars</h3>
                    <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                        Ensuring zero discrimination in academic participation, field placements, and campus life for students belonging to SC, ST, OBC, and Minority communities.
                    </p>
                </Card>

                <Card className="bg-card border border-border p-6 space-y-3 shadow-sm">
                    <div className="p-3 rounded-xl bg-emerald/10 text-emerald-tone w-fit">
                        <Scale className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Scholarship & Mentorship Desk</h3>
                    <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                        Specialized guidance for Digital Gujarat Freeship Card, MYSY applications, post-matric scholarship tracking, and academic remedial classes.
                    </p>
                </Card>
            </SectionContent>
        </Section>
    )
}
