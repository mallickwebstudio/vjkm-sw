import React from 'react'
import { Section, SectionActions, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Button } from '@/components/ui/button'

export default function DownloadSyllabusPdf() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Download BSW Syllabus</SectionTitle>
                <SectionDescription>Get official SGGU university syllabus & course structure PDF.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground mb-4">
                    PDF document details: Complete 6-semester course structure, exam rules, & fieldwork regulations.
                </div>
            </SectionContent>
            <SectionActions>
                <Button>Download BSW Syllabus (PDF)</Button>
            </SectionActions>
        </Section>
    )
}
