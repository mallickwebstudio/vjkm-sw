import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function CorporateCsrUnits() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Corporate CSR & Industrial Partners</SectionTitle>
                <SectionDescription>Industrial safety divisions, HR departments, & CSR foundations across Gujarat.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Partner corporate foundation cards (L&T, Reliance Foundation, Gujarat Gas, Alembic) & industrial training projects.
                </div>
            </SectionContent>
        </Section>
    )
}
