import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function SquadMembersAndHelplines() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Anti-Ragging Squad & Helplines</SectionTitle>
                <SectionDescription>24x7 squad helpline numbers, committee nodal officers, & police contact numbers.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Nodal officer names, mobile numbers, national anti-ragging toll-free number (1800-180-5522), & email contact cards.
                </div>
            </SectionContent>
        </Section>
    )
}
