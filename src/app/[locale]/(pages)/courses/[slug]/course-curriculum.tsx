import React from "react";
import { Course } from "@/types";
import { CourseSemesterModule } from "@/types/course";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText, ExternalLink } from "lucide-react";

interface SyllabusItem {
  title: string;
  subtitle: string;
  badge?: string;
  href: string;
}

const MSW_SYLLABUS: SyllabusItem[] = [
  {
    title: "1st Year Syllabus",
    subtitle: "Semesters 1 & 2 Curriculum",
    badge: "Year 1",
    href: "https://drive.google.com/file/d/1oHja2alGsJGoLsY5BXtqABJnRUpITI6-/view?usp=drive_link",
  },
  {
    title: "2nd Year Syllabus",
    subtitle: "Semesters 3 & 4 Curriculum",
    badge: "Year 2",
    href: "https://drive.google.com/file/d/1h1knzTz_sQ6wGIs5n1skXC2BLp1ocogf/view?usp=drive_link",
  },
];

const BSW_SYLLABUS: SyllabusItem[] = [
  {
    title: "Semester 1",
    subtitle: "First Semester Curriculum",
    badge: "Sem 1",
    href: "https://drive.google.com/file/d/1KlDRYaa9LdfxIrQi9SLny7N7HcdoVBng/view?usp=drive_link",
  },
  {
    title: "Semester 2",
    subtitle: "Second Semester Curriculum",
    badge: "Sem 2",
    href: "https://drive.google.com/file/d/11bHffp3KsR4qiNfBhx-qkIuOUCu9-uw1/view?usp=drive_link",
  },
  {
    title: "Semester 3 & 4",
    subtitle: "Merged Semesters 3 & 4 Curriculum",
    badge: "Sem 3-4",
    href: "https://drive.google.com/file/d/1iAYYWygm6elQaHvsdRYm-BQRA4DcBa7_/view?usp=drive_link",
  },
  {
    title: "Semester 5",
    subtitle: "Fifth Semester Curriculum",
    badge: "Sem 5",
    href: "https://drive.google.com/file/d/1WqEQFaPFuqpe4jT21vAMkgZns3QwzeGy/view?usp=drive_link",
  },
  {
    title: "Semester 6",
    subtitle: "Sixth Semester Curriculum",
    badge: "Sem 6",
    href: "https://drive.google.com/file/d/1Y4l1emynGyybtPklPEjd_m9Cwpj3qlOo/view?usp=sharing",
  },
];

export function CourseCurriculum({
  course,
  semesterStructure,
}: {
  course?: Course;
  semesterStructure?: CourseSemesterModule[];
}) {
  const isMsw = course
    ? course.slug.toLowerCase().includes("msw") ||
    course.slug.toLowerCase().includes("master") ||
    course.shortTitle?.toUpperCase() === "MSW"
    : false;

  const syllabusItems = isMsw ? MSW_SYLLABUS : BSW_SYLLABUS;

  return (
    <Section id="syllabus-structure" className="bg-background scroll-mt-20">
      <SectionHeader align="center">
        <SectionTitle>
          {course?.shortTitle ? `${course.shortTitle} Syllabus & Curriculum` : "Syllabus & Curriculum Outline"}
        </SectionTitle>
        <SectionDescription>
          Download or view the official Shri Govind Guru University (SGGU) curriculum PDFs.
        </SectionDescription>
      </SectionHeader>

      <SectionContent
        className={cn(
          "grid gap-4 md:gap-6",
          isMsw
            ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {syllabusItems.map((item, idx) => (
          <Card
            key={idx}
            className="p-5 border border-border bg-card shadow-sm hover:shadow-md hover:border-amber/40 transition-all flex flex-col justify-between group"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-xl bg-amber/10 text-amber-tone shrink-0 group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-foreground text-base group-hover:text-amber-tone transition-colors">
                    {item.title}
                  </h3>
                  <Badge variant="outline" className="text-[10px] uppercase font-mono px-1.5 py-0 text-muted-foreground">
                    PDF
                  </Badge>
                </div>
                {item.subtitle && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-border flex items-center justify-between gap-2">
              <span className="text-[11px] text-muted-foreground font-mono truncate">
                SGGU Prescribed
              </span>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "gap-1.5 text-xs font-semibold hover:bg-amber hover:text-white transition-colors"
                )}
              >
                <span>View PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card>
        ))}
      </SectionContent>
    </Section>
  );
}
