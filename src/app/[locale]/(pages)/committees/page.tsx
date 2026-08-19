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
  return getSeoMetadata({ locale, path: "/committees", title: "Committees & Cells | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <Hero variant="left">
        <HeroContent>
          <HeroH1>Institutional Committees & Compliance Cells</HeroH1>
          <HeroP>Internal Quality Assurance Cell (IQAC), Anti-Ragging Cell, POSH Internal Complaint Committee, Equal Opportunity Cell, & RTI disclosures.</HeroP>
        </HeroContent>
      </Hero>
      <Section>
        <SectionHeader>
          <SectionTitle>Committees & Statutory Cells</SectionTitle>
          <SectionDescription>Select a committee to view composition, policies, and grievance procedures.</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/committees/iqac" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">IQAC Quality Cell →</h3>
                <p className="text-xs text-muted-foreground">Quality initiatives, committee composition, & meeting ATR PDFs.</p>
              </div>
            </Link>
            <Link href="/committees/anti-ragging-cell" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Anti-Ragging Cell →</h3>
                <p className="text-xs text-muted-foreground">UGC anti-ragging policy, squad members, helplines, & online affidavit link.</p>
              </div>
            </Link>
            <Link href="/committees/internal-complaint-committee" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Internal Complaint Committee (POSH) →</h3>
                <p className="text-xs text-muted-foreground">POSH mandate, gender equity policy, & confidential grievance filing.</p>
              </div>
            </Link>
            <Link href="/committees/sc-st-obc-minority-cell" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">SC / ST / OBC / Minority Cell →</h3>
                <p className="text-xs text-muted-foreground">Equal opportunity pillars, reservation guidance, & redressal form.</p>
              </div>
            </Link>
            <Link href="/committees/rti-and-disclosures" className="p-6 border rounded-xl hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">RTI & Mandatory Disclosures →</h3>
                <p className="text-xs text-muted-foreground">Public Information Officer details, affiliation letters, & mandatory PDFs.</p>
              </div>
            </Link>
          </div>
        </SectionContent>
      </Section>
    </main>
  );
}
