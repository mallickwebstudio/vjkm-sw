import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function SemesterTimelineTable() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Semester Timeline</SectionTitle>
                <SectionDescription>Term commencement, mid-term break, and term-end schedule for BSW & MSW.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Table listing Semester (Odd/Even), Term Commencement Date, Mid-term Break, & Term Conclusion.
                </div>
            </SectionContent>
        </Section>
    )
}
