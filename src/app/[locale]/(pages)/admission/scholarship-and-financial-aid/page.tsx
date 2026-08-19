import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import DigitalGujaratScholarships from "./digital-gujarat-scholarships";
import MysyGuidance from "./mysy-guidance";
import TrustScholarships from "./trust-scholarships";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/admission/scholarship-and-financial-aid", title: "Scholarships | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <DigitalGujaratScholarships />
      <MysyGuidance />
      <TrustScholarships />
    </main>
  );
}
