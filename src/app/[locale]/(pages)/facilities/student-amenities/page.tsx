import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import GirlsCommonRoom from "./girls-common-room";
import CanteenFacilities from "./canteen-facilities";
import FirstAidMedicalRoom from "./first-aid-medical-room";
import TransportGuidance from "./transport-guidance";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/facilities/student-amenities", title: "Student Amenities | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <GirlsCommonRoom />
      <CanteenFacilities />
      <FirstAidMedicalRoom />
      <TransportGuidance />
    </main>
  );
}
