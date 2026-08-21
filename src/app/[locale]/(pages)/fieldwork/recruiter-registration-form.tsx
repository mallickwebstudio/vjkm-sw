import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function RecruiterRegistrationForm() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Recruiter Express Interest Form</SectionTitle>
                <SectionDescription>Register your company/organization for upcoming campus recruitment drives.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Company registration form (Company Name, HR Contact, Designation, Email, Roles Offered, & Preferred Visit Dates).
                </div>
            </SectionContent>
        </Section>
    )
}
