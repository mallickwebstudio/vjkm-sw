import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import React from "react";
import { Hero, HeroContent, HeroH1, HeroP } from "@/components/section/hero";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section/section";
import { Link } from "@/i18n/navigation";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/campus", title: "Campus & Infrastructure | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <Hero variant="left">
        <HeroContent>
          <HeroH1>Campus & Infrastructure</HeroH1>
          <HeroP>Explore our modern academic environment, 360° virtual tour, smart classrooms, computer lab, and central auditorium.</HeroP>
        </HeroContent>
      </Hero>
      <Section>
        <SectionHeader>
          <SectionTitle>Campus Facilities</SectionTitle>
          <SectionDescription>Take a tour of our academic infrastructure and learning spaces.</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/campus/virtual-tour" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">360° Virtual Tour →</h3>
                <p className="text-xs text-muted-foreground">Interactive 360-degree viewer of classrooms, grounds, corridors, & library.</p>
              </div>
            </Link>
            <Link href="/campus/classrooms-and-labs" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Classrooms & Labs →</h3>
                <p className="text-xs text-muted-foreground">Smart classrooms, high-speed computer lab, & audio-visual seminar halls.</p>
              </div>
            </Link>
            <Link href="/campus/auditorium" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Central Auditorium →</h3>
                <p className="text-xs text-muted-foreground">Seating capacity, acoustics, stage lighting, & event hosting specifications.</p>
              </div>
            </Link>
          </div>
        </SectionContent>
      </Section>
    </main>
  );
}
