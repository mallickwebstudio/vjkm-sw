import React from "react";
import { CourseSpecialization } from "@/types/course";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section/section";
import { Card } from "@/components/ui/card";
import { Compass } from "lucide-react";

export function CourseSpecializations({
  specializations,
}: {
  specializations?: CourseSpecialization[];
}) {
  if (!specializations || specializations.length === 0) {
    return null;
  }

  return (
    <Section className="bg-slate-muted">
      <SectionHeader align="center">
        <SectionTitle>Specialization Areas & Electives</SectionTitle>
        <SectionDescription>
          Tailored professional domains preparing students for targeted industrial and development roles.
        </SectionDescription>
      </SectionHeader>

      <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specializations.map((track, idx) => (
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
  );
}
