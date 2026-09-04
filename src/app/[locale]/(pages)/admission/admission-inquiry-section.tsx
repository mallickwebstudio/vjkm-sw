import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MessageSquare, PhoneCall, Send } from 'lucide-react'
import { siteConfig } from '@/lib/metadata'
import { formatPhoneHref } from '@/lib/format'

export function AdmissionInquirySection() {
    return (
        <Section id="admission-inquiry" className="bg-slate-muted scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Admission Inquiry & Helpdesk</SectionTitle>
                <SectionDescription>Connect directly with our admission counselors for GCAS portal guidance, direct Self-Finance seats, and document verification.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="bg-card border border-border p-6 space-y-4 shadow-sm flex flex-col justify-between">
                    <div className="space-y-4">
                        <div className="p-3 rounded-xl bg-emerald/10 text-emerald-tone w-fit">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">WhatsApp Instant Helpdesk</h3>
                        <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                            Chat live with our admission coordinators for instant answers regarding GCAS college choice code, Direct Self-Finance admissions, fee structure, and document verification.
                        </p>
                    </div>
                    <a
                        href={siteConfig.links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "emerald", size: "lg" }), "w-full justify-center")}
                    >
                        Chat on WhatsApp
                        <Send className="w-4 h-4 ml-2" />
                    </a>
                </Card>

                <Card className="bg-card border border-border p-6 space-y-4 shadow-sm flex flex-col justify-between">
                    <div className="space-y-4">
                        <div className="p-3 rounded-xl bg-sky/10 text-sky-tone w-fit">
                            <PhoneCall className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Campus Helpdesk Contact</h3>
                        <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                            Visit VJKM College Campus Admission Desk or call our course helpline officers directly during office hours (10:00 AM to 5:00 PM).
                        </p>
                    </div>

                    <div className="space-y-2.5 pt-2">
                        <a
                            href={siteConfig.links.bswPhone}
                            className={cn(buttonVariants({ variant: "sky", size: "default" }), "w-full justify-between px-4")}
                        >
                            <span className="font-semibold flex items-center gap-2 text-xs sm:text-sm">
                                <PhoneCall className="w-4 h-4 shrink-0" />
                                BSW Helpline
                            </span>
                            <span className="text-xs font-mono opacity-95">
                                {formatPhoneHref(siteConfig.links.bswPhone)}
                            </span>
                        </a>

                        <a
                            href={siteConfig.links.mswPhone}
                            className={cn(buttonVariants({ variant: "outline", size: "default" }), "w-full justify-between px-4 border-sky/30 hover:bg-sky/10 text-foreground")}
                        >
                            <span className="font-semibold flex items-center gap-2 text-xs sm:text-sm">
                                <PhoneCall className="w-4 h-4 shrink-0 text-sky-tone" />
                                MSW Helpline
                            </span>
                            <span className="text-xs font-mono text-muted-foreground">
                                {formatPhoneHref(siteConfig.links.mswPhone)}
                            </span>
                        </a>
                    </div>
                </Card>
            </SectionContent>
        </Section>
    )
}
