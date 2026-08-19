import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const blurBlobVariants = cva(
  "absolute rounded-full pointer-events-none aria-hidden:true select-none transition-all duration-700",
  {
    variants: {
      variant: {
        primary: "bg-primary",
        blue: "bg-blue-800",
        emerald: "bg-emerald-500",
        purple: "bg-purple-600",
        indigo: "bg-indigo-600",
        amber: "bg-amber-500",
        cyan: "bg-cyan-500",
        rose: "bg-rose-500",
        neutral: "bg-neutral-500",
      },
      size: {
        sm: "h-64 w-64",
        md: "h-80 w-80",
        lg: "h-96 w-96",
        xl: "h-[32rem] w-[32rem]",
        "2xl": "h-[40rem] w-[40rem]",
      },
      blur: {
        sm: "blur-sm",
        md: "blur-md",
        lg: "blur-lg",
        xl: "blur-xl",
        "2xl": "blur-2xl",
        "3xl": "blur-3xl",
      },
      position: {
        "top-left": "top-0 left-0",
        "top-right": "top-0 right-0",
        "bottom-left": "bottom-0 left-0",
        "bottom-right": "bottom-0 right-0",
        center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        "top-center": "top-0 left-1/2 -translate-x-1/2",
        "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
        custom: "",
      },
      opacity: {
        5: "opacity-5",
        10: "opacity-10",
        15: "opacity-15",
        20: "opacity-20",
        25: "opacity-25",
        30: "opacity-30",
        40: "opacity-40",
        50: "opacity-50",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
      blur: "3xl",
      position: "custom",
      opacity: 15,
    },
  }
)

export interface BlurBlobProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof blurBlobVariants> {
  pulse?: boolean
}

export function BlurBlob({
  className,
  variant,
  size,
  blur,
  position,
  opacity,
  pulse = false,
  ...props
}: BlurBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        blurBlobVariants({ variant, size, blur, position, opacity }),
        pulse && "animate-pulse duration-700",
        className
      )}
      {...props}
    />
  )
}
