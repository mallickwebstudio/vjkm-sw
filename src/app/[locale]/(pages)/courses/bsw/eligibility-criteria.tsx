import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function EligibilityCriteria() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Eligibility Criteria</SectionTitle>
                <SectionDescription>10+2 (Higher Secondary) qualification requirements from a recognized Gujarat board.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Minimum percentage requirements, category relaxation details, and qualifying stream norms.
                </div>
            </SectionContent>
        </Section>
    )
}
