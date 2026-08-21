import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { FileText, Download, Building } from 'lucide-react'

export function RtiDisclosuresSection() {
    const docs = [
        { title: "Public Information Officer (PIO) Details", desc: "Contact information of designated PIO and Appellate Authority under RTI Act 2005." },
        { title: "SGGU Affiliation Letters", desc: "Official university affiliation letters for BSW and MSW degree programs." },
        { title: "Statutory Mandatory Disclosures", desc: "Downloadable PDF disclosures covering land records, faculty list, & intake seat approvals." }
    ];

    return (
        <Section id="rti-and-disclosures" className="bg-slate-muted scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>RTI & Statutory Disclosures</SectionTitle>
                <SectionDescription>Public information disclosures as mandated under Right to Information Act 2005 and UGC norms.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {docs.map((item, idx) => (
                    <Card key={idx} className="bg-card border border-border p-6 space-y-3 shadow-sm">
                        <div className="p-3 rounded-xl bg-sky/10 text-sky-tone w-fit">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">{item.desc}</p>
                    </Card>
                ))}
            </SectionContent>
        </Section>
    )
}
