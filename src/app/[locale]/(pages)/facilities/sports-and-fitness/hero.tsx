import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Sports Turf & Fitness Gym</HeroH1>
                <HeroP>Cricket turf, football grounds, indoor badminton, strength training gym, and yoga wellness center.</HeroP>
            </HeroContent>
        </Hero>
    )
}
