import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import NoticeBoard from "./notice-board";
import NoticeBoardSection from "./notice-board-section";
import AboutSnapshot from "./about-snapshot";
import CoursesSpotlight from "./courses-spotlight";
import { GcasGuide } from "@/components/shared/gcas-guide";
import CareerFieldworkGrid from "./career-fieldwork-grid";
import { GalleryPreviewSection } from "./gallery-preview-section";
import { getAnnouncements } from "@/db/notice";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({
    locale,
    page: "home",
    path: "/"
  });
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { notifications, notices } = await getAnnouncements();

  return (
    <main>
      <HeroSection />
      <NoticeBoard notifications={notifications} />
      <NoticeBoardSection notices={notices} locale={locale} />
      <AboutSnapshot />
      <CoursesSpotlight />
      <GcasGuide />
      {/* <CareerFieldworkGrid /> */}
      <GalleryPreviewSection />
    </main>
  );
}

