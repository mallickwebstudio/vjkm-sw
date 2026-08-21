import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function AdmissionFaqAccordion() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Frequently Asked Questions (FAQs)</SectionTitle>
                <SectionDescription>Common queries regarding GCAS registration, fees, document verification, & hostel assistance.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Accordion listing FAQs on GCAS cutoff, fee refund rules, hostel transport connectivity, & scholarship eligibility.
                </div>
            </SectionContent>
        </Section>
    )
}
