import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function BookBankScheme() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Book Bank Scheme</SectionTitle>
                <SectionDescription>Semester-long textbook issuing program for deserving and SC/ST/SEBC students.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Book Bank eligibility norms, application rules, & semester book set issuance procedure.
                </div>
            </SectionContent>
        </Section>
    )
}
