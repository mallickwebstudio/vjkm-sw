import React from 'react'
import { Megaphone } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { getTranslations } from 'next-intl/server'

export async function NoticeBoard() {
    const t = await getTranslations("home.notice");

    const notices = [
        {
            id: 1,
            title: t("notices.n1Title"),
            description: t("notices.n1Desc"),
            tag: t("notices.n1Tag"),
            variant: "bg-amber/15 text-amber-tone border-amber/30",
            isUrgent: true,
        },
        {
            id: 2,
            title: t("notices.n2Title"),
            description: t("notices.n2Desc"),
            tag: t("notices.n2Tag"),
            variant: "bg-emerald/15 text-emerald-tone border-emerald/30",
            isUrgent: false,
        },
        {
            id: 3,
            title: t("notices.n3Title"),
            description: t("notices.n3Desc"),
            tag: t("notices.n3Tag"),
            variant: "bg-sky/15 text-sky-tone border-sky/30",
            isUrgent: false,
        },
        {
            id: 4,
            title: t("notices.n4Title"),
            description: t("notices.n4Desc"),
            tag: t("notices.n4Tag"),
            variant: "bg-purple/15 text-purple border-purple/30",
            isUrgent: false,
        },
    ];

    return (
        <section className="bg-slate border-y border-slate-tone/30 text-slate-foreground py-3 overflow-hidden">
            <div className="container mx-auto px-4 flex items-center gap-4">
                <div className={cn(buttonVariants({ variant: "emerald", size: "sm" }), "hover:bg-emerald")}>
                    <Megaphone className="animate-pulse text-amber-tone" />
                    <span>{t("urgentNotices")}</span>
                </div>

                <div className="relative flex-1 overflow-hidden">
                    <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
                        {[...notices, ...notices].map((notice, idx) => (
                            <div key={`${notice.id}-${idx}`} className="flex items-center gap-3 text-sm group cursor-pointer shrink-0">
                                <Badge variant="outline" className={`text-xs px-2 py-0.5 rounded ${notice.variant}`}>
                                    {notice.tag}
                                </Badge>
                                <span className="font-semibold text-slate-foreground group-hover:text-emerald-tone transition-colors">
                                    {notice.title}:
                                </span>
                                <span className="text-slate-tone font-normal text-xs sm:text-sm">
                                    {notice.description}
                                </span>
                                <span className="text-slate-tone/60 mx-2">•</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoticeBoard
