"use client"

import * as React from "react"
import { Calendar, ArrowUpRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface NoticeCardProps {
  title: string
  date?: string
  type?: string
  href?: string
  index?: number
}

export function NoticeCard({
  title,
  date,
  type,
  href,
  index = 0,
}: NoticeCardProps) {
  // Subtle alternating tilt angles for an authentic bulletin look
  const rotations = ["-rotate-1", "rotate-0.5", "-rotate-0.5", "rotate-1"]
  const rotationClass = rotations[index % rotations.length]

  // Helper to calculate if timestamp date is within 14 days
  const isNew = React.useMemo(() => {
    if (!date) return false
    const d = new Date(date)
    const time = d.getTime()
    if (isNaN(time)) return false
    const now = Date.now()
    const diffDays = (now - time) / (1000 * 60 * 60 * 24)
    return diffDays >= 0 && diffDays <= 14
  }, [date])

  // Helper to safely format timestamp string (including Google Form / Sheet timestamp)
  const formattedDate = React.useMemo(() => {
    if (!date) return ""
    const parsedDate = new Date(date)
    if (isNaN(parsedDate.getTime())) return date
    return parsedDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }, [date])

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl p-5 transition-all duration-300 ease-out",
        "bg-card text-foreground border border-border shadow-xs hover:shadow-lg hover:border-amber/50",
        "hover:z-20 group-hover:rotate-0 group-hover:-translate-y-1.5",
        rotationClass
      )}
    >
      {/* Tape Strip Accent on Top Left */}
      <div className="absolute -top-2 left-6 h-3.5 w-12 -rotate-3 rounded-xs border-y border-amber/30 bg-amber/20 backdrop-blur-xs shadow-xs pointer-events-none" />

      <div className="space-y-3">
        {/* Header Meta Row: NEW Badge & Type Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
          <div className="flex flex-wrap items-center gap-1.5">
            {/* NEW Badge if timestamp date <= 14 days */}
            {isNew && (
              <Badge variant="rose-outline" className="border-rose/40 text-rose font-bold animate-pulse">
                <Sparkles className="size-2.5 mr-0.5" />
                NEW
              </Badge>
            )}

            {/* Notice Type Tag */}
            {type && (
              <Badge variant="amber-outline" className="font-semibold text-[10px]">
                {type}
              </Badge>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-amber-tone transition-colors line-clamp-3">
          {title}
        </h3>
      </div>

      {/* Card Footer: Date & View Action Link */}
      <div className="mt-4 pt-3 flex items-center justify-between border-t border-dashed border-border">
        {formattedDate && (
          <time className="flex items-center gap-1.5 text-[11px] font-medium text-slate-tone">
            <Calendar className="size-3.5 text-amber-tone" />
            {formattedDate}
          </time>
        )}

        <a
          href={href || "/news-and-updates"}
          target={href && href.startsWith("http") ? "_blank" : undefined}
          rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={cn(buttonVariants({ variant: "ghost", size: "xs" }), "text-xs font-semibold text-amber-tone hover:text-amber-tone hover:bg-amber/10")}
          title="View Notice"
        >
          <span>View</span>
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  )
}
