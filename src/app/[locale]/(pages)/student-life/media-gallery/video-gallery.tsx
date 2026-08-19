import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function VideoGallery() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Student Testimonials & Event Videos</SectionTitle>
                <SectionDescription>Watch student experience videos, rural camp documentaries, & event highlight reels.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <div className="p-6 border border-dashed rounded-lg text-sm text-muted-foreground">
                    Layout: Video player cards grid with YouTube/Vimeo embed overlays & video titles.
                </div>
            </SectionContent>
        </Section>
    )
}
