import React from "react";
import { Course } from "@/types";
import { Hero, HeroContent, HeroH1, HeroP, HeroCta } from "@/components/section/hero";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GraduationCap, Clock, Users, BookOpen, ExternalLink, PhoneCall } from "lucide-react";

export function CourseHero({ course }: { course: Course }) {
  const { title, type, duration, seats, aisheCode, desc, thumbnail } = course;

  return (
    <Hero
      imageSrc={thumbnail || "/images/facilities/auditorium-2.webp"}
      imageAlt={`${title} Degree Program at VJKM College`}
      variant="left"
      className="flex items-center bg-slate min-h-[50vh]"
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
    </Hero>
  );
}
