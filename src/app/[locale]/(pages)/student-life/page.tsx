import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";

import { NssOutreachSection } from "./nss-outreach-section";
import { EventsCelebrationsSection } from "./events-celebrations-section";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/student-life", title: "Student Life & NSS | VJKM College" });
}

export default function Page() {
  return (
    <main className="space-y-0">
      <NssOutreachSection />
      <EventsCelebrationsSection />
    </main>
  );
}
