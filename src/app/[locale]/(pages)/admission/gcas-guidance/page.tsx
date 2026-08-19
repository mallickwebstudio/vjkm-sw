import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import PortalGuide from "./portal-guide";
import DocumentChecklist from "./document-checklist";
import HelpDeskVerificationCenter from "./help-desk-verification-center";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/admission/gcas-guidance", title: "GCAS Guidance | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <PortalGuide />
      <DocumentChecklist />
      <HelpDeskVerificationCenter />
    </main>
  );
}
