import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>NSS & Social Outreach</HeroH1>
                <HeroP>National Service Scheme (NSS) unit activities, blood donation drives, health awareness, & adopted village work.</HeroP>
            </HeroContent>
        </Hero>
    )
}
