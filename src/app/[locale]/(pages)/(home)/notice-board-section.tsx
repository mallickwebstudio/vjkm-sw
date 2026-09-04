"use client"

import * as React from "react"
import { Filter, Pin, ArrowRight, Bell, Sparkles } from "lucide-react"
import { Locale } from "@/i18n/routing"
import { Section, SectionContent, SectionHeader, SectionTitle, SectionDescription } from "@/components/section/section"
import { NoticeCard } from "@/components/card/notice-card"
import { buttonVariants } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { FadeInUp } from "@/components/animation/fade-in-up"
import { cn } from "@/lib/utils"

export interface NoticeItem {
  title: string
  date?: string
  course?: string
  badge?: string
  type?: string
  href?: string
}

interface NoticeBoardSectionProps {
  notices: NoticeItem[]
  locale?: Locale
}

export function NoticeBoardSection({ notices = [], locale }: NoticeBoardSectionProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all")
  const isGu = locale === "gu"

  // Dynamic filter options generated from available course and badge tags in notices
  const filterOptions = React.useMemo(() => {
    if (!notices || notices.length === 0) return []

    const tagsSet = new Set<string>()
    notices.forEach((n) => {
      if (n.course && n.course.trim()) {
        tagsSet.add(n.course.trim())
      }
      if (n.badge && n.badge.trim()) {
        tagsSet.add(n.badge.trim())
      } else if (n.type && n.type.trim()) {
        tagsSet.add(n.type.trim())
      }
    })

    const dynamicTags = Array.from(tagsSet).map((tagStr) => ({
      id: tagStr.toLowerCase(),
      label: tagStr,
    }))

    return [{ id: "all", label: isGu ? "બધી સૂચનાઓ" : "All Notices" }, ...dynamicTags]
  }, [notices, isGu])

  // Filtered notices based on selected course or badge filter
  const filteredNotices = React.useMemo(() => {
    if (!notices || notices.length === 0) return []
    if (selectedCategory === "all") return notices
    const target = selectedCategory.toLowerCase()
    return notices.filter((n) => {
      const courseStr = (n.course || "").toLowerCase()
      const badgeStr = (n.badge || n.type || "").toLowerCase()
      return courseStr === target || badgeStr === target || badgeStr.includes(target)
    })
  }, [notices, selectedCategory])

  // Display up to 8 notices on homepage
  const displayedNotices = filteredNotices.slice(0, 8)

  return (
    <Section
      id="notices"
      className={cn(
        "relative w-full overflow-hidden",
        // The board covers the whole section with physical frame bevels and green felt baize backing
        "border-y-4 sm:border-y-8 border-[#262f29] bg-[#11261b] dark:bg-[#0c1c14]",
        "shadow-[inset_0_10px_35px_rgba(0,0,0,0.7),inset_0_-10px_35px_rgba(0,0,0,0.7)]",
      )}
    >
      {/* Physical Board Texture (Deep Academic Green Felt Baize weave) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: "radial-gradient(#1f4a34 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      {/* 4 Corner Real-World Mounting Hardware Screws */}
      <div className="absolute top-3 left-3 size-3.5 sm:size-4 rounded-full bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-600 border border-neutral-700 shadow-md flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-2 h-0.5 bg-neutral-900/80 rotate-45" />
      </div>
      <div className="absolute top-3 right-3 size-3.5 sm:size-4 rounded-full bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-600 border border-neutral-700 shadow-md flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-2 h-0.5 bg-neutral-900/80 -rotate-45" />
      </div>
      <div className="absolute bottom-3 left-3 size-3.5 sm:size-4 rounded-full bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-600 border border-neutral-700 shadow-md flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-2 h-0.5 bg-neutral-900/80 -rotate-45" />
      </div>
      <div className="absolute bottom-3 right-3 size-3.5 sm:size-4 rounded-full bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-600 border border-neutral-700 shadow-md flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-2 h-0.5 bg-neutral-900/80 rotate-45" />
      </div>

      {/* Header & CTA Link directly inside the board */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 pb-6 border-b border-emerald-950/70 sm:border-white/10">
        <SectionHeader align="left" className="text-left">
          <SectionTitle className="flex items-center gap-2.5 text-white">
            <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-400/30 inline-flex shadow-xs">
              <Bell className="size-5 sm:size-6" />
            </span>
            <span className="drop-shadow-sm">{isGu ? "સૂચના બોર્ડ અને પરિપત્રો" : "Notice Board & Circulars"}</span>
          </SectionTitle>
          <SectionDescription className="text-emerald-100/85 dark:text-emerald-200/75 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
            {isGu
              ? "શ્રી ગોવિંદ ગુરુ યુનિવર્સિટી (SGGU) અને કોલેજ સંલગ્ન સત્તાવાર સૂચનાઓ, પરીક્ષા કાર્યક્રમ અને પ્રવેશ જાહેરાતો."
              : "Official university circulars, examination schedules, admission alerts, and campus notifications."}
          </SectionDescription>
        </SectionHeader>

        <Link
          href="/news-and-updates"
          className={cn(buttonVariants({ variant: "amber", size: "lg" }), "shrink-0 shadow-md hover:shadow-lg font-bold gap-2")}
        >
          <span>{isGu ? "તમામ સૂચનાઓ જુઓ" : "View All Notices"}</span>
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Physical Index Filter Tabs (pinned tabs on the board rail) */}
      {notices.length > 0 && filterOptions.length > 1 && (
        <div className="relative z-10 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 backdrop-blur-xs">
            <Filter className="size-3.5 text-amber-400 ml-2 mr-1 shrink-0" />
            {filterOptions.map((opt) => {
              const isSelected = selectedCategory === opt.id
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedCategory(opt.id)}
                  className={cn(
                    "shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1",
                    isSelected
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-bold shadow-md scale-100"
                      : "text-neutral-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  {isSelected && <Pin className="size-2.5 fill-amber-950" />}
                  <span>{opt.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Notice Cards Grid on Felt Pinboard Canvas */}
      <SectionContent className="relative z-10 space-y-6">
        {displayedNotices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
            {displayedNotices.map((notice, index) => (
              <FadeInUp key={notice.title + index} index={index}>
                <NoticeCard
                  title={notice.title}
                  date={notice.date}
                  course={notice.course}
                  badge={notice.badge}
                  type={notice.type}
                  href={notice.href}
                  index={index}
                />
              </FadeInUp>
            ))}
          </div>
        ) : (
          /* Authentic Pinned Empty-Note State */
          <div className="relative mx-auto my-8 max-w-md p-6 rounded-xl bg-[#fefefe] dark:bg-[#1a231f] text-neutral-800 dark:text-neutral-200 shadow-xl border border-neutral-300 dark:border-white/10 text-center -rotate-1">
            {/* Pushpin at top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 size-4 rounded-full bg-rose-600 border border-white shadow-md flex items-center justify-center">
              <div className="size-1 rounded-full bg-white/80" />
            </div>
            <div className="p-3 rounded-full bg-amber-500/10 text-amber-600 mx-auto w-fit mb-3">
              <Pin className="size-6 rotate-45" />
            </div>
            <p className="text-sm font-semibold">
              {notices.length === 0
                ? (isGu ? "હાલમાં કોઈ નવી સૂચના કે જાહેરાત બોર્ડ પર ઉપલબ્ધ નથી." : "No active notices or announcements pinned on the board.")
                : (isGu ? "પસંદ કરેલ ફિલ્ટરમાં કોઈ સૂચના મળી નથી." : "No circulars found under this category filter.")}
            </p>

            {notices.length > 0 && selectedCategory !== "all" && (
              <button
                onClick={() => setSelectedCategory("all")}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 hover:underline cursor-pointer"
              >
                <Sparkles className="size-3" />
                <span>{isGu ? "તમામ સૂચનાઓ રીસેટ કરો" : "Reset Category Filter"}</span>
              </button>
            )}
          </div>
        )}
      </SectionContent>
    </Section>
  )
}

export default NoticeBoardSection

