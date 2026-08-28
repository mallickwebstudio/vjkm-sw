export interface NotionRichText {
    plain_text: string
    href?: string | null
    annotations: {
        bold: boolean
        italic: boolean
        strikethrough: boolean
        underline: boolean
        code: boolean
        color: string
    }
}

export interface NotionBlock {
    id: string
    type: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
}

export interface Article {
    id: string
    slug: string
    title: string
    excerpt: string
    category: string
    coverImage: string
    author: {
        name: string
        avatar?: string
        role?: string
    }
    publishedAt: string
    readTime: string
    published: boolean
    contentHtml?: string
    blocks?: NotionBlock[]
}

const notionApiKey = process.env.NOTION_API_KEY
const notionDatabaseId = process.env.NOTION_DATABASE_ID

// High-quality fallback articles for instant presentation & fallback safety
const SAMPLE_ARTICLES: Article[] = [
    {
        id: "sample-1",
        slug: "career-scope-after-bsw-degree-in-gujarat",
        title: "Career Scope & High-Growth Opportunities After BSW Degree in Gujarat",
        excerpt: "Discover career paths, civil services advantages, NGO leadership roles, and salary expectations after graduating with a Bachelor of Social Work (BSW) degree.",
        category: "Career Scope",
        coverImage: "/image.svg",
        author: {
            name: "Dr. K. R. Parmar",
            avatar: "/image.svg",
            role: "Principal & Academic Dean",
        },
        publishedAt: "2026-08-25",
        readTime: "5 min read",
        published: true,
        blocks: [
            {
                id: "b1",
                type: "heading_2",
                heading_2: { rich_text: [{ plain_text: "Why Choose a Bachelor of Social Work (BSW)?", annotations: { bold: true, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "b2",
                type: "paragraph",
                paragraph: { rich_text: [{ plain_text: "The Bachelor of Social Work (BSW) is an intensive 3-year professional degree program that combines theoretical classroom learning with mandatory field practice in community development, public health, and industrial social work.", annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "b3",
                type: "callout",
                callout: {
                    icon: { emoji: "💡" },
                    rich_text: [{ plain_text: "Key Insight: BSW graduates from SGGU affiliated colleges gain hands-on field practicum experience in NGOs, government welfare departments, and hospitals starting from their 1st semester.", annotations: { bold: true, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }]
                }
            },
            {
                id: "b4",
                type: "heading_2",
                heading_2: { rich_text: [{ plain_text: "Top Employment Sectors for BSW Graduates", annotations: { bold: true, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "b5",
                type: "bulleted_list_item",
                bulleted_list_item: { rich_text: [{ plain_text: "Government Social Welfare Departments: Project Officers, Child Development Project Officers (CDPO), Tribal Welfare Executives.", annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "b6",
                type: "bulleted_list_item",
                bulleted_list_item: { rich_text: [{ plain_text: "Non-Governmental Organizations (NGOs): Community Organizers, Program Managers, Field Researchers.", annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "b7",
                type: "bulleted_list_item",
                bulleted_list_item: { rich_text: [{ plain_text: "Healthcare & Mental Health: Psychiatric Social Work Assistants, Medical Social Work Coordinators.", annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "b8",
                type: "heading_3",
                heading_3: { rich_text: [{ plain_text: "Advantage for GPSC & UPSC Civil Services", annotations: { bold: true, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "b9",
                type: "paragraph",
                paragraph: { rich_text: [{ plain_text: "Students with a BSW degree develop deep analytical understanding of rural administration, social policies, and Indian Constitution dynamics, giving them a distinct competitive edge in competitive civil services examinations.", annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "b10",
                type: "quote",
                quote: { rich_text: [{ plain_text: "Social work is not just a degree; it is a professional vocation aimed at structural empowerment and human dignity.", annotations: { bold: false, italic: true, strikethrough: false, underline: false, code: false, color: "default" } }] }
            }
        ]
    },
    {
        id: "sample-2",
        slug: "why-msw-degree-is-essential-for-hr-and-csr-roles",
        title: "Why an MSW Degree is Essential for HR & Corporate Social Responsibility (CSR) Roles",
        excerpt: "Learn how Master of Social Work (MSW) specialization in Human Resource Management (HRM) and CSR unlocks high-paying corporate careers.",
        category: "MSW Insights",
        coverImage: "/image.svg",
        author: {
            name: "Prof. S. M. Joshi",
            avatar: "/image.svg",
            role: "Head of MSW Department",
        },
        publishedAt: "2026-08-20",
        readTime: "6 min read",
        published: true,
        blocks: [
            {
                id: "mb1",
                type: "heading_2",
                heading_2: { rich_text: [{ plain_text: "The Intersection of MSW and Corporate Leadership", annotations: { bold: true, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "mb2",
                type: "paragraph",
                paragraph: { rich_text: [{ plain_text: "With India mandating CSR spending for corporate enterprises under the Companies Act, corporate demand for MSW professionals specializing in Human Resource Management (HRM), Labor Welfare, and Industrial Relations has grown exponentially.", annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "mb3",
                type: "heading_2",
                heading_2: { rich_text: [{ plain_text: "Core Career Pathways for MSW Graduates", annotations: { bold: true, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "mb4",
                type: "bulleted_list_item",
                bulleted_list_item: { rich_text: [{ plain_text: "CSR Lead & Program Director in major industrial conglomerates.", annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "mb5",
                type: "bulleted_list_item",
                bulleted_list_item: { rich_text: [{ plain_text: "HR Officer & Labor Welfare Manager in manufacturing and IT sectors.", annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "mb6",
                type: "bulleted_list_item",
                bulleted_list_item: { rich_text: [{ plain_text: "International Development Consultant in UN agencies and global foundations.", annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            }
        ]
    },
    {
        id: "sample-3",
        slug: "admission-guide-for-bsw-and-msw-at-vjkm-college",
        title: "Complete Step-by-Step Admission Guide for BSW & MSW Courses (2025-2026)",
        excerpt: "Everything you need to know about eligibility, document requirements, merit list criteria, and field placement options at VJKM Self Finance College.",
        category: "Admissions",
        coverImage: "/image.svg",
        author: {
            name: "Admissions Cell",
            avatar: "/image.svg",
            role: "VJKM Academic Office",
        },
        publishedAt: "2026-08-15",
        readTime: "4 min read",
        published: true,
        blocks: [
            {
                id: "ab1",
                type: "heading_2",
                heading_2: { rich_text: [{ plain_text: "How to Apply for BSW & MSW Admissions", annotations: { bold: true, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            },
            {
                id: "ab2",
                type: "paragraph",
                paragraph: { rich_text: [{ plain_text: "VJKM Self Finance College offers SGGU affiliated 3-year BSW and 2-year MSW programs. Admissions are processed on merit following Gujarat Higher Education guidelines.", annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: "default" } }] }
            }
        ]
    }
]

// Helper to extract text from Notion Property
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractNotionPropertyText(property: any): string {
    if (!property) return ""
    if (property.type === "title" && property.title) {
        return property.title.map((t: NotionRichText) => t.plain_text).join("")
    }
    if (property.type === "rich_text" && property.rich_text) {
        return property.rich_text.map((t: NotionRichText) => t.plain_text).join("")
    }
    if (property.type === "select" && property.select) {
        return property.select.name || ""
    }
    if (property.type === "date" && property.date) {
        return property.date.start || ""
    }
    if (property.type === "url" && property.url) {
        return property.url
    }
    if (property.type === "files" && property.files && property.files.length > 0) {
        const file = property.files[0]
        return file.file?.url || file.external?.url || ""
    }
    return ""
}

// Fetch all published articles from Notion database or fallback
export async function getArticles(): Promise<Article[]> {
    if (!notionApiKey || !notionDatabaseId) {
        return SAMPLE_ARTICLES
    }

    try {
        const res = await fetch(`https://api.notion.com/v1/databases/${notionDatabaseId}/query`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${notionApiKey}`,
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                filter: {
                    property: "Published",
                    checkbox: {
                        equals: true,
                    },
                },
                sorts: [
                    {
                        property: "Date",
                        direction: "descending",
                    },
                ],
            }),
            next: { revalidate: 86400 }, // 24 hour
        })

        if (!res.ok) {
            console.error(`Notion API query returned status ${res.status}`)
            return SAMPLE_ARTICLES
        }

        const data = await res.json()

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const articles: Article[] = (data.results || []).map((page: any) => {
            const props = page.properties

            const title = extractNotionPropertyText(props.Title || props.Name) || "Untitled Article"
            const slug = extractNotionPropertyText(props.Slug) || page.id
            const excerpt = extractNotionPropertyText(props.Excerpt || props.Summary) || ""
            const category = extractNotionPropertyText(props.Category) || "General"
            const coverImage =
                extractNotionPropertyText(props.Cover) ||
                page.cover?.file?.url ||
                page.cover?.external?.url ||
                "/image.svg"
            const publishedAt = extractNotionPropertyText(props.Date) || new Date().toISOString().split("T")[0]
            const readTime = extractNotionPropertyText(props.ReadTime) || "5 min read"
            const authorName = extractNotionPropertyText(props.Author) || "VJKM Editorial Team"

            return {
                id: page.id,
                slug,
                title,
                excerpt,
                category,
                coverImage,
                author: {
                    name: authorName,
                    avatar: "/image.svg",
                    role: "Faculty & Educational Contributor",
                },
                publishedAt,
                readTime,
                published: true,
            }
        })

        return articles.length > 0 ? articles : SAMPLE_ARTICLES
    } catch (err) {
        console.error("Failed to fetch articles from Notion database, using sample articles:", err)
        return SAMPLE_ARTICLES
    }
}

// Fetch single article by slug including Notion block content
export async function getArticleBySlug(slug: string): Promise<Article | null> {
    const allArticles = await getArticles()
    const article = allArticles.find((a) => a.slug === slug || a.id === slug)

    if (!article) return null

    if (!notionApiKey || article.id.startsWith("sample-")) {
        return article
    }

    try {
        const res = await fetch(`https://api.notion.com/v1/blocks/${article.id}/children?page_size=100`, {
            headers: {
                Authorization: `Bearer ${notionApiKey}`,
                "Notion-Version": "2022-06-28",
            },
            next: { revalidate: 86400 }, // 24 hour
        })

        if (!res.ok) {
            return article
        }

        const data = await res.json()

        return {
            ...article,
            blocks: data.results || [],
        }
    } catch (err) {
        console.error(`Failed to fetch block children for Notion page ${article.id}:`, err)
        return article
    }
}

// Helper to get related articles excluding current slug
export async function getRelatedArticles(currentSlug: string, count = 3): Promise<Article[]> {
    const all = await getArticles()
    return all.filter((a) => a.slug !== currentSlug).slice(0, count)
}
