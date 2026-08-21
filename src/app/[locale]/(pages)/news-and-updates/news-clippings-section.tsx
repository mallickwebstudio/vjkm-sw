import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { Newspaper } from 'lucide-react'

export function NewsClippingsSection() {
    return (
        <Section id="news-clippings" className="bg-slate text-slate-foreground scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Press Coverage & Media Clippings</SectionTitle>
                <SectionDescription className="text-sky-muted max-w-xl">
                    VJKM College in news — press coverage of rural camps, blood donation drives, & SGGU rank holders.
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="bg-slate-800/80 border-slate-700 text-slate-100 p-6 space-y-3 shadow-md">
                    <div className="p-3 rounded-xl bg-slate-700/60 text-emerald-tone w-fit">
                        <Newspaper className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Divya Bhaskar & Sandesh Press Features</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Extensive media coverage of 7-day rural immersion camp health surveys and blood donation achievements.
                    </p>
                </Card>

                <Card className="bg-slate-800/80 border-slate-700 text-slate-100 p-6 space-y-3 shadow-md">
                    <div className="p-3 rounded-xl bg-slate-700/60 text-sky-tone w-fit">
                        <Newspaper className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">SGGU Rank Holder Highlights</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        University rank felicitation coverage of top-scoring BSW & MSW students in state newspapers.
                    </p>
                </Card>
            </SectionContent>
        </Section>
    )
}
