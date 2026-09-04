import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";

import { AdmissionProcessSection } from "./admission-process-section";
import { GcasGuide } from "@/components/shared/gcas-guide";
import { ScholarshipsSection } from "./scholarships-section";
import { AdmissionInquirySection } from "./admission-inquiry-section";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/admission", title: "Admissions 2026-27 | VJKM College" });
}

export default function Page() {
  return (
    <main className="space-y-0">
      <AdmissionProcessSection />
      <GcasGuide />
      <AdmissionInquirySection />
    </main>
  );
}
