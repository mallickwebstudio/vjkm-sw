import { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

export type LocalizedString = Record<Locale, string>;

export type SiteConfig = {
  name: LocalizedString;
  baseUrl: string;
  ogImage: string;
  links: {
    phone: string;
    whatsapp: string;
    email: string;
  };
};

export const siteConfig = {
  name: {
    en: "VJKM Self Finance College BSW - MSW",
    gu: "વડોદરા જિલ્લા કેળવણી મંડળ (VJKM)",
  },
  baseUrl: "https://vjkm-sf-college.in", // Updated for your official domain
  ogImage: "https://vjkm-sf-college.in/og.png",
  links: {
    phone: "tel:+919409580986",
    whatsapp: "https://wa.me/+919409580986",
    email: "mailto:vjkmmsw@gmail.com",
  },
};

// Strict map for static routes
export const staticMetadataRegistry = {
  home: {
    en: {
      title: "VJKM Self Finance College - Gujarat's best college for MSW and BSW aspirants.",
      description:
        "Start your bright career with VJKM Self Finance BSW – MSW college after 12th and graduation.",
    },
    gu: {
      title: "",
      description:"",
    },
  },

  // ...
} as const satisfies Record<
  string,
  Record<Locale, {
    title: string;
    description: string;
  }>
>;
export type SeoPage = keyof typeof staticMetadataRegistry;

interface SeoOptions {
  locale: Locale;
  page?: SeoPage;
  path: string;
  title?: string;
  description?: string;
  image?: string;
}

export function getSeoMetadata({
  page,
  locale,
  path,
  title,
  description,
  image,
}: SeoOptions): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  const defaults = page ? staticMetadataRegistry[page][locale] : staticMetadataRegistry.home[locale];

  const finalTitle = title || defaults.title;
  const finalDescription = description ?? defaults.description ?? staticMetadataRegistry.home[locale].description;

  return {
    title: finalTitle,
    description: finalDescription,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: `${siteConfig.baseUrl}/${locale}${cleanPath === "/" ? "" : cleanPath}`,
      languages: {
        en: `${siteConfig.baseUrl}/en${cleanPath === "/" ? "" : cleanPath}`,
        gu: `${siteConfig.baseUrl}/gu${cleanPath === "/" ? "" : cleanPath}`,
      },
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `${siteConfig.baseUrl}/${locale}${cleanPath}`,
      siteName: siteConfig.name[locale],
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: locale === "gu" ? "gu_IN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [image || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}