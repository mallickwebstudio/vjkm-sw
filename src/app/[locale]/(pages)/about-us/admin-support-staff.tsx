import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card, CardContent } from '@/components/ui/card'
import { FileCheck, Landmark, Award, Laptop } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function AdminSupportStaff() {
    const t = await getTranslations("facultyAndStaff.support");

    const services = [
        {
            icon: FileCheck,
            title: t("s1Title"),
            description: t("s1Desc"),
        },
        {
            icon: Award,
            title: t("s2Title"),
            description: t("s2Desc"),
        },
        {
            icon: Landmark,
            title: t("s3Title"),
            description: t("s3Desc"),
        },
        {
            icon: Laptop,
            title: t("s4Title"),
            description: t("s4Desc"),
        }
    ];

    return (
        <Section id="support-services" className="bg-slate text-slate-foreground">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription className="text-sky-muted max-w-xl">
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-slate-800/80 border-slate-700 text-slate-100 shadow-md hover:border-emerald/50 transition-all flex flex-col justify-between">
                            <CardContent className="p-6 space-y-4">
                                <div className="p-3 rounded-xl bg-slate-700/60 border border-slate-600 text-emerald-tone w-fit">
                                    <IconComp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
