import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Placement Records & Hiring Metrics</HeroH1>
                <HeroP>Year-on-year recruitment statistics, average packages, and corporate recruiter highlights for BSW & MSW graduates.</HeroP>
            </HeroContent>
        </Hero>
    )
}
