import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function DigitalGujaratScholarships() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Digital Gujarat State Scholarships</SectionTitle>
                <SectionDescription>Post-matric scholarship schemes for SC, ST, SEBC/OBC, EWS, & minority students.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Scholarship categories grid, income limit criteria, portal link, & online application deadlines.
                </div>
            </SectionContent>
        </Section>
    )
}
