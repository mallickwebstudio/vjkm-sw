import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import IccMandate from "./icc-mandate";
import GrievanceFilingProcedure from "./grievance-filing-procedure";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/committees/internal-complaint-committee", title: "Internal Complaint Committee | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <IccMandate />
      <GrievanceFilingProcedure />
    </main>
  );
}
