import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function AgencyVisits() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Orientation Agency Visits</SectionTitle>
                <SectionDescription>Institutional exposure visits to correctional homes, hospitals, industrial factories, & NGOs.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Agency visit highlights grid, organizational structure learning, & student report presentation guidelines.
                </div>
            </SectionContent>
        </Section>
    )
}
