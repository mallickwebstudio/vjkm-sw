import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import EligibilityCriteria from "./eligibility-criteria";
import SyllabusOutline from "./syllabus-outline";
import FieldworkRequirements from "./fieldwork-requirements";
import CareerOutcomes from "./career-outcomes";
import DownloadSyllabusPdf from "./download-syllabus-pdf";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/courses/bsw", title: "BSW Course | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <EligibilityCriteria />
      <SyllabusOutline />
      <FieldworkRequirements />
      <CareerOutcomes />
      <DownloadSyllabusPdf />
    </main>
  );
}
