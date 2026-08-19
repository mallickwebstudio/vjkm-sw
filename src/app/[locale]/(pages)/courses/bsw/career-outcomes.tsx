import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function CareerOutcomes() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Career Outcomes</SectionTitle>
                <SectionDescription>Community outreach worker, CSR trainee, development coordinator, and NGO officer roles.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Career scope grid detailing job roles, higher education MSW path, and public sector opportunities.
                </div>
            </SectionContent>
        </Section>
    )
}
