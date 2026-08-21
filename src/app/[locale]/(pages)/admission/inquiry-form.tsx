import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function InquiryForm() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Submit Admission Inquiry</SectionTitle>
                <SectionDescription>Fill out the lead generation form below and our admission counselor will contact you.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Contact form (Name, Mobile Number, Course Interest BSW/MSW, Qualifying Marks, Message & Submit Button).
                </div>
            </SectionContent>
        </Section>
    )
}
