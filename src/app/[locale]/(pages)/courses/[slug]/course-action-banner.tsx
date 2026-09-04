import React from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, ArrowRight } from "lucide-react";

export function CourseActionBanner({ title }: { title: string }) {
  return (
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
  );
}
