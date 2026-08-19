import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import EqualOpportunityPillars from "./equal-opportunity-pillars";
import RedressalForm from "./redressal-form";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/committees/sc-st-obc-minority-cell", title: "SC/ST/OBC Cell | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <EqualOpportunityPillars />
      <RedressalForm />
    </main>
  );
}
