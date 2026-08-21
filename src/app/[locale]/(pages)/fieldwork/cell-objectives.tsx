import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function CellObjectives() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Placement Cell Objectives</SectionTitle>
                <SectionDescription>Soft skill development, resume writing workshops, mock interviews, & campus recruitment drives.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Key objectives list, corporate training modules, & career counseling framework.
                </div>
            </SectionContent>
        </Section>
    )
}
