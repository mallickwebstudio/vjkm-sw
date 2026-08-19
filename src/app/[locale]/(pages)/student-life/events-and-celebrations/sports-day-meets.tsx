import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function SportsDayMeets() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Annual Sports Meet & Tournaments</SectionTitle>
                <SectionDescription>Inter-class cricket league, football tournament, athletics, chess, & kabaddi championships.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Tournament winner list, championship trophy photo gallery, & individual athletic achievement medals.
                </div>
            </SectionContent>
        </Section>
    )
}
