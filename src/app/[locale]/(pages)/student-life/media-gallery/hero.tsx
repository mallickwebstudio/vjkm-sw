import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Campus Photo & Video Gallery</HeroH1>
                <HeroP>Memorable moments from rural camps, cultural festivals, sports tournaments, seminars, and campus life.</HeroP>
            </HeroContent>
        </Hero>
    )
}
