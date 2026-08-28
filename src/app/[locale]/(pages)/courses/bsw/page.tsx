import { Locale, routing } from "@/i18n/routing";
import CourseDetailPage, { generateMetadata as generateCourseMetadata } from "../[slug]/page";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return generateCourseMetadata({
    params: Promise.resolve({ locale, slug: "bsw" }),
  });
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <CourseDetailPage params={Promise.resolve({ locale, slug: "bsw" })} />;
}
