import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function Interactive360Viewer() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Interactive 360° Panorama Viewer</SectionTitle>
                <SectionDescription>Navigate through 360 panoramic views of academic blocks, computer center, & sports ground.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Full-width interactive 360-degree panorama iframe embed / viewer widget with location selector tabs.
                </div>
            </SectionContent>
        </Section>
    )
}
