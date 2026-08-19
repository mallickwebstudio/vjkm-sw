import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import IqacCommitteeComposition from "./iqac-committee-composition";
import QualityInitiatives from "./quality-initiatives";
import MeetingMinutesAndAtr from "./meeting-minutes-and-atr";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/committees/iqac", title: "IQAC | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <IqacCommitteeComposition />
      <QualityInitiatives />
      <MeetingMinutesAndAtr />
    </main>
  );
}
