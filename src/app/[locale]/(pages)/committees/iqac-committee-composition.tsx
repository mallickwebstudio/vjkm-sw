import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function IqacCommitteeComposition() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>IQAC Committee Composition</SectionTitle>
                <SectionDescription>IQAC chairperson, coordinator, management representatives, & external experts.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Committee member table (Chairperson, IQAC Coordinator, Senior Administrative Officers, & Local Society Nominees).
                </div>
            </SectionContent>
        </Section>
    )
}
