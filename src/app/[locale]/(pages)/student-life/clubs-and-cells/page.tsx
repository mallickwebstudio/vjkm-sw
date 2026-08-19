import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import CulturalClub from "./cultural-club";
import DebateAndCivilServicesCircle from "./debate-and-civil-services-circle";
import EcoClub from "./eco-club";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/student-life/clubs-and-cells", title: "Clubs & Cells | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <CulturalClub />
      <DebateAndCivilServicesCircle />
      <EcoClub />
    </main>
  );
}
