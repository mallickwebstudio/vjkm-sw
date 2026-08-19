import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import CentralAuditoriumSpecs from "./central-auditorium-specs";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/campus/auditorium", title: "Auditorium | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <CentralAuditoriumSpecs />
    </main>
  );
}
