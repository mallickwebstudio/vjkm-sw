"use client";

import { useEffect, useRef, useState, ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

type ScrollAnimateProps = {
  className?: string;
  children: ReactNode;
  as?: ElementType;
  index?: number;
  animation?: "fade" | "zoom";
};

export default function ScrollAnimate({
  className,
  children,
  as: Component = "div",
  index = 0,
  animation = "fade",
}: ScrollAnimateProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Stop observing once animated
        }
      },
      { rootMargin: "0px 0px -30px 0px" } // Triggers slightly before element enters viewport
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Compute staggered delay matching your original layout indices
  const delayClass = [
    "delay-0",
    "delay-75",
    "delay-150",
    "delay-200",
    "delay-300",
    "delay-500",
  ][Math.min(index, 5)];

  const animationStyles = {
    fade: {
      initial: "opacity-0 translate-y-4",
      active: "opacity-100 translate-y-0",
    },
    zoom: {
      initial: "opacity-0 scale-95 translate-y-4",
      active: "opacity-100 scale-100 translate-y-0",
    },
  }[animation];

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-all duration-500 ease-out will-change-transform",
        className,
        delayClass,
        isIntersecting ? animationStyles.active : animationStyles.initial
      )}
    >
      {children}
    </Component>
  );
}