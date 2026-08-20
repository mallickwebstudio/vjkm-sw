import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Section, SectionContent } from '@/components/section/section'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Target, Award, Compass, ArrowRight, CheckCircle2, History } from 'lucide-react'

type Trustees = {
    name: string;
    designation: string;
    imageSrc: string;
}

const trusteesData: Trustees[] = [
    {
        name: "Shri Shashikant H. Patel",
        designation: "President",
        imageSrc: "/images/trustees/shashikant-patel-new.webp",
    },
    {
        name: "Shri Dilipbhai N. Patel",
        designation: "Vice President",
        imageSrc: "/images/trustees/dilip-patel-new.webp",
    },
    {
        name: "Shri Thakorbhai K. Patel",
        designation: "Secretary",
        imageSrc: "/images/trustees/thakor-patel-new.webp",
    },
    {
        name: "Shri Mukesh V. Vasaiwala",
        designation: "Joint Secretary",
        imageSrc: "/images/trustees/mukesh-vasaiwala-new.webp",
    },
];

export default function AboutSnapshot() {
    return (
        <Section className="bg-slate-muted">
            <SectionContent className="lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Trust Narrative */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-semibold uppercase tracking-wider">
                        <History className="w-3.5 h-3.5" />
                        <span>Established 1957 • 67+ Years of Excellence</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                        Vadodara Jilla Kelavani Mandal (VJKM) Trust
                    </h2>

                    <p className="text-slate-tone text-base md:text-lg leading-relaxed">
                        Founded with a profound vision to democratize quality education across rural and semi-urban Gujarat, <strong className="text-foreground font-semibold">VJKM Trust</strong> has been a cornerstone of socio-educational advancement for over six decades.
                    </p>

                    {/* Trustee Cards */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {trusteesData.map((trustee, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border shadow-xs">
                                <div className="relative w-12 h-12 rounded-sm overflow-hidden shrink-0 border border-border bg-muted">
                                    <Image
                                        src={trustee.imageSrc}
                                        alt={trustee.name}
                                        fill
                                        className="object-cover object-top select-none pointer-events-none"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h4 className="text-sm font-bold">{trustee.name}</h4>
                                    <p className="py-px px-1 w-fit bg-amber text-amber-foreground text-xs rounded-xs">
                                        {trustee.designation}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pillars List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="flex items-start gap-3 p-3.5 rounded-lg bg-card border border-border shadow-xs">
                            <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold text-foreground">SGGU University Affiliation</h4>
                                <p className="text-xs text-slate-tone">Approved by Shri Govind Guru University, Godhra</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3.5 rounded-lg bg-card border border-border shadow-xs">
                            <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold text-foreground">Fieldwork Focused Pedagogy</h4>
                                <p className="text-xs text-slate-tone">Weekly field visits, block placements & rural camps</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3.5 rounded-lg bg-card border border-border shadow-xs">
                            <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold text-foreground">Inclusive Financial Aid</h4>
                                <p className="text-xs text-slate-tone">Support for Digital Gujarat & MYSY scholarships</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3.5 rounded-lg bg-card border border-border shadow-xs">
                            <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold text-foreground">Dedicated GCAS Desk</h4>
                                <p className="text-xs text-slate-tone">On-campus admission helpdesk & document verification</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <Link
                            href="/about-us"
                            className={cn(
                                buttonVariants({ variant: "slate" }), "whitespace-break-spaces"
                            )}
                        >
                            Learn More About VJKM Trust
                            <ArrowRight />
                        </Link>
                    </div>
                </div>

                {/* Right Column: Mission Cards */}
                <div className="lg:col-span-5 space-y-4">
                    <Card className="border-x-4 border-x-emerald bg-card shadow-md">
                        <CardContent className="p-6 space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-md bg-emerald-muted text-emerald">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">Our Vision</h3>
                            </div>
                            <p className="text-sm text-slate-tone leading-relaxed pt-1">
                                To be a benchmark institution in social work education, empowering youth with empathy, professional ethics, and leadership skills to drive sustainable community transformation.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-x-4 border-x-sky bg-card shadow-md">
                        <CardContent className="p-6 space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-md bg-sky-muted text-sky">
                                    <Compass className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">Our Mission</h3>
                            </div>
                            <p className="text-sm text-slate-tone leading-relaxed pt-1">
                                Nurture social work professionals through experiential fieldwork, research, inter-disciplinary learning, and institutional partnerships across Gujarat and India.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-x-4 border-x-amber bg-card shadow-md">
                        <CardContent className="p-6 space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-md bg-amber-muted text-amber">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">Core Values</h3>
                            </div>
                            <p className="text-sm text-slate-tone leading-relaxed pt-1">
                                Social Justice, Human Dignity, Community Service, Environmental Stewardship, and Transparent Governance.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </SectionContent>
        </Section>
    )
}

