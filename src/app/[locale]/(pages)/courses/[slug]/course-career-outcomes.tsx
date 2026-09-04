import React from "react";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section/section";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function CourseCareerOutcomes({
  careerOutcomes,
}: {
  careerOutcomes?: { role: string; desc: string }[];
}) {
  if (!careerOutcomes || careerOutcomes.length === 0) {
    return null;
  }

  return (
    <Section className="bg-background">
      <SectionHeader align="center">
        <SectionTitle>Career Outcomes & Scope</SectionTitle>
        <SectionDescription>
          Unlocking professional avenues in corporate CSR, industrial HR, non-profits, and government sectors.
        </SectionDescription>
      </SectionHeader>

      <SectionContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {careerOutcomes.map((career, idx) => (
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
  );
}
