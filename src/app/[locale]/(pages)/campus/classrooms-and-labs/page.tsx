import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import SmartClassrooms from "./smart-classrooms";
import ComputerLab from "./computer-lab";
import SeminarHalls from "./seminar-halls";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/campus/classrooms-and-labs", title: "Classrooms & Labs | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <SmartClassrooms />
      <ComputerLab />
      <SeminarHalls />
    </main>
  );
}
