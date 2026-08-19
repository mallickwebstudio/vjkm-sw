import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Internal Quality Assurance Cell (IQAC)</HeroH1>
                <HeroP>Promoting continuous institutional quality enhancement, academic audits, and transparent Action Taken Reports (ATRs).</HeroP>
            </HeroContent>
        </Hero>
    )
}
