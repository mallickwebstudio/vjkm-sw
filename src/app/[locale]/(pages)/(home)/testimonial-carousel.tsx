import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function TestimonialCarousel() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Alumni Speaks</SectionTitle>
                <SectionDescription>Hear from our alumni working in corporate CSR, public welfare, and NGOs.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Testimonial carousel with quote cards, alumni avatar photos, designations, and current organizations.
                </div>
            </SectionContent>
        </Section>
    )
}
