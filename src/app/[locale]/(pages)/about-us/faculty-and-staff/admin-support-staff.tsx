import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function AdminSupportStaff() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Administrative & Support Staff</SectionTitle>
                <SectionDescription>Office administration, accounts desk, IT support, and campus management team.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Team cards listing office superintendent, accounts officer, librarian, and IT support head.
                </div>
            </SectionContent>
        </Section>
    )
}
