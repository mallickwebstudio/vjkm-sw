import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import EventCardGrid from "./event-card-grid";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/news-and-updates/upcoming-events", title: "Upcoming Events | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <EventCardGrid />
    </main>
  );
}
