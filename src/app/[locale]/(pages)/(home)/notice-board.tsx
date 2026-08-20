import React from 'react'
import { Bell, Megaphone, Calendar, FileText, ArrowRight, AlertCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const notices = [
    {
        id: 1,
        title: "GCAS Admission 2026-27 Portal Open",
        description: "Register online via gcasstudent.gujgov.edu.in for BSW & MSW admissions.",
        tag: "GCAS Alert",
        variant: "bg-amber/15 text-amber-tone border-amber/30",
        isUrgent: true,
    },
    {
        id: 2,
        title: "Document Verification Desk Active",
        description: "Visit college administrative room 102 daily between 10:00 AM - 4:00 PM.",
        tag: "Campus Helpdesk",
        variant: "bg-emerald/15 text-emerald-tone border-emerald/30",
        isUrgent: false,
    },
    {
        id: 3,
        title: "SGGU Semester Exam Schedule Announced",
        description: "Official datesheet published for BSW Sem 2, 4, 6 & MSW Sem 2, 4.",
        tag: "Exam Cell",
        variant: "bg-sky/15 text-sky-tone border-sky/30",
        isUrgent: false,
    },
    {
        id: 4,
        title: "7-Day Rural Camp Orientation for MSW",
        description: "Mandatory pre-fieldwork orientation meeting scheduled for all MSW first-year scholars.",
        tag: "Fieldwork",
        variant: "bg-purple/15 text-purple border-purple/30",
        isUrgent: false,
    },
]

export default function NoticeBoard() {
    return (
        <section className="bg-slate border-y border-slate-tone/30 text-slate-foreground py-3 overflow-hidden">
            <div className="container mx-auto px-4 flex items-center gap-4">
                {/* Fixed Label */}
                <div className={cn(buttonVariants({ variant: "emerald", size: "sm" }), "hover:bg-emerald")}>
                    <Megaphone className="animate-pulse text-amber-tone" />
                    <span><span className="hidden sm:inline">Urgent</span> Notices</span>
                </div>

                {/* Marquee Container */}
                <div className="relative flex-1 overflow-hidden">
                    <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
                        {/* Duplicate for seamless infinite loop */}
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

