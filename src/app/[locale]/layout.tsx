import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/navbar";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/layout/footer";
import Contact from "@/components/section/contact";
import OverscreenEnquiryButton from "@/components/shared/overscreen-enquiry-button";
import { siteConfig } from "@/lib/metadata";

const notoSerifHeading = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-serif'
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isGu = locale === "gu";

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: {
      default: siteConfig.name[isGu ? "gu" : "en"],
      template: `%s | ${isGu ? "વી.જે.કે.એમ. કોલેજ" : "VJKM College"}`,
    },
    description: isGu
      ? "વી.જે.કે.એમ. સેલ્ફ ફાઇનાન્સ કોલેજ, ડભોઇ (વડોદરા). શ્રી ગોવિંદ ગુરુ યુનિવર્સિટી (SGGU) સંલગ્ન BSW અને MSW ડિગ્રી પ્રોગ્રામ્સ."
      : "VJKM Self Finance College, Dabhoi (Vadodara). SGGU-affiliated BSW & MSW degree programs, 500+ hrs field practicum, GCAS admissions.",
    icons: {
      icon: [
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon/favicon.ico", sizes: "any" },
      ],
      apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/favicon/site.webmanifest",
    openGraph: {
      siteName: isGu ? siteConfig.name.gu : siteConfig.name.en,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "VJKM Self Finance College",
        },
      ],
    },
  };
}



export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, notoSerifHeading.variable, geistSans.className)}
    >
      <body>
        <NextIntlClientProvider>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-1">
                {children}
              </div>
              <Contact locale={locale} />
              <Footer />
            </div>
          </TooltipProvider>
          <OverscreenEnquiryButton />
          <GoogleAnalytics gaId="G-NJYR1V2Q2H" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
