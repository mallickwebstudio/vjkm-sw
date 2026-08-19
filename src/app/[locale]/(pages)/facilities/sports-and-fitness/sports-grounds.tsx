import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function SportsGrounds() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Outdoor Athletic Grounds</SectionTitle>
                <SectionDescription>Cricket turf pitch, football grounds, volleyball courts, and annual sports day meet venue.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Photo gallery grid & court dimension specs for cricket, football, kabaddi, & track events.
                </div>
            </SectionContent>
        </Section>
    )
}
