import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function DebateAndCivilServicesCircle() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Debate & Civil Services Circle</SectionTitle>
                <SectionDescription>Elocution competitions, mock parliamentary debates, GPSC/UPSC study group, & guest lectures.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Civil services study circle schedule, recommended reading lists, & debate trophy highlights.
                </div>
            </SectionContent>
        </Section>
    )
}
