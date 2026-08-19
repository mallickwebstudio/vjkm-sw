import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function AboutSnapshot() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>About VJKM Trust</SectionTitle>
                <SectionDescription>Vadodara Jilla Kelavani Mandal trust legacy since 1957, mission, and core values.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Two-column grid featuring trust history timeline snippet, founding mission statement, and leadership values.
                </div>
            </SectionContent>
        </Section>
    )
}
