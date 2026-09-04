import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { MousePointerClick, Building, FileCheck, type LucideIcon } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Locale } from '@/i18n/routing'

interface StepItem {
    icon: LucideIcon
    step: string
    title: {
        en: string
        gu: string
    }
    description: {
        en: string
        gu: string
    }
}

const gcasSteps: StepItem[] = [
    {
        icon: MousePointerClick,
        step: "01",
        title: {
            en: "Online GCAS Portal or Direct Registration",
            gu: "ઓનલાઈન GCAS પોર્ટલ અથવા કેમ્પસ ખાતે ડાયરેક્ટ નોંધણી",
        },
        description: {
            en: "Register online via gcasstudent.gujgov.edu.in or visit our campus admission desk directly for instant form submission.",
            gu: "gcasstudent.gujgov.edu.in ની મુલાકાત લો અથવા ત્વરિત નોંધણી માટે અમારા કેમ્પસ એડમિશન હેલ્પડેસ્કની સીધી મુલાકાત લો.",
        },
    },
    {
        icon: Building,
        step: "02",
        title: {
            en: "Select VJKM SF College (SGGU)",
            gu: "VJKM સેલ્ફ-ફાઇનાન્સ કોલેજ (SGGU) પસંદ કરો",
        },
        description: {
            en: "Under university preference, select Shri Govind Guru University (SGGU) and choose VJKM Self-Finance College for BSW or MSW programs.",
            gu: "યુનિવર્સિટી પસંદગીમાં શ્રી ગોવિંદ ગુરુ યુનિવર્સિટી (SGGU) પસંદ કરો અને BSW અથવા MSW પ્રોગ્રામ માટે VJKM સેલ્ફ-ફાઇનાન્સ કોલેજ પસંદ કરો.",
        },
    },
    {
        icon: FileCheck,
        step: "03",
        title: {
            en: "Campus Verification & Seat Allocation",
            gu: "કેમ્પસ ચકાસણી અને સીટ ફાળવણી",
        },
        description: {
            en: "Visit our dedicated campus helpdesk (Room 102) with original marksheets, caste certificate, and LC for instant verification and seat confirmation.",
            gu: "ત્વરિત ચકાસણી અને સીટ કન્ફર્મેશન માટે મૂળ માર્કશીટ, જાતિ પ્રમાણપત્ર અને LC સાથે અમારા કેમ્પસ હેલ્પડેસ્ક (રૂમ ૧૦૨) ની મુલાકાત લો.",
        },
    },
]

export async function GcasGuide({ className }: { className?: string }) {
    const t = await getTranslations("home.gcasGuide")
    const locale = (await getLocale()) as Locale

    return (
        <Section id="gcas-guidance" className={className || "bg-slate text-slate-foreground scroll-mt-20"}>
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription>
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="md:grid-cols-3 gap-8 relative">
                {gcasSteps.map((item, idx) => {
                    const IconComp = item.icon
                    const title = item.title[locale] || item.title.en
                    const description = item.description[locale] || item.description.en

                    return (
                        <Card key={idx} className="bg-slate-800/80 border-slate-700 text-slate-100 relative overflow-hidden shadow-lg hover:border-emerald/50 transition-all group p-6">
                            <div className="absolute top-0 right-0 bg-emerald text-white font-extrabold text-lg px-4 py-2 rounded-bl-xl shadow-sm">
                                {item.step}
                            </div>
                            <div className="p-3 rounded-xl bg-slate-700/60 text-emerald-tone w-fit group-hover:scale-105 transition-transform">
                                <IconComp className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white pt-2">{title}</h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{description}</p>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
