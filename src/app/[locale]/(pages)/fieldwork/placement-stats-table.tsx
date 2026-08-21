import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function PlacementStatsTable() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Year-on-Year Placement Statistics</SectionTitle>
                <SectionDescription>Batch hiring percentages, highest package, average CTC, & domain placement distribution.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Placement metrics table (2023-2026), highest CTC, average CTC, & sector-wise hiring split (CSR vs NGO vs Govt).
                </div>
            </SectionContent>
        </Section>
    )
}
