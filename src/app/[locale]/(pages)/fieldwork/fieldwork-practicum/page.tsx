import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import ConcurrentFieldwork from "./concurrent-fieldwork";
import RuralCampExperience from "./rural-camp-experience";
import AgencyVisits from "./agency-visits";
import BlockPlacementInternships from "./block-placement-internships";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/fieldwork/fieldwork-practicum", title: "Fieldwork Practicum | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ConcurrentFieldwork />
      <RuralCampExperience />
      <AgencyVisits />
      <BlockPlacementInternships />
    </main>
  );
}
