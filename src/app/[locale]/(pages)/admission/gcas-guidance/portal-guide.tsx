import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function PortalGuide() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Portal Step-by-Step Instructions</SectionTitle>
                <SectionDescription>How to fill out choices, select VJKM College Dabhoi, and generate application PDF.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Screen-by-screen guide with instructions for logging into GCAS portal and selecting VJKM BSW/MSW options.
                </div>
            </SectionContent>
        </Section>
    )
}
