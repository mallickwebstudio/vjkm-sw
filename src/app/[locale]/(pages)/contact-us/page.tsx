import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import React from "react";
import { Hero, HeroContent, HeroH1, HeroP } from "@/components/section/hero";
import Contact from "@/components/section/contact";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/contact-us", title: "Contact Us | VJKM College" });
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main className="space-y-0">
      <Hero variant="left" className="flex items-center bg-slate min-h-[45vh]">
        <HeroContent className="max-w-3xl">
          <Badge variant="outline" className="h-6 bg-amber/10 text-amber-tone border-amber/30 font-medium text-sm [&>svg]:size-3.5! mb-2">
            <MapPin />
            Vadodara Campus & Helpdesk
          </Badge>
          <HeroH1 className="h1 font-extrabold text-white">
            Get in Touch With Us
          </HeroH1>
          <HeroP className="max-w-2xl">
            Have questions regarding BSW & MSW admissions, GCAS portal verification, fieldwork partnerships, or trust scholarship guidance? Reach out to our campus team.
          </HeroP>
        </HeroContent>
      </Hero>

      <Contact locale={locale} />
    </main>
  );
}
