import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import GcasProcessFlowchart from "./gcas-process-flowchart";
import EligibilityMatrix from "./eligibility-matrix";
import SeatMatrix from "./seat-matrix";
import FeeStructure from "./fee-structure";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/admission/admission-process", title: "Admission Process | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <GcasProcessFlowchart />
      <EligibilityMatrix />
      <SeatMatrix />
      <FeeStructure />
    </main>
  );
}
