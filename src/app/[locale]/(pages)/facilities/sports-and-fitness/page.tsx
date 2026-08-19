import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import SportsGrounds from "./sports-grounds";
import FitnessGym from "./fitness-gym";
import YogaAndWellnessCenter from "./yoga-and-wellness-center";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/facilities/sports-and-fitness", title: "Sports & Fitness | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <SportsGrounds />
      <FitnessGym />
      <YogaAndWellnessCenter />
    </main>
  );
}
