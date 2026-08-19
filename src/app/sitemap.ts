import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/metadata";

const BASE_URL = siteConfig.baseUrl; 

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const sitemap: MetadataRoute.Sitemap = [];

  const staticPages = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      path: "/about",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/colleges",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/courses",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/facilities",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/opportunities",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/gallery",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      path: "/trustees",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      path: "/certificates",
      priority: 0.7,
      changeFrequency: "yearly",
    },
    // {
    //   path: "/news",
    //   priority: 0.8,
    //   changeFrequency: "daily",
    // },
    {
      path: "/committees-cells",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      path: "/contact",
      priority: 0.7,
      changeFrequency: "yearly",
    },
    {
      path: "/search",
      priority: 0.4,
      changeFrequency: "monthly",
    },
    {
      path: "/privacy-policy",
      priority: 0.1,
      changeFrequency: "yearly",
    },
    {
      path: "/terms-of-service",
      priority: 0.1,
      changeFrequency: "yearly",
    },
  ] satisfies {
    path: string;
    priority: number;
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  }[];

  for (const locale of routing.locales) {
    // Static pages
    sitemap.push(
      ...staticPages.map((page) => ({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      }))
    );

  }

  return sitemap;
}