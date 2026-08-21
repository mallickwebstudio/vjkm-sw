import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";

import { IqacSection } from "./iqac-section";
import { AntiRaggingSection } from "./anti-ragging-section";
import { InternalComplaintsSection } from "./internal-complaints-section";
import { EqualOpportunitySection } from "./equal-opportunity-section";
import { RtiDisclosuresSection } from "./rti-disclosures-section";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/committees", title: "Committees & Compliance | VJKM College" });
}

export default function Page() {
  return (
    <main className="space-y-0">
      <IqacSection />
      <AntiRaggingSection />
      <InternalComplaintsSection />
      <EqualOpportunitySection />
      <RtiDisclosuresSection />
    </main>
  );
}
