import { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

export type LocalizedString = Record<Locale, string>;

export type SiteConfig = {
  name: LocalizedString;
  trustName: LocalizedString;
  trustUrl: string;
  baseUrl: string;
  ogImage: string;
  links: {
    phone: string;
    bswPhone: string;
    mswPhone: string;
    whatsapp: string;
    email: string;
  };
  address: {
    street: string;
    locality: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
  };
};

export const siteConfig: SiteConfig = {
  name: {
    en: "VJKM Self Finance College BSW - MSW",
    gu: "વી.જે.કે.એમ. સેલ્ફ ફાઇનાન્સ કોલેજ BSW - MSW",
  },
  trustName: {
    en: "Vadodara Jilla Kelavani Mandal",
    gu: "વડોદરા જિલ્લા કેળવણી મંડળ",
  },
  trustUrl: "https://vadodarajillakelavanimandal.com",
  baseUrl: "https://vjkm-sf-college.in",
  ogImage: "https://vjkm-sf-college.in/og.png",
  links: {
    phone: "tel:+919409580986",
    bswPhone: "tel:+919409580986",
    mswPhone: "tel:+918238134737",
    whatsapp: "https://wa.me/+919409580986",
    email: "mailto:maulikpatel9028@gmail.com",
  },
  address: {
    street: "Station Road, Near VJKM Trust Campus",
    locality: "Dabhoi",
    city: "Dabhoi",
    district: "Vadodara",
    state: "Gujarat",
    pincode: "391110",
  },
};

// Comprehensive SEO Registry covering all core routes with high-intent keywords & descriptions
export const staticMetadataRegistry = {
  home: {
    en: {
      title: "VJKM Self Finance College | BSW & MSW Social Work College in Vadodara (SGGU)",
      description:
        "VJKM Self Finance College offers SGGU-affiliated BSW & MSW degree programs in Vadodara. Admissions open via GCAS portal with 500+ hrs fieldwork and civil service training.",
      keywords: [
        "VJKM Self Finance College",
        "BSW college Vadodara",
        "MSW college Vadodara",
        "Social Work college Gujarat",
        "SGGU affiliated colleges",
        "GCAS admission 2026",
        "Vadodara Jilla Kelavani Mandal",
        "Bachelor of Social Work Gujarat",
        "Master of Social Work Dabhoi",
      ],
    },
    gu: {
      title: "વી.જે.કે.એમ. સેલ્ફ ફાઇનાન્સ કોલેજ | BSW અને MSW સોશિયલ વર્ક કોલેજ વડોદરા (SGGU)",
      description:
        "વી.જે.કે.એમ. સેલ્ફ ફાઇનાન્સ કોલેજ, ડભોઇ (વડોદરા) ખાતે SGGU સંલગ્ન BSW અને MSW પ્રવેશ ૨૦૨૬ શરૂ. GCAS પોર્ટલ દ્વારા નોંધણી, ૧૦૦% ફિલ્ડવર્ક તાલીમ અને ઉત્કૃષ્ટ શિક્ષણ.",
      keywords: [
        "વીજેકેએમ કોલેજ",
        "BSW એડમિશન વડોદરા",
        "MSW કોલેજ ગુજરાત",
        "SGGU સોશિયલ વર્ક કોલેજ",
        "GCAS પ્રવેશ ૨૦૨૬",
        "વડોદરા જિલ્લા કેળવણી મંડળ",
        "સોશિયલ વર્ક ડિગ્રી ડભોઇ",
      ],
    },
  },
  aboutUs: {
    en: {
      title: "About VJKM College & Trust | 6 Decades of Educational Excellence | SGGU",
      description:
        "Learn about Vadodara Jilla Kelavani Mandal (VJKM) Trust established in 1957. Discover our mission, governing board of trustees, and SGGU academic affiliation.",
      keywords: [
        "About VJKM Trust",
        "Vadodara Jilla Kelavani Mandal history",
        "Board of Trustees VJKM",
        "SGGU affiliation Vadodara",
        "Educational Trust Dabhoi",
        "Social work college leadership",
      ],
    },
    gu: {
      title: "VJKM કોલેજ અને ટ્રસ્ટ પરિચય | છ દાયકાની શૈક્ષણિક સેવાનો ઇતિહાસ | SGGU",
      description:
        "૧૯૫૭ થી કાર્યરત વડોદરા જિલ્લા કેળવણી મંડળ (VJKM) ટ્રસ્ટ અને સેલ્ફ ફાઇનાન્સ કોલેજનો પરિચય. સંચાલક ટ્રસ્ટી મંડળ, સંસ્થાકીય વિઝન અને SGGU સંલગ્નતા.",
      keywords: [
        "વડોદરા જિલ્લા કેળવણી મંડળ",
        "VJKM ટ્રસ્ટ પરિચય",
        "ટ્રસ્ટી મંડળ ડભોઇ",
        "શ્રી ગોવિંદ ગુરુ યુનિવર્સિટી સંલગ્નતા",
        "શૈક્ષણિક ઇતિહાસ વડોદરા",
      ],
    },
  },
  courses: {
    en: {
      title: "BSW & MSW Degree Programs | Social Work Curriculum & Intake | VJKM College",
      description:
        "Explore professional Social Work degrees at VJKM College: 3-Year BSW (70 Seats) and 2-Year MSW (200 Seats) affiliated with Shri Govind Guru University (SGGU).",
      keywords: [
        "BSW course details",
        "MSW specializations Gujarat",
        "Social Work degree curriculum",
        "BSW MSW eligibility SGGU",
        "HR and IR MSW course",
        "Medical Psychiatric Social Work",
      ],
    },
    gu: {
      title: "BSW અને MSW ડિગ્રી અભ્યાસક્રમો | સોશિયલ વર્ક શિક્ષણ અને બેઠકો | VJKM કોલેજ",
      description:
        "VJKM કોલેજ ખાતે SGGU સંલગ્ન સોશિયલ વર્ક અભ્યાસક્રમો: ૩ વર્ષીય BSW (૭૦ બેઠકો) અને ૨ વર્ષીય MSW (૨૦૦ બેઠકો). કારકિર્દી વિકલ્પો અને પ્રેક્ટિકલ તાલીમ.",
      keywords: [
        "BSW અભ્યાસક્રમ ગુજરાત",
        "MSW સ્પેશિયલાઇઝેશન",
        "સોશિયલ વર્ક કોર્સ વિગતો",
        "SGGU ડિગ્રી પ્રોગ્રામ",
        "MSW HR IR વિષયો",
      ],
    },
  },
  bsw: {
    en: {
      title: "Bachelor of Social Work (BSW) | Eligibility, Fees & Fieldwork | VJKM College",
      description:
        "Enroll in 3-Year BSW Degree after 12th at VJKM College. SGGU syllabus, 500+ hours mandatory NGO fieldwork practicum, 7-Day rural camp, and civil service prep.",
      keywords: [
        "Bachelor of Social Work BSW",
        "BSW admission after 12th",
        "BSW fees and eligibility Gujarat",
        "BSW fieldwork practicum",
        "SGGU BSW syllabus",
        "BSW college Dabhoi Vadodara",
      ],
    },
    gu: {
      title: "બેચલર ઓફ સોશિયલ વર્ક (BSW) | લાયકાત, ફી અને ફિલ્ડવર્ક | VJKM કોલેજ",
      description:
        "ધોરણ ૧૨ પછી ૩ વર્ષીય BSW ડિગ્રી અભ્યાસક્રમ. SGGU માન્ય સિલેબસ, ૫૦૦+ કલાક ફરજિયાત એનજીઓ ફિલ્ડવર્ક તાલીમ, ૭-દિવસીય ગ્રામ્ય કેમ્પ અને સરકારી ભરતી માર્ગદર્શન.",
      keywords: [
        "બેચલર ઓફ સોશિયલ વર્ક",
        "ધોરણ ૧૨ પછી BSW પ્રવેશ",
        "BSW કોર્સ ફી અને લાયકાત",
        "BSW ફિલ્ડવર્ક ગ્રામ્ય કેમ્પ",
        "SGGU BSW એડમિશન",
      ],
    },
  },
  msw: {
    en: {
      title: "Master of Social Work (MSW) | HR/IR & Medical Social Work | VJKM College",
      description:
        "2-Year Master of Social Work (MSW) with 200 intake seats. Specializations in Human Resource / Industrial Relations, Medical Social Work, and NGO management.",
      keywords: [
        "Master of Social Work MSW",
        "MSW admission Gujarat 2026",
        "MSW HR IR specialization",
        "Medical Psychiatric Social Work MSW",
        "MSW college in Vadodara",
        "SGGU MSW seat allotment",
      ],
    },
    gu: {
      title: "માસ્ટર ઓફ સોશિયલ વર્ક (MSW) | HR/IR અને મેડિકલ સ્પેશિયલાઇઝેશન | VJKM કોલેજ",
      description:
        "કોઈપણ શાખાના સ્નાતક પછી ૨ વર્ષીય MSW ડિગ્રી (૨૦૦ બેઠકો). હ્યુમન રિસોર્સ (HR/IR), મેડિકલ સોશિયલ વર્ક અને NGO મેનેજમેન્ટમાં વિશેષજ્ઞતા અને કેમ્પસ પ્લેસમેન્ટ.",
      keywords: [
        "માસ્ટર ઓફ સોશિયલ વર્ક",
        "ગ્રેજ્યુએશન પછી MSW પ્રવેશ",
        "MSW HR IR કોર્સ",
        "મેડિકલ સોશિયલ વર્ક સ્પેશિયલાઇઝેશન",
        "MSW કોલેજ વડોદરા",
      ],
    },
  },
  admission: {
    en: {
      title: "Admissions 2026-27 | GCAS Student Portal & Direct Merit Desk | VJKM College",
      description:
        "Apply for BSW & MSW admissions 2026-27 at VJKM College. Complete step-by-step guidance for GCAS Gujarat portal registration, document verification, and merit lists.",
      keywords: [
        "VJKM college admission 2026",
        "GCAS Gujarat registration portal",
        "gcasstudent.gujgov.edu.in admission",
        "BSW merit admission Vadodara",
        "MSW application form 2026",
        "Direct admission desk Dabhoi",
      ],
    },
    gu: {
      title: "પ્રવેશ પ્રક્રિયા ૨૦૨૬-૨૭ | GCAS પોર્ટલ અને ડાયરેક્ટ હેલ્પડેસ્ક | VJKM કોલેજ",
      description:
        "VJKM કોલેજ BSW અને MSW પ્રવેશ ૨૦૨૬-૨૭ ની સંપૂર્ણ માહિતી. GCAS પોર્ટલ રજીસ્ટ્રેશન, જરૂરી ડોક્યુમેન્ટ્સ યાદી અને કેમ્પસ એડમિશન હેલ્પડેસ્ક માર્ગદર્શન.",
      keywords: [
        "VJKM કોલેજ પ્રવેશ ૨૦૨૬",
        "GCAS પોર્ટલ રજીસ્ટ્રેશન પ્રક્રિયા",
        "BSW MSW ફોર્મ ભરવાની તારીખ",
        "એડમિશન હેલ્પડેસ્ક વડોદરા",
        "મેરિટ પ્રવેશ ૨૦૨૬",
      ],
    },
  },
  facilities: {
    en: {
      title: "Campus Facilities & Infrastructure | Auditorium, Sports Grounds & Gym | VJKM College",
      description:
        "Explore VJKM College infrastructure: Modern assembly auditorium, NCC cadet cell, turf cricket ground, football arena, fitness gym, and holistic yoga center.",
      keywords: [
        "VJKM campus facilities",
        "College auditorium Vadodara",
        "Cricket ground Dabhoi campus",
        "Campus fitness gym",
        "NCC unit VJKM college",
        "Yoga and wellness center",
      ],
    },
    gu: {
      title: "કેમ્પસ સુવિધાઓ અને ઇન્ફ્રાસ્ટ્રક્ચર | ઓડિટોરિયમ, સ્પોર્ટ્સ ગ્રાઉન્ડ અને જીમ | VJKM કોલેજ",
      description:
        "VJKM કોલેજની અદ્યતન સુવિધાઓ: વિશાળ એર-કન્ડિશન્ડ ઓડિટોરિયમ, NCC કેડેટ સેલ, ક્રિકેટ-ફૂટબોલ સ્પોર્ટ્સ ગ્રાઉન્ડ્સ, ફિટનેસ જીમ અને દૈનિક યોગ કેન્દ્ર.",
      keywords: [
        "VJKM કેમ્પસ સુવિધાઓ",
        "કોલેજ ઓડિટોરિયમ ડભોઇ",
        "સ્પોર્ટ્સ ગ્રાઉન્ડ સુવિધાઓ",
        "NCC કેડેટ તાલીમ કેન્દ્ર",
        "કેમ્પસ જીમ અને યોગ સેન્ટર",
      ],
    },
  },
  fieldwork: {
    en: {
      title: "Fieldwork Practicum & Rural Camps | Practical Social Work Training | VJKM College",
      description:
        "Fieldwork is the core of social work education at VJKM. Learn about concurrent agency placements, 7-day rural study camps, NGO partnerships, and CSR internships.",
      keywords: [
        "Social work fieldwork practicum",
        "BSW rural camp Gujarat",
        "MSW agency placement",
        "NGO internship social work",
        "Community development camp",
        "CSR field training Vadodara",
      ],
    },
    gu: {
      title: "ક્ષેત્રકાર્ય (ફિલ્ડવર્ક) અને ગ્રામ્ય શિબિરો | સોશિયલ વર્ક પ્રાયોગિક તાલીમ | VJKM કોલેજ",
      description:
        "VJKM કોલેજમાં સોશિયલ વર્કનું વ્યવહારુ શિક્ષણ: અઠવાડિયામાં ૨ દિવસ એનજીઓ અને સરકારી સંસ્થાઓમાં તાલીમ, ૭-દિવસીય ગ્રામ્ય અધ્યયન શિબિર અને CSR ઇન્ટર્નશિપ.",
      keywords: [
        "સોશિયલ વર્ક ફિલ્ડવર્ક",
        "૭-દિવસીય ગ્રામ્ય શિબિર",
        "એનજીઓ પ્લેસમેન્ટ વડોદરા",
        "MSW પ્રાયોગિક તાલીમ",
        "સમાજ કાર્ય ફિલ્ડવર્ક રિપોર્ટ",
      ],
    },
  },
  gallery: {
    en: {
      title: "Campus Photo Gallery | Events, Rural Camps & Convocation | VJKM College",
      description:
        "Browse photo highlights from VJKM College: Annual Day celebrations, 7-day rural camps, street plays, sports tournaments, and student life in Vadodara.",
      keywords: [
        "VJKM photo gallery",
        "College event pictures",
        "Rural camp photos social work",
        "Annual day celebration VJKM",
        "Campus life images Dabhoi",
      ],
    },
    gu: {
      title: "કેમ્પસ ફોટો ગેલેરી | કાર્યક્રમો, ગ્રામ્ય શિબિર અને ઇવેન્ટ્સ | VJKM કોલેજ",
      description:
        "VJKM કોલેજના ઉત્સવો અને પ્રવૃત્તિઓની ફોટો ગેલેરી: વાર્ષિક મહોત્સવ, ગ્રામ્ય કેમ્પ, શેરી નાટક, રમતગમત સ્પર્ધાઓ અને કેમ્પસ યાદો.",
      keywords: [
        "VJKM ફોટો ગેલેરી",
        "કેમ્પસ ઇવેન્ટ ફોટા",
        "ગ્રામ્ય કેમ્પ ફોટોગ્રાફ્સ",
        "વાર્ષિક દિન ઉજવણી",
        "કોલેજ પ્રવૃત્તિઓ",
      ],
    },
  },
  contactUs: {
    en: {
      title: "Contact VJKM College | Campus Address, Phone & Helpline | Dabhoi Vadodara",
      description:
        "Get in touch with VJKM Self Finance College, Dabhoi, Vadodara. Admission inquiry helpline, principal desk contacts, email, and Google Maps campus directions.",
      keywords: [
        "Contact VJKM college",
        "VJKM college phone number",
        "College address Dabhoi Vadodara",
        "Admission inquiry helpline BSW MSW",
        "VJKM email and map location",
      ],
    },
    gu: {
      title: "સંપર્ક કરો | VJKM કોલેજ કેમ્પસ સરનામું, ફોન નંબર અને હેલ્પડેસ્ક | ડભોઇ વડોદરા",
      description:
        "વી.જે.કે.એમ. સેલ્ફ ફાઇનાન્સ કોલેજ, ડભોઇ (જિ. વડોદરા) નો સંપર્ક કરો. પ્રવેશ હેલ્પલાઈન નંબર્સ, આચાર્યશ્રીનો સંપર્ક, ઇમેઇલ અને કેમ્પસ નકશો.",
      keywords: [
        "VJKM કોલેજ સંપર્ક",
        "કોલેજ ફોન નંબર વડોદરા",
        "ડભોઇ કોલેજ સરનામું",
        "પ્રવેશ પૂછપરછ હેલ્પડેસ્ક",
        "ઇમેઇલ અને લોકેશન મેપ",
      ],
    },
  },
  newsAndUpdates: {
    en: {
      title: "Notice Board & Announcements | Circulars & Examination Timetables | VJKM College",
      description:
        "Stay informed with official circulars from Shri Govind Guru University (SGGU) and VJKM College: Examination schedules, admission cutoff dates, and holiday notices.",
      keywords: [
        "VJKM notice board",
        "SGGU examination timetable",
        "College circulars Vadodara",
        "BSW MSW exam datesheet",
        "Admission announcements SGGU",
      ],
    },
    gu: {
      title: "સૂચના બોર્ડ અને પરિપત્રો | પરીક્ષા કાર્યક્રમ અને યુનિવર્સિટી પરિપત્રો | VJKM કોલેજ",
      description:
        "શ્રી ગોવિંદ ગુરુ યુનિવર્સિટી (SGGU) અને VJKM કોલેજના સત્તાવાર પરિપત્રો, સેમેસ્ટર પરીક્ષા કાર્યક્રમ, પ્રવેશ તારીખો અને અગત્યની જાહેરાતો.",
      keywords: [
        "VJKM સૂચના બોર્ડ",
        "SGGU પરીક્ષા કાર્યક્રમ",
        "કોલેજ પરિપત્રો ડભોઇ",
        "BSW MSW પરીક્ષા તારીખ",
        "યુનિવર્સિટી નોટિસ",
      ],
    },
  },
} as const satisfies Record<
  string,
  Record<
    Locale,
    {
      title: string;
      description: string;
      keywords: readonly string[];
    }
  >
>;

export type SeoPage = keyof typeof staticMetadataRegistry;

interface SeoOptions {
  locale: Locale;
  page?: SeoPage;
  path: string;
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

export function getSeoMetadata({
  page,
  locale,
  path,
  title,
  description,
  keywords,
  image,
}: SeoOptions): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  const defaults = page ? staticMetadataRegistry[page][locale] : staticMetadataRegistry.home[locale];

  const finalTitle = title || defaults.title;
  const finalDescription = description ?? defaults.description;
  const finalKeywords = keywords || Array.from(defaults.keywords);

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: `${siteConfig.baseUrl}/${locale}${cleanPath === "/" ? "" : cleanPath}`,
      languages: {
        en: `${siteConfig.baseUrl}/en${cleanPath === "/" ? "" : cleanPath}`,
        gu: `${siteConfig.baseUrl}/gu${cleanPath === "/" ? "" : cleanPath}`,
      },
    },
    authors: [{ name: siteConfig.trustName[locale], url: siteConfig.trustUrl }],
    creator: siteConfig.name[locale],
    publisher: siteConfig.trustName[locale],
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `${siteConfig.baseUrl}/${locale}${cleanPath}`,
      siteName: siteConfig.name[locale],
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: locale === "gu" ? "gu_IN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [image || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Schema.org Structured Data Generators
export function getEducationalOrgJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: siteConfig.name[locale],
    alternateName: siteConfig.name[locale === "en" ? "gu" : "en"],
    url: `${siteConfig.baseUrl}/${locale}`,
    logo: `${siteConfig.baseUrl}/images/brand/logo.png`,
    image: siteConfig.ogImage,
    description: staticMetadataRegistry.home[locale].description,
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: siteConfig.trustName[locale],
      url: siteConfig.trustUrl,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    telephone: siteConfig.links.phone.replace("tel:", ""),
    email: siteConfig.links.email.replace("mailto:", ""),
    sameAs: [
      siteConfig.trustUrl,
      "https://gcasstudent.gujgov.edu.in",
    ],
  };
}

export function getCourseJsonLd(course: "bsw" | "msw", locale: Locale) {
  const isBsw = course === "bsw";
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: isBsw
      ? (locale === "gu" ? "બેચલર ઓફ સોશિયલ વર્ક (BSW)" : "Bachelor of Social Work (BSW)")
      : (locale === "gu" ? "માસ્ટર ઓફ સોશિયલ વર્ક (MSW)" : "Master of Social Work (MSW)"),
    description: isBsw
      ? staticMetadataRegistry.bsw[locale].description
      : staticMetadataRegistry.msw[locale].description,
    provider: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.name[locale],
      url: `${siteConfig.baseUrl}/${locale}`,
    },
    educationalCredentialAwarded: isBsw ? "Bachelor of Social Work Degree" : "Master of Social Work Degree",
    timeRequired: isBsw ? "P3Y" : "P2Y",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Full-Time, On-Campus",
      location: `${siteConfig.address.city}, ${siteConfig.address.state}`,
    },
  };
}