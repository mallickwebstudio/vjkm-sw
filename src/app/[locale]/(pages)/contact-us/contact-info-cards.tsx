import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function ContactInfoCards() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Key Contacts & Address</SectionTitle>
                <SectionDescription>Official address, phone numbers, and direct contacts for principal & admin office.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Contact info cards grid (Address: VJKM Campus, Veda Road, Dabhoi, Dist. Vadodara 391110; Phone: +91 9409580986; WhatsApp Desk).
                </div>
            </SectionContent>
        </Section>
    )
}
