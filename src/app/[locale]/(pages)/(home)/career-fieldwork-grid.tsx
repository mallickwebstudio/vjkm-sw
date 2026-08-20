import React from 'react'
import Link from 'next/link'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Building2, HeartPulse, TreePine, ShieldAlert, ArrowRight } from 'lucide-react'

const sectors = [
    {
        icon: Building2,
        title: "Corporate Social Responsibility (CSR)",
        description: "Placement in leading industrial houses managing community initiatives, ESG compliance, and rural development grants.",
        roles: ["CSR Coordinator", "Community Relations Officer", "ESG Analyst"],
        color: "text-blue bg-blue/10 border-blue/30"
    },
    {
        icon: TreePine,
        title: "NGOs & Rural Development",
        description: "Direct field immersion with national and grassroots non-profits focusing on tribal welfare, water sanitation, and women empowerment.",
        roles: ["NGO Project Manager", "Field Coordinator", "Rural Development Officer"],
        color: "text-emerald bg-emerald/10 border-emerald/30"
    },
    {
        icon: HeartPulse,
        title: "Medical & Psychiatric Health",
        description: "Clinical social work roles in district hospitals, mental health institutes, and rehabilitation centers across Gujarat.",
        roles: ["Medical Social Worker", "Psychiatric Counselor", "Hospital Welfare Officer"],
        color: "text-rose bg-rose/10 border-rose/30"
    },
    {
        icon: ShieldAlert,
        title: "Government & Social Justice",
        description: "Collaborations with District Child Protection Units (DCPU), Social Defense Department, and Panchayati Raj institutions.",
        roles: ["Child Protection Officer", "Probation Officer", "Social Audit Specialist"],
        color: "text-amber bg-amber/10 border-amber/30"
    }
]

export default function CareerFieldworkGrid() {
    return (
        <Section className="bg-slate-muted">
            <SectionHeader align="center">
                <Badge variant="slate-outline" type="heading" >
                    Field Practicum & Career Pathways
                </Badge>
                <SectionTitle className="text-3xl md:text-4xl font-extrabold text-foreground">
                    50+ NGO & CSR Fieldwork Partners
                </SectionTitle>
                <SectionDescription className="text-slate-tone text-base md:text-lg">
                    Practical field experience is the core of our curriculum. Students gain 500+ hours of hands-on community service and corporate exposure.
                </SectionDescription>
            </SectionHeader>

            {/* Sector Cards */}
            <SectionContent className="md:grid-cols-2 gap-6">
                {sectors.map((sector, idx) => {
                    const IconComp = sector.icon

                    return (
                        <Card key={idx} className="shadow-sm hover:shadow-md transition-all">
                            <CardContent className="py-2 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className={`p-3 rounded-xl border ${sector.color}`}>
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        {sector.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-slate-tone leading-relaxed">
                                    {sector.description}
                                </p>
                                <div className="pt-2 border-t border-border">
                                    <span className="text-xs font-bold uppercase text-slate-tone tracking-wider">Career Roles:</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {sector.roles.map((role, rIdx) => (
                                            <Badge key={rIdx} variant="secondary" className="bg-muted text-muted-foreground text-xs">
                                                {role}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </SectionContent>

            <div className="text-center">
                <Link
                    href="/fieldwork"
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "border-border inline-flex items-center px-4 py-2 rounded-md text-sm font-medium"
                    )}
                >
                    Explore Fieldwork Manual
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>
        </Section>
    )
}

