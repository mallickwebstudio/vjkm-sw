import React from 'react'
import Image from 'next/image'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Shield } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function BoardOfTrustees() {
    const t = await getTranslations("aboutTrust.trustees");

    const trusteesData = [
        {
            name: t("t1Name"),
            designation: t("t1Role"),
            imageSrc: "/images/trustees/shashikant-patel-new.webp",
            bio: t("t1Bio")
        },
        {
            name: t("t2Name"),
            designation: t("t2Role"),
            imageSrc: "/images/trustees/dilip-patel-new.webp",
            bio: t("t2Bio")
        },
        {
            name: t("t3Name"),
            designation: t("t3Role"),
            imageSrc: "/images/trustees/thakor-patel-new.webp",
            bio: t("t3Bio")
        },
        {
            name: t("t4Name"),
            designation: t("t4Role"),
            imageSrc: "/images/trustees/mukesh-vasaiwala-new.webp",
            bio: t("t4Bio")
        },
    ];

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
                {trusteesData.map((trustee, idx) => (
                    <Card key={idx} className="py-0 shadow-sm hover:shadow-md transition-all group overflow-hidden">
                        <div className="relative aspect-4/5 w-full overflow-hidden bg-muted">
                            <Image
                                src={trustee.imageSrc}
                                alt={trustee.name}
                                fill
                                className="object-cover object-top select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 top-auto pb-2 flex items-center justify-center gap-2">
                                <Badge className='text-base [&>svg]:size-3!' variant="amber">
                                    <Shield />
                                    {trustee.designation}
                                </Badge>
                            </div>
                        </div>
                        <CardContent className=" space-y-2">
                            <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                {trustee.name}
                            </h3>
                            <p className="text-xs text-slate-tone leading-relaxed">
                                {trustee.bio}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </SectionContent>
        </Section>
    )
}
