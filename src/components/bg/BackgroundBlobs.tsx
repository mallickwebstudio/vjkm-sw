import * as React from "react"
import { BlurBlob, type BlurBlobProps } from "./BlurBlob"
import { cn } from "@/lib/utils"

export interface BackgroundBlobsProps extends React.HTMLAttributes<HTMLDivElement> {
  preset?: "hero" | "dual" | "subtle-corner" | "glow" | "none"
  topVariant?: BlurBlobProps["variant"]
  bottomVariant?: BlurBlobProps["variant"]
  opacity?: BlurBlobProps["opacity"]
}

export function BackgroundBlobs({
  preset = "dual",
  topVariant = "blue",
  bottomVariant = "emerald",
  opacity = 15,
  className,
  children,
  ...props
}: BackgroundBlobsProps) {
  if (preset === "hero") {
    return <HeroAccentBlobs className={className} {...props} />
  }

  if (preset === "subtle-corner") {
    return (
      <div className={cn("pointer-events-none select-none", className)} {...props}>
        <BlurBlob
          variant={topVariant}
          opacity={opacity}
          size="lg"
          blur="3xl"
          position="top-right"
          className="-top-24 -right-24"
        />
        {children}
      </div>
    )
  }

  if (preset === "glow") {
    return (
      <div className={cn("pointer-events-none select-none", className)} {...props}>
        <BlurBlob
          variant={topVariant}
          opacity={opacity}
          size="xl"
          blur="3xl"
          position="center"
        />
        {children}
      </div>
    )
  }

  if (preset === "dual") {
    return (
      <DualAccentBlobs
        topColor={topVariant}
        bottomColor={bottomVariant}
        opacity={opacity}
        className={className}
        {...props}
      >
        {children}
      </DualAccentBlobs>
    )
  }

  return (
    <div className={cn("pointer-events-none select-none", className)} {...props}>
      {children}
    </div>
  )
}

/**
 * Preset composition for Hero sections:
 * - Top-left blue pulsing accent blob
 * - Bottom-right emerald ambient accent blob
 */
export function HeroAccentBlobs({ className }: { className?: string }) {
  return (
    <>
      <BlurBlob
        variant="blue"
        opacity={25}
        size="lg"
        blur="3xl"
        pulse
        className={cn("top-1/4 -left-20 z-1", className)}
      />
      <BlurBlob
        variant="emerald"
        opacity={15}
        size="md"
        blur="3xl"
        className={cn("bottom-10 right-10 z-1", className)}
      />
    </>
  )
}

/**
 * Preset composition for sections needing top-right & bottom-left background accents
 */
export function DualAccentBlobs({
  topColor = "blue",
  bottomColor = "purple",
  opacity = 15,
  className,
  children,
}: {
  topColor?: BlurBlobProps["variant"]
  bottomColor?: BlurBlobProps["variant"]
  opacity?: BlurBlobProps["opacity"]
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={cn("pointer-events-none select-none w-screen", className)}>
      <BlurBlob
        variant={topColor}
        opacity={opacity}
        size="lg"
        blur="3xl"
        position="top-right"
      />
      <BlurBlob
        variant={bottomColor}
        opacity={opacity}
        size="lg"
        blur="3xl"
        position="bottom-left"
      />
      {children}
    </div>
  )
}
