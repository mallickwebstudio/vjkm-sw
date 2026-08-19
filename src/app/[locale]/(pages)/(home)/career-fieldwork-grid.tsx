import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function CareerFieldworkGrid() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Fieldwork & Placement Scope</SectionTitle>
                <SectionDescription>Placement statistics, partner NGO network, and corporate CSR affiliations.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Stat counters grid for hiring metrics, field immersion days, and agency partner logos gallery.
                </div>
            </SectionContent>
        </Section>
    )
}
