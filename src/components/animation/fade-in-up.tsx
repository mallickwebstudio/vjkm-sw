"use client";

import { motion, useReducedMotion } from "motion/react";
import React, { ReactNode, ElementType } from "react";

export interface FadeInUpProps extends React.ComponentPropsWithoutRef<any> {
  children: ReactNode;
  /** The HTML tag to render. Defaults to 'div' but can be 'li', 'section', etc. */
  as?: ElementType;
  /** Index of the item in the list/grid to calculate stagger delay */
  index?: number;
  /** Base delay before the animation starts (in seconds) */
  delayOffset?: number;
  /** Animation duration (in seconds). Academic sites should keep this swift (0.3 to 0.4s) */
  duration?: number;
  /** Total vertical distance traveled during fade-up (in pixels) */
  yOffset?: number;
  /** Amount of blur applied initially (in pixels) */
  blurAmount?: number;
  /** If true, bypasses JavaScript animations entirely for instant server-side visibility */
  isAboveTheFold?: boolean;
  /** Extends className for layout/styling purposes */
  className?: string;
}

export function FadeInUp({
  children,
  as: Component = "div",
  index = 0,
  delayOffset = 0,
  duration = 0.35,
  yOffset = 16, // Minimal movement for clean look
  blurAmount = 4,
  isAboveTheFold = false,
  className = "",
  ...props
}: FadeInUpProps) {
  // Respect user operating system preferences for reduced motion (Accessibility)
  const shouldReduceMotion = useReducedMotion();

  // 1. SEO & Performance Safeguard: Skip animations entirely if above the fold or requested by OS
  if (isAboveTheFold || shouldReduceMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  // 2. Stagger calculation: Animates items one-by-one based on their grid index
  const calculatedDelay = delayOffset + index * 0.05;

  return (
    <Component className={className} {...props}>
      <motion.div
        initial={{ opacity: 0, y: yOffset, filter: `blur(${blurAmount}px)` }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{
          duration: duration,
          delay: calculatedDelay,
          ease: [0.21, 0.47, 0.32, 0.98], // Crisp, professional cubic-bezier curve
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </Component>
  );
}