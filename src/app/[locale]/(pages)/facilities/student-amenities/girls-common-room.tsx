import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function GirlsCommonRoom() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Girls Common Room</SectionTitle>
                <SectionDescription>Safe, comfortable recreation and rest zone equipped with sanitary vending facilities.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Amenities list, seating lounge details, attached washrooms, and safety measures.
                </div>
            </SectionContent>
        </Section>
    )
}
