import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Partnering Agencies & Affiliations</HeroH1>
                <HeroP>Collaborating with leading NGOs, corporate CSR units, and government social defense departments.</HeroP>
            </HeroContent>
        </Hero>
    )
}
