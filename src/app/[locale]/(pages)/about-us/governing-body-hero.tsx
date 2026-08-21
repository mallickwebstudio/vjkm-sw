import React from 'react'
import Link from 'next/link'
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from '@/components/section/hero'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Landmark, ShieldCheck, ArrowDown, Users } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function HeroSection() {
    const t = await getTranslations("governingBody.hero");

    return (
        <Hero variant="left" className="flex items-center bg-slate min-h-[60vh]">
            <HeroContent className="max-w-3xl">
                {/* Badges Bar */}
                <div className="space-y-2 mb-2">
                    <Badge variant="outline" className="h-6 bg-emerald/10 text-emerald-tone border-emerald/30 font-medium text-sm [&>svg]:size-3.5!">
                        <Landmark />
                        {t("badge1")}
                    </Badge> <br />
                    <Badge variant="outline" className="h-6 bg-sky/10 text-sky-tone border-sky/30 font-medium text-sm [&>svg]:size-3.5!">
                        <ShieldCheck />
                        {t("badge2")}
                    </Badge>
                </div>

                <HeroH1 className="h1 font-extrabold text-white">
                    {t("h1Title")}
                </HeroH1>

                <HeroP className="max-w-2xl">
                    {t("p")}
                </HeroP>

                {/* Primary & Secondary CTAs */}
                <HeroCta>
                    <Link
                        href="#board-of-governors"
                        className={cn(
                            buttonVariants({ variant: "amber", size: "lg" }),
                        )}
                    >
                        <Users className="w-4 h-4 mr-1" />
                        {t("ctaBoard")}
                    </Link>
                    <Link
                        href="#cdc"
                        className={cn(
                            buttonVariants({ variant: "secondary", size: "lg" }),
                        )}
                    >
                        {t("ctaCdc")}
                        <ArrowDown className="w-4 h-4 ml-1" />
                    </Link>
                </HeroCta>
            </HeroContent>
        </Hero>
    )
}
