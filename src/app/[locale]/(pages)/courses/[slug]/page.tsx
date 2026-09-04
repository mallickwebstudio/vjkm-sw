import React from "react";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import { getCourseBySlug } from "@/lib/fetcher";

import { CourseHero } from "./course-hero";
import { CourseQuickStats } from "./course-quick-stats";
import { CourseOverview } from "./course-overview";
import { CourseSpecializations } from "./course-specializations";
import { CourseCurriculum } from "./course-curriculum";
import { CourseFieldwork } from "./course-fieldwork";
import { CourseCareerOutcomes } from "./course-career-outcomes";
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

  return getSeoMetadata({
    locale,
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

  return (
    <main className="space-y-0">
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

      {/* 8. ACTION BANNER */}
      <CourseActionBanner title={course.title} />
    </main>
  );
}
