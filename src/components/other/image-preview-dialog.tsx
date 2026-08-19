"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ImageItem {
  src: string;
  alt: string;
}

interface Props {
  images: ImageItem[];
  title?: string;
  className: string;
}

export default function ImagePreviewDialog({
  images,
  title = "Image Preview",
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <>
      <ul className={cn("grid gap-6", className)}>
        {images.map((image, index) => (
          <li key={image.src}>
            <button onClick={() => handleOpen(index)} className="overflow-hidden rounded-md border-2">
              <Image
                src={image.src}
                alt={image.alt}
                width={250}
                height={250}
                className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                unoptimized
              />
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full max-w-4xl bg-background p-4 md:p-6 md:min-w-lg">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>

          <Carousel
            opts={{
              align: "center",
              loop: true,
              startIndex: selectedIndex,
            }}
          >
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="max-h-[80vh] w-full object-contain"
                    unoptimized
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}