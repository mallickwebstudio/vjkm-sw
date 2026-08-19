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
  return getSeoMetadata({ locale, path: "/fieldwork", title: "Fieldwork & Placements | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <Hero variant="left">
        <HeroContent>
          <HeroH1>Fieldwork Practicum & Placements</HeroH1>
          <HeroP>Concurrent field visits, 7-day rural immersion camps, NGO & CSR partner network, placement cell, & recruiter registration.</HeroP>
        </HeroContent>
      </Hero>
      <Section>
        <SectionHeader>
          <SectionTitle>Fieldwork & Career Options</SectionTitle>
          <SectionDescription>Select a sub-section below to explore practical training & hiring network.</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/fieldwork/fieldwork-practicum" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Fieldwork Practicum →</h3>
                <p className="text-xs text-muted-foreground">Concurrent fieldwork, 7-day rural camps, agency exposure, & block placement internships.</p>
              </div>
            </Link>
            <Link href="/fieldwork/placement-cell" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Placement Cell →</h3>
                <p className="text-xs text-muted-foreground">Cell objectives, recruitment drive dates, & student placement officers.</p>
              </div>
            </Link>
            <Link href="/fieldwork/partnering-agencies" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Partnering Agencies →</h3>
                <p className="text-xs text-muted-foreground">NGO partners, corporate CSR units, & Govt social defense departments.</p>
              </div>
            </Link>
            <Link href="/fieldwork/placement-records" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Placement Records →</h3>
                <p className="text-xs text-muted-foreground">Year-on-year hiring metrics, average packages, & top recruiters gallery.</p>
              </div>
            </Link>
            <Link href="/fieldwork/for-recruiters" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">For Recruiters →</h3>
                <p className="text-xs text-muted-foreground">Dean's invitation pitch, batch demographics brochure, & recruiter registration form.</p>
              </div>
            </Link>
          </div>
        </SectionContent>
      </Section>
    </main>
  );
}
