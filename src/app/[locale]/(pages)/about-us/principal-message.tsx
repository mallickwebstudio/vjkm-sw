import React from 'react'
import Image from 'next/image'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Quote, Shield, GraduationCap, Sparkles } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { principals } from '@/db/faculty'

export default async function PrincipalMessage() {
    const t = await getTranslations("aboutCollege.principal");

    return (
        <Section id="principal-message" className="bg-slate-muted overflow-auto">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription>
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 gap-8">
                {principals.map((principal, idx) => (
                    <Card className='p-4' key={idx}>
                        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5">
                            <div className="relative w-full aspect-4/5 max-w-60 rounded-2xl overflow-hidden bg-muted border border-border shrink-0 shadow-sm">
                                <Image
                                    src={principal.image || principal.imageSrc || ""}
                                    alt={principal.name}
                                    fill
                                    className="sm:sticky sm:top-0 sm:h-fit object-cover object-top select-none pointer-events-none"
                                />
                            </div>
                            <div className="space-y-2 text-center sm:text-left min-w-0 flex-1">
                                <Badge variant="secondary" className={`font-bold text-xs border ${principal.badgeColor || ""}`}>
                                    <Shield className="w-3 h-3 mr-1" />
                                    {principal.designation}
                                </Badge>
                                <h3 className="text-xl font-bold text-foreground">
                                    {principal.name}
                                </h3>
                                <div className="space-y-1 text-xs text-slate-tone">
                                    <p className="flex items-center justify-center sm:justify-start gap-1 font-medium text-emerald-tone">
                                        <GraduationCap className="w-3.5 h-3.5" />
                                        {principal.qualification}
                                    </p>
                                    {principal.expertise && (
                                        <p className="flex items-center justify-center sm:justify-start gap-1 text-[11px] text-slate-tone">
                                            <Sparkles className="w-3 h-3 text-amber" />
                                            {principal.expertise}
                                        </p>
                                    )}
                                </div>
                                <div className="relative pt-4 border-t border-border space-y-2">
                                    <Quote className="w-8 h-8 text-muted/30 absolute -top-3 right-2 pointer-events-none" />
                                    <div className="text-slate-tone text-xs sm:text-sm leading-relaxed italic relative z-10">
                                        {principal.principalMessage || principal.message}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </SectionContent>
        </Section>
    )
}
