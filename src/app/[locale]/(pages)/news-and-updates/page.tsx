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
  return getSeoMetadata({ locale, path: "/news-and-updates", title: "News & Updates | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <Hero variant="left">
        <HeroContent>
          <HeroH1>News & Campus Updates</HeroH1>
          <HeroP>Official notices, circulars, exam timetables, upcoming campus events, and press media clippings.</HeroP>
        </HeroContent>
      </Hero>
      <Section>
        <SectionHeader>
          <SectionTitle>News Categories</SectionTitle>
          <SectionDescription>Select a category below to view institutional announcements.</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/news-and-updates/notices-and-circulars" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Notices & Circulars →</h3>
                <p className="text-xs text-muted-foreground">Filterable notices table for academic, exam, GCAS admission, & admin circulars.</p>
              </div>
            </Link>
            <Link href="/news-and-updates/upcoming-events" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Upcoming Events →</h3>
                <p className="text-xs text-muted-foreground">Guest lectures, workshops, rural camps, & upcoming event registration cards.</p>
              </div>
            </Link>
            <Link href="/news-and-updates/news-clippings" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">News & Media Clippings →</h3>
                <p className="text-xs text-muted-foreground">Press coverage, newspaper articles, & university media highlights gallery.</p>
              </div>
            </Link>
          </div>
        </SectionContent>
      </Section>
    </main>
  );
}
