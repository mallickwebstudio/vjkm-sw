import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Student Clubs & Interest Circles</HeroH1>
                <HeroP>Co-curricular student bodies promoting cultural arts, debate & civil service prep, and environmental sustainability.</HeroP>
            </HeroContent>
        </Hero>
    )
}
