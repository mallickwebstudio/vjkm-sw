import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import { Hero, HeroContent, HeroH1, HeroP } from "@/components/section/hero";
import { Section } from "@/components/section/section";
import { Badge } from "@/components/ui/badge";
import { GalleryClient } from "./gallery-client";
import { Camera } from "lucide-react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return getSeoMetadata({
    locale,
    path: "/gallery",
    title: "Campus Photo Gallery & Media Events | VJKM College",
    description:
      "Explore photo archives of BSW and MSW campus events, Janmashtami celebrations, Gandhi Jayanti outreach, 7-Day Rural Camps, and Sports Meets.",
  });
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <main className="space-y-0">
      <Hero
        imageSrc="/images/gallery/bsw/2025-2026/annual-day/01.webp"
        imageAlt="Campus Photo Gallery VJKM College"
        variant="left"
        className="flex items-center bg-slate min-h-[45vh]"
      >
        <HeroContent className="max-w-4xl">
          <HeroH1 className="h1 font-extrabold text-white">
            Campus Photo Gallery
          </HeroH1>
          <HeroP className="max-w-2xl text-slate-300 text-sm sm:text-base">
            Filter through BSW and MSW photo memories categorized by Course, Academic Year, and Key Campus Events.
          </HeroP>
        </HeroContent>
      </Hero>

      <Section className="bg-slate-muted min-h-[60vh]">
        <GalleryClient locale={locale} />
      </Section>
    </main>
  );
}
