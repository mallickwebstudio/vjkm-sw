import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Training & Placement Cell</HeroH1>
                <HeroP>Bridging social work graduates with corporate CSR foundations, NGOs, hospitals, and HR divisions.</HeroP>
            </HeroContent>
        </Hero>
    )
}
