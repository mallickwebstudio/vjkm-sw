import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>About VJKM Trust</HeroH1>
                <HeroP>Vadodara Jilla Kelavani Mandal trust profile, board of trustees, and community service legacy since 1957.</HeroP>
            </HeroContent>
        </Hero>
    )
}
