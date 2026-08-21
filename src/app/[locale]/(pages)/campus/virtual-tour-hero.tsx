import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>360° Virtual Campus Tour</HeroH1>
                <HeroP>Experience an interactive virtual walkthrough of VJKM College Dabhoi classrooms, grounds, and facilities.</HeroP>
            </HeroContent>
        </Hero>
    )
}
