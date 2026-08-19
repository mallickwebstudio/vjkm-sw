import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import FacultyDirectory from "./faculty-directory";
import ResearchOutreach from "./research-outreach";
import AdminSupportStaff from "./admin-support-staff";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/about-us/faculty-and-staff", title: "Faculty & Staff | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <FacultyDirectory />
      <ResearchOutreach />
      <AdminSupportStaff />
    </main>
  );
}
