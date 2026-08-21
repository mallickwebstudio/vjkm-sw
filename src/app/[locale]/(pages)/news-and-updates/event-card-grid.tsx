import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function EventCardGrid() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Upcoming Event Calendar</SectionTitle>
                <SectionDescription>View details, guest speaker profiles, & registration links for scheduled events.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: 3-Column event card grid with event banner image, date badge, venue, description, & RSVP button.
                </div>
            </SectionContent>
        </Section>
    )
}
