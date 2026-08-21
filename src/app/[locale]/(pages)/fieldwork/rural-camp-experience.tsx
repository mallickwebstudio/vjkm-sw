import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function RuralCampExperience() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>7-Day Rural Immersion Camp</SectionTitle>
                <SectionDescription>Comprehensive rural immersion, PRA surveys, community health camps, & village literacy drives.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Photo gallery grid & daily itinerary breakdown of rural camp activities in adopted tribal/rural villages.
                </div>
            </SectionContent>
        </Section>
    )
}
