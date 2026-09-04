import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card, CardContent } from '@/components/ui/card'
import { Eye, Target, Heart, type LucideIcon } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Locale } from '@/i18n/routing'

interface PhilosophyItem {
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
    iconColor: string
}

const philosophyItems: PhilosophyItem[] = [
    {
        icon: Eye,
        title: {
            en: "Our Vision",
            gu: "અમારું વિઝન (દ્રષ્ટિકોણ)",
        },
        description: {
            en: "To be a benchmark institution in professional social work education, empowering youth with empathy, ethics, and leadership skills to drive sustainable community transformation.",
            gu: "સોશિયલ વર્ક શિક્ષણમાં એક ઉત્કૃષ્ટ સંસ્થા બનવું, જે યુવાનોને સહાનુભૂતિ, વ્યાવસાયિક નૈતિકતા અને નેતૃત્વ કૌશલ્યથી સજ્જ કરી ટકાઉ સામાજિક પરિવર્તન લાવી શકે.",
        },
        badgeVariant: "bg-sky/15 text-sky-tone border-sky/30",
        iconColor: "text-sky bg-sky/10 border-sky/30",
    },
    {
        icon: Target,
        title: {
            en: "Our Mission",
            gu: "અમારું મિશન (ધ્યેય)",
        },
        description: {
            en: "Nurture competent social work professionals through rigorous academic instruction, 500+ hours of mandatory field practicums, interdisciplinary research, and active NGO/CSR partnerships.",
            gu: "ગુણવત્તાયુક્ત શૈક્ષણિક તાલીમ, ૫૦૦+ કલાકના ફરજિયાત ક્ષેત્રકાર્ય, સંશોધન અને NGO/CSR ભાગીદારી દ્વારા કુશળ સોશિયલ વર્કર્સનું ઘડતર કરવું.",
        },
        badgeVariant: "bg-emerald/15 text-emerald-tone border-emerald/30",
        iconColor: "text-emerald bg-emerald/10 border-emerald/30",
    },
    {
        icon: Heart,
        title: {
            en: "Core Values",
            gu: "મૂળભૂત મૂલ્યો",
        },
        description: {
            en: "Social Justice, Human Dignity, Community Service, Environmental Stewardship, and Transparent Governance.",
            gu: "સામાજિક ન્યાય, માનવ ગૌરવ, સમાજ સેવા, પર્યાવરણીય જાગૃતિ અને પારદર્શક સંચાલન.",
        },
        badgeVariant: "bg-amber/15 text-amber-tone border-amber/30",
        iconColor: "text-amber bg-amber/10 border-amber/30",
    },
]

export default async function VisionMissionValues() {
    const t = await getTranslations("aboutCollege.philosophy")
    const locale = (await getLocale()) as Locale

    return (
        <Section id="vision-mission">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription>
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {philosophyItems.map((item, idx) => {
                    const IconComp = item.icon
                    const title = item.title[locale] || item.title.en
                    const description = item.description[locale] || item.description.en

                    return (
                        <Card key={idx} className="bg-card border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <CardContent className="p-6 space-y-4">
                                <div className={`p-3 rounded-xl border w-fit ${item.iconColor}`}>
                                    <IconComp className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
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
