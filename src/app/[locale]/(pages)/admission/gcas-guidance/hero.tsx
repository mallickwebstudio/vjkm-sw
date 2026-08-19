import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>GCAS Portal Guidance Desk</HeroH1>
                <HeroP>Step-by-step instructions for gcasstudent.gujgov.edu.in portal, document verification, and campus assistance.</HeroP>
            </HeroContent>
        </Hero>
    )
}
