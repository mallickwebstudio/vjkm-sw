import React from "react";
import { Course } from "@/types";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section/section";
import { Card } from "@/components/ui/card";
import { BookOpen, Sparkles, Award, CheckCircle2, Building2 } from "lucide-react";

export function CourseOverview({ course }: { course: Course }) {
  const { title, details, subjects, eligibility, fees } = course;

  return (
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
  );
}
