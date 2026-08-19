import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function OfficialEmailAddresses() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Official Directory & Email Desks</SectionTitle>
                <SectionDescription>Direct department emails for general inquiry, admissions, placement cell, & IQAC.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Department email table (General Info, Admission Cell, Placement Cell, IQAC Cell, & Principal Office).
                </div>
            </SectionContent>
        </Section>
    )
}
