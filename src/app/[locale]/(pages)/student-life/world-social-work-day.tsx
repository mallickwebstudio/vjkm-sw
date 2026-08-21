import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function WorldSocialWorkDay() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>World Social Work Day Celebrations</SectionTitle>
                <SectionDescription>Annual advocacy walks, panel discussions with NGO leaders, & social work student poster exhibitions.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Keynote speaker highlights, student rally photo stream, & annual social work theme declaration.
                </div>
            </SectionContent>
        </Section>
    )
}
