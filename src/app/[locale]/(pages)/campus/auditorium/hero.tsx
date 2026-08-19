import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Central Auditorium</HeroH1>
                <HeroP>State-of-the-art auditorium for annual cultural fests, academic convocations, seminars, and public lectures.</HeroP>
            </HeroContent>
        </Hero>
    )
}
