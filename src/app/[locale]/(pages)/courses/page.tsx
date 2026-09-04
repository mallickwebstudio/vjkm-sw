import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section/section";
import { Hero, HeroContent, HeroH1, HeroP } from "@/components/section/hero";
import { GraduationCap, ArrowRight } from "lucide-react";
import { AcademicCalendarSection } from "./academic-calendar-section";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({
    locale,
    page: "courses",
    path: "/courses",
  });
}

export default function Page() {
  return (
    <main className="space-y-0">
      <Hero
        imageSrc="/images/gallery/short-pick/06.webp"
        imageAlt="Academic Courses and Degree Programs at VJKM College"
        variant="left"
        className="bg-slate min-h-[50vh] flex items-center"
      >
        <HeroContent>
          <HeroH1>Academic Courses & Professional Degree Tracks</HeroH1>
          <HeroP>Discover our SGGU-affiliated BSW and MSW degree programs designed for field practice, civil services, and leadership.</HeroP>
        </HeroContent>
      </Hero>

      {/* Courses Overview Cards */}
      <Section className="bg-slate-muted">
        <SectionHeader align="center">
          <SectionTitle>Degree Programs</SectionTitle>
          <SectionDescription>Choose your professional track in Social Work & Community Development.</SectionDescription>
        </SectionHeader>

        <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BSW Card */}
          <div id="bsw" className="p-8 rounded-2xl bg-card border border-border shadow-md space-y-4 hover:shadow-lg transition-all scroll-mt-20">
            <div className="p-3 rounded-xl bg-amber/10 text-amber-tone w-fit">
              <GraduationCap className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-tone">Undergraduate Degree</span>
            <h2 className="text-2xl font-extrabold text-foreground">Bachelor of Social Work (BSW)</h2>
            <p className="text-sm text-slate-tone leading-relaxed">
              3 Years | 6 Semesters | 70 Intake Seats. Aligned with SGGU university curriculum, mandatory fieldwork practicum, and civil services foundation.
            </p>
            <div className="pt-2">
              <Link href="/courses/bsw" className={cn(buttonVariants({ variant: "amber", size: "lg" }))}>
                View Full BSW Program Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* MSW Card */}
          <div id="msw" className="p-8 rounded-2xl bg-card border border-border shadow-md space-y-4 hover:shadow-lg transition-all scroll-mt-20">
            <div className="p-3 rounded-xl bg-sky/10 text-sky-tone w-fit">
              <GraduationCap className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase font-extrabold tracking-wider text-sky-tone">Postgraduate Degree</span>
            <h2 className="text-2xl font-extrabold text-foreground">Master of Social Work (MSW)</h2>
            <p className="text-sm text-slate-tone leading-relaxed">
              2 Years | 4 Semesters | 200 Intake Seats. Specialization tracks in HR/IR, Medical & Psychiatric Social Work, and Community Development.
            </p>
            <div className="pt-2">
              <Link href="/courses/msw" className={cn(buttonVariants({ variant: "sky", size: "lg" }))}>
                View Full MSW Program Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </SectionContent>
      </Section>

      {/* Academic Calendar Section */}
      <AcademicCalendarSection />
    </main>
  );
}
