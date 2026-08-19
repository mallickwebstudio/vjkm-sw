import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function StudentPlacementOfficers() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Faculty & Student Placement Committee</SectionTitle>
                <SectionDescription>Placement officer contact details, faculty coordinators, & student coordinators roster.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Contact cards of TPO head, faculty advisors, & student coordinators for recruitment queries.
                </div>
            </SectionContent>
        </Section>
    )
}
