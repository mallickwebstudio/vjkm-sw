import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function DocumentChecklist() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Mandatory Document Checklist</SectionTitle>
                <SectionDescription>10th/12th marksheets, graduation degree, caste certificate, LC, and domicile requirements.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Checklist cards detailing original + 2 self-attested photocopies of all required certificates.
                </div>
            </SectionContent>
        </Section>
    )
}
