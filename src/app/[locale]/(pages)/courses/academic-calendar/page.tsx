import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import SemesterTimelineTable from "./semester-timeline-table";
import InternalAssessmentDates from "./internal-assessment-dates";
import UniversityExamSchedule from "./university-exam-schedule";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/courses/academic-calendar", title: "Academic Calendar | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <SemesterTimelineTable />
      <InternalAssessmentDates />
      <UniversityExamSchedule />
    </main>
  );
}
