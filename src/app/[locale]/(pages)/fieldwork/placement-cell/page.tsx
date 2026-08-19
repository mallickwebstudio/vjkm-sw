import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import CellObjectives from "./cell-objectives";
import RecruitmentDriveSchedule from "./recruitment-drive-schedule";
import StudentPlacementOfficers from "./student-placement-officers";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/fieldwork/placement-cell", title: "Placement Cell | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <CellObjectives />
      <RecruitmentDriveSchedule />
      <StudentPlacementOfficers />
    </main>
  );
}
