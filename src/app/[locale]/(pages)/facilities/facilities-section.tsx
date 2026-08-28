import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { getFacilitiesData } from '@/lib/fetcher'
import { getLocale } from 'next-intl/server'
import { Locale } from '@/i18n/routing'
import { FacilityCardImageCarousel } from './facility-card-image-carousel'

export async function FacilitiesSection() {
    const locale = (await getLocale()) as Locale
    const allFacilities = getFacilitiesData(locale)

    return (
        <Section id="sports-and-fitness" className="scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Facilities</SectionTitle>
                <SectionDescription>
                    ...
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allFacilities.map((item) => (
                    <Card
                        key={item.slug}
                        className="py-0"
                    >
                        <FacilityCardImageCarousel
                            imageSrcs={item.imageSrcs}
                            thumbnail={item.thumbnail}
                            title={item.title}
                            categoryLabel="Sports & Fitness"
                        />

                        <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-foreground group-hover:text-amber-tone transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-tone leading-relaxed line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </SectionContent>
        </Section>
    )
}

