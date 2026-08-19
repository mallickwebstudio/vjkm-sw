import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function PrincipalMessage() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Principal's Message</SectionTitle>
                <SectionDescription>Vision, pedagogy, and leadership message from the College Principal.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Principal photo, message text quote, educational philosophy, and signature block.
                </div>
            </SectionContent>
        </Section>
    )
}
