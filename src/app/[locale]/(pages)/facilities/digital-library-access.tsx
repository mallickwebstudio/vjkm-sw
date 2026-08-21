import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function DigitalLibraryAccess() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>E-Library & Digital Database Access</SectionTitle>
                <SectionDescription>High-speed internet workstations with e-journal portals, N-LIST, & e-ShodhSindhu logins.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Digital library features card grid (OPAC search, e-book reader terminals, remote login access, & photocopying).
                </div>
            </SectionContent>
        </Section>
    )
}
