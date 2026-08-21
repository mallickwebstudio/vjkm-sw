import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ShieldAlert, PhoneCall, ExternalLink, FileCheck } from 'lucide-react'

export function AntiRaggingSection() {
    return (
        <Section id="anti-ragging-cell" className="scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Anti-Ragging Committee & Helplines</SectionTitle>
                <SectionDescription>Statutory zero-tolerance guidelines, anti-ragging squad helplines, and UGC affidavit mandate.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card border border-border shadow-sm p-6 space-y-3">
                    <div className="p-3 rounded-xl bg-rose/10 text-rose w-fit">
                        <ShieldAlert className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Zero Tolerance Policy</h3>
                    <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                        Strict implementation of UGC directives. Ragging in any form is prohibited across campus and hostel premises with strict penal actions.
                    </p>
                </Card>

                <Card className="bg-card border border-border shadow-sm p-6 space-y-3">
                    <div className="p-3 rounded-xl bg-sky/10 text-sky-tone w-fit">
                        <PhoneCall className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Squad Helplines</h3>
                    <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                        24x7 Anti-Ragging Helpline desk and squad monitoring. Direct contact numbers for Principal, Convener, and Police Liaison Officer.
                    </p>
                </Card>

                <Card className="bg-card border border-border shadow-sm p-6 space-y-3 flex flex-col justify-between">
                    <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-emerald/10 text-emerald-tone w-fit">
                            <FileCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">UGC Online Affidavit</h3>
                        <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                            All admitted BSW & MSW students must submit the online anti-ragging undertaking at antiragging.in.
                        </p>
                    </div>
                    <a
                        href="https://www.antiragging.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-2 w-full justify-center")}
                    >
                        Submit Online Affidavit
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                </Card>
            </SectionContent>
        </Section>
    )
}
