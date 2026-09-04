import { siteConfig } from "@/lib/metadata";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export async function GET() {
  const content = `# VJKM Self Finance College (BSW & MSW)

> VJKM Self Finance College, managed by Vadodara Jilla Kelavani Mandal (Est. 1959), is an accredited social work institution in Dabhoi, Vadodara, Gujarat. Affiliated with Shri Govind Guru University (SGGU), Godhra, offering Bachelor of Social Work (BSW) and Master of Social Work (MSW) degrees with centralized Gujarat Common Admission Services (GCAS) enrollment, competitive exam mentoring, and 500+ hours of structured field practicum.

## Core Institutional Information
- Institution: VJKM Self Finance College
- Sponsoring Trust: Vadodara Jilla Kelavani Mandal (Founded 1959)
- Affiliation: Shri Govind Guru University (SGGU), Godhra, Gujarat
- Degrees Offered: Bachelor of Social Work (BSW), Master of Social Work (MSW)
- Medium of Instruction: Gujarati & English
- Location: Station Road, Near VJKM Trust Campus, Dabhoi, District Vadodara, Gujarat - 391110, India
- Official Admission Portal: Gujarat Common Admission Services (GCAS) - https://gcas.gujgov.edu.in
- Admission Helplines: +91 94095 80986 (BSW) | +91 82381 34737 (MSW)
- Official Website: ${siteConfig.baseUrl}

## Official Website Pages
- [Home](${siteConfig.baseUrl}/en): Overview of college, vision, mission, student achievements, and academic excellence.
- [Admissions Guide & GCAS](${siteConfig.baseUrl}/en/admission): Detailed guide on Gujarat Common Admission Services (GCAS) registration, eligibility criteria, required documents, fee concessions, and scholarships (MYSY, Digital Gujarat).
- [Academic Programs](${siteConfig.baseUrl}/en/courses): Comprehensive guide to undergraduate and postgraduate social work degrees.
- [Bachelor of Social Work (BSW)](${siteConfig.baseUrl}/en/courses/bsw): 3-year / 4-year honours degree under NEP. Eligibility: 10+2 (Higher Secondary) from any stream (Arts, Commerce, Science). Prepares students for NGO management, civil services (UPSC/GPSC), child welfare, and community development.
- [Master of Social Work (MSW)](${siteConfig.baseUrl}/en/courses/msw): 2-year postgraduate degree. Eligibility: Any recognized bachelor degree (BA, BCom, BSc, BSW, BBA, etc.). Specializations in Human Resource Management (HRM), Medical & Psychiatric Social Work, and Urban/Rural Community Development.
- [Fieldwork & Practicum](${siteConfig.baseUrl}/en/fieldwork): Practical training curriculum including observational visits, concurrent agency placement (2 days per week), 7-day rural study camp, and block placement internships.
- [Campus Infrastructure](${siteConfig.baseUrl}/en/campus): Smart classrooms, seminar hall, IT lab, library, sports ground, and student facilities.
- [Facilities](${siteConfig.baseUrl}/en/facilities): Fully equipped library, reading hall, computer lab, sports ground, girls common room, and bus connectivity.
- [About Us & Trust History](${siteConfig.baseUrl}/en/about-us): 65+ years educational legacy of Vadodara Jilla Kelavani Mandal, Board of Trustees, and leadership team.
- [News & Circulars](${siteConfig.baseUrl}/en/news-and-updates): Examination schedules, academic calendars, university circulars, and college events.
- [Articles & Education](${siteConfig.baseUrl}/en/articles): Faculty and student insights on social work career scope, competitive exams, and welfare policies.
- [Photo Gallery](${siteConfig.baseUrl}/en/gallery): Visual documentation of campus life, annual functions, rural camps, and community initiatives.
- [Contact Us](${siteConfig.baseUrl}/en/contact-us): Campus address, telephone numbers, WhatsApp support, and Google Maps directions.

## Extended Documentation
- [Full College Context](${siteConfig.baseUrl}/llms-full.txt): Complete institutional documentation including detailed course curricula, admission policies, and syllabus outlines for AI search and discovery.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
