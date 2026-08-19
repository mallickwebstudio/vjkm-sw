import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import HeroSection from "./hero";
import AntiRaggingPolicy from "./anti-ragging-policy";
import SquadMembersAndHelplines from "./squad-members-and-helplines";
import OnlineAffidavitLink from "./online-affidavit-link";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return getSeoMetadata({ locale, path: "/committees/anti-ragging-cell", title: "Anti-Ragging Cell | VJKM College" });
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AntiRaggingPolicy />
      <SquadMembersAndHelplines />
      <OnlineAffidavitLink />
    </main>
  );
}
