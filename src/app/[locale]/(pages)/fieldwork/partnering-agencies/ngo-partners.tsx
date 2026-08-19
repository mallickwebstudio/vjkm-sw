import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function NgoPartners() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>NGO & Voluntary Sector Partners</SectionTitle>
                <SectionDescription>Community welfare agencies, child support trusts, & rural development organizations.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Grid of partner NGO logos, working domain (child rights, women empowerment, tribal health), & student placement quota.
                </div>
            </SectionContent>
        </Section>
    )
}
