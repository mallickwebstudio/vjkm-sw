import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function NssActivities() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>NSS Campus & Community Drives</SectionTitle>
                <SectionDescription>Blood donation camps, Swachh Bharat cleanliness drives, tree plantation, & AIDS awareness rallies.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Photo gallery grid & event summary cards of NSS volunteer drives in Dabhoi and Vadodara.
                </div>
            </SectionContent>
        </Section>
    )
}
