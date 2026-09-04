import React from "react";
import Image from "next/image";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section/section";
import { Card } from "@/components/ui/card";
import { getOpportunitiesData } from "@/lib/fetcher";
import { Locale } from "@/i18n/routing";
import { Course } from "@/types";

interface CourseOpportunitiesProps {
    course: Course;
    locale: Locale;
}

export function CourseOpportunities({ course, locale }: CourseOpportunitiesProps) {
    const isGu = locale === "gu";
    const allOpportunities = getOpportunitiesData(locale);

    const courseIdentifiers = [
        course.slug,
        ...(course.aliasSlugs || []),
        course.collegeSlug,
    ].filter(Boolean);

    const matchedOpportunities = allOpportunities.filter((op) =>
        op.referenceSlugs?.some((ref) =>
            courseIdentifiers.includes(ref) ||
            (course.slug.includes("bachelor") && ref.includes("bsw")) ||
            (course.slug.includes("master") && ref.includes("msw"))
        )
    );

    if (matchedOpportunities.length === 0) {
        return null;
    }

    const courseDisplayName = course.shortTitle || course.title;

    return (
        <Section id="career-opportunities" className="bg-slate-muted scroll-mt-20">
            <SectionHeader align="center">
                <SectionTitle>
                    {isGu ? "વ્યાવસાયિક કારકિર્દી અને રોજગારીની તકો" : "Career & Professional Opportunities"}
                </SectionTitle>
                <SectionDescription>
                    {isGu
                        ? `${courseDisplayName} પૂર્ણ કર્યા પછી સરકારી, ઔદ્યોગિક અને સામાજિક ક્ષેત્રમાં ઉપલબ્ધ મુખ્ય હોદ્દાઓ અને રોજગારીની તકો.`
                        : `Key professional roles and employment avenues unlocked after completing ${courseDisplayName} across corporate CSR, government departments, and NGOs.`}
                </SectionDescription>
            </SectionHeader>

            <SectionContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedOpportunities.map((op) => (
                    <Card
                        key={op.slug}
                        className="p-0 gap-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:border-amber-tone/40 transition-all flex flex-col group"
                    >
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                            {op.thumbnail && (
                                <Image
                                    src={op.thumbnail}
                                    alt={op.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            )}
                        </div>

                        <div className="p-5 space-y-2 flex-1">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-amber-tone transition-colors leading-snug">
                                {op.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-tone leading-relaxed">
                                {op.description}
                            </p>
                        </div>
                    </Card>
                ))}
            </SectionContent>
        </Section>
    );
}
