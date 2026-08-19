import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import TrustOverview from "./trust-overview";
import BoardOfTrustees from "./board-of-trustees";
import LegacyTimeline from "./legacy-timeline";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/about-us/about-trust", title: "About Trust | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <TrustOverview />
      <BoardOfTrustees />
      <LegacyTimeline />
    </main>
  );
}
