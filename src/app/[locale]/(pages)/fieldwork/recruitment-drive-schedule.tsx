import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function RecruitmentDriveSchedule() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Recruitment Drive Schedule</SectionTitle>
                <SectionDescription>Upcoming visiting windows for CSR companies, NGOs, & HR recruiters.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Schedule table listing recruiter visiting dates, eligibility criteria, & registration deadlines.
                </div>
            </SectionContent>
        </Section>
    )
}
