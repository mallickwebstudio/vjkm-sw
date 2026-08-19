import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import FilterableNoticesTable from "./filterable-notices-table";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/news-and-updates/notices-and-circulars", title: "Notices & Circulars | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <FilterableNoticesTable />
    </main>
  );
}
