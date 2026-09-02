import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Heart, Home, ArrowDown, Droplet } from 'lucide-react'

export function NssOutreachSection() {
    const initiatives = [
        { icon: Droplet, title: "Blood Donation Drives", desc: "Annual voluntary blood donation camps in association with Indian Red Cross Society and Vadodara Blood Bank." },
        { icon: Home, title: "Adopted Village Development", desc: "Sustained community development, health surveys, and sanitation campaigns in VJKM adopted rural villages." },
        { icon: Heart, title: "Community Literacy & Awareness", desc: "Street plays (Nukkad Natak) on de-addiction, female literacy, environmental protection, & voting rights." }
    ];

    return (
        <div id="nss-and-social-outreach" className="scroll-mt-20">
            <Hero
                imageSrc="/images/facilities/ncc-0.webp"
                imageAlt="NSS and Community Social Outreach Activities at VJKM College"
                variant="left"
                className="flex items-center bg-slate min-h-[50vh]"
            >
                <HeroContent className="max-w-3xl">
                    <Badge variant="outline" className="h-6 bg-rose/10 text-rose border-rose/30 font-medium text-sm [&>svg]:size-3.5! mb-2">
                        <Heart />
                        Not Me But You
                    </Badge>
                    <HeroH1 className="h1 font-extrabold text-white">
                        NSS & Community Social Outreach
                    </HeroH1>
                    <HeroP className="max-w-2xl">
                        Active National Service Scheme (NSS) unit empowering students through community service, blood donation drives, and village development.
                    </HeroP>
                    <HeroCta>
                        <a href="#events-and-celebrations" className={cn(buttonVariants({ variant: "rose", size: "lg" }))}>
                            Events & Celebrations
                            <ArrowDown className="w-4 h-4 ml-1" />
                        </a>
                    </HeroCta>
                </HeroContent>
            </Hero>

            <Section className="bg-slate-muted">
                <SectionHeader align="center">
                    <SectionTitle>NSS Outreach Programs</SectionTitle>
                    <SectionDescription>Direct community engagement fostering empathy and civic responsibility.</SectionDescription>
                </SectionHeader>
                <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {initiatives.map((item, idx) => {
                        const IconComp = item.icon
                        return (
                            <Card key={idx} className="bg-card border border-border p-6 space-y-3 shadow-sm">
                                <div className="p-3 rounded-xl bg-rose/10 text-rose w-fit">
                                    <IconComp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                                <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">{item.desc}</p>
                            </Card>
                        )
                    })}
                </SectionContent>
            </Section>
        </div>
    )
}
