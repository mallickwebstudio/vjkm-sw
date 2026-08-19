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
    label: "About Us",
    href: "/about-us",
    description: "Learn about Vadodara Jilla Kelavani Mandal trust, our leadership, and legacy.",
    featured: {
      title: "VJKM Trust Legacy",
      description: "Empowering society through accessible, value-driven education since 1957.",
      href: "/about-us/about-trust",
      badge: "Since 1957",
    },
    children: [
      {
        label: "About Trust",
        href: "/about-us/about-trust",
        description: "Vadodara Jilla Kelavani Mandal profile, board of trustees, & timeline.",
      },
      {
        label: "About College",
        href: "/about-us/about-college",
        description: "Principal's message, vision & mission, SGGU affiliation & compliance.",
      },
      {
        label: "Governing Body",
        href: "/about-us/governing-body",
        description: "Board of Governors, College Development Committee (CDC), & Academic Council.",
      },
      {
        label: "Faculty & Staff",
        href: "/about-us/faculty-and-staff",
        description: "Filterable directory of faculty, research outreach, & administration.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "Courses",
    href: "/courses",
    description: "Professional BSW and MSW degree tracks tailored for social work & leadership.",
    featured: {
      title: "Admissions Open 2026-27",
      description: "Apply for BSW (70 Seats) and MSW (200 Seats) via GCAS Gujarat Portal.",
      href: "/admission/admission-process",
      badge: "GCAS Portal",
    },
    children: [
      {
        label: "Bachelor of Social Work (BSW)",
        href: "/courses/bsw",
        description: "3 Years | 6 Semesters | 70 Seats | Civil-services & field aligned.",
      },
      {
        label: "Master of Social Work (MSW)",
        href: "/courses/msw",
        description: "2 Years | 4 Semesters | 200 Seats | HR/IR, MPSW & CD tracks.",
      },
      {
        label: "Academic Calendar",
        href: "/courses/academic-calendar",
        description: "Semester timelines, internal assessments, & SGGU exam dates.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "Admission",
    href: "/admission",
    description: "Complete guidance for GCAS portal registration, eligibility, and scholarships.",
    featured: {
      title: "GCAS Registration Guide",
      description: "Step-by-step instructions for gcasstudent.gujgov.edu.in application.",
      href: "/admission/gcas-guidance",
      badge: "Step-by-Step",
    },
    children: [
      {
        label: "Admission Process",
        href: "/admission/admission-process",
        description: "GCAS flowchart, eligibility matrix, seat quotas, & fee structure.",
      },
      {
        label: "GCAS Guidance",
        href: "/admission/gcas-guidance",
        description: "Portal instructions, document checklist, & campus helpdesk details.",
      },
      {
        label: "Scholarship & Financial Aid",
        href: "/admission/scholarship-and-financial-aid",
        description: "Digital Gujarat, MYSY scheme, & VJKM trust grants.",
      },
      {
        label: "Admission Inquiry",
        href: "/admission/admission-inquiry",
        description: "Submit online inquiry, chat on WhatsApp, or view FAQs.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "Campus",
    href: "/campus",
    description: "State-of-the-art academic environment, smart classrooms, and infrastructure.",
    featured: {
      title: "360° Virtual Campus Tour",
      description: "Take an interactive virtual walk through our classrooms, labs, and grounds.",
      href: "/campus/virtual-tour",
      badge: "Virtual Tour",
    },
    children: [
      {
        label: "Virtual Tour",
        href: "/campus/virtual-tour",
        description: "Interactive 360° tour of classrooms, grounds, & corridors.",
      },
      {
        label: "Classrooms & Labs",
        href: "/campus/classrooms-and-labs",
        description: "Smart podium classrooms, computer lab, & audio-visual seminar halls.",
      },
      {
        label: "Auditorium",
        href: "/campus/auditorium",
        description: "Central auditorium seating capacity, acoustics, & event stage.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "Facilities",
    href: "/facilities",
    description: "Central library, athletic sports turf, gym, and student amenities.",
    featured: {
      title: "Digital & Physical Library",
      description: "Access thousands of books, case journals, e-databases & Book Bank scheme.",
      href: "/facilities/library",
      badge: "Knowledge Hub",
    },
    children: [
      {
        label: "Library",
        href: "/facilities/library",
        description: "Books, e-journals, social science archives, & Book Bank scheme.",
      },
      {
        label: "Sports & Fitness",
        href: "/facilities/sports-and-fitness",
        description: "Cricket turf, football ground, fitness gym, & yoga center.",
      },
      {
        label: "Student Amenities",
        href: "/facilities/student-amenities",
        description: "Girls common room, hygienic canteen, first aid, & transport guidance.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "Fieldwork",
    href: "/fieldwork",
    description: "Fieldwork practicum, corporate CSR placements, and agency partners.",
    featured: {
      title: "Fieldwork Practicum & Camps",
      description: "Weekly concurrent field exposure and 7-day rural immersion camps.",
      href: "/fieldwork/fieldwork-practicum",
      badge: "Hands-On",
    },
    children: [
      {
        label: "Fieldwork Practicum",
        href: "/fieldwork/fieldwork-practicum",
        description: "Concurrent fieldwork, 7-day rural camp, & block placements.",
      },
      {
        label: "Placement Cell",
        href: "/fieldwork/placement-cell",
        description: "Placement objectives, recruitment drive dates, & student officers.",
      },
      {
        label: "Partnering Agencies",
        href: "/fieldwork/partnering-agencies",
        description: "NGO partners, corporate CSR units, & govt social defense depts.",
      },
      {
        label: "Placement Records",
        href: "/fieldwork/placement-records",
        description: "Year-on-year placement metrics & top recruiters gallery.",
      },
      {
        label: "For Recruiters",
        href: "/fieldwork/for-recruiters",
        description: "Dean's invitation, batch demographics, & recruiter registration.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "Student Life",
    href: "/student-life",
    description: "NSS outreach, cultural festivals, student clubs, and media gallery.",
    featured: {
      title: "NSS & Social Outreach",
      description: "Blood donation camps, village adoption, and community literacy drives.",
      href: "/student-life/nss-and-social-outreach",
      badge: "Community",
    },
    children: [
      {
        label: "NSS & Social Outreach",
        href: "/student-life/nss-and-social-outreach",
        description: "Blood donation camps, cleanliness drives, & adopted village work.",
      },
      {
        label: "Events & Celebrations",
        href: "/student-life/events-and-celebrations",
        description: "Annual cultural fest, World Social Work Day, & sports meets.",
      },
      {
        label: "Clubs & Cells",
        href: "/student-life/clubs-and-cells",
        description: "Cultural club, debate & civil services circle, & eco club.",
      },
      {
        label: "Media Gallery",
        href: "/student-life/media-gallery",
        description: "Filterable photo grid & student testimonial video gallery.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "Committees",
    href: "/committees",
    description: "Internal Quality Assurance Cell (IQAC), Anti-Ragging, and statutory compliance.",
    featured: {
      title: "IQAC Quality Standards",
      description: "Continuous institutional quality improvement and transparency ATRs.",
      href: "/committees/iqac",
      badge: "Compliance",
    },
    children: [
      {
        label: "IQAC",
        href: "/committees/iqac",
        description: "IQAC committee composition, quality initiatives, & downloadable ATRs.",
      },
      {
        label: "Anti-Ragging Cell",
        href: "/committees/anti-ragging-cell",
        description: "UGC anti-ragging policy, squad helplines, & online affidavit link.",
      },
      {
        label: "Internal Complaint Committee",
        href: "/committees/internal-complaint-committee",
        description: "POSH mandate, gender equity, & grievance filing procedure.",
      },
      {
        label: "SC/ST/OBC/Minority Cell",
        href: "/committees/sc-st-obc-minority-cell",
        description: "Equal opportunity pillars & online grievance redressal form.",
      },
      {
        label: "RTI & Disclosures",
        href: "/committees/rti-and-disclosures",
        description: "Public Information Officer details, affiliation letters, & mandatory PDFs.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "News & Updates",
    href: "/news-and-updates",
    description: "Official campus circulars, exam datesheets, and press media clippings.",
    featured: {
      title: "Urgent Notices & Circulars",
      description: "Stay updated with exam timetables, cutoff dates, & university circulars.",
      href: "/news-and-updates/notices-and-circulars",
      badge: "Announcements",
    },
    children: [
      {
        label: "Notices & Circulars",
        href: "/news-and-updates/notices-and-circulars",
        description: "Filterable notice table: Academic, Exam, GCAS Admission, & Admin.",
      },
      {
        label: "Upcoming Events",
        href: "/news-and-updates/upcoming-events",
        description: "Seminars, guest lectures, & upcoming workshop cards.",
      },
      {
        label: "News Clippings",
        href: "/news-and-updates/news-clippings",
        description: "Press articles, media coverage, & university highlights gallery.",
      },
    ],
  },
];

// Helper to extract flat list of explore links for Footer
export const footerExploreLinks = navigationData.map((item) => ({
  label: item.label,
  href: item.href,
}));
