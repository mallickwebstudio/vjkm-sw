import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function ContactInquiryForm() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Send Us a Message</SectionTitle>
                <SectionDescription>Have a general query? Send us a message and our administrative team will respond promptly.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: General contact form (Full Name, Email, Phone, Inquiry Subject Dropdown, Message Textarea, & Submit Button).
                </div>
            </SectionContent>
        </Section>
    )
}
