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
  return getSeoMetadata({ locale, path: "/admission", title: "Admissions 2026-27 | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <Hero variant="left">
        <HeroContent>
          <HeroH1>Admissions 2026-27</HeroH1>
          <HeroP>Complete guidance for GCAS portal registration, seat matrix, fee structure, and scholarships for BSW & MSW.</HeroP>
        </HeroContent>
      </Hero>
      <Section>
        <SectionHeader>
          <SectionTitle>Admission Resources</SectionTitle>
          <SectionDescription>Select an admission guide below to begin your application.</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admission/admission-process" className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-bold text-base mb-1">Admission Process →</h3>
              <p className="text-xs text-muted-foreground">GCAS flowchart, eligibility, seat matrix, & fee structure.</p>
            </Link>
            <Link href="/admission/gcas-guidance" className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-bold text-base mb-1">GCAS Guidance →</h3>
              <p className="text-xs text-muted-foreground">Step-by-step portal guide, document checklist, & campus help desk.</p>
            </Link>
            <Link href="/admission/scholarship-and-financial-aid" className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-bold text-base mb-1">Scholarships & Aid →</h3>
              <p className="text-xs text-muted-foreground">Digital Gujarat, MYSY scheme, & Trust grants.</p>
            </Link>
            <Link href="/admission/admission-inquiry" className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-bold text-base mb-1">Admission Inquiry →</h3>
              <p className="text-xs text-muted-foreground">Online inquiry form, WhatsApp desk, & FAQs.</p>
            </Link>
          </div>
        </SectionContent>
      </Section>
    </main>
  );
}
