"use client";

import { motion, useReducedMotion } from "motion/react";
import React, { ReactNode, ElementType } from "react";

export interface ZoomInUpProps extends React.ComponentPropsWithoutRef<any> {
  children: ReactNode;
  /** The HTML tag to render. Defaults to 'div' but can be 'li', 'section', etc. */
  as?: ElementType;
  /** Index of the item in the list/grid to calculate stagger delay */
  index?: number;
  /** Base delay before the animation starts (in seconds) */
  delayOffset?: number;
  /** Animation duration (in seconds). Keep it snappy (0.3s to 0.4s) */
  duration?: number;
  /** Starting scale of the component. 0.95 is ideal for a subtle, elegant zoom */
  initialScale?: number;
  /** Total vertical distance traveled during the zoom-up (in pixels) */
  yOffset?: number;
  /** Amount of blur applied initially (in pixels) */
  blurAmount?: number;
  /** If true, bypasses JavaScript animations entirely for instant server-side visibility */
  isAboveTheFold?: boolean;
  /** Extends className for layout/styling purposes */
  className?: string;
}

export function ZoomInUp({
  children,
  as: Component = "div",
  index = 0,
  delayOffset = 0,
  duration = 0.38,
  initialScale = 0.95, // Subdued scale down so it doesn't pop out aggressively
  yOffset = 12,        // Mild lift
  blurAmount = 4,
  isAboveTheFold = false,
  className = "",
  ...props
}: ZoomInUpProps) {
  const shouldReduceMotion = useReducedMotion();

  // SEO & Core Web Vitals Guard: Skip animations completely for above-the-fold or restricted systems
  if (isAboveTheFold || shouldReduceMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  // Stagger calculation for clean grid entry sequence
  const calculatedDelay = delayOffset + index * 0.04;

  return (
    <Component className={className} {...props}>
      <motion.div
        initial={{ 
          opacity: 0, 
          scale: initialScale, 
          y: yOffset, 
          filter: `blur(${blurAmount}px)` 
        }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          filter: "blur(0px)" 
        }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: duration,
          delay: calculatedDelay,
          // A premium deceleration curve that feels deliberate and smooth for higher education UI
          ease: [0.16, 1, 0.3, 1], 
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </Component>
  );
}