"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { galleryData, GalleryImage } from "@/db/gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Filter,
  RotateCcw,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  GraduationCap,
  Calendar,
  Sparkles,
  Layers,
} from "lucide-react";

interface GalleryClientProps {
  locale: string;
}

export function GalleryClient({ locale }: GalleryClientProps) {
  const isGu = locale === "gu";

  // 1. Course options from galleryData (e.g. bsw, msw) - NO "ALL"
  const courseOptions = useMemo(() => {
    return Object.keys(galleryData).map((courseKey) => ({
      id: courseKey,
      label: courseKey.toUpperCase(),
      labelGu: courseKey.toUpperCase(),
    }));
  }, []);

  const initialCourse = courseOptions[0]?.id || "bsw";
  const [selectedCourse, setSelectedCourse] = useState<string>(initialCourse);

  // 2. Year options for selected course - NO "ALL"
  const yearOptions = useMemo(() => {
    const courseObj = galleryData[selectedCourse];
    if (!courseObj) return [];
    const years = Object.keys(courseObj).sort().reverse();
    return years.map((year) => ({
      id: year,
      label: year,
      labelGu: year,
    }));
  }, [selectedCourse]);

  const initialYear = yearOptions[0]?.id || "";
  const [selectedYear, setSelectedYear] = useState<string>(initialYear);

  // 3. Event options for selected course and year - NO "ALL"
  const eventOptions = useMemo(() => {
    const yearObj = galleryData[selectedCourse]?.[selectedYear];
    if (!yearObj) return [];
    const events = Object.keys(yearObj);
    return events.map((event) => ({
      id: event,
      label: event,
      labelGu: event,
    }));
  }, [selectedCourse, selectedYear]);

  const initialEvent = eventOptions[0]?.id || "";
  const [selectedEvent, setSelectedEvent] = useState<string>(initialEvent);

  // Handle course change: auto-select the first year and first event
  const handleCourseChange = (newCourse: string) => {
    setSelectedCourse(newCourse);
    const availableYears = Object.keys(galleryData[newCourse] || {}).sort().reverse();
    const firstYear = availableYears[0] || "";
    setSelectedYear(firstYear);
    const availableEvents = Object.keys(galleryData[newCourse]?.[firstYear] || {});
    const firstEvent = availableEvents[0] || "";
    setSelectedEvent(firstEvent);
  };

  // Handle year change: auto-select the first event
  const handleYearChange = (newYear: string) => {
    setSelectedYear(newYear);
    const availableEvents = Object.keys(galleryData[selectedCourse]?.[newYear] || {});
    const firstEvent = availableEvents[0] || "";
    setSelectedEvent(firstEvent);
  };

  // Handle event change
  const handleEventChange = (newEvent: string) => {
    setSelectedEvent(newEvent);
  };

  // Lightbox Modal state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered gallery items for current Course -> Year -> Event selection
  const filteredItems = useMemo(() => {
    const items = galleryData[selectedCourse]?.[selectedYear]?.[selectedEvent];
    return Array.isArray(items) ? items : [];
  }, [selectedCourse, selectedYear, selectedEvent]);

  // Check if current selection differs from the very first defaults
  const isDefaultSelection =
    selectedCourse === initialCourse &&
    selectedYear === (yearOptions[0]?.id || "") &&
    selectedEvent === (eventOptions[0]?.id || "");

  const handleResetFilters = () => {
    const firstCourse = courseOptions[0]?.id || "bsw";
    const availableYears = Object.keys(galleryData[firstCourse] || {}).sort().reverse();
    const firstYear = availableYears[0] || "";
    const availableEvents = Object.keys(galleryData[firstCourse]?.[firstYear] || {});
    const firstEvent = availableEvents[0] || "";

    setSelectedCourse(firstCourse);
    setSelectedYear(firstYear);
    setSelectedEvent(firstEvent);
  };

  const currentLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    } else if (lightboxIndex === 0) {
      setLightboxIndex(filteredItems.length - 1);
    }
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    } else if (lightboxIndex === filteredItems.length - 1) {
      setLightboxIndex(0);
    }
  };

  return (
    <div className="space-y-8">
      {/* FILTER CONTROL BAR CONTAINER */}
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-md space-y-4">
        <div className="flex items-center justify-between gap-2 border-b border-border pb-3">
          <div className="flex items-center gap-2 text-foreground font-bold text-base sm:text-lg">
            <Filter className="w-5 h-5 text-amber-tone" />
            <span>{isGu ? "ફોટો ફિલ્ટર શ્રેણીઓ" : "Filter Gallery Photos"}</span>
          </div>
          {!isDefaultSelection && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleResetFilters}
              className="text-xs text-muted-foreground hover:text-amber-tone flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isGu ? "ડિફૉલ્ટ રીસેટ કરો" : "Reset to Default"}</span>
            </Button>
          )}
        </div>

        {/* 3 CASCADE SELECT DROPDOWNS: Course -> Year -> Event (NO "ALL" OPTION) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* 1. COURSE SELECTOR */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-tone flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-amber-tone" />
              <span>1. {isGu ? "કોર્સ (Course)" : "Select Course"}</span>
            </label>
            <Select
              value={selectedCourse}
              onValueChange={(val) => val && handleCourseChange(val)}
            >
              <SelectTrigger className="w-full bg-background border-border text-foreground h-10 text-xs sm:text-sm">
                <SelectValue placeholder={selectedCourse.toUpperCase()} />
              </SelectTrigger>
              <SelectContent>
                {courseOptions.map((c) => (
                  <SelectItem key={c.id} value={c.id} className="text-xs sm:text-sm font-medium">
                    {isGu ? c.labelGu : c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 2. YEAR SELECTOR */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-tone flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-tone" />
              <span>2. {isGu ? "વર્ષ (Year)" : "Select Academic Year"}</span>
            </label>
            <Select
              value={selectedYear}
              onValueChange={(val) => val && handleYearChange(val)}
            >
              <SelectTrigger className="w-full bg-background border-border text-foreground h-10 text-xs sm:text-sm">
                <SelectValue placeholder={selectedYear || (isGu ? "વર્ષ પસંદ કરો" : "Select Year")} />
              </SelectTrigger>
              <SelectContent>
                {yearOptions.map((y) => (
                  <SelectItem key={y.id} value={y.id} className="text-xs sm:text-sm font-medium">
                    {isGu ? y.labelGu : y.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 3. EVENT SELECTOR */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-tone flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-tone" />
              <span>3. {isGu ? "પ્રસંગ (Event)" : "Select Event"}</span>
            </label>
            <Select
              value={selectedEvent}
              onValueChange={(val) => val && handleEventChange(val)}
            >
              <SelectTrigger className="w-full bg-background border-border text-foreground h-10 text-xs sm:text-sm">
                <SelectValue placeholder={selectedEvent || (isGu ? "પ્રસંગ પસંદ કરો" : "Select Event")} />
              </SelectTrigger>
              <SelectContent>
                {eventOptions.map((e) => (
                  <SelectItem key={e.id} value={e.id} className="text-xs sm:text-sm font-medium">
                    {isGu ? e.labelGu : e.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* ACTIVE FILTER SUMMARY BAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-tone border-t border-border/50">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-foreground">
              {isGu ? "સક્રિય પસંદગી:" : "Active Filters:"}
            </span>
            <Badge variant="outline" className="bg-amber/10 text-amber-tone border-amber/30 text-[11px] uppercase font-bold">
              Course: {selectedCourse}
            </Badge>
            <Badge variant="outline" className="bg-emerald/10 text-emerald-tone border-emerald/30 text-[11px] font-bold">
              Year: {selectedYear}
            </Badge>
            <Badge variant="outline" className="bg-sky/10 text-sky-tone border-sky/30 text-[11px] font-bold">
              Event: {selectedEvent}
            </Badge>
          </div>

          <div className="font-medium text-foreground text-xs sm:text-sm">
            {isGu ? "કુલ ચિત્રો:" : "Showing:"}{" "}
            <span className="font-bold text-amber-tone">{filteredItems.length}</span>{" "}
            {isGu ? "ફોટોસ" : "Photos"}
          </div>
        </div>
      </div>

      {/* GALLERY IMAGES GRID - ONLY IMAGES */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.src + index}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-slate-900 aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="p-3 rounded-full bg-amber/90 text-amber-foreground shadow-lg transform group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* EMPTY STATE */
        <div className="text-center py-16 px-4 bg-card border border-dashed border-border rounded-2xl space-y-4">
          <div className="p-4 rounded-full bg-amber/10 text-amber-tone w-fit mx-auto">
            <Layers className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            {isGu ? "કોઈ ફોટો મળ્યો નથી" : "No Photos Found"}
          </h3>
          <p className="text-sm text-slate-tone max-w-md mx-auto">
            {isGu
              ? "આ પ્રસંગ માટે કોઈ ચિત્ર ઉપલબ્ધ નથી."
              : "No media items available for the selected event."}
          </p>
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {currentLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-800/80 text-white hover:bg-amber hover:text-black transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-amber hover:text-black transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-amber hover:text-black transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            className="relative max-w-5xl w-full h-[80vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 w-full bg-black flex items-center justify-center">
              <Image
                src={currentLightboxItem.src}
                alt={currentLightboxItem.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="p-3 bg-slate-900 border-t border-slate-800 text-center text-xs text-slate-400 font-mono">
              {lightboxIndex! + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
