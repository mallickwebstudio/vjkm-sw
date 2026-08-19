import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Fieldwork Practicum & Internships</HeroH1>
                <HeroP>Concurrent 2-day weekly field practice, 7-day rural immersion camp, and block placement industrial internships.</HeroP>
            </HeroContent>
        </Hero>
    )
}
