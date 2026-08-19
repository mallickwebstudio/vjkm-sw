import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function BoardOfTrustees() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Board of Trustees</SectionTitle>
                <SectionDescription>Meet the President, Vice-President, Secretary, and members of VJKM trust.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Grid of trustee profiles with photos, designations, messages, and contact desk references.
                </div>
            </SectionContent>
        </Section>
    )
}
