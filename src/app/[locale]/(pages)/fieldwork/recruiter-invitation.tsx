import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function RecruiterInvitation() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Dean&apos;s Recruiter Invitation</SectionTitle>
                <SectionDescription>Institutional pitch detailing candidate rigor, field practicum training, & HR competencies.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Message letter from Dean/TPO Head highlighting BSW & MSW batch strengths and placement infrastructure.
                </div>
            </SectionContent>
        </Section>
    )
}
