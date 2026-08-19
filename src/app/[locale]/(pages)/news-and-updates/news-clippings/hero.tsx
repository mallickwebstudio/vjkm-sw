import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Media Coverage & News Clippings</HeroH1>
                <HeroP>Newspaper press releases, university magazine feature articles, & media coverage of college milestones.</HeroP>
            </HeroContent>
        </Hero>
    )
}
