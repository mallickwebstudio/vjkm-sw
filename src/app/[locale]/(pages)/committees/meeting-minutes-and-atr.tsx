import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function MeetingMinutesAndAtr() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Meeting Minutes & Action Taken Reports (ATR)</SectionTitle>
                <SectionDescription>Download official IQAC meeting minutes and semester-wise Action Taken Reports.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Downloadable PDF document table for IQAC meeting minutes & ATRs (2023-2026).
                </div>
            </SectionContent>
        </Section>
    )
}
