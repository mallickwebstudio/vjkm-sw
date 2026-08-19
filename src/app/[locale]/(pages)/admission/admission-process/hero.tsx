import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Admission Process & Guidelines</HeroH1>
                <HeroP>Step-by-step GCAS application walkthrough, eligibility matrix, seat quotas, and self-finance fee structure.</HeroP>
            </HeroContent>
        </Hero>
    )
}
