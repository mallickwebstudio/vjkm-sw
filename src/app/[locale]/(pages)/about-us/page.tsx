import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import TrustHero from "./about-trust-hero";
import TrustOverview from "./trust-overview";
import BoardOfTrustees from "./board-of-trustees";
import LegacyTimeline from "./legacy-timeline";
import PrincipalMessage from "./principal-message";
import VisionMissionValues from "./vision-mission-values";
import AffiliationCompliance from "./affiliation-compliance";
import BoardOfGovernors from "./board-of-governors";
import CollegeDevelopmentCommittee from "./college-development-committee";
import AcademicCouncil from "./academic-council";
import FacultyAndStaffs from "@/components/section/faculty-and-staffs";
import ResearchOutreach from "./research-outreach";
import AdminSupportStaff from "./admin-support-staff";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/about-us", title: "About Us | VJKM College & Trust" });
}

export default async function Page() {
  return (
    <main className="space-y-0">
      {/* 1. About Trust Section */}
      <div id="about-trust" className="scroll-mt-20">
        <TrustHero />
        <TrustOverview />
        <BoardOfTrustees />
        <LegacyTimeline />
      </div>

      {/* 2. About College Section */}
      <div id="about-college" className="scroll-mt-20">
        <PrincipalMessage />
        <VisionMissionValues />
        <AffiliationCompliance />
      </div>

      {/* 3. Governing Body Section */}
      <div id="governing-body" className="scroll-mt-20">
        <BoardOfGovernors />
        <CollegeDevelopmentCommittee />
        <AcademicCouncil />
      </div>

      {/* 4. Faculty & Staff Section */}
      <div id="faculty-and-staff" className="scroll-mt-20">
        <FacultyAndStaffs id="faculty-and-staff-grid" />
        <ResearchOutreach />
        <AdminSupportStaff />
      </div>
    </main>
  );
}
