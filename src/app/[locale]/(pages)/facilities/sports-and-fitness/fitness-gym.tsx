import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function FitnessGym() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Campus Fitness Gym</SectionTitle>
                <SectionDescription>Modern strength conditioning equipment, dumbbells, treadmills, & trainer assistance.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Gym equipment list, separate timing for boys and girls, and physical fitness trainer details.
                </div>
            </SectionContent>
        </Section>
    )
}
