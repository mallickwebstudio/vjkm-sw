import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { HeroAccentBlobs } from "@/components/bg"
import { TextBlurFadeIn } from "@/components/animation/text-blur-fade-in"

export interface SectionTextAnimationProps {
    delayOffset?: number
    duration?: number
    yOffset?: number
    blurAmount?: number
    isAboveTheFold?: boolean
    disableAnimation?: boolean
}

function Hero({
    className,
    imageSrc,
    imageAlt,
    variant = "left",
    children,
    ...props
}: React.ComponentProps<"section"> & {
    imageSrc?: string
    imageAlt?: string
    variant?: "left" | "center"
}) {
    const src = imageSrc || "/images/image-light.svg"
    const alt = imageAlt || "Hero background image"

    return (
        <section
            data-slot="hero"
            data-variant={variant}
            className={cn("group/hero min-h-[85vh] relative bg-background overflow-hidden", className)}
            {...props}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    fill
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    src={src}
                    alt={alt}
                    className="pointer-events-none select-none object-cover opacity-60 scale-105 transition-transform duration-1000 group-hover/hero:scale-100"
                    unoptimized
                />
            </div>

            {/* Gradient Dark Overlay */}
            <div
                aria-hidden="true"
                className={cn(
                    "absolute inset-0 pointer-events-none z-1",
                    "group-data-[variant=left]/hero:bg-linear-to-r group-data-[variant=left]/hero:from-neutral-950/95 group-data-[variant=left]/hero:via-neutral-950/30 group-data-[variant=left]/hero:to-transparent",
                    "group-data-[variant=center]/hero:bg-radial from-neutral-950/60 via-neutral-950/85 to-neutral-950"
                )}
            />

            {/* Ambient Radial Accent Light */}
            <HeroAccentBlobs />

            {/* Container */}
            <div
                data-slot="hero-container"
                className="relative container mx-auto px-6 py-12 md:px-16 lg:py-16 flex z-10"
            >
                {children}
            </div>
        </section>
    )
}

function HeroContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="hero-content"
            className={cn(
                "flex flex-col gap-5 max-w-2xl w-full",
                "group-data-[variant=left]/hero:items-start group-data-[variant=left]/hero:text-left",
                "group-data-[variant=center]/hero:mx-auto group-data-[variant=center]/hero:items-center group-data-[variant=center]/hero:text-center",
                className
            )}
            {...props}
        />
    )
}

function HeroH1({
    className,
    delayOffset = 0.05,
    duration = 0.4,
    yOffset = 8,
    blurAmount = 6,
    isAboveTheFold = false,
    disableAnimation = false,
    children,
    ...props
}: React.ComponentProps<"h1"> & SectionTextAnimationProps) {
    if (disableAnimation) {
        return (
            <h1
                data-slot="hero-h1"
                className={cn(
                    "text-4xl font-extrabold tracking-tight lg:text-5xl text-white drop-shadow-md leading-[1.1] font-heading",
                    className
                )}
                {...props}
            >
                {children}
            </h1>
        )
    }
    return (
        <TextBlurFadeIn
            as="h1"
            data-slot="hero-h1"
            className={cn(
                "text-4xl font-extrabold tracking-tight lg:text-5xl text-white drop-shadow-md leading-[1.1] font-heading",
                className
            )}
            delayOffset={delayOffset}
            duration={duration}
            yOffset={yOffset}
            blurAmount={blurAmount}
            isAboveTheFold={isAboveTheFold}
            {...props}
        >
            {children}
        </TextBlurFadeIn>
    )
}

function HeroP({
    className,
    delayOffset = 0.22,
    duration = 0.4,
    yOffset = 8,
    blurAmount = 6,
    isAboveTheFold = false,
    disableAnimation = false,
    children,
    ...props
}: React.ComponentProps<"p"> & SectionTextAnimationProps) {
    if (disableAnimation) {
        return (
            <p
                data-slot="hero-p"
                className={cn(
                    "text-base/relaxed md:text-lg/relaxed text-neutral-200 drop-shadow-sm font-normal max-w-xl",
                    className
                )}
                {...props}
            >
                {children}
            </p>
        )
    }
    return (
        <TextBlurFadeIn
            as="p"
            data-slot="hero-p"
            className={cn(
                "text-base/relaxed md:text-lg/relaxed text-neutral-200 drop-shadow-sm font-normal max-w-xl",
                className
            )}
            delayOffset={delayOffset}
            duration={duration}
            yOffset={yOffset}
            blurAmount={blurAmount}
            isAboveTheFold={isAboveTheFold}
            {...props}
        >
            {children}
        </TextBlurFadeIn>
    )
}

function HeroCta({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="hero-cta"
            className={cn(
                "mt-2 flex items-center flex-wrap gap-4",
                "group-data-[variant=left]/hero:justify-start",
                "group-data-[variant=center]/hero:justify-center",
                className
            )}
            {...props}
        />
    )
}

export { Hero, HeroContent, HeroH1, HeroP, HeroCta }
