import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function EligibilityMatrix() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Eligibility Matrix</SectionTitle>
                <SectionDescription>Side-by-side comparison of BSW vs MSW admission criteria and qualification norms.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Comparison table highlighting qualifying exam, minimum percentage, reservation relaxations, and document needs.
                </div>
            </SectionContent>
        </Section>
    )
}
