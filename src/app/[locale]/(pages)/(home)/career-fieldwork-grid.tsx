import React from 'react'
import Link from 'next/link'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Building2, HeartPulse, TreePine, ShieldAlert, ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function CareerFieldworkGrid() {
    const t = await getTranslations("home.careerFieldwork");

    const sectors = [
        {
            icon: Building2,
            title: t("csrTitle"),
            description: t("csrDesc"),
            roles: [t("csrRole1"), t("csrRole2"), t("csrRole3")],
            color: "text-blue bg-blue/10 border-blue/30"
        },
        {
            icon: TreePine,
            title: t("ngoTitle"),
            description: t("ngoDesc"),
            roles: [t("ngoRole1"), t("ngoRole2"), t("ngoRole3")],
            color: "text-emerald bg-emerald/10 border-emerald/30"
        },
        {
            icon: HeartPulse,
            title: t("healthTitle"),
            description: t("healthDesc"),
            roles: [t("healthRole1"), t("healthRole2"), t("healthRole3")],
            color: "text-rose bg-rose/10 border-rose/30"
        },
        {
            icon: ShieldAlert,
            title: t("govtTitle"),
            description: t("govtDesc"),
            roles: [t("govtRole1"), t("govtRole2"), t("govtRole3")],
            color: "text-amber bg-amber/10 border-amber/30"
        }
    ];

    return (
        <Section className="bg-slate-muted">
            <div className="lg:flex lg:justify-between lg:items-end">
                <SectionHeader align="left">
                    <SectionTitle>
                        {t("h2")}
                    </SectionTitle>
                    <SectionDescription>
                        {t("subheading")}
                    </SectionDescription>
                </SectionHeader>

                <Link
                    href="/fieldwork"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "mt-2"
                    )}
                >
                    {t("cta")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>

            {/* Sector Cards */}
            <SectionContent className="md:grid-cols-2 gap-6">
                {sectors.map((sector, idx) => {
                    const IconComp = sector.icon

                    return (
                        <Card key={idx} className="shadow-sm hover:shadow-md transition-all">
                            <CardContent className="py-2 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className={`p-3 rounded-xl border ${sector.color}`}>
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        {sector.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-slate-tone leading-relaxed">
                                    {sector.description}
                                </p>
                                <div className="pt-2 border-t border-border">
                                    <span className="text-xs font-bold uppercase text-slate-tone tracking-wider">{t("rolesLabel")}</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {sector.roles.map((role, rIdx) => (
                                            <Badge key={rIdx} variant="secondary" className="bg-muted text-muted-foreground text-xs">
                                                {role}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
