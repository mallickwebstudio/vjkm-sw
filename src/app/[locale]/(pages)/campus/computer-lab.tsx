import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function ComputerLab() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Computer & IT Center</SectionTitle>
                <SectionDescription>High-speed internet workstations, statistical analytical software, & GCAS form assistance.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Feature cards detailing computer lab capacity, software tools (SPSS, MS Office, Research databases), & lab hours.
                </div>
            </SectionContent>
        </Section>
    )
}
