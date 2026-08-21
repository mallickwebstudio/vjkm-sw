import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function GrievanceFilingProcedure() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Confidential Grievance Filing Procedure</SectionTitle>
                <SectionDescription>Step-by-step procedure to submit a confidential written complaint or email to the Presiding Officer.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: 3-Step complaint submission process, timeline for inquiry, & strict confidentiality guarantee.
                </div>
            </SectionContent>
        </Section>
    )
}
