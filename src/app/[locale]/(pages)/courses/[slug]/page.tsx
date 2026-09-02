import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
import { getCourseBySlug, getCoursesData } from "@/lib/fetcher";
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from "@/components/section/hero";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  GraduationCap,
  Clock,
  Users,
  CheckCircle2,
  BookOpen,
  Briefcase,
  FileText,
  Calendar,
  ExternalLink,
  PhoneCall,
  Award,
  Sparkles,
  Layers,
  Building2,
  Compass,
  ArrowRight
} from "lucide-react";

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

  const {
    title,
    type,
    seats,
    duration,
    aisheCode,
    applicationDeadline,
    fees,
    batchStarts,
    studyHours,
    eligibility,
    subjects,
    desc,
    details,
    thumbnail,
  } = course;

  return (
    <main className="space-y-0">
      {/* 1. HERO HEADER */}
      <Hero
        imageSrc={thumbnail || "/images/facilities/auditorium-2.webp"}
        imageAlt={`${title} Degree Program at VJKM College`}
        variant="left"
        className="relative flex items-center bg-slate min-h-[55vh] py-12"
      >
        <HeroContent className="max-w-4xl z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="outline" className="h-6 bg-amber/10 text-amber-tone border-amber/30 font-medium text-xs sm:text-sm">
              <GraduationCap className="w-3.5 h-3.5 mr-1" />
              {type}
            </Badge>
            <Badge variant="outline" className="h-6 bg-emerald/10 text-emerald-tone border-emerald/30 font-medium text-xs sm:text-sm">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {duration}
            </Badge>
            {seats && (
              <Badge variant="outline" className="h-6 bg-sky/10 text-sky-tone border-sky/30 font-medium text-xs sm:text-sm">
                <Users className="w-3.5 h-3.5 mr-1" />
                {seats}
              </Badge>
            )}
            <Badge variant="outline" className="h-6 bg-slate-700/50 text-slate-300 border-slate-600 font-mono text-xs">
              AISHE: {aisheCode}
            </Badge>
          </div>

          <HeroH1 className="h1 font-extrabold text-white leading-tight">
            {title}
          </HeroH1>

          <HeroP className="max-w-3xl text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
            {desc}
          </HeroP>

          <HeroCta className="pt-4 flex-wrap gap-3">
            <a
              href="https://gcasstudent.gujgov.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "amber", size: "lg" }))}
            >
              Apply via GCAS / Self-Finance
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#syllabus-structure"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              View Syllabus Outline
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "text-white border-white/20 hover:bg-white/10")}
            >
              <PhoneCall className="w-4 h-4 mr-2 text-emerald-tone" />
              Admission Inquiry
            </a>
          </HeroCta>
        </HeroContent>

        {thumbnail && (
          <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-80 h-80 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl opacity-90">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate via-transparent to-transparent" />
          </div>
        )}
      </Hero>

      {/* 2. QUICK STATS SUMMARY BAR */}
      <section className="bg-slate-900 border-y border-slate-800 py-6">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-slate-300 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <span className="text-slate-400 block text-[11px]">Duration</span>
              <span className="font-bold text-white text-sm">{duration}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <span className="text-slate-400 block text-[11px]">Seats Capacity</span>
              <span className="font-bold text-emerald-tone text-sm">{seats || "Available"}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <span className="text-slate-400 block text-[11px]">Batch Commencement</span>
              <span className="font-bold text-amber-tone text-sm">{batchStarts}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <span className="text-slate-400 block text-[11px]">Daily Timing</span>
              <span className="font-bold text-sky-tone text-sm">{studyHours}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <span className="text-slate-400 block text-[11px]">University Affiliation</span>
              <span className="font-bold text-white text-sm">SGGU Godhra</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <span className="text-slate-400 block text-[11px]">Admission Mode</span>
              <span className="font-bold text-amber-tone text-sm">GCAS & Self-Finance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED OVERVIEW & WHY STUDY */}
      <Section className="bg-background">
        <SectionHeader align="center">
          <SectionTitle>Program Overview & Objectives</SectionTitle>
          <SectionDescription>
            Academic depth blended with intensive field practicum and professional ethics.
          </SectionDescription>
        </SectionHeader>

        <SectionContent className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 md:p-8 space-y-4 border border-border bg-card shadow-sm">
              <div className="flex items-center gap-2 text-primary font-bold text-lg border-b border-border pb-3">
                <BookOpen className="w-5 h-5 text-amber-tone" />
                <span>About {title}</span>
              </div>
              <div className="prose dark:prose-invert text-slate-tone text-sm sm:text-base leading-relaxed space-y-3">
                {details.description}
                {details.detailedDescription}
              </div>
            </Card>

            {/* Why Study */}
            <Card className="p-6 md:p-8 space-y-4 border border-border bg-card shadow-sm">
              <div className="flex items-center gap-2 text-primary font-bold text-lg border-b border-border pb-3">
                <Sparkles className="w-5 h-5 text-emerald-tone" />
                <span>Why Study This Degree at VJKM College?</span>
              </div>
              <div className="prose dark:prose-invert text-slate-tone text-sm sm:text-base leading-relaxed space-y-3">
                {details.whyStudy}
              </div>
            </Card>
          </div>

          {/* Highlights & Key Info Side Card */}
          <div className="space-y-6">
            <Card className="p-6 space-y-4 border border-border bg-slate-900 text-white shadow-lg">
              <div className="flex items-center gap-2 font-bold text-lg text-amber-tone border-b border-slate-800 pb-3">
                <Award className="w-5 h-5" />
                <span>Key Program Highlights</span>
              </div>
              {details.highlights && details.highlights.length > 0 ? (
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {details.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-tone shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {subjects.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-tone shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>

            {/* Eligibility Card */}
            <Card className="p-6 space-y-3 border border-border bg-card shadow-sm">
              <div className="flex items-center gap-2 font-bold text-base text-foreground border-b border-border pb-2">
                <Building2 className="w-4 h-4 text-sky-tone" />
                <span>Eligibility Criteria</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                {eligibility}
              </p>
              <div className="pt-2 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                <span>Fees Standard:</span>
                <span className="font-semibold text-foreground">{fees}</span>
              </div>
            </Card>
          </div>
        </SectionContent>
      </Section>

      {/* 4. SPECIALIZATION TRACKS (If applicable) */}
      {details.specializations && details.specializations.length > 0 && (
        <Section className="bg-slate-muted">
          <SectionHeader align="center">
            <SectionTitle>Specialization Areas & Electives</SectionTitle>
            <SectionDescription>
              Tailored professional domains preparing students for targeted industrial and development roles.
            </SectionDescription>
          </SectionHeader>

          <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {details.specializations.map((track, idx) => (
              <Card key={idx} className="p-6 space-y-3 border border-border bg-card shadow-sm hover:border-amber/40 transition-colors">
                <div className="p-3 rounded-xl bg-amber/10 text-amber-tone w-fit">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{track.title}</h3>
                <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                  {track.desc}
                </p>
              </Card>
            ))}
          </SectionContent>
        </Section>
      )}

      {/* 5. SEMESTER STRUCTURE & CURRICULUM */}
      {details.semesterStructure && details.semesterStructure.length > 0 && (
        <Section id="syllabus-structure" className="bg-background scroll-mt-20">
          <SectionHeader align="center">
            <SectionTitle>Semester-wise Curriculum Outline</SectionTitle>
            <SectionDescription>
              Comprehensive syllabus structure prescribed under Shri Govind Guru University (SGGU) regulations.
            </SectionDescription>
          </SectionHeader>

          <SectionContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.semesterStructure.map((sem, idx) => (
              <Card key={idx} className="p-6 space-y-4 border border-border bg-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <Badge variant="secondary" className="bg-amber/10 text-amber-tone font-bold">
                      {sem.semester}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-mono">SGGU Aligned</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">{sem.title}</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-tone">
                    {sem.subjects.map((subj, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-tone shrink-0 mt-2" />
                        <span>{subj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </SectionContent>
        </Section>
      )}

      {/* 6. FIELDWORK & PRACTICUM SPOTLIGHT */}
      <Section className="bg-slate text-slate-foreground">
        <SectionHeader align="center">
          <SectionTitle className="text-white">Fieldwork Practicum & Exposure</SectionTitle>
          <SectionDescription className="text-slate-300">
            Hands-on community immersion, concurrent agency visits, and block internships.
          </SectionDescription>
        </SectionHeader>

        <SectionContent className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-slate-800/80 border-slate-700 text-white space-y-3">
            <div className="p-3 rounded-xl bg-emerald/10 text-emerald-tone w-fit">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Concurrent Fieldwork</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              2 days of mandatory field visits every week at designated NGOs, Primary Health Centers, and Panchayats across Gujarat.
            </p>
          </Card>

          <Card className="p-6 bg-slate-800/80 border-slate-700 text-white space-y-3">
            <div className="p-3 rounded-xl bg-amber/10 text-amber-tone w-fit">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">7-Day Rural Immersion Camp</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Annual residential camp in adopted rural villages focusing on PRA surveys, cleanliness drives, and community mobilization.
            </p>
          </Card>

          <Card className="p-6 bg-slate-800/80 border-slate-700 text-white space-y-3">
            <div className="p-3 rounded-xl bg-sky/10 text-sky-tone w-fit">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Block Placement Internship</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Intensive full-time placement in corporate CSR units, manufacturing HR departments, or government social defense boards.
            </p>
          </Card>
        </SectionContent>
      </Section>

      {/* 7. CAREER PATHWAYS & TARGET ROLES */}
      {details.careerOutcomes && details.careerOutcomes.length > 0 && (
        <Section className="bg-background">
          <SectionHeader align="center">
            <SectionTitle>Career Outcomes & Scope</SectionTitle>
            <SectionDescription>
              Unlocking professional avenues in corporate CSR, industrial HR, non-profits, and government sectors.
            </SectionDescription>
          </SectionHeader>

          <SectionContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.careerOutcomes.map((career, idx) => (
              <Card key={idx} className="p-6 space-y-3 border border-border bg-card shadow-sm hover:border-emerald/40 transition-colors">
                <div className="p-3 rounded-xl bg-emerald/10 text-emerald-tone w-fit">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">{career.role}</h3>
                <p className="text-xs text-slate-tone leading-relaxed">
                  {career.desc}
                </p>
              </Card>
            ))}
          </SectionContent>
        </Section>
      )}

      {/* 8. ACTION BANNER */}
      <section className="bg-slate-900 border-t border-slate-800 py-12 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl space-y-6">
          <Badge variant="outline" className="h-6 bg-amber/10 text-amber-tone border-amber/30 text-xs font-semibold">
            Admissions Open 2026-27
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Enroll in {title}?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Apply online via Gujarat Common Admission Services (GCAS) portal or visit our dedicated campus helpdesk for direct Self-Finance admission enrollment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://gcasstudent.gujgov.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "amber", size: "lg" }))}
            >
              Apply via GCAS Portal
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="/contact-us"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              Contact Campus Helpdesk
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
