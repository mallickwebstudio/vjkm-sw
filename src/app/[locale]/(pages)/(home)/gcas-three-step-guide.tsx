import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function GcasThreeStepGuide() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>GCAS Admission Guide</SectionTitle>
                <SectionDescription>Simple 3-step process to apply via Gujarat Common Admission Services portal.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Step 1 (Portal Registration), Step 2 (College Selection & Counseling), Step 3 (Campus Document Verification).
                </div>
            </SectionContent>
        </Section>
    )
}
