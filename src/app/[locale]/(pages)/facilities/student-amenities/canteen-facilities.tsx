import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function CanteenFacilities() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Campus Canteen & Dining</SectionTitle>
                <SectionDescription>Hygienic meals, snacks, RO purified drinking water, & affordable pricing.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Canteen menu categories, hygiene inspection standards, and seating layout overview.
                </div>
            </SectionContent>
        </Section>
    )
}
