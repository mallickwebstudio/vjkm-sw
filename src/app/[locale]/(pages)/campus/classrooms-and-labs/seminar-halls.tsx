import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function SeminarHalls() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Audio-Visual Seminar Halls</SectionTitle>
                <SectionDescription>Air-conditioned conference spaces equipped with acoustic sound systems & video conferencing.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Seminar hall specifications grid (seating capacity 150+, surround audio, stage podium, & video streaming setup).
                </div>
            </SectionContent>
        </Section>
    )
}
