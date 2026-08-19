import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import AnnualCulturalFest from "./annual-cultural-fest";
import WorldSocialWorkDay from "./world-social-work-day";
import SportsDayMeets from "./sports-day-meets";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/student-life/events-and-celebrations", title: "Events & Celebrations | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AnnualCulturalFest />
      <WorldSocialWorkDay />
      <SportsDayMeets />
    </main>
  );
}
