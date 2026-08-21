import React from 'react'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Users } from 'lucide-react'

export function UpcomingEventsSection() {
    const events = [
        { date: "SEP 10, 2026", title: "National Seminar on Disaster Relief & Social Work", venue: "VJKM Auditorium", speaker: "Dr. A. K. Sharma (Tata Institute of Social Sciences)" },
        { date: "SEP 25, 2026", title: "NGO Capacity Building & CSR Summit 2026", venue: "Seminar Hall 1", speaker: "Gujarat State Social Welfare Board" }
    ];

    return (
        <Section id="upcoming-events" className="scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>Upcoming Events & Guest Lectures</SectionTitle>
                <SectionDescription>Academic workshops, expert panel discussions, and guest lecture series.</SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {events.map((item, idx) => (
                    <Card key={idx} className="bg-card border border-border p-6 space-y-3 shadow-sm">
                        <Badge variant="secondary" className="bg-sky/10 text-sky-tone font-bold">{item.date}</Badge>
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <div className="space-y-1 text-xs text-slate-tone pt-1">
                            <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-sky-tone" /> Venue: {item.venue}</p>
                            <p className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-emerald-tone" /> Speaker: {item.speaker}</p>
                        </div>
                    </Card>
                ))}
            </SectionContent>
        </Section>
    )
}
