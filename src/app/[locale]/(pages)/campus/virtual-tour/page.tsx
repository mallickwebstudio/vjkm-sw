import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import Interactive360Viewer from "./interactive-360-viewer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/campus/virtual-tour", title: "Virtual Tour | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <Interactive360Viewer />
    </main>
  );
}
