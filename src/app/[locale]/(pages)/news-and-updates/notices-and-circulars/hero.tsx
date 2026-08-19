import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Notices & Circulars</HeroH1>
                <HeroP>Official academic notifications, examination timetables, GCAS cutoff announcements, & administrative circulars.</HeroP>
            </HeroContent>
        </Hero>
    )
}
