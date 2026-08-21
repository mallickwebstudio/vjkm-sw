import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";

import { FieldworkPracticumSection } from "./fieldwork-practicum-section";
import { PlacementCellSection } from "./placement-cell-section";
import { PartneringAgenciesSection } from "./partnering-agencies-section";
import { PlacementRecordsSection } from "./placement-records-section";
import { ForRecruitersSection } from "./for-recruiters-section";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/fieldwork", title: "Fieldwork & Placement Cell | VJKM College" });
}

export default function Page() {
  return (
    <main className="space-y-0">
      <FieldworkPracticumSection />
      <PlacementCellSection />
      <PartneringAgenciesSection />
      <PlacementRecordsSection />
      <ForRecruitersSection />
    </main>
  );
}
