import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Scholarships & Financial Assistance</HeroH1>
                <HeroP>Digital Gujarat state scholarships, MYSY scheme guidance, and VJKM Trust merit-cum-need grants.</HeroP>
            </HeroContent>
        </Hero>
    )
}
