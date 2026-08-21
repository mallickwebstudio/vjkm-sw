import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function IccMandate() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>POSH Mandate & Statutory Policy</SectionTitle>
                <SectionDescription>Compliance with UGC Prevention, Prohibition and Redressal of Sexual Harassment Regulations.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Key objectives, presiding officer contact, external NGO member details, & gender sensitization workshops.
                </div>
            </SectionContent>
        </Section>
    )
}
