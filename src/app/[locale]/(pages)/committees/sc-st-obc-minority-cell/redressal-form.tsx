import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function RedressalForm() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Grievance Redressal Form</SectionTitle>
                <SectionDescription>Submit confidential complaints or scholarship queries directly to the Equal Opportunity Cell officer.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Redressal form (Name, Category, Enrollment No., Mobile, Description of Issue, & Submit Button).
                </div>
            </SectionContent>
        </Section>
    )
}
