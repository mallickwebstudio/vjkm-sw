import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP } from '@/components/section/hero'

export default function HeroSection() {
    return (
        <Hero variant="left">
            <HeroContent>
                <HeroH1>Academic Calendar & Exam Schedules</HeroH1>
                <HeroP>Semester term start/end dates, internal assessment submissions, and SGGU university examination timetables.</HeroP>
            </HeroContent>
        </Hero>
    )
}
