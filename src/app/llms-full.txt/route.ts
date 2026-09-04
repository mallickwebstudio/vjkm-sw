import { siteConfig } from "@/lib/metadata";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export async function GET() {
  const content = `# VJKM Self Finance College - Comprehensive Institutional Profile (BSW & MSW)

## 1. Overview & Institutional Heritage
VJKM Self Finance College is an institution of higher education dedicated to professional social work training, situated in Dabhoi, District Vadodara, Gujarat.
The college is operated by Vadodara Jilla Kelavani Mandal (VJKM), an educational trust founded in 1959 with a distinguished history of more than 65 years serving educational advancement across rural and semi-urban Gujarat.
The institution is permanently affiliated with Shri Govind Guru University (SGGU), Godhra, and conducts its admissions strictly through the centralized Gujarat Common Admission Services (GCAS) portal governed by the Department of Education, Government of Gujarat.

## 2. Academic Degrees Offered

### A. Bachelor of Social Work (BSW)
- Level: Undergraduate Degree (UG)
- Duration: 3 Years (6 Semesters) / 4 Years (8 Semesters with Honours / Research under NEP)
- Affiliating Body: Shri Govind Guru University (SGGU), Godhra
- Eligibility: 10+2 (Higher Secondary Certificate Examination - HSC) from Gujarat Secondary and Higher Secondary Education Board (GSEB), CBSE, ICSE, or equivalent recognized state/national board in any stream (Arts, Commerce, or Science).
- Core Curriculum Topics:
  * Introduction to Social Work & History of Social Reform in India
  * Methods of Social Work: Social Case Work, Social Group Work, Community Organization
  * Human Growth and Development & Psychology for Social Workers
  * Indian Society, Social Problems, and Social Legislation
  * Social Work Research & Basic Statistics
  * NGO Governance, Project Proposal Formulation & CSR Management
  * Fieldwork Practicum (Concurrent Visits, Agency Placements, Rural Study Camp, Block Placement)
- Career Opportunities:
  * Social Welfare Officer, Child Development Project Officer (CDPO), Probation Officer
  * NGO Program Coordinators and Project Managers
  * Corporate Social Responsibility (CSR) Executives in Public/Private enterprises
  * Strong foundation for GPSC (Gujarat Public Service Commission) Class 1, 2, 3 and UPSC civil services
  * High-priority eligibility for Government Welfare & Rural Development programs

### B. Master of Social Work (MSW)
- Level: Postgraduate Professional Degree (PG)
- Duration: 2 Years (4 Semesters)
- Affiliating Body: Shri Govind Guru University (SGGU), Godhra
- Eligibility: Bachelor's degree (Graduation) in any discipline (BSW, BA, BCom, BSc, BBA, BCA, etc.) from any UGC-recognized university with minimum qualifying percentage according to GCAS/SGGU norms.
- Specializations & Key Focus Areas:
  * Human Resource Management (HRM) & Industrial Relations (Labor Welfare, Factories Act, Industrial Disputes, HR Policies)
  * Medical & Psychiatric Social Work (Hospital Settings, Mental Health, Counseling, Rehabilitation)
  * Urban, Rural & Tribal Community Development
  * Family, Youth and Child Welfare
  * Disaster Management and Environmental Action
- Field Practicum Components:
  * Concurrent Fieldwork (2 full days per week in assigned NGOs, hospitals, or industrial units)
  * Rural Winter Study Camp (Immersive rural living, Participatory Rural Appraisal - PRA, community needs assessment)
  * Block Placement Internship (Month-long intensive placement before graduation)
  * Master's Research Dissertation and Viva Voce
- Career Opportunities:
  * HR Executive / Labor Welfare Officer (satisfying statutory requirements under Indian Factories Act)
  * Medical Social Worker in government, trust, and multispecialty private hospitals
  * District Child Protection Officers, Women & Child Development program managers
  * Senior Leadership in International NGOs (UNICEF, WHO, Oxfam, CARE) and National Foundations

## 3. Admission Process via Gujarat Common Admission Services (GCAS)
All admissions to BSW and MSW programs are conducted online through the unified Government of Gujarat portal:
- Portal URL: https://gcas.gujgov.edu.in
- Step 1: Online Registration on GCAS using mobile number and email.
- Step 2: Fill Personal, Academic details and upload marksheet, category certificate (SC/ST/SEBC/EWS), and photo.
- Step 3: Select "Shri Govind Guru University (SGGU)" as the University, select Course ("BSW" or "MSW"), and prioritize "VJKM Self Finance College, Dabhoi" as the preferred college.
- Step 4: Pay online registration fee and verify application.
- Step 5: Upon merit list declaration and seat allotment, complete physical document verification at the college admission desk.
- Helplines for Free Admission Counseling:
  * BSW Inquiries: +91 94095 80986
  * MSW Inquiries: +91 82381 34737
  * Email Support: maulikpatel9028@gmail.com

## 4. Government Scholarships & Financial Support
Eligible students receive full guidance and assistance for claiming state and national financial aid:
- Mukhyamantri Yuva Swavalamban Yojana (MYSY) for economically deserving students.
- Digital Gujarat Portal Scholarships for SC, ST, SEBC (OBC), and NT/DNT students covering tuition fees and maintenance.
- Post-Matric Scholarship schemes for minority communities.
- Special fee-support and installment facilities facilitated by Vadodara Jilla Kelavani Mandal for needy students.

## 5. Campus Facilities & Infrastructure
- Academic Blocks: Spacious, naturally ventilated, technology-equipped lecture halls.
- Library & Resource Center: Rich collection of social work textbooks, reference encyclopedias, journals, periodicals, and quiet reading room.
- Computer Laboratory: High-speed broadband internet, digital database access, and computer literacy training.
- Seminar Hall & Auditorium: Dedicated venue for academic conferences, guest lectures by eminent social scientists, and cultural events.
- Student Amenities: Girls Common Room, RO purified drinking water, sanitized washrooms, and recreational sports grounds.
- Location Advantage: Located on Station Road in Dabhoi, Vadodara, offering immediate walking access to Dabhoi Railway Station and GSRTC Bus Depot.

## 6. Official Contact Details
- College Name: VJKM Self Finance College
- Managing Trust: Vadodara Jilla Kelavani Mandal (VJKM)
- Physical Address: Station Road, Near VJKM Trust Campus, Dabhoi, Vadodara District, Gujarat - 391110, India
- Website: ${siteConfig.baseUrl}
- Phone Numbers: +91 94095 80986 / +91 82381 34737
- Working Hours: Monday to Saturday, 08:30 AM to 04:30 PM IST
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
