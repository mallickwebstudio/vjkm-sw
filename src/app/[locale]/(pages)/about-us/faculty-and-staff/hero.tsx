import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Faculty & Administrative Staff</HeroH1>
                <HeroP>Meet our distinguished educators, social work researchers, NGO consultants, and technical support staff.</HeroP>
            </HeroContent>
        </Hero>
    )
}
