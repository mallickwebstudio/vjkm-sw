"use client";

import React, { ElementType } from "react";
import { motion, useReducedMotion } from "motion/react";

export interface TextBlurFadeInProps {
  /** The text sentence or heading to animate */
  text?: string;
  /** React children (text string or nodes) */
  children?: React.ReactNode;
  /** The HTML tag to render. Defaults to 'span', but can be 'h2', 'p', 'h1', etc. */
  as?: ElementType;
  /** Custom delay offset before the first word begins animating (in seconds) */
  delayOffset?: number;
  /** The duration of each individual word's animation (in seconds) */
  duration?: number;
  /** Total vertical distance each word glides upward (in pixels) */
  yOffset?: number;
  /** Initial blur radius applied to the words (in pixels) */
  blurAmount?: number;
  /** If true, bypasses JavaScript transitions for instant server-side layout rendering */
  isAboveTheFold?: boolean;
  /** Tailwind or standard CSS styles for text typography and layout */
  className?: string;
}

/**
 * Extracts raw string text from React nodes for accessible aria-label annotations.
 */
function extractText(node: React.ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode };
    return extractText(props.children);
  }
  return "";
}

export function TextBlurFadeIn({
  text,
  children,
  as: Component = "span",
  delayOffset = 0,
  duration = 0.4,
  yOffset = 8, // Very subtle lift for institutional writing
  blurAmount = 6,
  isAboveTheFold = false,
  className = "",
  ...props
}: TextBlurFadeInProps & React.ComponentPropsWithoutRef<any>) {
  const shouldReduceMotion = useReducedMotion();
  const fullText = text ?? extractText(children);

  // 1. The SEO and Accessibility Shield:
  // If rendered above the fold or on a low-motion OS device, output vanilla HTML instantly.
  if (isAboveTheFold || shouldReduceMotion) {
    return (
      <Component className={className} {...props}>
        {children ?? text}
      </Component>
    );
  }

  // Helper to render staggered word animations
  const renderStaggeredWords = (
    content: React.ReactNode,
    wordIndexRef: { count: number }
  ): React.ReactNode => {
    if (content === null || content === undefined || typeof content === "boolean") {
      return null;
    }

    if (typeof content === "string" || typeof content === "number") {
      const strContent = String(content);
      const words = strContent.split(" ");
      return words.map((word, idx) => {
        if (!word && idx < words.length - 1) {
          return <span key={idx} aria-hidden="true">&nbsp;</span>;
        }
        const currentIndex = wordIndexRef.count++;
        const isLastWordInChunk = idx === words.length - 1;

        return (
          <span
            key={`${currentIndex}-${word}-${idx}`}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: yOffset, filter: `blur(${blurAmount}px)` }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: duration,
                delay: delayOffset + currentIndex * 0.03,
                ease: [0.25, 1, 0.5, 1], // Clean, authoritative deceleration
              }}
              aria-hidden="true"
            >
              {word}
            </motion.span>
            {!isLastWordInChunk && <span aria-hidden="true">&nbsp;</span>}
          </span>
        );
      });
    }

    if (Array.isArray(content)) {
      return content.map((item, idx) => (
        <React.Fragment key={idx}>
          {renderStaggeredWords(item, wordIndexRef)}
        </React.Fragment>
      ));
    }

    if (React.isValidElement(content)) {
      const element = content as React.ReactElement<any>;
      if (!element.props?.children && element.type === "br") {
        return element;
      }
      const clonedChildren = renderStaggeredWords(element.props?.children, wordIndexRef);
      return React.cloneElement(element, element.props, clonedChildren);
    }

    return content;
  };

  const wordIndexRef = { count: 0 };
  const animatedNodes = renderStaggeredWords(children ?? text, wordIndexRef);

  return (
    <Component className={className} aria-label={fullText} role="text" {...props}>
      {animatedNodes}
    </Component>
  );
}