import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function SyllabusOutline() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Syllabus & Curriculum Outline</SectionTitle>
                <SectionDescription>Semester-wise subjects, core social work theory, and civil-services aligned modules.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Accordion listing Semesters 1 to 6 subject names, credit distribution, and exam mark breakdowns.
                </div>
            </SectionContent>
        </Section>
    )
}
