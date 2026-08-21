import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function AntiRaggingPolicy() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>UGC Anti-Ragging Policy & Mandate</SectionTitle>
                <SectionDescription>Statutory zero-tolerance guidelines, penal consequences, & campus disciplinary measures.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: UGC regulation summary, definition of prohibited activities, & legal consequences overview.
                </div>
            </SectionContent>
        </Section>
    )
}
