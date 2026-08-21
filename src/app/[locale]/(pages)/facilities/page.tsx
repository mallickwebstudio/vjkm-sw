import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";

import { LibrarySection } from "./library-section";
import { SportsFitnessSection } from "./sports-fitness-section";
import { StudentAmenitiesSection } from "./student-amenities-section";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/facilities", title: "Facilities & Amenities | VJKM College" });
}

export default function Page() {
  return (
    <main className="space-y-0">
      <LibrarySection />
      <SportsFitnessSection />
      <StudentAmenitiesSection />
    </main>
  );
}
