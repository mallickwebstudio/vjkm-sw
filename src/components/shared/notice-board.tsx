import React from 'react'
import { Megaphone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { NotificationItem, mockNotificationsData } from '@/db/notice'

export interface NoticeBoardProps {
    notifications?: NotificationItem[]
}

export async function NoticeBoard({ notifications }: NoticeBoardProps = {}) {
    const t = await getTranslations("home.notice")
    const items = notifications && notifications.length > 0 ? notifications : mockNotificationsData

    if (!items || items.length === 0) {
        return null
    }

    // Ensure enough items for seamless continuous marquee loop
    const displayList = items.length === 1 
        ? [...items, ...items, ...items, ...items] 
        : items.length < 4 
            ? [...items, ...items, ...items] 
            : [...items, ...items]

    return (
        <section className="bg-slate border-y border-slate-tone/30 text-slate-foreground py-3 overflow-hidden">
            <div className="container mx-auto px-4 flex items-center gap-4">
                <div className={cn(buttonVariants({ variant: "emerald", size: "sm" }), "hover:bg-emerald shrink-0")}>
                    <Megaphone className="animate-pulse text-amber-tone w-4 h-4" />
                    <span>{t("urgentNotices")}</span>
                </div>

                <div className="relative flex-1 overflow-hidden">
                    <div className="animate-marquee flex items-center gap-8 whitespace-nowrap hover:[animation-play-state:paused]">
                        {displayList.map((notice, idx) => {
                            const title = notice.title
                            const href = notice.href || '#'
                            const isExternal = href.startsWith("http")
                            const hasLink = href && href !== '#'

                            return (
                                <div key={idx} className="flex items-center gap-8 shrink-0">
                                    {isExternal ? (
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium text-xs sm:text-sm text-slate-foreground hover:text-amber-tone transition-colors cursor-pointer"
                                        >
                                            {title}
                                        </a>
                                    ) : hasLink ? (
                                        <Link
                                            href={href}
                                            className="font-medium text-xs sm:text-sm text-slate-foreground hover:text-amber-tone transition-colors cursor-pointer"
                                        >
                                            {title}
                                        </Link>
                                    ) : (
                                        <span className="font-medium text-xs sm:text-sm text-slate-foreground">
                                            {title}
                                        </span>
                                    )}
                                    <span className="text-amber-tone select-none font-bold text-sm shrink-0" aria-hidden="true">
                                        ✦
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoticeBoard


