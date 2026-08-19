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
  return getSeoMetadata({ locale, path: "/courses", title: "Academic Courses | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <Hero variant="left">
        <HeroContent>
          <HeroH1>Academic Courses & Degree Tracks</HeroH1>
          <HeroP>Discover our professional undergraduate BSW and postgraduate MSW programs engineered for field practice and career success.</HeroP>
        </HeroContent>
      </Hero>
      <Section>
        <SectionHeader>
          <SectionTitle>Our Academic Programs</SectionTitle>
          <SectionDescription>Choose your professional track in Social Work & Community Welfare.</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/courses/bsw" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-primary">Undergraduate</span>
                <h3 className="font-bold text-lg mt-1 mb-2">Bachelor of Social Work (BSW) →</h3>
                <p className="text-xs text-muted-foreground">3 Years | 6 Semesters | 70 Seats. Civil service and field practicum aligned.</p>
              </div>
            </Link>
            <Link href="/courses/msw" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-primary">Postgraduate</span>
                <h3 className="font-bold text-lg mt-1 mb-2">Master of Social Work (MSW) →</h3>
                <p className="text-xs text-muted-foreground">2 Years | 4 Semesters | 200 Seats. HR/IR, Medical & Psychiatric, CD tracks.</p>
              </div>
            </Link>
            <Link href="/courses/academic-calendar" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-primary">Schedule</span>
                <h3 className="font-bold text-lg mt-1 mb-2">Academic Calendar →</h3>
                <p className="text-xs text-muted-foreground">Semester timelines, mid-term assessment dates, & SGGU university exam schedule.</p>
              </div>
            </Link>
          </div>
        </SectionContent>
      </Section>
    </main>
  );
}
