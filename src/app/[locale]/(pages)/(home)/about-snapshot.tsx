import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Section, SectionContent } from '@/components/section/section'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Target, Award, Compass, ArrowRight, CheckCircle2 } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Locale } from '@/i18n/routing'

const trusteesSnapshotData = [
    {
        name: {
            en: "Shri Shashikant H. Patel",
            gu: "શ્રી શશિકાંત એચ. પટેલ",
        },
        designation: {
            en: "President",
            gu: "President",
        },
        imageSrc: "/images/trustees/shashikant-patel-new.webp",
    },
    {
        name: {
            en: "Shri Dilipbhai N. Patel",
            gu: "શ્રી દિલીપભાઈ એન. પટેલ",
        },
        designation: {
            en: "Vice President",
            gu: "Vice President",
        },
        imageSrc: "/images/trustees/dilip-patel-new.webp",
    },
    {
        name: {
            en: "Shri Thakorbhai K. Patel",
            gu: "શ્રી ઠાકોરભાઈ કે. પટેલ",
        },
        designation: {
            en: "Secretary",
            gu: "Secretary",
        },
        imageSrc: "/images/trustees/thakor-patel-new.webp",
    },
    {
        name: {
            en: "Shri Mukesh V. Vasaiwala",
            gu: "શ્રી મુકેશ વી. વસાઈવાલા",
        },
        designation: {
            en: "Joint Secretary",
            gu: "Joint Secretary",
        },
        imageSrc: "/images/trustees/mukesh-vasaiwala-new.webp",
    },
]

const pillarsData = [
    {
        title: {
            en: "SGGU University Affiliation",
            gu: "SGGU યુનિવર્સિટી સંલગ્નતા",
        },
        desc: {
            en: "Approved by Shri Govind Guru University, Godhra",
            gu: "શ્રી ગોવિંદ ગુરુ યુનિવર્સિટી, ગોધરા દ્વારા માન્ય",
        },
    },
    {
        title: {
            en: "Fieldwork Focused Pedagogy",
            gu: "ક્ષેત્રકાર્ય (Fieldwork) આધારિત શિક્ષણ",
        },
        desc: {
            en: "Weekly field visits, block placements & rural camps",
            gu: "સાપ્તાહિક ક્ષેત્ર મુલાકાતો, બ્લોક પ્લેસમેન્ટ અને ગ્રામીણ કેમ્પ",
        },
    },
    {
        title: {
            en: "Inclusive Financial Aid",
            gu: "સમાવેશી શિષ્યવૃત્તિ સહાય",
        },
        desc: {
            en: "Support for Digital Gujarat & MYSY scholarships",
            gu: "ડિજિટલ ગુજરાત અને MYSY શિષ્યવૃત્તિઓ માટે માર્ગદર્શન",
        },
    },
    {
        title: {
            en: "Dedicated Admission Desk",
            gu: "સમર્પિત પ્રવેશ હેલ્પડેસ્ક",
        },
        desc: {
            en: "On-campus GCAS & Self-Finance helpdesk & verification",
            gu: "કેમ્પસ પર GCAS અને સેલ્ફ-ફાઇનાન્સ પ્રવેશ સહાયતા કેન્દ્ર",
        },
    },
]

const philosophySnapshotData = [
    {
        icon: Target,
        title: {
            en: "Our Vision",
            gu: "અમારું વિઝન (દ્રષ્ટિકોણ)",
        },
        desc: {
            en: "To be a benchmark institution in social work education, empowering youth with empathy, professional ethics, and leadership skills to drive sustainable community transformation.",
            gu: "સોશિયલ વર્ક શિક્ષણમાં એક ઉત્કૃષ્ટ સંસ્થા બનવું, જે યુવાનોને સહાનુભૂતિ, વ્યાવસાયિક નૈતિકતા અને નેતૃત્વ કૌશલ્યથી સજ્જ કરી ટકાઉ સામાજિક પરિવર્તન લાવી શકે.",
        },
        borderColor: "border-x-emerald",
        iconBox: "bg-emerald-muted text-emerald",
    },
    {
        icon: Compass,
        title: {
            en: "Our Mission",
            gu: "અમારું મિશન (ધ્યેય)",
        },
        desc: {
            en: "Nurture social work professionals through experiential fieldwork, research, inter-disciplinary learning, and institutional partnerships across Gujarat and India.",
            gu: "પ્રાયોગિક ક્ષેત્રકાર્ય, સંશોધન, આંતર-શાખાકીય શિક્ષણ અને સંસ્થાકીય ભાગીદારી દ્વારા સામાજિક ક્ષેત્રના કુશળ વ્યાવસાયિકોનું ઘડતર કરવું.",
        },
        borderColor: "border-x-sky",
        iconBox: "bg-sky-muted text-sky",
    },
    {
        icon: Award,
        title: {
            en: "Core Values",
            gu: "મૂળભૂત મૂલ્યો",
        },
        desc: {
            en: "Social Justice, Human Dignity, Community Service, Environmental Stewardship, and Transparent Governance.",
            gu: "સામાજિક ન્યાય, માનવ ગૌરવ, સમાજ સેવા, પર્યાવરણીય જાગૃતિ અને પારદર્શક સંચાલન.",
        },
        borderColor: "border-x-amber",
        iconBox: "bg-amber-muted text-amber",
    },
]

export default async function AboutSnapshot() {
    const t = await getTranslations("home.aboutSnapshot")
    const locale = (await getLocale()) as Locale

    return (
        <Section className="bg-slate-muted">
            <SectionContent className="lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Trust Narrative */}
                <div className="lg:col-span-7 space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                        {t("h2")}
                    </h2>

                    <p className="text-slate-tone text-base md:text-lg leading-relaxed">
                        {t("p")}
                    </p>

                    {/* Trustee Cards */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {trusteesSnapshotData.map((trustee, idx) => {
                            const name = trustee.name[locale] || trustee.name.en
                            const designation = trustee.designation[locale] || trustee.designation.en

                            return (
                                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border shadow-xs">
                                    <div className="relative size-20 rounded-sm overflow-hidden shrink-0 border border-border bg-muted">
                                        <Image
                                            src={trustee.imageSrc}
                                            alt={name}
                                            fill
                                            className="object-cover object-top select-none pointer-events-none"
                                        />
                                    </div>
                                    <div className="min-w-0 h-full flex-1 flex flex-col justify-end">
                                        <h4 className="text-sm font-bold">{name}</h4>
                                        <p className="py-px px-1 w-fit bg-amber text-amber-foreground text-xs rounded-xs">
                                            {designation}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Pillars List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {pillarsData.map((pillar, idx) => {
                            const title = pillar.title[locale] || pillar.title.en
                            const desc = pillar.desc[locale] || pillar.desc.en

                            return (
                                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-card border border-border shadow-xs">
                                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-bold text-foreground">{title}</h4>
                                        <p className="text-xs text-slate-tone">{desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="pt-2">
                        <Link
                            href="/about-us"
                            className={cn(
                                buttonVariants({ variant: "slate" }), "whitespace-break-spaces"
                            )}
                        >
                            {t("cta")}
                            <ArrowRight />
                        </Link>
                    </div>
                </div>

                {/* Right Column: Mission Cards */}
                <div className="lg:col-span-5 space-y-4">
                    {philosophySnapshotData.map((item, idx) => {
                        const IconComp = item.icon
                        const title = item.title[locale] || item.title.en
                        const desc = item.desc[locale] || item.desc.en

                        return (
                            <Card key={idx} className={cn("border-x-4 bg-card shadow-md", item.borderColor)}>
                                <CardContent className="p-6 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <div className={cn("p-2.5 rounded-md", item.iconBox)}>
                                            <IconComp className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground">{title}</h3>
                                    </div>
                                    <p className="text-sm text-slate-tone leading-relaxed pt-1">
                                        {desc}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </SectionContent>
        </Section>
    )
}
