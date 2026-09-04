import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import TrustHero from "./about-trust-hero";
import BoardOfTrustees from "./board-of-trustees";
import LegacyTimeline from "./legacy-timeline";
import PrincipalMessage from "./principal-message";
import VisionMissionValues from "./vision-mission-values";
import AffiliationCompliance from "./affiliation-compliance";
import FacultyAndStaffs from "@/components/section/faculty-and-staffs";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({
    locale,
    page: "aboutUs",
    path: "/about-us",
  });
}

export default async function Page() {
  return (
    <main className="space-y-0">
      {/* 1. About Trust Section */}
      <div id="about-trust" className="scroll-mt-20">
        <TrustHero />
        <VisionMissionValues />
        <BoardOfTrustees />
        {/* <LegacyTimeline /> */}
      </div>

      {/* 2. About College Section */}
      <div id="about-college" className="scroll-mt-20">
        <PrincipalMessage />
        <FacultyAndStaffs id="faculty-and-staff-grid" />
        <AffiliationCompliance />
      </div>
    </main>
  );
}
