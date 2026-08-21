import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { Camera, Video } from 'lucide-react'

export function MediaGallerySection() {
    return (
        <Section id="media-gallery" className="bg-slate-muted scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Campus Media & Photo Highlights</SectionTitle>
                <SectionDescription>Snapshots of student activities, rural camps, cultural festivals, and field visits.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="bg-card border border-border p-6 space-y-3 shadow-sm text-center">
                    <div className="p-3 rounded-xl bg-sky/10 text-sky-tone w-fit mx-auto">
                        <Camera className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Filterable Photo Gallery</h3>
                    <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                        Explore categorized campus photo albums covering rural camps, sports meets, convocations, and fieldwork exposure visits.
                    </p>
                </Card>

                <Card className="bg-card border border-border p-6 space-y-3 shadow-sm text-center">
                    <div className="p-3 rounded-xl bg-rose/10 text-rose w-fit mx-auto">
                        <Video className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Video Testimonials & Highlights</h3>
                    <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                        Watch video documentaries of 7-day rural immersion camps and student alumni reflection stories.
                    </p>
                </Card>
            </SectionContent>
        </Section>
    )
}
