import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function FacultyDirectory() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Faculty Directory</SectionTitle>
                <SectionDescription>Filterable directory of MSW, BSW, Commerce professors, and research scholars.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Filterable card grid by department (MSW, BSW, Ph.D. scholars) with photo, qualification, and contact mail.
                </div>
            </SectionContent>
        </Section>
    )
}
