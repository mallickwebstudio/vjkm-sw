import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function CareerOutcomes() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Career Outcomes</SectionTitle>
                <SectionDescription>CSR Head, HR Manager, Medical Social Worker, Welfare Officer, & Policy Researcher roles.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Career tracks grid detailing corporate CSR packages, hospital roles, govt labor welfare exam eligibility, & Ph.D. pathways.
                </div>
            </SectionContent>
        </Section>
    )
}
