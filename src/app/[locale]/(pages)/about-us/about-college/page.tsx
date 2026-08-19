import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import PrincipalMessage from "./principal-message";
import VisionMissionValues from "./vision-mission-values";
import AffiliationCompliance from "./affiliation-compliance";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/about-us/about-college", title: "About College | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <PrincipalMessage />
      <VisionMissionValues />
      <AffiliationCompliance />
    </main>
  );
}
