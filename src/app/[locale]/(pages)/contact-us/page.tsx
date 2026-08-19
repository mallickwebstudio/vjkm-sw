import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import ContactInfoCards from "./contact-info-cards";
import CampusTimings from "./campus-timings";
import OfficialEmailAddresses from "./official-email-addresses";
import CampusLocationMap from "./campus-location-map";
import ContactInquiryForm from "./contact-inquiry-form";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/contact-us", title: "Contact Us | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ContactInfoCards />
      <CampusTimings />
      <OfficialEmailAddresses />
      <CampusLocationMap />
      <ContactInquiryForm />
    </main>
  );
}
