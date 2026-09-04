import React from "react";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata, getCourseJsonLd } from "@/lib/metadata";
import { getCourseBySlug } from "@/lib/fetcher";

import { CourseHero } from "./course-hero";
import { CourseQuickStats } from "./course-quick-stats";
import { CourseOverview } from "./course-overview";
import { CourseSpecializations } from "./course-specializations";
import { CourseCurriculum } from "./course-curriculum";
import { CourseFieldwork } from "./course-fieldwork";
import { CourseCareerOutcomes } from "./course-career-outcomes";
import { CourseOpportunities } from "./course-opportunities";
import { CourseActionBanner } from "./course-action-banner";

export function generateStaticParams() {
  const slugs = ["bsw", "msw", "bachelor-of-social-work", "master-of-social-work"];
  const params: { locale: Locale; slug: string }[] = [];

  for (const locale of routing.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const course = getCourseBySlug(slug, locale);

  if (!course) {
    return getSeoMetadata({
      locale,
      path: `/courses/${slug}`,
      title: "Course Not Found | VJKM College",
    });
  }

  const pageKey = slug === "bsw" ? "bsw" : slug === "msw" ? "msw" : "courses";

  return getSeoMetadata({
    locale,
    page: pageKey,
    path: `/courses/${slug}`,
    title: `${course.title} | VJKM Self-Finance College`,
    description: course.desc,
  });
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const course = getCourseBySlug(slug, locale);

  if (!course) {
    notFound();
  }

  const courseJsonLd = (slug === "bsw" || slug === "msw") ? getCourseJsonLd(slug, locale) : null;

  return (
    <main className="space-y-0">
      {courseJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
      )}
      {/* 1. HERO HEADER */}
      <CourseHero course={course} />

      {/* 2. QUICK STATS SUMMARY BAR */}
      <CourseQuickStats course={course} />

      {/* 3. DETAILED OVERVIEW & WHY STUDY */}
      <CourseOverview course={course} />

      {/* 4. SPECIALIZATION TRACKS (If applicable) */}
      <CourseSpecializations specializations={course.details.specializations} />

      {/* 5. SEMESTER STRUCTURE & CURRICULUM */}
      <CourseCurriculum course={course} />

      {/* 6. FIELDWORK & PRACTICUM SPOTLIGHT */}
      <CourseFieldwork />

      {/* 7. CAREER PATHWAYS & TARGET ROLES */}
      <CourseCareerOutcomes careerOutcomes={course.details.careerOutcomes} />

      {/* 8. CAREER & EMPLOYMENT OPPORTUNITIES */}
      <CourseOpportunities course={course} locale={locale} />

      {/* 9. ACTION BANNER */}
      <CourseActionBanner title={course.title} />
    </main>
  );
}
