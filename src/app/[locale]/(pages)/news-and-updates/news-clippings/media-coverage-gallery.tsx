import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function MediaCoverageGallery() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Press & Newspaper Clippings Gallery</SectionTitle>
                <SectionDescription>Print media coverage, Sandesh, Divya Bhaskar, & Gujarat Samachar press releases.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Newspaper clipping image cards with zoomable lightbox and publication date captions.
                </div>
            </SectionContent>
        </Section>
    )
}
