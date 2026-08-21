import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import { VirtualTourSection } from "./virtual-tour-section";
import { ClassroomsLabsSection } from "./classrooms-labs-section";
import { AuditoriumSection } from "./auditorium-section";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/campus", title: "Campus & Infrastructure | VJKM College" });
}

export default function Page() {
  return (
    <main className="space-y-0">
      <VirtualTourSection />
      <ClassroomsLabsSection />
      <AuditoriumSection />
    </main>
  );
}
