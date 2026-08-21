import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function TopRecruitersGallery() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Top Corporate & NGO Recruiters</SectionTitle>
                <SectionDescription>Major corporate CSR divisions, hospitals, & international NGOs recruiting from VJKM.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Logo wall grid of corporate & NGO recruiters with student hire counts.
                </div>
            </SectionContent>
        </Section>
    )
}
