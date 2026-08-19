import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function RecentUpdatesFeed() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Campus Events & News</SectionTitle>
                <SectionDescription>Highlights from recent rural immersion camps, seminars, and cultural meets.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: 3-Column news & event cards with dates, image previews, and read-more links.
                </div>
            </SectionContent>
        </Section>
    )
}
