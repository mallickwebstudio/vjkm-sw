import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpenCheck, BookmarkCheck, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react'

export function BookBankSection() {
    const features = [
        {
            icon: BookOpenCheck,
            title: "Full Semester Textbook Kits",
            desc: "Students receive complete sets of standard prescribed BSW & MSW semester textbooks right at the beginning of each academic session.",
            badge: "Prescribed Syllabus"
        },
        {
            icon: HeartHandshake,
            title: "EWS & Category Support",
            desc: "Priority allocation for students from economically weaker sections (EWS), SC/ST/OBC categories, and meritorious social work scholars.",
            badge: "Equal Opportunity"
        },
        {
            icon: ShieldCheck,
            title: "Zero Borrowing Fee",
            desc: "Textbooks are provided free of cost for the entire semester duration and retained until final SGGU university examinations.",
            badge: "Free Allocation"
        },
        {
            icon: BookmarkCheck,
            title: "NET & Competitive Exam Repository",
            desc: "Dedicated repository including UGC-NET Social Work guides, GPSC/UPSC civil services preparation literature, and research manuals.",
            badge: "Career Growth"
        }
    ]

    const steps = [
        { step: "01", title: "Apply at Enrollment", desc: "Submit the simple Book Bank request form at the library helpdesk." },
        { step: "02", title: "Collect Textbook Kit", desc: "Receive your verified complete semester book set directly from the librarian." },
        { step: "03", title: "Return & Renew", desc: "Return books after university exams and collect the new set for the next semester." }
    ]

    return (
        <Section id="book-bank-scheme" className="bg-slate-muted scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Book Bank Scheme & Student Library Support</SectionTitle>
                <SectionDescription>
                    Guaranteeing equitable access to essential academic books and reference study materials for all BSW & MSW students.
                </SectionDescription>
            </SectionHeader>

            {/* Feature Cards Grid */}
            <SectionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-card border border-border p-6 space-y-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="p-3 rounded-xl bg-amber/10 text-amber-tone w-fit">
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <Badge variant="secondary" className="text-[11px] bg-amber/10 text-amber-tone font-semibold">
                                        {item.badge}
                                    </Badge>
                                </div>
                                <h3 className="text-lg font-bold text-foreground leading-snug">{item.title}</h3>
                                <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">{item.desc}</p>
                            </div>
                        </Card>
                    )
                })}
            </SectionContent>

            {/* Process Banner */}
            <div className="mt-10 p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm max-w-5xl mx-auto space-y-6">
                <div className="text-center space-y-1">
                    <h3 className="text-xl font-bold text-foreground">How Book Bank Scheme Works</h3>
                    <p className="text-xs sm:text-sm text-slate-tone">3 simple steps to access your semester books</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((s, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-muted/60 border border-border/50">
                            <span className="text-2xl font-extrabold text-amber-tone shrink-0">{s.step}</span>
                            <div className="space-y-1">
                                <h4 className="text-sm font-bold text-foreground">{s.title}</h4>
                                <p className="text-xs text-slate-tone leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
