import React from 'react'
import Link from 'next/link'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ShieldCheck, Award, ArrowDown, Users } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function HeroSection() {
    const t = await getTranslations("aboutTrust.hero");

    return (
        <Hero variant="left" className="flex items-center bg-slate min-h-[60vh]">
            <HeroContent className="max-w-3xl">

                <HeroH1 className="h1 font-extrabold text-white">
                    {t("h1Title")}
                </HeroH1>

                <HeroP className="max-w-2xl">
                    {t("p")}
                </HeroP>

                {/* Primary & Secondary CTAs */}
                <HeroCta>
                    <Link
                        href="#trustees"
                        className={cn(
                            buttonVariants({ variant: "amber", size: "lg" }),
                        )}
                    >
                        <Users className="w-4 h-4 mr-1" />
                        {t("ctaTrustees")}
                    </Link>
                    <Link
                        href="#timeline"
                        className={cn(
                            buttonVariants({ variant: "secondary", size: "lg" }),
                        )}
                    >
                        {t("ctaTimeline")}
                        <ArrowDown className="w-4 h-4 ml-1" />
                    </Link>
                </HeroCta>
            </HeroContent>
        </Hero>
    )
}
