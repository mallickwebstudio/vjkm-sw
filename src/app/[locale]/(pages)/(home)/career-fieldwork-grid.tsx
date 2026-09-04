import React from 'react'
import Link from 'next/link'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Building2, HeartPulse, TreePine, ShieldAlert, ArrowRight, type LucideIcon } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Locale } from '@/i18n/routing'

interface SectorItem {
    icon: LucideIcon
    title: {
        en: string
        gu: string
    }
    description: {
        en: string
        gu: string
    }
    roles: {
        en: string[]
        gu: string[]
    }
    color: string
}

const sectorsData: SectorItem[] = [
    {
        icon: Building2,
        title: {
            en: "Corporate Social Responsibility (CSR)",
            gu: "કોર્પોરેટ સોશિયલ રિસ્પોન્સિબિલિટી (CSR)",
        },
        description: {
            en: "Placement in leading industrial houses managing community initiatives, ESG compliance, and rural development grants.",
            gu: "સામુદાયિક પહેલો, ESG પાલન અને ગ્રામીણ વિકાસ પ્રોજેક્ટ્સનું સંચાલન કરતી અગ્રણી ઔદ્યોગિક સંસ્થાઓમાં પ્લેસમેન્ટ.",
        },
        roles: {
            en: ["CSR Coordinator", "Community Relations Officer", "ESG Analyst"],
            gu: ["CSR કોઓર્ડિનેટર", "સમુદાય સંપર્ક અધિકારી", "ESG વિશ્લેષક"],
        },
        color: "text-blue bg-blue/10 border-blue/30",
    },
    {
        icon: TreePine,
        title: {
            en: "NGOs & Rural Development",
            gu: "બિન-સરકારી સંસ્થાઓ (NGOs) અને ગ્રામીણ વિકાસ",
        },
        description: {
            en: "Direct field immersion with national and grassroots non-profits focusing on tribal welfare, water sanitation, and women empowerment.",
            gu: "આદિવાસી કલ્યાણ, જળ અને સ્વચ્છતા તથા મહિલા સશક્તિકરણ પર ધ્યાન કેન્દ્રિત કરતી સંસ્થાઓ સાથે ક્ષેત્રકાર્ય.",
        },
        roles: {
            en: ["NGO Project Manager", "Field Coordinator", "Rural Development Officer"],
            gu: ["NGO પ્રોજેક્ટ મેનેજર", "ફીલ્ડ કોઓર્ડિનેટર", "ગ્રામીણ વિકાસ અધિકારી"],
        },
        color: "text-emerald bg-emerald/10 border-emerald/30",
    },
    {
        icon: HeartPulse,
        title: {
            en: "Medical & Psychiatric Health",
            gu: "મેડિકલ અને સાયકિયાટ્રિક હેલ્થ",
        },
        description: {
            en: "Clinical social work roles in district hospitals, mental health institutes, and rehabilitation centers across Gujarat.",
            gu: "ગુજરાતભરની જિલ્લા હોસ્પિટલો, માનસિક આરોગ્ય સંસ્થાઓ અને પુનર્વસન કેન્દ્રોમાં ક્લિનિકલ સોશિયલ વર્ક.",
        },
        roles: {
            en: ["Medical Social Worker", "Psychiatric Counselor", "Hospital Welfare Officer"],
            gu: ["મેડિકલ સોશિયલ વર્કર", "સાયકિયાટ્રિક કાઉન્સેલર", "હોસ્પિટલ કલ્યાણ અધિકારી"],
        },
        color: "text-rose bg-rose/10 border-rose/30",
    },
    {
        icon: ShieldAlert,
        title: {
            en: "Government & Social Justice",
            gu: "સરકારી ક્ષેત્ર અને સામાજિક ન્યાય",
        },
        description: {
            en: "Collaborations with District Child Protection Units (DCPU), Social Defense Department, and Panchayati Raj institutions.",
            gu: "જિલ્લા બાળ સુરક્ષા એકમ (DCPU), સામાજિક સુરક્ષા વિભાગ અને પંચાયતી રાજ સંસ્થાઓ સાથે જોડાણ.",
        },
        roles: {
            en: ["Child Protection Officer", "Probation Officer", "Social Audit Specialist"],
            gu: ["બાળ સુરક્ષા અધિકારી", "પ્રોબેશન ઓફિસર", "સોશિયલ ઓડિટ નિષ્ણાત"],
        },
        color: "text-amber bg-amber/10 border-amber/30",
    },
]

export default async function CareerFieldworkGrid() {
    const t = await getTranslations("home.careerFieldwork")
    const locale = (await getLocale()) as Locale

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
                {sectorsData.map((sector, idx) => {
                    const IconComp = sector.icon
                    const title = sector.title[locale] || sector.title.en
                    const description = sector.description[locale] || sector.description.en
                    const roles = sector.roles[locale] || sector.roles.en

                    return (
                        <Card key={idx} className="shadow-sm hover:shadow-md transition-all">
                            <CardContent className="py-2 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className={`p-3 rounded-xl border ${sector.color}`}>
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        {title}
                                    </h3>
                                </div>
                                <p className="text-sm text-slate-tone leading-relaxed">
                                    {description}
                                </p>
                                <div className="pt-2 border-t border-border">
                                    <span className="text-xs font-bold uppercase text-slate-tone tracking-wider">{t("rolesLabel")}</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {roles.map((role, rIdx) => (
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
