import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Classrooms, Labs & Seminar Halls</HeroH1>
                <HeroP>Smart digital podium classrooms, high-performance analytical computer lab, and audio-visual conference halls.</HeroP>
            </HeroContent>
        </Hero>
    )
}
