import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function EcoClub() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Nature & Eco Club</SectionTitle>
                <SectionDescription>Tree plantation, plastic ban advocacy, rainwater harvesting awareness, & campus biodiversity preservation.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Green campus initiatives, waste management projects, & World Environment Day events.
                </div>
            </SectionContent>
        </Section>
    )
}
