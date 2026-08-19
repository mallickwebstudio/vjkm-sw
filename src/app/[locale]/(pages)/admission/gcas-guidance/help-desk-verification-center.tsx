import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function HelpDeskVerificationCenter() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Campus Help Desk & Verification Center</SectionTitle>
                <SectionDescription>Visit our Dabhoi campus help desk for free online form filling and document verification.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Campus office hours (Mon-Sat 9:00 AM - 2:00 PM), help desk helpline numbers, and computer lab assistance info.
                </div>
            </SectionContent>
        </Section>
    )
}
