import React from 'react'
import { Bell, Megaphone, Calendar, FileText, ArrowRight, AlertCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const notices = [
    {
        id: 1,
        title: "GCAS Admission 2026-27 Portal Open",
        description: "Register online via gcasstudent.gujgov.edu.in for BSW & MSW admissions.",
        tag: "GCAS Alert",
        variant: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
        isUrgent: true,
    },
    {
        id: 2,
        title: "Document Verification Desk Active",
        description: "Visit college administrative room 102 daily between 10:00 AM - 4:00 PM.",
        tag: "Campus Helpdesk",
        variant: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
        isUrgent: false,
    },
    {
        id: 3,
        title: "SGGU Semester Exam Schedule Announced",
        description: "Official datesheet published for BSW Sem 2, 4, 6 & MSW Sem 2, 4.",
        tag: "Exam Cell",
        variant: "bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30",
        isUrgent: false,
    },
    {
        id: 4,
        title: "7-Day Rural Camp Orientation for MSW",
        description: "Mandatory pre-fieldwork orientation meeting scheduled for all MSW first-year scholars.",
        tag: "Fieldwork",
        variant: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",
        isUrgent: false,
    },
]

export default function NoticeBoard() {
    return (
        <section className="bg-slate-900 border-y border-slate-800 text-slate-100 py-3 overflow-hidden">
            <div className="container mx-auto px-4 flex items-center gap-4">
                {/* Fixed Label */}
                <div className="flex items-center gap-2 shrink-0 bg-emerald-600/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-sm">
                    <Megaphone className="w-3.5 h-3.5 animate-pulse text-amber-300" />
                    <span>Urgent Notices</span>
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
                                <span className="font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                                    {notice.title}:
                                </span>
                                <span className="text-slate-400 font-normal text-xs sm:text-sm">
                                    {notice.description}
                                </span>
                                <span className="text-slate-600 mx-2">•</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

