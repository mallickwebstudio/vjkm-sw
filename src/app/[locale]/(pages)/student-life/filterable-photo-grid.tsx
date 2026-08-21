import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function FilterablePhotoGrid() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Filterable Photo Gallery</SectionTitle>
                <SectionDescription>Filter photos by category: Rural Camps, Sports, Seminars, Cultural Fest, & Campus.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Category tab filters (All, Rural Camps, Sports, Cultural, Seminars) with responsive image lightbox grid.
                </div>
            </SectionContent>
        </Section>
    )
}
