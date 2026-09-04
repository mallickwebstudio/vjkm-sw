import React from "react";
import { Course } from "@/types";

export function CourseQuickStats({ course }: { course: Course }) {
  const { duration, seats, batchStarts, studyHours } = course;

  return (
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
  );
}
