import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Campus Events & Celebrations</HeroH1>
                <HeroP>Annual cultural festival, World Social Work Day advocacy walks, inter-college sports meets, & national day celebrations.</HeroP>
            </HeroContent>
        </Hero>
    )
}
