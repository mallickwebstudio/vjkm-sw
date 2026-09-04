import React from 'react'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Briefcase, Building2, TreePine, ArrowDown } from 'lucide-react'

export function FieldworkPracticumSection() {
    const components = [
        { icon: Building2, title: "Concurrent Fieldwork (Weekly)", desc: "2 days per week assigned field practicum at partner NGOs, hospitals, CSR foundations, and government social defense agencies." },
        { icon: TreePine, title: "7-Day Rural Immersion Camp", desc: "Mandatory 7-day rural stay camp focusing on PRA techniques, village surveys, sanitation awareness, and rural community engagement." },
        { icon: Briefcase, title: "Block Placement Internships", desc: "1-month intensive block placement for final-year MSW students with corporate HR departments, hospital psychiatric wards, or INGOs." }
    ];

    return (
        <div id="fieldwork-practicum" className="scroll-mt-20">
            <Hero
                imageSrc="/images/facilities/yoga-1.webp"
                imageAlt="Fieldwork Practicum and Rural Exposure at VJKM College"
                variant="left"
                className="flex items-center bg-slate min-h-[50vh]"
            >
                <HeroContent className="max-w-3xl">
                    <HeroH1 className="h1 font-extrabold text-white">
                        Fieldwork Practicum & Rural Camps
                    </HeroH1>
                    <HeroP className="max-w-2xl">
                        The core pillar of BSW and MSW education — integrating classroom social work theory with hands-on community practice.
                    </HeroP>
                    <HeroCta>
                        <a href="#field-practicum-components" className={cn(buttonVariants({ variant: "emerald", size: "lg" }))}>
                            Field Practicum Components
                            <ArrowDown className="w-4 h-4 ml-1" />
                        </a>
                    </HeroCta>
                </HeroContent>
            </Hero>

            <Section id="field-practicum-components" className="bg-slate-muted scroll-mt-20">
                <SectionHeader align="center">
                    <SectionTitle>Field Practicum Components</SectionTitle>
                    <SectionDescription>Comprehensive practical exposure structured across all semesters.</SectionDescription>
                </SectionHeader>
                <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {components.map((item, idx) => {
                        const IconComp = item.icon
                        return (
                            <Card key={idx} className="bg-card border border-border p-6 space-y-3 shadow-sm">
                                <div className="p-3 rounded-xl bg-emerald/10 text-emerald-tone w-fit">
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
