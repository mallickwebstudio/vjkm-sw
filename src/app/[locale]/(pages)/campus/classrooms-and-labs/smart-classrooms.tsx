import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function SmartClassrooms() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Smart Digital Classrooms</SectionTitle>
                <SectionDescription>Digital podiums, high-definition projection systems, ergonomic seating, & natural ventilation.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Photo gallery grid & specs table of digital teaching tools, seating capacity (70-100), and multimedia projection.
                </div>
            </SectionContent>
        </Section>
    )
}
