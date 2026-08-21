import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Eye, ArrowDown, ExternalLink } from 'lucide-react'

export function VirtualTourSection() {
    return (
        <div id="virtual-tour" className="scroll-mt-20">
            <Hero variant="left" className="flex items-center bg-slate min-h-[50vh]">
                <HeroContent className="max-w-3xl">
                    <Badge variant="outline" className="h-6 bg-sky/10 text-sky-tone border-sky/30 font-medium text-sm [&>svg]:size-3.5! mb-2">
                        <Eye />
                        Interactive Experience
                    </Badge>
                    <HeroH1 className="h1 font-extrabold text-white">
                        360° Virtual Campus Tour
                    </HeroH1>
                    <HeroP className="max-w-2xl">
                        Take an immersive virtual walkthrough of VJKM College campus, including smart classrooms, computer laboratories, library, and athletic grounds.
                    </HeroP>
                    <HeroCta>
                        <a
                            href="#classrooms-and-labs"
                            className={cn(buttonVariants({ variant: "sky", size: "lg" }))}
                        >
                            Explore Infrastructure
                            <ArrowDown className="w-4 h-4 ml-1" />
                        </a>
                    </HeroCta>
                </HeroContent>
            </Hero>

            <Section className="bg-slate-muted">
                <SectionHeader align="center">
                    <SectionTitle>Interactive Campus Walkthrough</SectionTitle>
                    <SectionDescription>Navigate through key academic spaces and modern campus infrastructure.</SectionDescription>
                </SectionHeader>
                <SectionContent>
                    <div className="p-8 border border-border bg-card rounded-2xl text-center space-y-4 shadow-sm">
                        <div className="p-4 rounded-xl bg-sky/10 text-sky-tone w-fit mx-auto">
                            <Eye className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Interactive 360° Campus Viewer</h3>
                        <p className="text-sm text-slate-tone max-w-xl mx-auto">
                            Explore high-definition 360° panoramic views of our smart classrooms, computer laboratory, central library, and auditorium.
                        </p>
                        <button className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-2")}>
                            Launch 360° Panorama Viewer
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </SectionContent>
            </Section>
        </div>
    )
}
