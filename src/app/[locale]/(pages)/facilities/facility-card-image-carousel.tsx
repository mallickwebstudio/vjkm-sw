"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface FacilityCardImageCarouselProps {
  imageSrcs: string[];
  thumbnail: string;
  title: string;
  categoryLabel?: string;
  badgeClassName?: string;
  categoryIcon?: React.ReactNode;
}

export function FacilityCardImageCarousel({
  imageSrcs,
  thumbnail,
  title,
  categoryLabel,
  badgeClassName,
  categoryIcon,
}: FacilityCardImageCarouselProps) {
  const images = imageSrcs && imageSrcs.length > 0 ? imageSrcs : [thumbnail];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 group/carousel">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {images.map((src, idx) => (
            <CarouselItem key={src + idx} className="pl-0 relative aspect-[16/10] w-full">
              <Image
                src={src}
                alt={`${title} image ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover/carousel:scale-105 select-none pointer-events-none"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none z-10" />

        {/* Top Left Badge */}
        {/* {categoryLabel && (
          <div className="absolute top-3 left-3 z-20 pointer-events-none">
            <Badge className={cn("bg-amber/90 text-amber-foreground font-semibold backdrop-blur-md shadow-sm flex items-center gap-1.5", badgeClassName)}>
              {categoryIcon ? categoryIcon : <Activity className="w-3.5 h-3.5" />}
              <span>{categoryLabel}</span>
            </Badge>
          </div>
        )} */}

        {/* Counter Tag */}
        {count > 1 && (
          <div className="absolute top-3 right-3 z-20 pointer-events-none rounded-full bg-black/60 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-md border border-white/10 shadow-sm">
            {current + 1} / {count}
          </div>
        )}

        {/* Navigation Arrow Buttons */}
        {count > 1 && (
          <>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-30 size-7 bg-black/60 text-white backdrop-blur-md border-white/20 opacity-0 group-hover/carousel:opacity-100 hover:bg-amber hover:text-black transition-all" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-30 size-7 bg-black/60 text-white backdrop-blur-md border-white/20 opacity-0 group-hover/carousel:opacity-100 hover:bg-amber hover:text-black transition-all" />
          </>
        )}

        {/* Bottom Center Indicator Dots */}
        {count > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10 shadow-sm">
            {Array.from({ length: count }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  api?.scrollTo(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${idx === current
                    ? "w-5 bg-amber shadow-sm"
                    : "w-2 bg-white/50 hover:bg-white/90"
                  }`}
              />
            ))}
          </div>
        )}
      </Carousel>
    </div>
  );
}
