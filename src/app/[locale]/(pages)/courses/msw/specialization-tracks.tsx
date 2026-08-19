import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function SpecializationTracks() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Specialization Tracks</SectionTitle>
                <SectionDescription>Choose from HR/IR, Medical & Psychiatric Social Work (MPSW), and Community Development (CD).</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: 3-Column card grid detailing course modules, industrial safety compliance, hospital training, & NGO management.
                </div>
            </SectionContent>
        </Section>
    )
}
