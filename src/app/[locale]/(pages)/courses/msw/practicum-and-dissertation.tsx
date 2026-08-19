import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function PracticumAndDissertation() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Practicum & Dissertation</SectionTitle>
                <SectionDescription>Block placement internships, hospital postings, corporate HR training, and thesis dissertation.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Fieldwork practicum schedule, dissertation submission timeline, viva voce evaluation, and block placement.
                </div>
            </SectionContent>
        </Section>
    )
}
