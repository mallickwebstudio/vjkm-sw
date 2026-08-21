import React from 'react'
import { Section, SectionActions, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Button } from '@/components/ui/button'

export default function BatchDemographicsBrochure() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Batch Demographics & Placement Brochure</SectionTitle>
                <SectionDescription>Student specialization mapping (HR/IR, MPSW, CD), skill metrics, & downloadable placement brochure.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground mb-4">
                    Layout: Batch demographics charts (gender ratio, specialization split, work experience) & placement brochure PDF download.
                </div>
            </SectionContent>
            <SectionActions>
                <Button>Download Placement Brochure (PDF)</Button>
            </SectionActions>
        </Section>
    )
}
