import React from "react";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section/section";
import { Card } from "@/components/ui/card";
import { Layers, Calendar, Briefcase } from "lucide-react";

export function CourseFieldwork() {
  return (
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
  );
}
