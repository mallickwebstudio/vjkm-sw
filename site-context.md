# VJKM Self Finance College (BSW - MSW) — Site Context & Architectural Overview

## 1. Executive Summary & Purpose
- **Project Name**: `vjkm-sf-college` (VJKM Self Finance College BSW & MSW)
- **Parent Trust**: Vadodara Jilla Kelavani Mandal (Established 1957)
- **Affiliation & Approvals**: Shri Govind Guru University (SGGU), Godhra; Gujarat State Government; AISHE compliant.
- **Location**: Ta. Dabhoi, Dist. Vadodara, Gujarat - 391110.
- **Core Purpose**: A modern, bilingual (English & Gujarati) web application designed for VJKM Self Finance College. It provides prospective and current students, recruiters, and faculty with comprehensive information on academic programs (BSW & MSW), Gujarat Common Admission Service (GCAS) enrollment guidance, fieldwork practicum, placement cell records, campus amenities, NSS outreach, regulatory compliance (IQAC, POSH, Anti-Ragging), circulars, and an administrative invoice generation tool.

---

## 2. Technology Stack & Dependencies

### Core Framework & Compiler
- **Framework**: [Next.js](https://nextjs.org) `16.3.1` (App Router)
- **UI Engine**: [React](https://react.dev) `19.2.8`
- **Language**: TypeScript `^5`
- **React Compiler**: `babel-plugin-react-compiler` `1.0.0`
- **Linting**: ESLint `^9` (`eslint-config-next`)

### Styling & Design System
- **CSS Architecture**: Tailwind CSS `v4` (`@tailwindcss/postcss`)
- **Animation Libraries**: `tw-animate-css`, `motion` (Framer Motion replacement v13.1.0)
- **Utility Libraries**: `clsx`, `tailwind-merge`, `class-variance-authority` (CVA)
- **Typography**: Google Fonts via `next/font/google` (`Geist`, `Geist_Mono`, `Noto_Serif`)

### UI Components & Primitives
- **Shadcn UI & Base Primitives**: `shadcn` (`v4.18.0`), `@base-ui/react`, `radix-ui` primitives
- **Icons**: `lucide-react` (`^1.32.0`)
- **Carousels & Dialogs**: `embla-carousel-react`, custom dialogs (`image-preview-dialog.tsx`)
- **Interactive Controls**: `cmdk` (global search command menu), `react-day-picker` (calendar), `input-otp`, `react-resizable-panels`, `sonner` (toast notifications)

### Internationalization (i18n)
- **Package**: `next-intl` (`^4.13.7`)
- **Supported Locales**: English (`en`) [default] & Gujarati (`gu`)
- **Locale Routing Strategy**: Prefix strategy (`/en/*`, `/gu/*`) managed via `src/proxy.ts` middleware and `src/i18n/routing.ts`.

### Data Ingestion & Utility Tools
- **Live Notices API**: Google Apps Script Web App Integration (`getNoticeDb()` revalidated every 300 seconds)
- **PDF & Canvas Export**: `jspdf`, `html2canvas-pro` (used in the `/invoice` generator module)
- **Google Integration**: `@next/third-parties/google` (`GoogleAnalytics` GA4 integration)
- **Spreadsheet Integration**: `google-spreadsheet`

---

## 3. Directory & File Structure Map

```
vjkm-sf-college/
├── site-context.md                   # Complete site context & architecture document
├── package.json                      # Project dependencies, scripts & metadata
├── next.config.ts                    # Next.js configuration
├── components.json                   # Shadcn UI configuration
├── postcss.config.mjs                # PostCSS setup (Tailwind v4)
├── eslint.config.mjs                 # ESLint configuration
├── tsconfig.json                     # TypeScript compilation settings
├── public/                           # Static assets, logos, and media files
└── src/
    ├── proxy.ts                      # Next-intl middleware for locale routing
    ├── app/                          # Next.js App Router root
    │   ├── robots.ts                 # Robots.txt metadata route generator
    │   ├── sitemap.ts                # Sitemap.xml metadata route generator
    │   ├── not-found.tsx             # Root 404 fallback page
    │   └── [locale]/                 # Dynamic locale root ([locale] = 'en' | 'gu')
    │       ├── layout.tsx            # Global HTML/Body layout with fonts, Navbar, Footer, GA
    │       ├── globals.css           # Global CSS variables, font definitions & Tailwind imports
    │       ├── not-found.tsx         # Locale-aware 404 page
    │       ├── (pages)/              # Main public site route group
    │       │   ├── (home)/           # Homepage ('/') layout and section components
    │       │   ├── about-us/         # About Trust, About College, Governing Body, Faculty
    │       │   ├── admission/        # Process, GCAS guidance, Scholarships, Inquiry form
    │       │   ├── courses/          # Course listing, BSW track, MSW track, Academic calendar
    │       │   ├── campus/           # 360° Virtual tour, Classrooms/Labs, Auditorium
    │       │   ├── facilities/       # Library, Sports & Fitness, Student Amenities
    │       │   ├── fieldwork/        # Practicum, Placement cell, Partners, Recruiters
    │       │   ├── student-life/     # NSS & Outreach, Events, Clubs, Media gallery
    │       │   ├── news-and-updates/ # Notices & circulars, Upcoming events, News clippings
    │       │   └── contact-us/       # Campus timings, emails, Map embed, Inquiry form
    │       └── (secure-page)/        # Protected administrative route group
    │           ├── layout.tsx        # Password protection gate layout (authorization state)
    │           └── invoice/          # Interactive PDF invoice & receipt generator tool
    ├── components/                   # Component architecture
    │   ├── animation/                # Framer Motion entrance animations (fade-in, blur, zoom)
    │   ├── bg/                       # Ambient visual blobs and canvas backdrops
    │   ├── layout/                   # Navbar, Desktop Mega Menu Dropdowns, Footer
    │   ├── other/                    # Breadcrumbs, Language toggle, Floating Enquiry buttons
    │   ├── section/                  # Reusable domain sections (Hero, Contact, Faculty grid)
    │   ├── shared/                   # Global Search Command Modal (Cmd+K)
    │   └── ui/                       # 50+ Shadcn UI primitives (Button, Card, Dialog, etc.)
    ├── config/
    │   └── navigation.ts             # Central navigation data structure with mega menu configs
    ├── db/                           # Mock/Static datasets and live API integrations
    │   ├── db.ts                     # Live fetcher for Google Apps Script Notice Board API
    │   ├── gallery.ts                # Photo & Video media gallery data
    │   ├── courses/                  # BSW & MSW course data (EN & GU)
    │   ├── facilities/               # Campus facilities data (EN & GU)
    │   └── opportunities/            # Placement & fieldwork opportunities data (EN & GU)
    ├── i18n/                         # Internationalization routing & request configuration
    │   ├── routing.ts                # Locales list (['en', 'gu']), defaultLocale, prefix settings
    │   ├── request.ts                # Next-intl server request config loader
    │   ├── navigation.ts             # Locale-aware navigation hooks (Link, useRouter, usePathname)
    │   └── utils.ts                  # Language helper utilities
    ├── lib/                          # Helper functions, SEO, and fetchers
    │   ├── metadata.ts               # Comprehensive SEO metadata generator (OpenGraph, Twitter, Canonical)
    │   ├── fetcher.ts                # Client/Server API data fetchers
    │   ├── format.tsx                # Text & date formatting helpers
    │   └── utils.ts                  # Classname merging (cn) helper
    ├── messages/                     # Translation dictionaries
    │   ├── en.json                   # Comprehensive English translation dictionary
    │   └── gu.json                   # Comprehensive Gujarati translation dictionary
    └── types/                        # TypeScript type definitions
        ├── course.ts                 # Course schema types
        ├── facility.ts               # Facility schema types
        ├── opportunity.ts            # Placement/Fieldwork schema types
        ├── ui.ts                     # UI component types
        └── index.ts                  # Export barrel
```

---

## 4. Routes & Page Architecture

| Route Pattern | Component / Section Stack | Key Purpose |
| :--- | :--- | :--- |
| `/[locale]/` | `Hero`, `NoticeBoard` (Ticker), `AboutSnapshot`, `CoursesSpotlight`, `GcasThreeStepGuide`, `CareerFieldworkGrid`, `CampusAmenitiesPreview`, `RecentUpdatesFeed`, `TestimonialCarousel` | Main landing page highlighting trust legacy, courses, GCAS admission guide, and campus highlights. |
| `/[locale]/about-us` | `AboutTrustHero`, `TrustOverview`, `BoardOfTrustees`, `LegacyTimeline`, `AboutCollegeHero`, `PrincipalMessage`, `VisionMissionValues`, `AffiliationCompliance`, `BoardOfGovernors`, `FacultyDirectory` | Overview of Vadodara Jilla Kelavani Mandal (since 1957), college administration, and faculty. |
| `/[locale]/courses` | `CourseHeader`, `SyllabusOutline`, `FieldworkRequirements`, `CareerOutcomes`, `AcademicCalendarHero`, `SemesterTimelineTable`, `UniversityExamSchedule` | Detailed academic tracks for Bachelor of Social Work (BSW - 70 seats) and Master of Social Work (MSW - 200 seats). |
| `/[locale]/admission` | `GcasProcessFlowchart`, `EligibilityMatrix`, `SeatMatrix`, `FeeStructure`, `PortalGuide`, `DocumentChecklist`, `DigitalGujaratScholarships`, `MysyGuidance`, `TrustScholarships`, `InquiryForm` | Step-by-step GCAS registration guide (`gcasstudent.gujgov.edu.in`), fee details, and financial aid options. |
| `/[locale]/campus` | `Interactive360Viewer`, `SmartClassrooms`, `ComputerLab`, `SeminarHalls`, `CentralAuditoriumSpecs` | Showcase of campus infrastructure, smart podium classrooms, labs, and auditorium. |
| `/[locale]/facilities` | `BooksAndJournals`, `DigitalLibraryAccess`, `BookBankScheme`, `SportsGrounds`, `FitnessGym`, `YogaCenter`, `CanteenFacilities`, `GirlsCommonRoom` | Overview of physical & digital library resources, sports turf, gym, and student amenities. |
| `/[locale]/fieldwork` | `ConcurrentFieldwork`, `RuralCampExperience`, `BlockPlacementInternships`, `PlacementCell`, `NgoPartners`, `CorporateCsrUnits`, `PlacementStatsTable`, `RecruiterRegistrationForm` | Highlights 2-day weekly fieldwork, 7-day rural camps, corporate CSR partnerships, and placement statistics. |
| `/[locale]/student-life` | `NssActivities`, `AdoptedVillageInitiatives`, `AnnualCulturalFest`, `WorldSocialWorkDay`, `ClubsAndCells`, `FilterablePhotoGrid`, `VideoGallery` | NSS community outreach, village adoption, annual cultural fests, student clubs, and media gallery. |
| `/[locale]/news-and-updates` | `FilterableNoticesTable`, `EventCardGrid`, `MediaCoverageGallery` | Dynamic notice board table, upcoming event schedules, and press clippings gallery. |
| `/[locale]/contact-us` | `ContactInfoCards`, `CampusTimings`, `OfficialEmailAddresses`, `CampusLocationMap`, `ContactInquiryForm` | Direct contact numbers, official emails (`vjkmmsw@gmail.com`), campus timing, map, and inquiry form. |
| `/[locale]/invoice` *(Protected)* | `LayoutSecure` (Password gate), `InvoicePageClient`, `ItemNameInput` | Administrative utility for creating, previewing, and downloading PDF fee/service invoices. |

---

## 5. Data Flow & External Integrations

1. **Dynamic Notice Board (`getNoticeDb`)**:
   - **Source**: External Google Apps Script Web App endpoint.
   - **Endpoint**: `https://script.google.com/macros/s/.../exec`
   - **Revalidation**: Next.js Data Cache revalidates every 300 seconds (5 minutes).
   - **Schema**: `Timestamp`, `category`, `title`, `href`, `type` (`pdf` | `link` | `paper`), `active`.

2. **Multilingual Dataset System (`src/db/`)**:
   - Course listings, facilities descriptions, and fieldwork opportunities are stored as structured TypeScript objects localized into `en.tsx` and `gu.tsx` modules.

3. **Internationalization & Dictionary System (`src/messages/`)**:
   - `en.json` & `gu.json` contain translation keys for top utility bars, mega menus, button CTAs, footer links, committee guidelines, and form placeholders.

4. **SEO & OpenGraph System (`src/lib/metadata.ts`)**:
   - Centralized `getSeoMetadata()` function dynamically generates title tags, meta descriptions, canonical URLs, language alternate links (`en` & `gu`), and OpenGraph/Twitter card images.

---

## 6. Key Business Rules & Domain Context

- **Academic Offering**:
  - **BSW (Bachelor of Social Work)**: 3 Years | 6 Semesters | 70 Seats. Focus on community development, civil service foundation, and fieldwork.
  - **MSW (Master of Social Work)**: 2 Years | 4 Semesters | 200 Seats. Specializations in HR/IR (Human Resource & Industrial Relations), MPSW (Medical & Psychiatric Social Work), and Community Development.
- **Admission System**:
  - Centralized admission via **GCAS (Gujarat Common Admission Service)** at `gcasstudent.gujgov.edu.in`.
  - Financial assistance guidance for **Digital Gujarat** (SC, ST, SEBC, EWS), **MYSY** (Mukhyamantri Yuva Swavalamban Yojana), and **VJKM Trust Grants**.
- **Fieldwork & Practicum**:
  - Mandatory 2-day per week concurrent field visits.
  - 7-day rural immersion camp.
  - Block placement internships with partnering NGOs, CSR divisions, and Government Social Defense departments.
- **Administrative Utilities**:
  - Password-protected `/invoice` tool (`src/app/[locale]/(secure-page)/invoice/invoice-page-client.tsx`) allowing administrative staff to generate itemized fee receipts as downloadable PDFs (`jspdf`).

---

## 7. Operational & Development Commands

- **Start Dev Server**: `npm run dev` (Runs Next.js dev server on `http://localhost:3000`)
- **Production Build**: `npm run build` (Compiles TypeScript, optimizes assets, runs React compiler)
- **Start Production Server**: `npm run start` (Serves the compiled production build)
- **Lint Codebase**: `npm run lint` (Executes ESLint validation)
