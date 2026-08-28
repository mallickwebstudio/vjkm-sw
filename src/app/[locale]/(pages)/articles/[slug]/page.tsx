import React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Locale, routing } from "@/i18n/routing"
import { getSeoMetadata } from "@/lib/metadata"
import { getArticles, getArticleBySlug, getRelatedArticles, NotionBlock, NotionRichText } from "@/db"
import { Section, SectionContent } from "@/components/section/section"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Share2 } from "lucide-react"

export const revalidate = 60

export async function generateStaticParams() {
    const articles = await getArticles()
    const params: { locale: Locale; slug: string }[] = []

    routing.locales.forEach((locale) => {
        articles.forEach((art) => {
            params.push({
                locale,
                slug: art.slug,
            })
        })
    })

    return params
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale; slug: string }>
}) {
    const { locale, slug } = await params
    const article = await getArticleBySlug(slug)

    if (!article) {
        return getSeoMetadata({
            locale,
            path: `/articles/${slug}`,
            title: "Article Not Found | VJKM College",
        })
    }

    return getSeoMetadata({
        locale,
        path: `/articles/${slug}`,
        title: `${article.title} | VJKM College`,
        description: article.excerpt,
    })
}

// Render Notion Rich Text annotations (bold, italic, links, etc.)
function RenderRichText({ richText }: { richText: NotionRichText[] }) {
    if (!richText || richText.length === 0) return null

    return (
        <>
            {richText.map((t, idx) => {
                const { bold, italic, underline, strikethrough, code } = t.annotations
                let content: React.ReactNode = t.plain_text

                if (code) {
                    content = <code key={idx} className="bg-slate-100 dark:bg-slate-800 text-pink-600 px-1.5 py-0.5 rounded font-mono text-xs">{content}</code>
                }
                if (bold) {
                    content = <strong key={idx} className="font-bold text-foreground">{content}</strong>
                }
                if (italic) {
                    content = <em key={idx} className="italic">{content}</em>
                }
                if (underline) {
                    content = <u key={idx}>{content}</u>
                }
                if (strikethrough) {
                    content = <s key={idx}>{content}</s>
                }
                if (t.href) {
                    content = (
                        <a
                            key={idx}
                            href={t.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline hover:text-primary/80 font-medium transition-colors"
                        >
                            {content}
                        </a>
                    )
                }

                return <React.Fragment key={idx}>{content}</React.Fragment>
            })}
        </>
    )
}

// Render single Notion Block element
function RenderBlock({ block }: { block: NotionBlock }) {
    switch (block.type) {
        case "heading_1":
            return (
                <h1 className="text-3xl font-extrabold text-foreground mt-8 mb-4 tracking-tight border-b pb-2">
                    <RenderRichText richText={block.heading_1?.rich_text} />
                </h1>
            )
        case "heading_2":
            return (
                <h2 className="text-2xl font-bold text-foreground mt-8 mb-3 tracking-tight">
                    <RenderRichText richText={block.heading_2?.rich_text} />
                </h2>
            )
        case "heading_3":
            return (
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
                    <RenderRichText richText={block.heading_3?.rich_text} />
                </h3>
            )
        case "paragraph":
            return (
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base mb-4">
                    <RenderRichText richText={block.paragraph?.rich_text} />
                </p>
            )
        case "bulleted_list_item":
            return (
                <li className="text-slate-700 dark:text-slate-300 leading-relaxed text-base ml-6 list-disc mb-1">
                    <RenderRichText richText={block.bulleted_list_item?.rich_text} />
                </li>
            )
        case "numbered_list_item":
            return (
                <li className="text-slate-700 dark:text-slate-300 leading-relaxed text-base ml-6 list-decimal mb-1">
                    <RenderRichText richText={block.numbered_list_item?.rich_text} />
                </li>
            )
        case "quote":
            return (
                <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 italic text-slate-800 dark:text-slate-200 bg-primary/5 rounded-r-lg">
                    <RenderRichText richText={block.quote?.rich_text} />
                </blockquote>
            )
        case "callout":
            return (
                <div className="p-4 my-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 rounded-xl flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200 shadow-2xs">
                    <span className="text-xl shrink-0">{block.callout?.icon?.emoji || "📌"}</span>
                    <div className="flex-1 leading-relaxed">
                        <RenderRichText richText={block.callout?.rich_text} />
                    </div>
                </div>
            )
        case "image":
            // eslint-disable-next-line no-case-declarations
            const imgUrl = block.image?.file?.url || block.image?.external?.url
            if (!imgUrl) return null
            return (
                <figure className="my-6 space-y-2">
                    <div className="relative h-[320px] md:h-[450px] w-full rounded-xl overflow-hidden border border-border">
                        <Image src={imgUrl} alt="Article visual content" fill className="object-cover" />
                    </div>
                    {block.image?.caption && block.image.caption.length > 0 && (
                        <figcaption className="text-center text-xs text-muted-foreground italic">
                            <RenderRichText richText={block.image.caption} />
                        </figcaption>
                    )}
                </figure>
            )
        case "divider":
            return <hr className="my-6 border-border" />
        default:
            return null
    }
}

export default async function ArticleDetailPage({
    params,
}: {
    params: Promise<{ locale: Locale; slug: string }>
}) {
    const { locale, slug } = await params
    const article = await getArticleBySlug(slug)

    if (!article) {
        notFound()
    }

    const relatedArticles = await getRelatedArticles(slug, 3)
    const shareUrl = `https://vjkm-sf-college.in/${locale}/articles/${article.slug}`
    const waShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`*${article.title}*\n\nRead more at: ${shareUrl}`)}`

    return (
        <main className="space-y-0 bg-background min-h-screen">
            {/* ARTICLE HEADER & BREADCRUMB */}
            <Section padding="sm" className="bg-slate border-b border-border">
                <SectionContent className="max-w-4xl mx-auto space-y-6">
                    {/* Back button */}
                    <div>
                        <Link
                            href={`/${locale}/articles`}
                            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-xs gap-1.5 hover:bg-background")}
                        >
                            <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles
                        </Link>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                            <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-0.5">
                                {article.category}
                            </Badge>
                            <span className="flex items-center gap-1 text-muted-foreground">
                                <Calendar className="w-3.5 h-3.5 text-primary" />
                                {article.publishedAt}
                            </span>
                            <span className="text-muted-foreground">•</span>
                            <span className="flex items-center gap-1 text-muted-foreground">
                                <Clock className="w-3.5 h-3.5 text-primary" />
                                {article.readTime}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                            {article.title}
                        </h1>

                        <p className="text-base text-muted-foreground leading-relaxed">
                            {article.excerpt}
                        </p>

                        {/* Author Info & Share */}
                        <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                {article.author.avatar ? (
                                    <Image
                                        src={article.author.avatar}
                                        alt={article.author.name}
                                        width={42}
                                        height={42}
                                        className="rounded-full object-cover border border-border"
                                    />
                                ) : (
                                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                        <User className="w-5 h-5" />
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm font-bold text-foreground">{article.author.name}</p>
                                    <p className="text-xs text-muted-foreground">{article.author.role || "Faculty Contributor"}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href={waShareUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(buttonVariants({ variant: "outline", size: "sm" }), "text-xs bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-300 gap-1.5")}
                                >
                                    <Share2 className="w-3.5 h-3.5" /> Share on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </SectionContent>
            </Section>

            {/* COVER IMAGE */}
            <div className="max-w-4xl mx-auto px-4 py-6">
                <div className="relative h-[320px] md:h-[480px] w-full rounded-2xl overflow-hidden border border-border shadow-md">
                    <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* ARTICLE CONTENT BODY */}
            <Section padding="sm" className="bg-background">
                <SectionContent className="max-w-3xl mx-auto">
                    <div className="prose prose-slate max-w-none space-y-2 text-foreground">
                        {article.blocks && article.blocks.length > 0 ? (
                            article.blocks.map((block) => <RenderBlock key={block.id} block={block} />)
                        ) : (
                            <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                                <p>
                                    The Bachelor of Social Work (BSW) and Master of Social Work (MSW) programs at VJKM Self Finance College provide rigorous academic coursework integrated with hands-on field practicum.
                                </p>
                                <p>
                                    Our students actively engage in rural development projects, industrial CSR initiatives, psychiatric social work, and child welfare programs across Gujarat.
                                </p>
                            </div>
                        )}
                    </div>
                </SectionContent>
            </Section>

            {/* RELATED ARTICLES SECTION */}
            {relatedArticles.length > 0 && (
                <Section className="bg-slate-muted border-t border-border">
                    <SectionContent className="max-w-4xl mx-auto space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-foreground">Related Articles</h3>
                            <Link href={`/${locale}/articles`} className="text-xs font-semibold text-primary hover:underline">
                                View All Articles →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedArticles.map((rel) => (
                                <div
                                    key={rel.id}
                                    className="rounded-xl bg-card border border-border overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div className="relative h-36 w-full">
                                        <Image src={rel.coverImage} alt={rel.title} fill className="object-cover" />
                                    </div>
                                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                                        <div className="space-y-1">
                                            <Badge variant="secondary" className="text-[10px] px-2 py-0">
                                                {rel.category}
                                            </Badge>
                                            <h4 className="text-sm font-bold text-foreground line-clamp-2 hover:text-primary">
                                                <Link href={`/${locale}/articles/${rel.slug}`}>{rel.title}</Link>
                                            </h4>
                                        </div>
                                        <Link
                                            href={`/${locale}/articles/${rel.slug}`}
                                            className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 pt-2 border-t border-border"
                                        >
                                            Read More <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionContent>
                </Section>
            )}
        </main>
    )
}
