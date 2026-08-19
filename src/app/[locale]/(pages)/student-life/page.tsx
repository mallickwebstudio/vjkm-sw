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
  return getSeoMetadata({ locale, path: "/student-life", title: "Student Life | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <Hero variant="left">
        <HeroContent>
          <HeroH1>Student Life & Campus Experience</HeroH1>
          <HeroP>Vibrant campus activities, NSS outreach, annual cultural festivals, student clubs, and media gallery.</HeroP>
        </HeroContent>
      </Hero>
      <Section>
        <SectionHeader>
          <SectionTitle>Student Life Categories</SectionTitle>
          <SectionDescription>Select an activity section to explore student life at VJKM.</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/student-life/nss-and-social-outreach" className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-bold text-base mb-1">NSS & Social Outreach →</h3>
              <p className="text-xs text-muted-foreground">Blood donation camps, cleanliness drives, & adopted village initiatives.</p>
            </Link>
            <Link href="/student-life/events-and-celebrations" className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-bold text-base mb-1">Events & Celebrations →</h3>
              <p className="text-xs text-muted-foreground">Annual cultural fest, World Social Work Day, & sports meets.</p>
            </Link>
            <Link href="/student-life/clubs-and-cells" className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-bold text-base mb-1">Clubs & Cells →</h3>
              <p className="text-xs text-muted-foreground">Cultural club, debate & civil services circle, & eco club.</p>
            </Link>
            <Link href="/student-life/media-gallery" className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-bold text-base mb-1">Media Gallery →</h3>
              <p className="text-xs text-muted-foreground">Filterable photo grid & student testimonial video gallery.</p>
            </Link>
          </div>
        </SectionContent>
      </Section>
    </main>
  );
}
