import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Governing Bodies & Administrative Panels</HeroH1>
                <HeroP>Meet the Board of Governors, College Development Committee (CDC), and Academic Council driving institutional growth.</HeroP>
            </HeroContent>
        </Hero>
    )
}
