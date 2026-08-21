import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>SC / ST / OBC & Minority Cell</HeroH1>
                <HeroP>Promoting equal opportunity, social inclusion, scholarship assistance, & grievance redressal for marginalized communities.</HeroP>
            </HeroContent>
        </Hero>
    )
}
