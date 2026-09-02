"use client"

import * as React from "react"
import { Filter, Pin, ArrowRight } from "lucide-react"
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

  // Dynamic filter options generated from available types in notices data
  const filterOptions = React.useMemo(() => {
    if (!notices || notices.length === 0) return []

    const typesSet = new Set<string>()
    notices.forEach((n) => {
      if (n.type && n.type.trim()) {
        typesSet.add(n.type.trim())
      }
    })

    const dynamicTypes = Array.from(typesSet).map((typeStr) => ({
      id: typeStr.toLowerCase(),
      label: typeStr,
    }))

    return [{ id: "all", label: isGu ? "બધી સૂચનાઓ" : "All Notices" }, ...dynamicTypes]
  }, [notices, isGu])

  // Filtered notices based on selected type filter
  const filteredNotices = React.useMemo(() => {
    if (!notices || notices.length === 0) return []
    if (selectedCategory === "all") return notices
    const target = selectedCategory.toLowerCase()
    return notices.filter((n) => {
      const typeStr = (n.type || "").toLowerCase()
      return typeStr === target || typeStr.includes(target)
    })
  }, [notices, selectedCategory])

  // Display up to 8 notices on homepage
  const displayedNotices = filteredNotices.slice(0, 8)

  return (
    <Section id="notices" className="bg-background">
      {/* Header & CTA Link aligned with other homepage sections */}
      <div className="lg:flex lg:justify-between lg:items-end">
        <SectionHeader align="left">
          <SectionTitle>
            {isGu ? "સૂચના બોર્ડ અને પરિપત્રો" : "Notice Board & Announcements"}
          </SectionTitle>
          <SectionDescription>
            {isGu
              ? "શ્રી ગોવિંદ ગુરુ યુનિવર્સિટી (SGGU) અને કોલેજ સંલગ્ન સત્તાવાર સૂચનાઓ, પરીક્ષા કાર્યક્રમ અને પ્રવેશ જાહેરાતો."
              : "Official university notifications, examination timetables, admission alerts, and campus circulars."}
          </SectionDescription>
        </SectionHeader>

        <Link
          href="/news-and-updates"
          className={cn(buttonVariants({ variant: "amber", size: "lg" }), "mt-2")}
        >
          <span>{isGu ? "તમામ સૂચનાઓ જુઓ" : "View All Notices"}</span>
          <ArrowRight />
        </Link>
      </div>

      {/* Filter Shelf: clean theme-aligned pill buttons */}
      {notices.length > 0 && filterOptions.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar pt-1">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-muted border border-border">
            <Filter className="size-3.5 text-amber-tone ml-2 mr-1 shrink-0" />
            {filterOptions.map((opt) => {
              const isSelected = selectedCategory === opt.id
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedCategory(opt.id)}
                  className={cn(
                    "shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer",
                    isSelected
                      ? "bg-amber text-amber-foreground shadow-xs font-bold"
                      : "text-slate-tone hover:text-foreground hover:bg-card"
                  )}
                >
                  {opt.label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Notice Cards Grid */}
      <SectionContent className="space-y-6">
        {displayedNotices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {displayedNotices.map((notice, index) => (
              <FadeInUp key={notice.title + index} index={index}>
                <NoticeCard
                  title={notice.title}
                  date={notice.date}
                  type={notice.type}
                  href={notice.href}
                  index={index}
                />
              </FadeInUp>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-14 px-4 text-center rounded-2xl border border-dashed border-border bg-slate-muted/50">
            <div className="p-3 rounded-full bg-amber/10 text-amber-tone mb-3">
              <Pin className="size-6 rotate-45" />
            </div>
            <p className="text-sm font-semibold text-foreground">
              {notices.length === 0
                ? (isGu ? "હાલમાં કોઈ નવી સૂચના કે જાહેરાત ઉપલબ્ધ નથી." : "No active notices or announcements available at this time.")
                : (isGu ? "પસંદ કરેલ ફિલ્ટરમાં કોઈ સૂચના મળી નથી." : "No notices found under this filter.")}
            </p>

            {notices.length > 0 && selectedCategory !== "all" && (
              <button
                onClick={() => setSelectedCategory("all")}
                className="mt-3 text-xs font-semibold text-amber-tone hover:underline cursor-pointer"
              >
                {isGu ? "બધી સૂચનાઓ જુઓ" : "Reset Filter"}
              </button>
            )}
          </div>
        )}
      </SectionContent>
    </Section>
  )
}

export default NoticeBoardSection
