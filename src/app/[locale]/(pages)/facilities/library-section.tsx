import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BookOpen, Library, ArrowDown } from 'lucide-react'

export function LibrarySection() {
    const resources = [
        { title: "Physical Books & Reference Volumes", desc: "Over 5,000+ volumes on Social Work, Sociology, Psychology, Human Rights, Labour Laws, and Public Policy." },
        { title: "National & International Journals", desc: "Subscriptions to peer-reviewed social science journals, research monographs, and NGO field reports." },
        { title: "Book Bank Scheme", desc: "Dedicated Book Bank facility providing complete semester textbook sets to meritorious and reserved category students." }
    ];

    return (
        <div id="library" className="scroll-mt-20">
            <Hero variant="left" className="flex items-center bg-slate min-h-[50vh]">
                <HeroContent className="max-w-3xl">
                    <Badge variant="outline" className="h-6 bg-sky/10 text-sky-tone border-sky/30 font-medium text-sm [&>svg]:size-3.5! mb-2">
                        <Library />
                        Knowledge & Research Resource Center
                    </Badge>
                    <HeroH1 className="h1 font-extrabold text-white">
                        Digital & Physical Library
                    </HeroH1>
                    <HeroP className="max-w-2xl">
                        A comprehensive repository of social work literature, e-databases, research journals, and student reading halls.
                    </HeroP>
                    <HeroCta>
                        <a href="#sports-and-fitness" className={cn(buttonVariants({ variant: "sky", size: "lg" }))}>
                            Sports & Fitness
                            <ArrowDown className="w-4 h-4 ml-1" />
                        </a>
                    </HeroCta>
                </HeroContent>
            </Hero>

            <Section className="bg-slate-muted">
                <SectionHeader align="center">
                    <SectionTitle>Library Holdings & Book Bank</SectionTitle>
                    <SectionDescription>Empowering academic research and field literature exploration.</SectionDescription>
                </SectionHeader>
                <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resources.map((item, idx) => (
                        <Card key={idx} className="bg-card border border-border p-6 space-y-3 shadow-sm">
                            <div className="p-3 rounded-xl bg-sky/10 text-sky-tone w-fit">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">{item.desc}</p>
                        </Card>
                    ))}
                </SectionContent>
            </Section>
        </div>
    )
}
