import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function CampusAmenitiesPreview() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Campus Infrastructure</SectionTitle>
                <SectionDescription>Smart classrooms, computer lab, library, sports grounds, and student amenities.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: 4-Card grid showcasing smart classrooms, central library, sports turf, and girls common room.
                </div>
            </SectionContent>
        </Section>
    )
}
