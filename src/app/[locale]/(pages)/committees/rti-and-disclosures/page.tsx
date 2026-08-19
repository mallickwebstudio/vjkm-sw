import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import PublicInformationOfficerDetails from "./public-information-officer-details";
import UniversityAffiliationLetters from "./university-affiliation-letters";
import MandatoryDisclosurePdfs from "./mandatory-disclosure-pdfs";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/committees/rti-and-disclosures", title: "RTI & Disclosures | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <PublicInformationOfficerDetails />
      <UniversityAffiliationLetters />
      <MandatoryDisclosurePdfs />
    </main>
  );
}
