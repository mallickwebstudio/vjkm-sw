import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function AnnualCulturalFest() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Annual Cultural Fest</SectionTitle>
                <SectionDescription>Folk dance (Garba/Bhangra), drama competitions, street plays (Nukkad Natak), fine arts, & music night.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Photo gallery grid & event categories list for dance, music, drama, fine arts, & stage performances.
                </div>
            </SectionContent>
        </Section>
    )
}
