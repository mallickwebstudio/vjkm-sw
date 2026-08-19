import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import RecruiterInvitation from "./recruiter-invitation";
import BatchDemographicsBrochure from "./batch-demographics-brochure";
import RecruiterRegistrationForm from "./recruiter-registration-form";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/fieldwork/for-recruiters", title: "For Recruiters | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <RecruiterInvitation />
      <BatchDemographicsBrochure />
      <RecruiterRegistrationForm />
    </main>
  );
}
