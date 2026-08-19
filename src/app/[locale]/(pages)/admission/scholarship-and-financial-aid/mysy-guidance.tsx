import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function MysyGuidance() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>MYSY Scheme Guidance</SectionTitle>
                <SectionDescription>Mukhyamantri Yuva Swavalamban Yojana tuition fee assistance and eligibility criteria.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: MYSY eligibility threshold (80 percentile in 12th), fee reimbursement percentage, & renewal procedure.
                </div>
            </SectionContent>
        </Section>
    )
}
