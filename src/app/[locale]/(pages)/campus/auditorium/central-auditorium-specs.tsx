import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function CentralAuditoriumSpecs() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Auditorium Specifications & Facilities</SectionTitle>
                <SectionDescription>Seating capacity, stage dimensions, acoustic paneling, and green room amenities.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Specifications card grid (500+ seating capacity, proscenium stage, digital sound system, & air conditioning).
                </div>
            </SectionContent>
        </Section>
    )
}
