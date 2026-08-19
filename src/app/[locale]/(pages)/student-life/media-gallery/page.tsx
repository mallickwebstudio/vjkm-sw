import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import FilterablePhotoGrid from "./filterable-photo-grid";
import VideoGallery from "./video-gallery";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/student-life/media-gallery", title: "Media Gallery | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <FilterablePhotoGrid />
      <VideoGallery />
    </main>
  );
}
