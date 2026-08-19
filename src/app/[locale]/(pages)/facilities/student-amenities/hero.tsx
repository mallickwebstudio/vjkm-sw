import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Student Campus Amenities</HeroH1>
                <HeroP>Girls common room, hygienic RO canteen, first aid medical room, and bus transport connectivity.</HeroP>
            </HeroContent>
        </Hero>
    )
}
