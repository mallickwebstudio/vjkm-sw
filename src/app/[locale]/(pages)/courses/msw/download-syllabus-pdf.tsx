import React from 'react'
import { Section, SectionActions, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Button } from '@/components/ui/button'

export default function DownloadSyllabusPdf() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Download MSW Syllabus</SectionTitle>
                <SectionDescription>Get official SGGU university postgraduate MSW curriculum PDF.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground mb-4">
                    PDF document details: Complete 4-semester specialization breakdown, dissertation rules, & block placement guidelines.
                </div>
            </SectionContent>
            <SectionActions>
                <Button>Download MSW Syllabus (PDF)</Button>
            </SectionActions>
        </Section>
    )
}
