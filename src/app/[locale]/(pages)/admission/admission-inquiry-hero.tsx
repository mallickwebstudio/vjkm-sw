import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Admission Inquiry Desk</HeroH1>
                <HeroP>Have questions about BSW or MSW admission, seat matrix, or GCAS registration? Get in touch with our counseling team.</HeroP>
            </HeroContent>
        </Hero>
    )
}
