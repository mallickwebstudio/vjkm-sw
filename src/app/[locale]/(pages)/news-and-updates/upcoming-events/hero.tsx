import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Upcoming Campus Events & Seminars</HeroH1>
                <HeroP>Register for upcoming state workshops, guest lectures, rural camps, and academic conferences.</HeroP>
            </HeroContent>
        </Hero>
    )
}
