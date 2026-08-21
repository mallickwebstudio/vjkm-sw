import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { ShieldCheck, Coffee, HeartPulse, Bus } from 'lucide-react'

export function StudentAmenitiesSection() {
    const amenities = [
        { icon: ShieldCheck, title: "Girls Common Room", desc: "Private, comfortable common room for female students with seating, washrooms, & rest facilities." },
        { icon: Coffee, title: "Hygienic Campus Canteen", desc: "Clean dining canteen serving fresh snacks, tea, coffee, and nutritious meals at subsidized rates." },
        { icon: HeartPulse, title: "First Aid & Medical Room", desc: "Emergency medical desk equipped with first aid kits, emergency beds, & doctor-on-call agreement." },
        { icon: Bus, title: "Transport Guidance Desk", desc: "Convenient public transport connectivity guidance and GSRTC bus pass verification." }
    ];

    return (
        <Section id="student-amenities" className="bg-slate text-slate-foreground scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Student Amenities & Services</SectionTitle>
                <SectionDescription className="text-sky-muted max-w-xl">
                    Ensuring a safe, comfortable, and supportive campus environment for all students.
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {amenities.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                        <Card key={idx} className="bg-slate-800/80 border-slate-700 text-slate-100 p-6 space-y-3 shadow-md">
                            <div className="p-3 rounded-xl bg-slate-700/60 text-sky-tone w-fit">
                                <IconComp className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                        </Card>
                    )
                })}
            </SectionContent>
        </Section>
    )
}
