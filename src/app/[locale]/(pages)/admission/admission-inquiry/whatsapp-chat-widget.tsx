import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function WhatsappChatWidget() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Instant WhatsApp Counseling</SectionTitle>
                <SectionDescription>Connect directly with our admission office desk on WhatsApp (+91 9409580986).</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: WhatsApp CTA card with one-click direct chat link and campus admission helpline hours.
                </div>
            </SectionContent>
        </Section>
    )
}
