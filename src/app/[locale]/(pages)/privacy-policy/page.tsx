import { routing } from "@/i18n/routing";
import { getSeoMetadata, siteConfig } from "@/lib/metadata";
import { LocalePageProps } from "@/types";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return getSeoMetadata({
    locale,
    page: "privacy",
    path: "/privacy-policy",
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function Page() {
  return (
    <section className="relative bg-secondary/30 min-h-screen">
      <div className="relative mx-auto container px-6 py-12 md:py-16 md:px-16 prose lg:prose-xl dark:prose-invert max-w-5xl">
        <PrivacyText />
      </div>
    </section>
  );
}

function PrivacyText() {
  return (
    <>
      <h1 className="font-serif tracking-tight text-foreground">Privacy Policy</h1>
      <p className="text-muted-foreground text-sm">
        <strong>Effective Date:</strong> July 2026<br />
        <strong>Last Updated:</strong> July 2026
      </p>

      <hr className="my-6 border-border" />

      <p>
        <strong>VJKM Self Finance College</strong> (offering Bachelor of Social Work - BSW and Master of Social Work - MSW degrees), operated and governed by <strong>Vadodara Jilla Kelavani Mandal (VJKM)</strong> (&quot;the College,&quot; &quot;the Institution,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operates the official institutional web portal{" "}
        <a href={siteConfig.baseUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary">
          {siteConfig.baseUrl}
        </a>{" "}
        (the &quot;Site&quot;).
      </p>
      <p>
        We are deeply committed to protecting the privacy, confidentiality, and digital security of our students, prospective applicants, alumni, and campus visitors. This Privacy Policy details the standards and procedures we follow to collect, store, process, and safeguard personal data in strict accordance with the <strong>Digital Personal Data Protection (DPDP) Act</strong> of India, University Grants Commission (UGC) guidelines, and regulations set by our affiliating university, <strong>Shri Govind Guru University (SGGU), Godhra</strong>.
      </p>

      <hr className="my-6 border-border" />

      <h2>1. Data We Collect and Process</h2>
      <p>
        We restrict personal data collection strictly to what is necessary for fulfilling admission guidance, academic administration, fieldwork coordination, and responding to inquiries.
      </p>
      <ul>
        <li>
          <strong>Information You Voluntarily Submit:</strong> When utilizing our admission inquiry desk, contact forms, or WhatsApp helplines, you explicitly provide personal information, which may include:
          <ul>
            <li>Full Name and Guardian / Parent Name</li>
            <li>Contact Number, WhatsApp Mobile Number, and Email Address</li>
            <li>Academic qualification details (HSC / 10+2 stream, Graduation marks, Passing year)</li>
            <li>Course of interest (BSW or MSW) and Gujarat Common Admission Services (GCAS) application query details</li>
            <li>Specific academic, scholarship (MYSY/Digital Gujarat), or hostel queries submitted by you</li>
          </ul>
        </li>
        <li>
          <strong>Fieldwork Practicum & Institutional Data:</strong> For enrolled BSW and MSW students, the college processes academic records, attendance logs, concurrent fieldwork agency placements, and rural camp participation strictly for internal curricular evaluation and university examination eligibility.
        </li>
        <li>
          <strong>Automated Digital Analytics:</strong> We employ privacy-focused analytics tools (including Google Analytics, Google Search Console, and native cloud performance metrics) to collect anonymized technical telemetry such as IP address, browser type, device operating system, referring URLs, and page navigation frequency to enhance portal speed and user experience.
        </li>
      </ul>

      <h2>2. Lawful Grounds and Purpose of Data Processing</h2>
      <p>The College processes personal information under lawful, transparent grounds:</p>
      <ul>
        <li><strong>Consent:</strong> Explicit consent provided by prospective students and parents upon submitting an inquiry form, counseling request, or contacting our admission cell.</li>
        <li><strong>Legitimate Educational Functions:</strong> Necessary execution of academic mandates, including GCAS admission counseling, SGGU enrollment compliance, fieldwork agency coordination, examination hall ticket distribution, and government scholarship facilitation.</li>
      </ul>
      <p>
        Your data is used solely for educational and institutional purposes. <strong>We do not sell, trade, rent, or lease personal information to any commercial third-party marketing entities.</strong>
      </p>

      <h2>3. Data Storage, Hosting, and Digital Infrastructure</h2>
      <ul>
        <li>
          <strong>Hosting Architecture:</strong> Our web portal domain is registered through <strong>Hostinger</strong> and hosted on enterprise-grade cloud infrastructure via <strong>Vercel</strong>, benefiting from automated SSL/TLS encryption, DDoS shielding, and global CDN delivery.
        </li>
        <li>
          <strong>Internal Administrative Access:</strong> All student records, inquiry forms, and official data pipelines are managed internally under the supervision of the college administrative office and trust management. Access is strictly role-based and restricted to authorized faculty and staff.
        </li>
        <li>
          <strong>Data Retention:</strong> Admission inquiry records are retained only for the duration of the current academic admission cycle. Enrolled student academic records are maintained in compliance with university statutory retention schedules.
        </li>
      </ul>

      <h2>4. Data Principal Rights (Your Rights Under DPDP Act)</h2>
      <p>Under Indian data protection laws, students, applicants, and visitors hold the following rights:</p>
      <ul>
        <li><strong>Right to Access & Review:</strong> You may request confirmation of whether your personal data is being processed, along with a summary of recorded details.</li>
        <li><strong>Right to Correction & Updating:</strong> You may request correction of any inaccurate, outdated, or incomplete personal data held in our admission desk records.</li>
        <li><strong>Right to Erasure:</strong> You can request the removal of non-statutory inquiry details once the admission counseling purpose has concluded.</li>
        <li><strong>Right to Withdraw Consent:</strong> You may withdraw your consent for informational notifications at any time by notifying our college office in writing.</li>
      </ul>

      <h2>5. External Services and Third-Party Links</h2>
      <p>
        Our portal may provide direct hyperlinks to authoritative government and educational portals, including the <strong>Gujarat Common Admission Services (GCAS)</strong> portal (<code>gcas.gujgov.edu.in</code>), <strong>Shri Govind Guru University (SGGU)</strong>, and <strong>Digital Gujarat Scholarships</strong>. The College is not responsible for the privacy policies, terms, or data processing practices of external government portals.
      </p>

      <h2>6. Grievance Redressal and Data Officer</h2>
      <p>
        In accordance with the DPDP Act and university administrative standards, any concerns, complaints, or inquiries regarding personal data handling should be addressed to our designated Grievance Desk:
      </p>
      <blockquote className="border-l-4 border-primary pl-4 my-4 not-italic">
        <strong>Designated Officer:</strong> Shri Thakorbhai K. Patel / Campus Administrative Dean<br />
        <strong>Institution:</strong> VJKM Self Finance College &amp; Vadodara Jilla Kelavani Mandal<br />
        <strong>Campus Address:</strong> Station Road, Near VJKM Trust Campus, Ta. Dabhoi, Dist. Vadodara, Gujarat - 391110<br />
        <strong>Telephone Helplines:</strong> +91 94095 80986 / +91 82381 34737<br />
        <strong>College Email:</strong> <a href="mailto:maulikpatel9028@gmail.com" className="text-primary hover:underline">maulikpatel9028@gmail.com</a><br />
        <strong>Trust Email:</strong> <a href="mailto:vjkmd1957@gmail.com" className="text-primary hover:underline">vjkmd1957@gmail.com</a>
      </blockquote>

      <h2>7. Policy Revisions</h2>
      <p>
        The College and managing trust reserve the right to modify or amend this Privacy Policy to align with statutory amendments in data protection laws or university regulatory guidelines. Revised versions will be published directly on this URL with an updated effective timestamp.
      </p>
    </>
  );
}
