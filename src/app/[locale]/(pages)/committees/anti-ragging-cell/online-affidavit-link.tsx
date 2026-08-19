import React from 'react'
import { Section, SectionActions, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Button } from '@/components/ui/button'

export default function OnlineAffidavitLink() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Mandatory Online Anti-Ragging Affidavit</SectionTitle>
                <SectionDescription>Submit mandatory student & parent anti-ragging undertaking online via antiragging.in.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground mb-4">
                    Instructions: Every student & parent must complete the online affidavit during admission confirmation.
                </div>
            </SectionContent>
            <SectionActions>
                <Button>Fill Online Anti-Ragging Undertaking →</Button>
            </SectionActions>
        </Section>
    )
}
