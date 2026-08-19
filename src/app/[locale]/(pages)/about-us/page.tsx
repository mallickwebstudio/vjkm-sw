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
  return getSeoMetadata({ locale, path: "/about-us", title: "About Us | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <Hero variant="left">
        <HeroContent>
          <HeroH1>About Vadodara Jilla Kelavani Mandal</HeroH1>
          <HeroP>Explore our rich legacy, institutional leadership, governing body committees, and dedicated faculty members.</HeroP>
        </HeroContent>
      </Hero>
      <Section>
        <SectionHeader>
          <SectionTitle>About Us Navigation</SectionTitle>
          <SectionDescription>Select a sub-section to explore VJKM trust and college details.</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/about-us/about-trust" className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-bold text-base mb-1">About Trust →</h3>
              <p className="text-xs text-muted-foreground">VJKM profile, trustees, and history since 1957.</p>
            </Link>
            <Link href="/about-us/about-college" className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-bold text-base mb-1">About College →</h3>
              <p className="text-xs text-muted-foreground">Principal's message, vision, mission, and SGGU affiliation.</p>
            </Link>
            <Link href="/about-us/governing-body" className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-bold text-base mb-1">Governing Body →</h3>
              <p className="text-xs text-muted-foreground">Board of Governors, CDC, and Academic Council.</p>
            </Link>
            <Link href="/about-us/faculty-and-staff" className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-bold text-base mb-1">Faculty & Staff →</h3>
              <p className="text-xs text-muted-foreground">Faculty directory, research outreach, and admin staff.</p>
            </Link>
          </div>
        </SectionContent>
      </Section>
    </main>
  );
}
