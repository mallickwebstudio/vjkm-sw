import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function EligibilityNorms() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Eligibility Norms</SectionTitle>
                <SectionDescription>Graduate in any stream (Arts, Commerce, Science, BSW) from a recognized university.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Minimum passing marks, equivalence guidelines, and GCAS / Self-Finance admission eligibility requirements.
                </div>
            </SectionContent>
        </Section>
    )
}
