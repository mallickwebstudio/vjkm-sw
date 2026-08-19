import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function TransportGuidance() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Transport & Transit Guidance</SectionTitle>
                <SectionDescription>GSCRT bus connectivity from Vadodara, Bodeli, & Karjan to Dabhoi campus.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Bus routes guide, student pass assistance desk details, and nearest railway station connectivity.
                </div>
            </SectionContent>
        </Section>
    )
}
