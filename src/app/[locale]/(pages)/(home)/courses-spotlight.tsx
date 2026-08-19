import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function CoursesSpotlight() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Academic Programs</SectionTitle>
                <SectionDescription>Key highlights of Bachelor of Social Work (BSW) & Master of Social Work (MSW) degree tracks.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: 2-Column course highlight cards detailing BSW (70 seats) & MSW (200 seats), duration, eligibility, & curriculum.
                </div>
            </SectionContent>
        </Section>
    )
}
