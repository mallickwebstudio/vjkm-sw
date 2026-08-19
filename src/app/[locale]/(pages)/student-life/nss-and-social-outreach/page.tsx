import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import NssActivities from "./nss-activities";
import AdoptedVillageInitiatives from "./adopted-village-initiatives";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/student-life/nss-and-social-outreach", title: "NSS & Social Outreach | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <NssActivities />
      <AdoptedVillageInitiatives />
    </main>
  );
}
