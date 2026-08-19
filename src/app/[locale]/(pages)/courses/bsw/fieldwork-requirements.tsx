import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function FieldworkRequirements() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Fieldwork Requirements</SectionTitle>
                <SectionDescription>Weekly concurrent agency visits and mandatory 7-day rural immersion camp.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Fieldwork hours grid, journal documentation rules, and agency supervisor evaluation criteria.
                </div>
            </SectionContent>
        </Section>
    )
}
