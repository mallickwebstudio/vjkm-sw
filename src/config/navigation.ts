export interface SubNavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavItem {
  type: "link" | "dropdown";
  label: string; // Translation key or fallback text
  href: string;
  description?: string;
  featured?: {
    title: string;
    description: string;
    href: string;
    badge?: string;
  };
  children?: SubNavItem[];
}

export const navigationData: NavItem[] = [
  {
    type: "link",
    label: "navigation.home",
    href: "/",
  },
  {
    type: "dropdown",
    label: "navigation.about",
    href: "/about-us",
    description: "Learn about Vadodara Jilla Kelavani Mandal trust, our leadership, and legacy.",
    featured: {
      title: "VJKM Trust Legacy",
      description: "Empowering society through accessible, value-driven education since 1957.",
      href: "/about-us#about-trust",
      badge: "Since 1957",
    },
    children: [
      {
        label: "navigation.aboutTrust",
        href: "/about-us#about-trust",
        description: "Vadodara Jilla Kelavani Mandal profile, board of trustees, & timeline.",
      },
      {
        label: "navigation.aboutCollege",
        href: "/about-us#about-college",
        description: "Principal's message, vision & mission, SGGU affiliation & compliance.",
      },
      {
        label: "navigation.facultyStaff",
        href: "/about-us#faculty-and-staff-grid",
        description: "Directory of faculty, research outreach, & administration.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "navigation.courses",
    href: "/courses",
    description: "Professional BSW and MSW degree tracks tailored for social work & leadership.",
    featured: {
      title: "Admissions Open 2026-27",
      description: "Apply for BSW (70 Seats) and MSW (200 Seats) via GCAS Portal or Direct Self-Finance.",
      href: "/admission#admission-process",
      badge: "GCAS & Self-Finance",
    },
    children: [
      {
        label: "navigation.bsw",
        href: "/courses/bsw",
        description: "3 Years | 6 Semesters | 70 Seats | Civil-services & field aligned.",
      },
      {
        label: "navigation.msw",
        href: "/courses/msw",
        description: "2 Years | 4 Semesters | 200 Seats | HR/IR, MPSW & CD tracks.",
      },
      {
        label: "navigation.academicCalendar",
        href: "/courses#academic-calendar",
        description: "Semester timelines, internal assessments, & SGGU exam dates.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "navigation.admission",
    href: "/admission",
    description: "Complete guidance for GCAS portal registration, Direct Self-Finance admissions, eligibility, and scholarships.",
    featured: {
      title: "GCAS Registration Guide",
      description: "Step-by-step instructions for gcasstudent.gujgov.edu.in application.",
      href: "/admission#gcas-guidance",
      badge: "Step-by-Step",
    },
    children: [
      {
        label: "navigation.admissionProcess",
        href: "/admission#admission-process",
        description: "GCAS flowchart, eligibility matrix, seat quotas, & fee structure.",
      },
      {
        label: "navigation.gcasGuidance",
        href: "/admission#gcas-guidance",
        description: "Portal instructions, document checklist, & campus helpdesk details.",
      },
      {
        label: "navigation.scholarshipFinancialAid",
        href: "/admission#scholarship-and-financial-aid",
        description: "Digital Gujarat, MYSY scheme, & VJKM trust grants.",
      },
      {
        label: "navigation.admissionInquiry",
        href: "/admission#admission-inquiry",
        description: "Submit online inquiry, chat on WhatsApp, or view FAQs.",
      },
    ],
  },

  {
    type: "dropdown",
    label: "navigation.facilities",
    href: "/facilities",
    description: "Central library, Book Bank scheme, sports turf, and gym.",
    featured: {
      title: "Digital & Physical Library",
      description: "Access thousands of books, case journals, e-databases & Book Bank scheme.",
      href: "/facilities#library",
      badge: "Knowledge Hub",
    },
    children: [
      {
        label: "navigation.library",
        href: "/facilities#library",
        description: "Books, e-journals, & social science research archives.",
      },
      {
        label: "navigation.bookBank",
        href: "/facilities#book-bank-scheme",
        description: "Free complete semester textbook kits for BSW & MSW students.",
      },
      {
        label: "navigation.sportsFitness",
        href: "/facilities#sports-and-fitness",
        description: "Cricket turf, football ground, fitness gym, & yoga center.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "navigation.fieldwork",
    href: "/fieldwork",
    description: "Fieldwork practicum, corporate CSR placements, and agency partners.",
    featured: {
      title: "Fieldwork Practicum & Camps",
      description: "Weekly concurrent field exposure and 7-day rural immersion camps.",
      href: "/fieldwork#fieldwork-practicum",
      badge: "Hands-On",
    },
    children: [
      {
        label: "navigation.fieldworkPracticum",
        href: "/fieldwork#fieldwork-practicum",
        description: "Concurrent fieldwork, 7-day rural camp, & block placements.",
      },
      {
        label: "navigation.placementCell",
        href: "/fieldwork#placement-cell",
        description: "Placement objectives, recruitment drive dates, & student officers.",
      },
      {
        label: "navigation.partneringAgencies",
        href: "/fieldwork#partnering-agencies",
        description: "NGO partners, corporate CSR units, & govt social defense depts.",
      },
      {
        label: "navigation.placementRecords",
        href: "/fieldwork#placement-records",
        description: "Year-on-year placement metrics & top recruiters gallery.",
      },
      {
        label: "navigation.forRecruiters",
        href: "/fieldwork#for-recruiters",
        description: "Dean's invitation, batch demographics, & recruiter registration.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "navigation.studentLife",
    href: "/student-life",
    description: "NSS outreach, annual cultural festival, and sports meets.",
    featured: {
      title: "NSS & Social Outreach",
      description: "Blood donation camps, village adoption, and community literacy drives.",
      href: "/student-life#nss-and-social-outreach",
      badge: "Community",
    },
    children: [
      {
        label: "navigation.nssSocialOutreach",
        href: "/student-life#nss-and-social-outreach",
        description: "Blood donation camps, cleanliness drives, & adopted village work.",
      },
      {
        label: "navigation.eventsCelebrations",
        href: "/student-life#events-and-celebrations",
        description: "Annual cultural fest, World Social Work Day, & sports meets.",
      },
    ],
  },

  {
    type: "dropdown",
    label: "navigation.news",
    href: "/news-and-updates",
    description: "Official campus circulars, exam datesheets, and press media clippings.",
    featured: {
      title: "Urgent Notices & Circulars",
      description: "Stay updated with exam timetables, cutoff dates, & university circulars.",
      href: "/news-and-updates#notices-and-circulars",
      badge: "Announcements",
    },
    children: [
      {
        label: "navigation.noticesCirculars",
        href: "/news-and-updates#notices-and-circulars",
        description: "Filterable notice table: Academic, Exam, GCAS Admission, & Admin.",
      },
      {
        label: "navigation.upcomingEvents",
        href: "/news-and-updates#upcoming-events",
        description: "Seminars, guest lectures, & upcoming workshop cards.",
      },
      {
        label: "navigation.newsClippings",
        href: "/news-and-updates#news-clippings",
        description: "Press articles, media coverage, & university highlights gallery.",
      },
    ],
  },
  {
    type: "link",
    label: "navigation.articles",
    href: "/articles",
  },
];

// Helper to extract flat list of explore links for Footer
export const footerExploreLinks = navigationData.map((item) => ({
  label: item.label,
  href: item.href,
}));
