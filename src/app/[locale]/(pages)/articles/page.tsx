import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Locale, routing } from "@/i18n/routing"
import { getSeoMetadata } from "@/lib/metadata"
import { getArticles } from "@/db"
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section/section"
import { Hero, HeroContent, HeroH1, HeroP } from "@/components/section/hero"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Calendar, Clock, ArrowRight, BookOpen, User } from "lucide-react"

export const revalidate = 60

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    return getSeoMetadata({
        locale,
        path: "/articles",
        title: "Articles & Academic Insights | VJKM College",
    })
}

export default async function ArticlesPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const articles = await getArticles()
    const featuredArticle = articles[0]
    const otherArticles = articles.slice(1)

    return (
        <main className="space-y-0">
            {/* HERO HEADER */}
            <Hero
                imageSrc="/images/facilities/auditorium-4.webp"
                imageAlt="Articles and Academic Insights VJKM College"
                variant="left"
                className="bg-slate min-h-[45vh] flex items-center"
            >
                <HeroContent>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-wider mb-3">
                        <BookOpen className="w-3.5 h-3.5" /> Educational Blog & Research
                    </div>
                    <HeroH1>Articles & Academic Insights</HeroH1>
                    <HeroP>
                        Explore career opportunities, fieldwork practicum guides, civil services preparation strategies, and academic updates from VJKM Self Finance College.
                    </HeroP>
                </HeroContent>
            </Hero>

            {/* FEATURED & ARTICLES GRID */}
            <Section className="bg-slate-muted">
                <SectionHeader align="center">
                    <SectionTitle>Featured & Latest Articles</SectionTitle>
                    <SectionDescription>
                        Stay updated with expert perspectives from our faculty, social work practitioners, and academic leaders.
                    </SectionDescription>
                </SectionHeader>

                <SectionContent className="space-y-12">
                    {/* Featured Article Banner */}
                    {featuredArticle && (
                        <div className="relative rounded-2xl bg-card border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
                            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[400px]">
                                <Image
                                    src={featuredArticle.coverImage}
                                    alt={featuredArticle.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1 text-xs">
                                        {featuredArticle.category}
                                    </Badge>
                                </div>
                            </div>
                            <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5 text-primary" />
                                            {featuredArticle.publishedAt}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5 text-primary" />
                                            {featuredArticle.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-colors leading-tight">
                                        <Link href={`/${locale}/articles/${featuredArticle.slug}`}>
                                            {featuredArticle.title}
                                        </Link>
                                    </h2>

                                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                                        {featuredArticle.excerpt}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-border flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        {featuredArticle.author.avatar ? (
                                            <Image
                                                src={featuredArticle.author.avatar}
                                                alt={featuredArticle.author.name}
                                                width={36}
                                                height={36}
                                                className="rounded-full object-cover border border-border"
                                            />
                                        ) : (
                                            <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                                                <User className="w-4 h-4" />
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-xs font-semibold text-foreground">{featuredArticle.author.name}</p>
                                            <p className="text-[11px] text-muted-foreground">{featuredArticle.author.role || "Author"}</p>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/${locale}/articles/${featuredArticle.slug}`}
                                        className={cn(buttonVariants({ variant: "default", size: "sm" }), "gap-1.5 font-semibold text-xs")}
                                    >
                                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Articles Grid */}
                    {otherArticles.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherArticles.map((article) => (
                                <article
                                    key={article.id}
                                    className="flex flex-col justify-between rounded-xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group"
                                >
                                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                                        <Image
                                            src={article.coverImage}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <Badge variant="secondary" className="bg-background/90 backdrop-blur-xs text-foreground font-semibold text-[11px]">
                                                {article.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3 text-primary" />
                                                    {article.publishedAt}
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3 text-primary" />
                                                    {article.readTime}
                                                </span>
                                            </div>

                                            <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                                <Link href={`/${locale}/articles/${article.slug}`}>
                                                    {article.title}
                                                </Link>
                                            </h3>

                                            <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                                                {article.excerpt}
                                            </p>
                                        </div>

                                        <div className="pt-3 border-t border-border flex items-center justify-between">
                                            <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                                                <User className="w-3.5 h-3.5 text-primary" />
                                                {article.author.name}
                                            </span>
                                            <Link
                                                href={`/${locale}/articles/${article.slug}`}
                                                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                                            >
                                                Read <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </SectionContent>
            </Section>
        </main>
    )
}
