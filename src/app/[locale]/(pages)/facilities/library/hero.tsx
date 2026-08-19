import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Central Information Library</HeroH1>
                <HeroP>Thousands of books, case law journals, social science research databases, and semester-long Book Bank scheme.</HeroP>
            </HeroContent>
        </Hero>
    )
}
