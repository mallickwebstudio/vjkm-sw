import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function FeeStructure() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Fee Structure & Payment Modes</SectionTitle>
                <SectionDescription>Self-finance term fee breakdown, tuition, library fee, deposit, & online payment methods.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Fee table per semester for BSW & MSW, installment guidelines, bank account details, and online receipt generation.
                </div>
            </SectionContent>
        </Section>
    )
}
