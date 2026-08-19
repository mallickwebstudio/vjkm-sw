import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import BooksAndJournals from "./books-and-journals";
import DigitalLibraryAccess from "./digital-library-access";
import BookBankScheme from "./book-bank-scheme";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/facilities/library", title: "Library | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <BooksAndJournals />
      <DigitalLibraryAccess />
      <BookBankScheme />
    </main>
  );
}
