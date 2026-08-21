import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function PublicInformationOfficerDetails() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Public Information Officer (PIO) Details</SectionTitle>
                <SectionDescription>Designated Public Information Officer (PIO) and Appellate Authority contact details under RTI Act 2005.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Contact card detailing PIO Name, Designation, Office Address, Phone Number, & Appellate Officer contact.
                </div>
            </SectionContent>
        </Section>
    )
}
