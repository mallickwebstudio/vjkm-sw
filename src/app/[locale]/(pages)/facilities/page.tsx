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
  return getSeoMetadata({ locale, path: "/facilities", title: "Campus Facilities | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <Hero variant="left">
        <HeroContent>
          <HeroH1>Campus Facilities & Amenities</HeroH1>
          <HeroP>Central library, sports turf & fitness gym, girls common room, hygienic canteen, medical care, and transport connectivity.</HeroP>
        </HeroContent>
      </Hero>
      <Section>
        <SectionHeader>
          <SectionTitle>Student Facilities</SectionTitle>
          <SectionDescription>Select a facility category to explore campus infrastructure.</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/facilities/library" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Central Library →</h3>
                <p className="text-xs text-muted-foreground">Books, e-journals, social science research databases, & Book Bank scheme.</p>
              </div>
            </Link>
            <Link href="/facilities/sports-and-fitness" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Sports & Fitness →</h3>
                <p className="text-xs text-muted-foreground">Cricket turf ground, football field, gym, & yoga wellness center.</p>
              </div>
            </Link>
            <Link href="/facilities/student-amenities" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Student Amenities →</h3>
                <p className="text-xs text-muted-foreground">Girls common room, RO canteen, medical room, & transport guidance.</p>
              </div>
            </Link>
          </div>
        </SectionContent>
      </Section>
    </main>
  );
}
