import React from 'react'
import { Megaphone } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { getLocale, getTranslations } from 'next-intl/server'
import { Locale } from '@/i18n/routing'

interface NoticeTickerItem {
    id: number
    title: {
        en: string
        gu: string
    }
    description: {
        en: string
        gu: string
    }
    tag: {
        en: string
        gu: string
    }
    variant: string
    isUrgent: boolean
}

const noticesTickerData: NoticeTickerItem[] = [
    {
        id: 1,
        title: {
            en: "GCAS & Self-Finance Admission 2026-27 Open",
            gu: "GCAS અને સેલ્ફ-ફાઇનાન્સ પ્રવેશ ૨૦૨૬-૨૭ શરૂ",
        },
        description: {
            en: "Apply online via gcasstudent.gujgov.edu.in or visit campus desk directly for BSW & MSW admissions.",
            gu: "BSW અને MSW પ્રવેશ માટે gcasstudent.gujgov.edu.in પર અરજી કરો અથવા સીધા કેમ્પસ ડેસ્કની મુલાકાત લો.",
        },
        tag: {
            en: "Admission Alert",
            gu: "પ્રવેશ સૂચના",
        },
        variant: "bg-amber/15 text-amber-tone border-amber/30",
        isUrgent: true,
    },
    {
        id: 2,
        title: {
            en: "Document Verification Desk Active",
            gu: "દસ્તાવેજ ચકાસણી હેલ્પડેસ્ક કાર્યરત",
        },
        description: {
            en: "Visit college administrative room 102 daily between 10:00 AM - 4:00 PM.",
            gu: "દરરોજ સવારે ૧૦:૦૦ થી સાંજે ૪:૦૦ દરમિયાન કોલેજ વહીવટી રૂમ ૧૦૨ ની મુલાકાત લો.",
        },
        tag: {
            en: "Campus Helpdesk",
            gu: "કેમ્પસ હેલ્પડેસ્ક",
        },
        variant: "bg-emerald/15 text-emerald-tone border-emerald/30",
        isUrgent: false,
    },
    {
        id: 3,
        title: {
            en: "SGGU Semester Exam Schedule Announced",
            gu: "SGGU સેમેસ્ટર પરીક્ષા કાર્યક્રમ જાહેર",
        },
        description: {
            en: "Official datesheet published for BSW Sem 2, 4, 6 & MSW Sem 2, 4.",
            gu: "BSW સેમ ૨, ૪, ૬ અને MSW સેમ ૨, ૪ માટે સત્તાવાર તારીખપત્રક જાહેર.",
        },
        tag: {
            en: "Exam Cell",
            gu: "પરીક્ષા સેલ",
        },
        variant: "bg-sky/15 text-sky-tone border-sky/30",
        isUrgent: false,
    },
    {
        id: 4,
        title: {
            en: "7-Day Rural Camp Orientation for MSW",
            gu: "MSW માટે ૭-દિવસીય ગ્રામીણ કેમ્પ ઓરિએન્ટેશન",
        },
        description: {
            en: "Mandatory pre-fieldwork orientation meeting scheduled for all MSW first-year scholars.",
            gu: "તમામ MSW પ્રથમ વર્ષના વિદ્યાર્થીઓ માટે ફરજિયાત પ્રી-ફીલ્ડવર્ક બેઠક.",
        },
        tag: {
            en: "Fieldwork",
            gu: "ક્ષેત્રકાર્ય (Fieldwork)",
        },
        variant: "bg-purple/15 text-purple border-purple/30",
        isUrgent: false,
    },
]

export async function NoticeBoard() {
    const t = await getTranslations("home.notice")
    const locale = (await getLocale()) as Locale

    return (
        <section className="bg-slate border-y border-slate-tone/30 text-slate-foreground py-3 overflow-hidden">
            <div className="container mx-auto px-4 flex items-center gap-4">
                <div className={cn(buttonVariants({ variant: "emerald", size: "sm" }), "hover:bg-emerald")}>
                    <Megaphone className="animate-pulse text-amber-tone" />
                    <span>{t("urgentNotices")}</span>
                </div>

                <div className="relative flex-1 overflow-hidden">
                    <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
                        {[...noticesTickerData, ...noticesTickerData].map((notice, idx) => {
                            const title = notice.title[locale] || notice.title.en
                            const description = notice.description[locale] || notice.description.en
                            const tag = notice.tag[locale] || notice.tag.en

                            return (
                                <div key={`${notice.id}-${idx}`} className="flex items-center gap-3 text-sm group cursor-pointer shrink-0">
                                    <Badge variant="outline" className={`text-xs px-2 py-0.5 rounded ${notice.variant}`}>
                                        {tag}
                                    </Badge>
                                    <span className="font-semibold text-slate-foreground group-hover:text-emerald-tone transition-colors">
                                        {title}:
                                    </span>
                                    <span className="text-slate-tone font-normal text-xs sm:text-sm">
                                        {description}
                                    </span>
                                    <span className="text-slate-tone/60 mx-2">•</span>
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
