import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import NoticeBoard from "./notice-board";
import NoticeBoardSection from "./notice-board-section";
import AboutSnapshot from "./about-snapshot";
import CoursesSpotlight from "./courses-spotlight";
import { GcasGuide } from "@/components/shared/gcas-guide";
import CareerFieldworkGrid from "./career-fieldwork-grid";
import RecentUpdatesFeed from "./recent-updates-feed";
import { GalleryPreviewSection } from "./gallery-preview-section";
import { getNotices } from "@/db/notice";

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
  const notices = await getNotices();

  return (
    <main>
      <HeroSection />
      <NoticeBoard />
      <NoticeBoardSection notices={notices} locale={locale} />
      <AboutSnapshot />
      <CoursesSpotlight />
      <GcasGuide />
      <CareerFieldworkGrid />
      <GalleryPreviewSection />
      <RecentUpdatesFeed />
    </main>
  );
}
