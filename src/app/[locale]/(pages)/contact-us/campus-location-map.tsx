import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function CampusLocationMap() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Campus Location & Map Directions</SectionTitle>
                <SectionDescription>Interactive Google Map directions to VJKM Social Work College campus in Dabhoi.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Full-width interactive Google Maps iframe embed with driving directions from Vadodara Railway Station & Dabhoi Bus Stand.
                </div>
            </SectionContent>
        </Section>
    )
}
