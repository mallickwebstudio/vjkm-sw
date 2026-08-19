import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function FilterableNoticesTable() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Notices & Circulars Table</SectionTitle>
                <SectionDescription>Filter circulars by category: Academic, Examination, Admission, & Administrative.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Filterable table (Date, Notice Title, Category Tag, & PDF Download Button).
                </div>
            </SectionContent>
        </Section>
    )
}
