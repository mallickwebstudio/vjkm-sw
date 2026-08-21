import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function TrustScholarships() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>VJKM Trust Scholarships</SectionTitle>
                <SectionDescription>Merit-cum-need trust grants for deserving students from rural and economically weaker backgrounds.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Trust scholarship application process, interview evaluation criteria, and award amount details.
                </div>
            </SectionContent>
        </Section>
    )
}
