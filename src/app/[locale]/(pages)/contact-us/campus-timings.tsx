import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function CampusTimings() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Office & Visiting Hours</SectionTitle>
                <SectionDescription>Administrative working hours, principal meeting times, & Sunday/holiday schedule.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Working hours card (Mon-Sat 9:00 AM to 4:00 PM; Admission Helpdesk 9:00 AM to 2:00 PM; Closed on 2nd & 4th Saturdays/Public Holidays).
                </div>
            </SectionContent>
        </Section>
    )
}
