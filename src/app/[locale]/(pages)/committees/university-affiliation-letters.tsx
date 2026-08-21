import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function UniversityAffiliationLetters() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>University Affiliation & Government Approvals</SectionTitle>
                <SectionDescription>Shri Govind Guru University (SGGU) affiliation letters, Gujarat Govt NOC, & AISHE certificates.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Document preview table with downloadable PDFs of university affiliation letters & Govt NOC certificates.
                </div>
            </SectionContent>
        </Section>
    )
}
