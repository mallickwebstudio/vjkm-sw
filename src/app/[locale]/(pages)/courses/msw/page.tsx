import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import SpecializationTracks from "./specialization-tracks";
import EligibilityNorms from "./eligibility-norms";
import PracticumAndDissertation from "./practicum-and-dissertation";
import CareerOutcomes from "./career-outcomes";
import DownloadSyllabusPdf from "./download-syllabus-pdf";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/courses/msw", title: "MSW Course | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <SpecializationTracks />
      <EligibilityNorms />
      <PracticumAndDissertation />
      <CareerOutcomes />
      <DownloadSyllabusPdf />
    </main>
  );
}
