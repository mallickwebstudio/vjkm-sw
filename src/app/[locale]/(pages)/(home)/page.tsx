import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import NoticeBoard from "./notice-board";
import AboutSnapshot from "./about-snapshot";
import CoursesSpotlight from "./courses-spotlight";
import GcasThreeStepGuide from "./gcas-three-step-guide";
import CareerFieldworkGrid from "./career-fieldwork-grid";
import CampusAmenitiesPreview from "./campus-amenities-preview";
import RecentUpdatesFeed from "./recent-updates-feed";
import TestimonialCarousel from "./testimonial-carousel";

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
      <GcasThreeStepGuide />
      <CareerFieldworkGrid />
      <CampusAmenitiesPreview />
      <RecentUpdatesFeed />
      <TestimonialCarousel />
    </main>
  );
}
