import React from 'react'
import Image from 'next/image'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, Shield, GraduationCap, Sparkles } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function PrincipalMessage() {
    const t = await getTranslations("aboutCollege.principal");

    const principals = [
        {
            name: t("bswPrincipal.name"),
            designation: t("bswPrincipal.designation"),
            qualification: t("bswPrincipal.degree"),
            imageSrc: "/images/faculty/vankar-jagruti-priteshkumar-chair-1.webp",
            message: t("bswPrincipal.message"),
            badgeColor: "bg-emerald/15 text-emerald-tone border-emerald/30",
            department: "Bachelor of Social Work (BSW)"
        },
        {
            name: t("mswPrincipal.name"),
            designation: t("mswPrincipal.designation"),
            qualification: t("mswPrincipal.degree"),
            expertise: t("mswPrincipal.expertise"),
            imageSrc: "/images/faculty/maulikkumar-patel.webp",
            message: t("mswPrincipal.message"),
            badgeColor: "bg-amber/15 text-amber-tone border-amber/30",
            department: "Master of Social Work (MSW)"
        }
    ];

    return (
        <Section id="principal-message" className="bg-slate-muted">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription>
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {principals.map((principal, idx) => (
                    <Card key={idx} className="bg-card border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                        <CardContent className="p-6 space-y-6">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                                <div className="relative w-28 h-36 rounded-2xl overflow-hidden bg-muted border border-border shrink-0 shadow-sm">
                                    <Image
                                        src={principal.imageSrc}
                                        alt={principal.name}
                                        fill
                                        className="object-cover object-top select-none pointer-events-none"
                                    />
                                </div>
                                <div className="space-y-2 text-center sm:text-left min-w-0 flex-1">
                                    <Badge variant="secondary" className={`font-bold text-xs border ${principal.badgeColor}`}>
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
                                </div>
                            </div>

                            <div className="relative pt-4 border-t border-border space-y-2">
                                <Quote className="w-8 h-8 text-muted/30 absolute -top-3 right-2 pointer-events-none" />
                                <p className="text-slate-tone text-xs sm:text-sm leading-relaxed italic relative z-10">
                                    &quot;{principal.message}&quot;
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </SectionContent>
        </Section>
    )
}
