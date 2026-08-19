import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import MediaCoverageGallery from "./media-coverage-gallery";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/news-and-updates/news-clippings", title: "News Clippings | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <MediaCoverageGallery />
    </main>
  );
}
