import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>About VJKM College</HeroH1>
                <HeroP>Shaping social work professionals through academic rigor, ethical values, and holistic development.</HeroP>
            </HeroContent>
        </Hero>
    )
}
