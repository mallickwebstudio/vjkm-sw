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
        <Section id={id} className="bg-background">
            <SectionHeader align="center">
                <SectionTitle>
                    {t("h2")}
                </SectionTitle>
                <SectionDescription>
                    {t("subheading")}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {defaultFacultyMembers.map((member, idx) => (
                    <Card key={idx} className="py-0 gap-0 bg-secondary">
                        <div className="relative w-full aspect-4/5 overflow-hidden">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300 object-top pointer-events-none select-none"
                            />
                            <Badge variant={member.badgeVariant || "secondary"} className="absolute left-2 bottom-2">
                                {member.designation}
                            </Badge>
                        </div>

                        <div className="p-2 space-y-2 w-full">
                            <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                                {member.name}
                            </h3>

                            <div className="flex items-center gap-1.5 text-xs italic text-muted-foreground pt-1">
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
