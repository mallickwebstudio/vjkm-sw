import React from 'react'
import Link from 'next/link'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Briefcase, Building2, HeartPulse, TreePine, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react'

const sectors = [
    {
        icon: Building2,
        title: "Corporate Social Responsibility (CSR)",
        description: "Placement in leading industrial houses managing community initiatives, ESG compliance, and rural development grants.",
        roles: ["CSR Coordinator", "Community Relations Officer", "ESG Analyst"],
        color: "text-blue-600 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800"
    },
    {
        icon: TreePine,
        title: "NGOs & Rural Development",
        description: "Direct field immersion with national and grassroots non-profits focusing on tribal welfare, water sanitation, and women empowerment.",
        roles: ["NGO Project Manager", "Field Coordinator", "Rural Development Officer"],
        color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800"
    },
    {
        icon: HeartPulse,
        title: "Medical & Psychiatric Health",
        description: "Clinical social work roles in district hospitals, mental health institutes, and rehabilitation centers across Gujarat.",
        roles: ["Medical Social Worker", "Psychiatric Counselor", "Hospital Welfare Officer"],
        color: "text-rose-600 bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-800"
    },
    {
        icon: ShieldAlert,
        title: "Government & Social Justice",
        description: "Collaborations with District Child Protection Units (DCPU), Social Defense Department, and Panchayati Raj institutions.",
        roles: ["Child Protection Officer", "Probation Officer", "Social Audit Specialist"],
        color: "text-amber-600 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800"
    }
]

export default function CareerFieldworkGrid() {
    return (
        <Section className=" bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader className="text-center max-w-3xl mx-auto mb-12">
                    <Badge variant="outline" className="mx-auto bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 px-3 py-1 font-semibold text-xs rounded-full uppercase tracking-wider mb-2">
                        Field Practicum & Career Pathways
                    </Badge>
                    <SectionTitle className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                        50+ NGO & CSR Fieldwork Partners
                    </SectionTitle>
                    <SectionDescription className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
                        Practical field experience is the core of our curriculum. Students gain 500+ hours of hands-on community service and corporate exposure.
                    </SectionDescription>
                </SectionHeader>

                {/* Sector Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sectors.map((sector, idx) => {
                        const IconComp = sector.icon
                        return (
                            <Card key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-3 rounded-xl border ${sector.color}`}>
                                            <IconComp className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                            {sector.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {sector.description}
                                    </p>
                                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                                        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Career Roles:</span>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {sector.roles.map((role, rIdx) => (
                                                <Badge key={rIdx} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                                                    {role}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/fieldwork"
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "border-slate-300 dark:border-slate-700 inline-flex items-center px-4 py-2 rounded-md text-sm font-medium"
                        )}
                    >
                        Explore Complete Fieldwork Manual & Partner Directory
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </Section>
    )
}

