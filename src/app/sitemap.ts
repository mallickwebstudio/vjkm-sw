import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/metadata";
import { getArticles } from "@/db/article";

const BASE_URL = siteConfig.baseUrl;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const sitemap: MetadataRoute.Sitemap = [];

  const staticPages = [
    {
      path: "",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/admission",
      priority: 0.95,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/courses",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/courses/bsw",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/courses/msw",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/about-us",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/campus",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/facilities",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/fieldwork",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/news-and-updates",
      priority: 0.85,
      changeFrequency: "daily" as const,
    },
    {
      path: "/articles",
      priority: 0.8,
      changeFrequency: "daily" as const,
    },
    {
      path: "/gallery",
      priority: 0.75,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/contact-us",
      priority: 0.8,
      changeFrequency: "yearly" as const,
    },
  ];

  // 1. Generate Static Pages with alternates for both locales
  for (const locale of routing.locales) {
    for (const page of staticPages) {
      sitemap.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((loc) => [loc, `${BASE_URL}/${loc}${page.path}`])
          ),
        },
      });
    }
  }

  // 2. Dynamic Articles
  try {
    const articles = await getArticles();
    for (const article of articles) {
      const articleDate = article.publishedAt ? new Date(article.publishedAt) : lastModified;
      const validDate = isNaN(articleDate.getTime()) ? lastModified : articleDate;

      for (const locale of routing.locales) {
        sitemap.push({
          url: `${BASE_URL}/${locale}/articles/${article.slug}`,
          lastModified: validDate,
          changeFrequency: "weekly",
          priority: 0.75,
          alternates: {
            languages: Object.fromEntries(
              routing.locales.map((loc) => [loc, `${BASE_URL}/${loc}/articles/${article.slug}`])
            ),
          },
        });
      }
    }
  } catch (error) {
    console.error("Failed to generate article sitemap entries:", error);
  }

  return sitemap;
}