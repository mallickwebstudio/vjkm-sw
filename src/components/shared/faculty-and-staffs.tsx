import React from 'react'
import Image from 'next/image'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { defaultFacultyMembers, type FacultyMember } from '@/db/faculty'

export { defaultFacultyMembers, type FacultyMember }

export default async function FacultyAndStaffs({ id }: { id?: string }) {
    const t = await getTranslations("aboutCollege.faculty")

    return (
        <Section
            id={id}
            className="relative w-full bg-emerald-50/30 dark:bg-emerald-950/15 border-y border-emerald-900/15 dark:border-emerald-500/20 overflow-hidden"
        >
            {/* Ambient Top Emerald Radial Glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.14),transparent_70%)] pointer-events-none select-none"
                aria-hidden="true"
            />

            {/* Subtle Geometric Academic Dot Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-35 dark:opacity-15 select-none"
                style={{
                    backgroundImage: "radial-gradient(var(--emerald-tone, #059669) 1px, transparent 1px)",
                    backgroundSize: "28px 28px"
                }}
                aria-hidden="true"
            />

            {/* Soft Ambient Corner Glows */}
            <div
                className="absolute -top-24 -right-24 size-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none select-none"
                aria-hidden="true"
            />
            <div
                className="absolute -bottom-24 -left-24 size-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none select-none"
                aria-hidden="true"
            />

            <SectionHeader align="center" className="relative z-10">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription>
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {defaultFacultyMembers.map((member, idx) => (
                    <Card key={idx} className="py-0 gap-0 bg-card border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden hover:-translate-y-1">
                        <div className="relative w-full aspect-4/5 overflow-hidden bg-muted">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500 object-top pointer-events-none select-none"
                            />
                            <Badge variant={member.badgeVariant || "secondary"} className="absolute left-2 bottom-2 font-semibold">
                                {member.designation}
                            </Badge>
                        </div>

                        <div className="p-3.5 space-y-1.5 w-full">
                            <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                                {member.name}
                            </h3>

                            <div className="flex items-center gap-1.5 text-xs italic text-muted-foreground pt-0.5">
                                <GraduationCap className="size-3.5 text-primary shrink-0" />
                                <span>[{member.qualification}]</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </SectionContent>
        </Section>
    )
}

