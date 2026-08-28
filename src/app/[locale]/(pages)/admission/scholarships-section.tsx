import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { Award, Landmark, Heart } from 'lucide-react'

import { siteConfig } from '@/lib/metadata'

export function ScholarshipsSection() {
    const schemes = [
        { icon: Landmark, title: "Digital Gujarat Portal Schemes", desc: "Full post-matric scholarship and freeship card assistance for SC, ST, SEBC, and EBC category students." },
        { icon: Award, title: "MYSY Scheme (Chief Minister Scholarship)", desc: "Financial assistance for meritorious students under Mukhyamantri Yuva Swavalamban Yojana." },
        { icon: Heart, title: "VJKM Trust Financial Support", desc: `Special fee concessions and emergency financial aid granted by ${siteConfig.trustName.en}.` }
    ];

    return (
        <Section id="scholarship-and-financial-aid" className="bg-slate text-slate-foreground scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Scholarships & Financial Aid</SectionTitle>
                <SectionDescription>
                    Ensuring higher education remains accessible to all deserving social work aspirants.
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {schemes.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-slate-800/80 border-slate-700 text-slate-100 p-6 space-y-3 shadow-md">
                            <div className="p-3 rounded-xl bg-slate-700/60 text-emerald-tone w-fit">
                                <IconComp className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
