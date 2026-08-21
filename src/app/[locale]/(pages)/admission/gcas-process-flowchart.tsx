import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function GcasProcessFlowchart() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>GCAS Process Flowchart</SectionTitle>
                <SectionDescription>Step-by-step graphical walkthrough for registering on gcasstudent.gujgov.edu.in.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: 4-Step visual flowchart (1. Online Registration &rarr; 2. College Selection &rarr; 3. Merit List &rarr; 4. Document Verification).
                </div>
            </SectionContent>
        </Section>
    )
}
