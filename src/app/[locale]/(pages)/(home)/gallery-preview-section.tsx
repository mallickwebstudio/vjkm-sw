"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section/section";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Camera, ArrowRight, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";

export function GalleryPreviewSection() {
  const locale = useLocale();
  const isGu = locale === "gu";

  const previewImages = [
    { src: "/images/gallery/short-pick/01.webp", alt: "VJKM Campus Event Celebration" },
    { src: "/images/gallery/short-pick/02.webp", alt: "VJKM Students Cultural Gathering" },
    { src: "/images/gallery/short-pick/03.webp", alt: "VJKM Social Work Community Outreach" },
    { src: "/images/gallery/short-pick/04.webp", alt: "VJKM Academic Seminar & Workshop" },
    { src: "/images/gallery/short-pick/05.webp", alt: "VJKM Annual Day Celebration" },
    { src: "/images/gallery/short-pick/06.webp", alt: "VJKM NSS Blood Donation Drive" },
    { src: "/images/gallery/short-pick/07.webp", alt: "VJKM Fieldwork Practicum Visit" },
    { src: "/images/gallery/short-pick/08.webp", alt: "VJKM Sports & Fitness Day" },
  ];

  // Lightbox Modal state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentLightboxItem =
    lightboxIndex !== null ? previewImages[lightboxIndex] : null;

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    } else if (lightboxIndex === 0) {
      setLightboxIndex(previewImages.length - 1);
    }
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex < previewImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    } else if (lightboxIndex === previewImages.length - 1) {
      setLightboxIndex(0);
    }
  };

  return (
    <Section className="bg-slate-muted">
      <div className="lg:flex lg:justify-between lg:items-end">
        <SectionHeader align="left">
          <SectionTitle>
            {isGu ? "કેમ્પસ પળો અને ફોટો ગેલેરી" : "Campus Moments & Gallery"}
          </SectionTitle>
          <SectionDescription>
            {isGu
              ? "BSW અને MSW વિદ્યાર્થીઓની શૈક્ષણિક પ્રવૃત્તિઓ, સાંસ્કૃતિક ઉત્સવો અને ક્ષેત્રકાર્યની ઝાંખી."
              : "Glimpses of academic life, cultural celebrations, field practicums, and student achievements at VJKM."}
          </SectionDescription>
        </SectionHeader>

        {/* View Full Gallery Link Button */}
        <Link
          href="/gallery"
          className={cn(buttonVariants({ variant: "amber", size: "lg" }), "mt-2")}
        >
          {isGu ? "સમગ્ર ગેલેરી જુઓ" : "View Full Gallery"}
          <ArrowRight />
        </Link>
      </div>

      <SectionContent className="space-y-8">
        {/* Images Grid - Clicking opens Lightbox Dialog */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-slate-900 aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
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
      </SectionContent>

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
              {lightboxIndex! + 1} / {previewImages.length}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
