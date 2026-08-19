import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Internal Complaint Committee (POSH)</HeroH1>
                <HeroP>Gender equity, protection against sexual harassment, confidential grievance redressal, & safety for all students and staff.</HeroP>
            </HeroContent>
        </Hero>
    )
}
