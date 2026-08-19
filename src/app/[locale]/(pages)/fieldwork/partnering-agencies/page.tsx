import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import NgoPartners from "./ngo-partners";
import CorporateCsrUnits from "./corporate-csr-units";
import GovtSocialDefenseDepts from "./govt-social-defense-depts";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/fieldwork/partnering-agencies", title: "Partnering Agencies | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <NgoPartners />
      <CorporateCsrUnits />
      <GovtSocialDefenseDepts />
    </main>
  );
}
