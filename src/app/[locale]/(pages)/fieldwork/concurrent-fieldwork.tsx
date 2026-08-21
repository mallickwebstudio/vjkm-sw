import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function ConcurrentFieldwork() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Concurrent Fieldwork Training</SectionTitle>
                <SectionDescription>2 days weekly practical field placements with NGOs, industrial HR units, & social defense boards.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Fieldwork schedule, individual supervisor conferences (IC), & journal submission guidelines.
                </div>
            </SectionContent>
        </Section>
    )
}
