import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import NoticeBoard from "./notice-board";
import AboutSnapshot from "./about-snapshot";
import CoursesSpotlight from "./courses-spotlight";
import { GcasGuide } from "@/components/shared/gcas-guide";
import CareerFieldworkGrid from "./career-fieldwork-grid";
import RecentUpdatesFeed from "./recent-updates-feed";

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

export default async function Page() {
  return (
    <main>
      <HeroSection />
      <NoticeBoard />
      <AboutSnapshot />
      <CoursesSpotlight />
      <GcasGuide />
      <CareerFieldworkGrid />
      <RecentUpdatesFeed />
    </main>
  );
}
