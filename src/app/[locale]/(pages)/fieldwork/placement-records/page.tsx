import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import PlacementStatsTable from "./placement-stats-table";
import TopRecruitersGallery from "./top-recruiters-gallery";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/fieldwork/placement-records", title: "Placement Records | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <PlacementStatsTable />
      <TopRecruitersGallery />
    </main>
  );
}
