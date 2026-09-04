import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from "@/components/section/hero";
import { FacilitiesSection } from "./facilities-section";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Landmark, Trophy, Dumbbell } from "lucide-react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({
    locale,
    page: "facilities",
    path: "/facilities",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isGu = locale === "gu";

  return (
    <main className="space-y-0">
      <Hero
        imageSrc="/images/facilities/auditorium-0.webp"
        imageAlt="Campus Infrastructure and Facilities at VJKM College"
        variant="left"
        className="flex items-center bg-slate min-h-[50vh]"
      >
        <HeroContent className="max-w-3xl">
          <HeroH1>
            {isGu
              ? "કેમ્પસ સુવિધાઓ અને આધુનિક ઇન્ફ્રાસ્ટ્રક્ચર"
              : "Campus Facilities & Infrastructure"}
          </HeroH1>
          <HeroP>
            {isGu
              ? "વાર્ષિક કાર્યક્રમો માટે વિશાળ ઓડિટોરિયમ, સમર્પિત સ્પોર્ટ્સ ગ્રાઉન્ડ્સ, ફિટનેસ જીમ, યોગ સેન્ટર અને NCC તાલીમ સુવિધાઓ સાથેનું સમૃદ્ધ કેમ્પસ."
              : "Explore our state-of-the-art auditorium, expansive cricket & athletic grounds, modern fitness gym, yoga center, and NCC cadet training facilities."}
          </HeroP>
          <HeroCta>
            <Link
              href="#academic-infrastructure"
              className={cn(buttonVariants({ variant: "amber", size: "sm" }), "gap-1.5 font-bold shadow-xs")}
            >
              <Landmark className="size-4" />
              <span>{isGu ? "ઓડિટોરિયમ અને NCC" : "Auditorium & NCC"}</span>
            </Link>
            <Link
              href="#sports-and-fitness"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5 bg-white/10 text-white hover:bg-white/20 hover:text-white border-white/20")}
            >
              <Trophy className="size-4 text-amber-tone" />
              <span>{isGu ? "સ્પોર્ટ્સ ગ્રાઉન્ડ્સ" : "Sports Grounds"}</span>
            </Link>
            <Link
              href="#fitness-and-wellness"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5 bg-white/10 text-white hover:bg-white/20 hover:text-white border-white/20")}
            >
              <Dumbbell className="size-4 text-emerald-tone" />
              <span>{isGu ? "જીમ અને વેલનેસ" : "Gym & Wellness"}</span>
            </Link>
          </HeroCta>
        </HeroContent>
      </Hero>
      <FacilitiesSection />
    </main>
  );
}

