import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";

import { NoticesCircularsSection } from "./notices-circulars-section";
import { UpcomingEventsSection } from "./upcoming-events-section";
import { NewsClippingsSection } from "./news-clippings-section";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/news-and-updates", title: "News & Campus Updates | VJKM College" });
}

export default function Page() {
  return (
    <main className="space-y-0">
      <NoticesCircularsSection />
      <UpcomingEventsSection />
      <NewsClippingsSection />
    </main>
  );
}
