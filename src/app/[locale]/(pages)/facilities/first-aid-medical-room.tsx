import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function FirstAidMedicalRoom() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>First Aid & Medical Room</SectionTitle>
                <SectionDescription>Emergency medical kit, resting beds, doctor-on-call, & hospital tie-ups.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Emergency contact helpline, basic first-aid equipment list, and Dabhoi civil hospital tie-up info.
                </div>
            </SectionContent>
        </Section>
    )
}
