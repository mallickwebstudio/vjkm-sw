import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function SeatMatrix() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Seat Matrix & Reservation Quotas</SectionTitle>
                <SectionDescription>Total seat intake and Gujarat state reservation quota breakdown for BSW (70) and MSW (200).</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Category-wise seat distribution table (General, SC, ST, SEBC/OBC, EWS, Physically Handicapped).
                </div>
            </SectionContent>
        </Section>
    )
}
