import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import InquiryForm from "./inquiry-form";
import WhatsappChatWidget from "./whatsapp-chat-widget";
import AdmissionFaqAccordion from "./admission-faq-accordion";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/admission/admission-inquiry", title: "Admission Inquiry | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <InquiryForm />
      <WhatsappChatWidget />
      <AdmissionFaqAccordion />
    </main>
  );
}
