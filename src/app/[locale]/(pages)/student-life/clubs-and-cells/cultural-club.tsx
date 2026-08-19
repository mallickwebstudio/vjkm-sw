import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function CulturalClub() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Cultural & Fine Arts Club</SectionTitle>
                <SectionDescription>Organizing music concerts, drama rehearsals, street play scripting, & rangoli competitions.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Club structure card, student coordinator contacts, & annual event calendar.
                </div>
            </SectionContent>
        </Section>
    )
}
