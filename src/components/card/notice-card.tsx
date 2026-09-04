"use client"

import * as React from "react"
import { Calendar, ArrowUpRight, Sparkles, FileText, Paperclip } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { parseDateSafe } from "@/db/notice"

interface NoticeCardProps {
  title: string
  date?: string
  course?: string
  badge?: string
  type?: string
  href?: string
  index?: number
}

// Pushpin color palette based on circular index and status
const PIN_VARIANTS = [
  { bg: "from-rose-500 to-red-700", highlight: "bg-rose-300", shadow: "rgba(185,28,28,0.4)" },     // Red pin
  { bg: "from-amber-400 to-amber-600", highlight: "bg-amber-200", shadow: "rgba(217,119,6,0.4)" },  // Brass/Amber pin
  { bg: "from-sky-500 to-blue-700", highlight: "bg-sky-300", shadow: "rgba(29,78,216,0.4)" },       // Blue pin
  { bg: "from-emerald-500 to-teal-700", highlight: "bg-emerald-300", shadow: "rgba(4,120,87,0.4)" }, // Green pin
]

export function NoticeCard({
  title,
  date,
  course,
  badge,
  type,
  href,
  index = 0,
}: NoticeCardProps) {
  // Realistic physical hanging rotation angles
  const rotations = ["-rotate-1", "rotate-1", "-rotate-0.5", "rotate-1.5", "-rotate-1.5"]
  const rotationClass = rotations[index % rotations.length]
  const pinVariant = PIN_VARIANTS[index % PIN_VARIANTS.length]

  // Helper to calculate if timestamp date is within 14 days
  const isNew = React.useMemo(() => {
    if (!date) return false
    const d = parseDateSafe(date)
    const time = d.getTime()
    if (isNaN(time)) return false
    const now = Date.now()
    const diffDays = (now - time) / (1000 * 60 * 60 * 24)
    return diffDays >= -1 && diffDays <= 14
  }, [date])

  // Helper to safely format timestamp string
  const formattedDate = React.useMemo(() => {
    if (!date) return ""
    const parsedDate = parseDateSafe(date)
    if (isNaN(parsedDate.getTime())) return date
    return parsedDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }, [date])

  // Official dispatch reference number for practical college look
  const dispatchNumber = React.useMemo(() => {
    const year = date ? new Date(date).getFullYear() || 2026 : 2026
    const padded = (index + 1).toString().padStart(2, "0")
    const code = course ? course.toUpperCase().slice(0, 3) : "GEN"
    return `VJKM/${code}/${year}/${padded}`
  }, [course, date, index])

  // Dynamic badge color per course
  const courseVariant = React.useMemo(() => {
    const c = (course || "").toLowerCase()
    if (c === "bsw") return "sky-outline"
    if (c === "msw") return "purple-outline"
    return "slate-outline"
  }, [course])

  const badgeText = badge || type

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-xl transition-all duration-300 ease-out",
        // Authentic paper sheet background & shadows
        "bg-[#fdfdfc] dark:bg-[#1a231f] text-foreground border border-neutral-200/90 dark:border-white/10",
        "shadow-[0_4px_14px_rgba(0,0,0,0.14)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.28)]",
        "hover:z-30 hover:-translate-y-2 hover:rotate-0 pt-7 p-5",
        rotationClass
      )}
      style={{
        // Subtle paper texture gradient
        backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(250,248,245,0.95))",
      }}
    >

      {/* Decorative top letterhead rule & dispatch strip */}
      <div className="space-y-3">

        {/* Stamps & Course Tags Row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {/* NEW Rubber Ink Stamp Badge */}
            {isNew && (
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-xs border-2 border-rose-600/80 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 font-mono text-[10px] font-black uppercase tracking-wider -rotate-3 shadow-xs animate-pulse">
                <Sparkles className="size-2.5" />
                NEW
              </span>
            )}

            {/* Course Tag */}
            {course && (
              <Badge variant={courseVariant} className="font-bold text-[10px] tracking-wider uppercase rounded-md">
                {course}
              </Badge>
            )}

            {/* Custom Circular Type Rubber Stamp */}
            {badgeText && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-xs border border-amber-600/60 bg-amber-500/10 text-amber-900 dark:text-amber-300 font-mono text-[9px] font-bold uppercase tracking-wider rotate-1 shadow-xs">
                {badgeText}
              </span>
            )}
          </div>
        </div>

        {/* Notice Title */}
        <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 leading-snug group-hover:text-amber-tone transition-colors line-clamp-3">
          {title}
        </h3>
      </div>

      {/* Card Footer: Practical Dispatch Date & View Circular Action */}
      <div className="mt-4 pt-3 flex items-center justify-between border-t border-neutral-200/80 dark:border-neutral-800">
        {formattedDate ? (
          <time className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-400">
            <Calendar className="size-3.5 text-amber-tone shrink-0" />
            <span>{formattedDate}</span>
          </time>
        ) : (
          <span className="flex items-center gap-1 text-[10px] text-neutral-400">
            <FileText className="size-3" /> Circular
          </span>
        )}

        <a
          href={href || "/news-and-updates"}
          target={href && href.startsWith("http") ? "_blank" : undefined}
          rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={cn(
            buttonVariants({ variant: "ghost", size: "xs" }),
            "text-xs font-semibold text-amber-tone hover:text-amber-tone hover:bg-amber-500/10 rounded-md gap-1"
          )}
          title="View Official Notice"
        >
          <span>View Notice</span>
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Folded Paper Corner (Dog-ear) on Bottom-Right */}
      <div
        className="absolute bottom-0 right-0 size-3 pointer-events-none overflow-hidden rounded-br-xl"
        aria-hidden="true"
      >
        <div className="absolute -bottom-2 -right-2 size-4 bg-neutral-300/80 dark:bg-neutral-700/80 shadow-xs -rotate-45" />
      </div>
    </article>
  )
}

