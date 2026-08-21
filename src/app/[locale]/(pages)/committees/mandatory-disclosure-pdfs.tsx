import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function MandatoryDisclosurePdfs() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Mandatory Institutional Disclosures</SectionTitle>
                <SectionDescription>Annual compliance reports, audit statements, & UGC mandatory disclosure documents.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: PDF download links for annual financial disclosures, infrastructure reports, & staff strength lists.
                </div>
            </SectionContent>
        </Section>
    )
}
