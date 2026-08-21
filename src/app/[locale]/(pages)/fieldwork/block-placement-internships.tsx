import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function BlockPlacementInternships() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Block Placement Internships</SectionTitle>
                <SectionDescription>Full-term 30-day industrial & corporate CSR internships for MSW final semester students.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Corporate partner internships list, stipend norms, project evaluation, & placement offer conversion rules.
                </div>
            </SectionContent>
        </Section>
    )
}
