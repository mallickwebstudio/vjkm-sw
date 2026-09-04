import React from 'react'
import Image from 'next/image'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Shield } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Locale } from '@/i18n/routing'

interface TrusteeItem {
    name: {
        en: string
        gu: string
    }
    designation: {
        en: string
        gu: string
    }
    imageSrc: string
    bio: {
        en: string
        gu: string
    }
}

const trusteesData: TrusteeItem[] = [
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
        bio: {
            en: "Leading the executive governance of VJKM Trust with strategic vision, fostering academic expansion and community welfare.",
            gu: "વ્યૂહાત્મક દ્રષ્ટિકોણથી VJKM ટ્રસ્ટનું સંચાલન અને શૈક્ષણિક વિકાસનું નેતૃત્વ.",
        },
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
        bio: {
            en: "Overseeing campus infrastructure development, institutional policy alignment, and student welfare initiatives.",
            gu: "કેમ્પસ ઇન્ફ્રાસ્ટ્રક્ચર વિકાસ, શૈક્ષણિક નીતિઓ અને વિદ્યાર્થી કલ્યાણ પ્રવૃત્તિઓનું સંચાલન.",
        },
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
        bio: {
            en: "Directing administrative operations, university compliance with SGGU, and academic quality assurance.",
            gu: "વહીવટી સંચાલન, SGGU યુનિવર્સિટી સંલગ્નતા અને શૈક્ષણિક ગુણવત્તા સુનિશ્ચિતતા.",
        },
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
        bio: {
            en: "Managing stakeholder engagement, financial aid programs, and community outreach operations across campuses.",
            gu: "નાણાકીય સહાય પ્રોગ્રામ્સ, સામાજિક જોડાણ અને કેમ્પસ પ્રવૃત્તિઓનું નિરીક્ષણ.",
        },
    },
]

export default async function BoardOfTrustees() {
    const t = await getTranslations("aboutTrust.trustees")
    const locale = (await getLocale()) as Locale

    return (
        <Section id="trustees">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription>
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trusteesData.map((trustee, idx) => {
                    const name = trustee.name[locale] || trustee.name.en
                    const designation = trustee.designation[locale] || trustee.designation.en
                    const bio = trustee.bio[locale] || trustee.bio.en

                    return (
                        <Card key={idx} className="py-0 shadow-sm hover:shadow-md transition-all group overflow-hidden">
                            <div className="relative aspect-4/5 w-full overflow-hidden bg-muted">
                                <Image
                                    src={trustee.imageSrc}
                                    alt={name}
                                    fill
                                    className="object-cover object-top select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 top-auto pb-2 flex items-center justify-center gap-2">
                                    <Badge className='text-base [&>svg]:size-3!' variant="amber">
                                        <Shield />
                                        {designation}
                                    </Badge>
                                </div>
                            </div>
                            <CardContent className=" space-y-2">
                                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                    {name}
                                </h3>
                                <p className="text-xs text-slate-tone leading-relaxed">
                                    {bio}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
