import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Award, GraduationCap, Building, Sparkles, type LucideIcon } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Locale } from '@/i18n/routing'

interface MilestoneItem {
    year: {
        en: string
        gu: string
    }
    title: {
        en: string
        gu: string
    }
    description: {
        en: string
        gu: string
    }
    icon: LucideIcon
    badgeVariant: string
}

const milestones: MilestoneItem[] = [
    {
        year: { en: "1957", gu: "૧૯૫૭" },
        title: {
            en: "Foundation of VJKM Trust",
            gu: "VJKM ટ્રસ્ટની સ્થાપના",
        },
        description: {
            en: "Established by visionary social leaders in Dabhoi to extend accessible, quality higher education across rural and semi-urban Vadodara district.",
            gu: "ડભોઈ અને આસપાસના વિસ્તારમાં ઉચ્ચ શિક્ષણનો વિસ્તાર કરવા માટે દુરંદેશી સામાજિક અગ્રણીઓ દ્વારા ટ્રસ્ટની સ્થાપના.",
        },
        icon: Building,
        badgeVariant: "bg-amber/20 text-amber-tone border-amber/40",
    },
    {
        year: { en: "1970 - 1990", gu: "૧૯૭૦ - ૧૯૯૦" },
        title: {
            en: "Academic Expansion",
            gu: "શૈક્ષણિક વિસ્તાર",
        },
        description: {
            en: "Expansion of campus infrastructure, introducing undergraduate science, arts, and commerce academic tracks under the Trust's governance.",
            gu: "કેમ્પસ ઇન્ફ્રાસ્ટ્રક્ચરનો વિસ્તાર અને વિજ્ઞાન, વાણિજ્ય તથા વિનયન કોલેજોની સ્થાપના.",
        },
        icon: GraduationCap,
        badgeVariant: "bg-sky/20 text-sky-tone border-sky/40",
    },
    {
        year: { en: "2000s", gu: "૨૦૦૦નો દાયકો" },
        title: {
            en: "Self-Finance Social Work College Established",
            gu: "સેલ્ફ-ફાઇનાન્સ સોશિયલ વર્ક કોલેજની સ્થાપના",
        },
        description: {
            en: "Launch of VJKM Self-Finance College offering professional BSW (Bachelor of Social Work) and MSW (Master of Social Work) degree programs.",
            gu: "વ્યાવસાયિક BSW (બેચલર ઓફ સોશિયલ વર્ક) અને MSW (માસ્ટર ઓફ સોશિયલ વર્ક) ડિગ્રી પ્રોગ્રામ્સ શરૂ કરાયા.",
        },
        icon: Award,
        badgeVariant: "bg-emerald/20 text-emerald-tone border-emerald/40",
    },
    {
        year: { en: "2020s", gu: "૨૦૨૦નો દાયકો" },
        title: {
            en: "SGGU Affiliation & GCAS Portal Integration",
            gu: "SGGU સંલગ્નતા અને GCAS પોર્ટલ જોડાણ",
        },
        description: {
            en: "Affiliation with Shri Govind Guru University (SGGU), Godhra, and complete integration with Gujarat Common Admission Services (GCAS).",
            gu: "શ્રી ગોવિંદ ગુરુ યુનિવર્સિટી (SGGU), ગોધરા સાથે સંલગ્નતા અને GCAS પોર્ટલ દ્વારા કેન્દ્રીય પ્રવેશ.",
        },
        icon: Calendar,
        badgeVariant: "bg-purple/20 text-purple border-purple/40",
    },
    {
        year: { en: "2026 & Beyond", gu: "૨૦૨૬ અને આગળ" },
        title: {
            en: "Digital Campus & 50+ CSR Partnerships",
            gu: "ડિજિટલ કેમ્પસ અને ૫૦+ CSR ભાગીદારી",
        },
        description: {
            en: "Modern smart classrooms, statistical IT labs, digital library archives, and 50+ NGO/CSR fieldwork partner network.",
            gu: "આધુનિક સ્માર્ટ વર્ગખંડો, આંકડાકીય IT લેબ્સ, ડિજિટલ લાઈબ્રેરી અને ૫૦+ NGO/CSR ફીલ્ડવર્ક નેટવર્ક.",
        },
        icon: Sparkles,
        badgeVariant: "bg-teal/20 text-teal-400 border-teal/40",
    },
]

export default async function LegacyTimeline() {
    const t = await getTranslations("aboutTrust.timeline")
    const locale = (await getLocale()) as Locale

    return (
        <Section id="timeline" className="bg-slate text-slate-foreground">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription>
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="relative border-l-2 border-slate-700/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8 my-4">
                {milestones.map((item, idx) => {
                    const IconComp = item.icon
                    const year = item.year[locale] || item.year.en
                    const title = item.title[locale] || item.title.en
                    const description = item.description[locale] || item.description.en

                    return (
                        <div key={idx} className="relative group">
                            {/* Dot / Icon Badge */}
                            <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 size-7 sm:size-9 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-white group-hover:border-emerald-tone transition-colors">
                                <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-tone" />
                            </div>

                            <Card className="bg-slate-800/80 border-slate-700 text-slate-100 shadow-md hover:border-emerald/50 transition-all">
                                <CardContent className="p-5 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <Badge variant="outline" className={`text-xs px-2.5 py-0.5 rounded-md font-extrabold ${item.badgeVariant}`}>
                                            {year}
                                        </Badge>
                                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-tone transition-colors">
                                            {title}
                                        </h3>
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                                        {description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
