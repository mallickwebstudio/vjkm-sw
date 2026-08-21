import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Mail, FileText } from 'lucide-react'

export function ForRecruitersSection() {
    return (
        <Section id="for-recruiters" className="bg-slate-muted scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Information for Recruiters</SectionTitle>
                <SectionDescription>Invite our graduating batch of BSW & MSW students for campus interviews and block placements.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="bg-card border border-border p-6 space-y-4 shadow-sm">
                    <div className="p-3 rounded-xl bg-sky/10 text-sky-tone w-fit">
                        <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Batch Demographics Brochure</h3>
                    <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                        Download our annual Placement Brochure detailing student profiles, specialization tracks (HR/IR, MPSW, CD), and fieldwork experience.
                    </p>
                    <button className={cn(buttonVariants({ variant: "sky", size: "lg" }), "w-full justify-center")}>
                        Download Placement Brochure
                    </button>
                </Card>

                <Card className="bg-card border border-border p-6 space-y-4 shadow-sm">
                    <div className="p-3 rounded-xl bg-emerald/10 text-emerald-tone w-fit">
                        <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Register as Recruiter</h3>
                    <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                        Register your NGO, CSR foundation, or company to participate in upcoming campus placement drives and block placement allocations.
                    </p>
                    <a
                        href="mailto:placement@vjkmcollege.ac.in"
                        className={cn(buttonVariants({ variant: "emerald", size: "lg" }), "w-full justify-center")}
                    >
                        Email Placement Officer
                    </a>
                </Card>
            </SectionContent>
        </Section>
    )
}
