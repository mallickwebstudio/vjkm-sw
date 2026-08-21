import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function YogaAndWellnessCenter() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Yoga & Mindfulness Center</SectionTitle>
                <SectionDescription>Dedicated hall for daily yoga sessions, meditation, International Yoga Day, & respiration workshops.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Yoga hall features, certified instructor details, and mental wellness session timings.
                </div>
            </SectionContent>
        </Section>
    )
}
