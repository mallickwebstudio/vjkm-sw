import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { getFacilitiesData } from '@/lib/fetcher'
import { getLocale } from 'next-intl/server'
import { Locale } from '@/i18n/routing'
import { FacilityCardImageCarousel } from './facility-card-image-carousel'
import { cn } from '@/lib/utils'

export async function FacilitiesSection() {
    const locale = (await getLocale()) as Locale
    const isGu = locale === 'gu'
    const allFacilities = getFacilitiesData(locale)

    // Map facilities by slug
    const facilityBySlug = new Map(allFacilities.map(f => [f.slug, f]))

    // Categories definition with title and subtitle/description
    const categories = [
        {
            id: "academic-infrastructure",
            anchorId: "auditorium",
            title: isGu ? "શૈક્ષણિક અને એસેમ્બલી ઇન્ફ્રાસ્ટ્રક્ચર" : "Academic & Assembly Infrastructure",
            subtitle: isGu
                ? "વાર્ષિક દીક્ષાંત સમારોહ, સાંસ્કૃતિક કાર્યક્રમો અને NCC તાલીમ માટે અદ્યતન સભાખંડ અને તાલીમ કેન્દ્રો."
                : "Modern assembly halls and cadet training centers supporting institutional events, academic symposiums, and leadership development.",
            slugs: ["campus-auditorium", "ncc-cadet-cell"],
            gridCols: "grid-cols-1 lg:grid-cols-2",
        },
        {
            id: "sports-and-fitness",
            anchorId: "sports",
            title: isGu ? "રમતગમત મેદાનો અને આઉટડોર એથ્લેટિક્સ" : "Sports Grounds & Outdoor Athletics",
            subtitle: isGu
                ? "ક્રિકેટ, ફૂટબોલ, એથ્લેટિક્સ અને આંતર-કોલેજ ટુર્નામેન્ટ્સ માટે તૈયાર કરાયેલા વિશાળ મેદાનો."
                : "Expansive outdoor sports grounds for cricket, football, athletics, and inter-collegiate tournaments.",
            slugs: ["cricket-ground", "football-ground", "main-campus-ground"],
            gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        },
        {
            id: "fitness-and-wellness",
            anchorId: "wellness",
            title: isGu ? "ફિટનેસ જીમ અને યોગ કેન્દ્ર" : "Fitness & Wellness Centers",
            subtitle: isGu
                ? "શારીરિક તંદુરસ્તી, કસરત અને દૈનિક યોગ-ધ્યાન માટે સમર્પિત ઇન્ડોર સુવિધાઓ."
                : "Dedicated indoor facilities for strength conditioning, physical fitness, and daily holistic yoga practice.",
            slugs: ["campus-fitness-gym", "yoga-and-wellness-center"],
            gridCols: "grid-cols-1 lg:grid-cols-2",
        },
    ]

    return (
        <div className="space-y-0">
            {categories.map((category, index) => (
                <Section
                    key={category.id}
                    id={category.id}
                    className={cn(
                        "scroll-mt-20",
                        index % 2 === 1 && "bg-secondary"
                    )}
                >
                    {category.anchorId && (
                        <span id={category.anchorId} className="block -mt-24 pt-24 invisible pointer-events-none" />
                    )}

                    <SectionHeader align="center">
                        <SectionTitle>{category.title}</SectionTitle>
                        <SectionDescription>{category.subtitle}</SectionDescription>
                    </SectionHeader>

                    <SectionContent className={`grid gap-6 ${category.gridCols}`}>
                        {category.slugs.map((slug) => {
                            const facility = facilityBySlug.get(slug)
                            if (!facility) return null

                            return (
                                <Card
                                    key={facility.slug}
                                    className="p-0 gap-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow group"
                                >
                                    <FacilityCardImageCarousel
                                        imageSrcs={facility.imageSrcs}
                                        thumbnail={facility.thumbnail}
                                        title={facility.title}
                                    />

                                    <div className="p-5 space-y-2">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-amber-tone transition-colors">
                                            {facility.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                                            {facility.description}
                                        </p>
                                    </div>
                                </Card>
                            )
                        })}
                    </SectionContent>
                </Section>
            ))}
        </div>
    )
}
