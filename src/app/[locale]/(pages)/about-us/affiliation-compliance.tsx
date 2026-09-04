import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card, CardContent } from '@/components/ui/card'
import { Landmark, ShieldCheck, FileCheck, type LucideIcon } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Locale } from '@/i18n/routing'

interface ComplianceItem {
    icon: LucideIcon
    title: {
        en: string
        gu: string
    }
    description: {
        en: string
        gu: string
    }
    badgeVariant: string
}

const complianceItems: ComplianceItem[] = [
    {
        icon: Landmark,
        title: {
            en: "Shri Govind Guru University (SGGU)",
            gu: "શ્રી ગોવિંદ ગુરુ યુનિવર્સિટી (SGGU)",
        },
        description: {
            en: "Affiliated with SGGU, Godhra for BSW and MSW degree programs with updated NEP curriculum structure.",
            gu: "BSW અને MSW પ્રોગ્રામ્સ માટે શ્રી ગોવિંદ ગુરુ યુનિવર્સિટી, ગોધરા સાથે કાયમી સંલગ્નતા.",
        },
        badgeVariant: "bg-emerald/20 text-emerald-tone border-emerald/40",
    },
    {
        icon: ShieldCheck,
        title: {
            en: "Government of Gujarat Recognized",
            gu: "ગુજરાત સરકાર દ્વારા માન્ય",
        },
        description: {
            en: "Approved by the Education Department, Government of Gujarat for higher education instruction.",
            gu: "ઉચ્ચ શિક્ષણ વિભાગ, ગુજરાત સરકાર દ્વારા માન્યતા પ્રાપ્ત.",
        },
        badgeVariant: "bg-sky/20 text-sky-tone border-sky/40",
    },
    {
        icon: FileCheck,
        title: {
            en: "GCAS Admission Partner",
            gu: "GCAS પ્રવેશ પોર્ટલ",
        },
        description: {
            en: "Official Gujarat Common Admission Services portal for transparent seat allotment.",
            gu: "પારદર્શક પ્રવેશ પ્રક્રિયા માટે ગુજરાત કોમન એડમિશન સર્વિસીસ સત્તાવાર સંસ્થા.",
        },
        badgeVariant: "bg-amber/20 text-amber-tone border-amber/40",
    },
]

export default async function AffiliationCompliance() {
    const t = await getTranslations("aboutCollege.compliance")
    const locale = (await getLocale()) as Locale

    return (
        <Section id="compliance" className="bg-slate text-slate-foreground">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription>
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-6">
                {complianceItems.map((item, idx) => {
                    const IconComp = item.icon
                    const title = item.title[locale] || item.title.en
                    const description = item.description[locale] || item.description.en

                    return (
                        <Card key={idx} className="bg-slate-800/80 border-slate-700 text-slate-100 shadow-md hover:border-emerald/50 transition-all flex flex-col justify-between">
                            <CardContent className="p-6 space-y-4">
                                <div className="p-3 rounded-xl bg-slate-700/60 border border-slate-600 text-emerald-tone w-fit">
                                    <IconComp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">
                                    {title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    {description}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
