import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Right to Information (RTI) & Mandatory Disclosures</HeroH1>
                <HeroP>Public Information Officer (PIO) details, university affiliation letters, & mandatory institutional disclosures.</HeroP>
            </HeroContent>
        </Hero>
    )
}
