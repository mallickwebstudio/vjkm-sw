import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";

import { FieldworkPracticumSection } from "./fieldwork-practicum-section";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({
    locale,
    page: "fieldwork",
    path: "/fieldwork",
  });
}

export default function Page() {
  return (
    <main className="space-y-0">
      <FieldworkPracticumSection />
    </main>
  );
}
