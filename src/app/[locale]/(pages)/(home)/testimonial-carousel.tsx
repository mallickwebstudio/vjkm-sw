import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star, Award, Building } from 'lucide-react'

const testimonials = [
    {
        quote: "The intensive field practicals at VJKM College laid the exact foundation I needed for corporate CSR. The faculty guided us through real field challenges, from rural PRA surveys to corporate project management.",
        name: "Priyanka Parmar",
        degree: "MSW Batch 2022",
        role: "CSR Project Manager",
        organization: "Leading Chemical Industrial Group, Vadodara",
        avatarInitial: "PP",
        color: "bg-emerald-500 text-white"
    },
    {
        quote: "Starting with BSW at VJKM gave me deep clarity on social legislations and community psychology. The on-campus GCAS helpdesk and career counseling ensured a seamless transition into professional practice.",
        name: "Ramesh Solanki",
        degree: "BSW Batch 2021 & MSW Batch 2023",
        role: "District Welfare Officer",
        organization: "Department of Social Justice, Gujarat",
        avatarInitial: "RS",
        color: "bg-sky-500 text-white"
    },
    {
        quote: "VJKM Trust's 67-year educational legacy is evident in their rich NGO network. My 30-day block internship in a healthcare NGO landed me my first role as a Medical Social Worker right after graduation.",
        name: "Anjali Patel",
        degree: "MSW Batch 2024",
        role: "Medical Social Worker",
        organization: "Multi-Specialty Civil Hospital Network",
        avatarInitial: "AP",
        color: "bg-amber-500 text-white"
    }
]

export default function TestimonialCarousel() {
    return (
        <Section className="">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader className="text-center max-w-3xl mx-auto mb-12">
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30 px-3 py-1 font-semibold text-xs rounded-full uppercase tracking-wider mb-2">
                        Alumni Impact & Voices
                    </Badge>
                    <SectionTitle className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                        Empowering Careers Across CSR, Healthcare & Public Sector
                    </SectionTitle>
                    <SectionDescription className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
                        Hear from VJKM graduates who are leading transformative social initiatives across Gujarat and India.
                    </SectionDescription>
                </SectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((item, idx) => (
                        <Card key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-4 right-4 text-slate-100 dark:text-slate-800 pointer-events-none">
                                <Quote className="w-12 h-12 opacity-80" />
                            </div>
                            <CardContent className="p-6 space-y-4 relative z-10 flex flex-col justify-between h-full">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                                        "{item.quote}"
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 mt-4">
                                    <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center font-bold text-sm shrink-0 shadow-xs`}>
                                        {item.avatarInitial}
                                    </div>
                                    <div className="space-y-0.5 min-w-0">
                                        <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                                            {item.name}
                                        </h4>
                                        <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 truncate">
                                            {item.role}
                                        </p>
                                        <p className="text-[11px] text-slate-400 truncate">
                                            {item.organization} • <span className="text-slate-500 font-medium">{item.degree}</span>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    )
}

