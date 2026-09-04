import { BreadcrumbNavigation } from "@/components/other/breadcrumb-navigation";
import { routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
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
    <>
      <BreadcrumbNavigation
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <section className="relative bg-secondary/30">
        <div className="relative mx-auto container px-6 py-12 md:px-16 prose lg:prose-xl dark:prose-invert max-w-5xl">
          <PrivacyText />
        </div>
      </section>
    </>
  );
}

function PrivacyText() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> July 2026<br />
        <strong>Last Updated:</strong> July 2026
      </p>

      <hr />

      <p>
        Vadodara Jilla Kelavani Mandal (VJKM) (&quot;we,&quot; &quot;our,&quot; or &quot;the Institution&quot;) operates the official website
        <strong> https://vadodarajillakelavanimandal.com </strong> and affiliated college portal (the &quot;Site&quot;). We are committed to protecting the
        privacy of our students, applicants, and site visitors. This Privacy Policy outlines how we collect,
        process, use, and safeguard personal data in compliance with the
        <strong> Digital Personal Data Protection (DPDP) Act </strong> of India.
      </p>

      <hr />

      <h2>1. Data We Collect and Process</h2>
      <p>
        We limit the collection of personal data to what is strictly necessary for fulfilling your requests
        and maintaining academic administration.
      </p>
      <ul>
        <li>
          <strong>Information You Voluntarily Submit:</strong> When you use our inquiry or contact forms
          (processed via Google Forms), we collect the personal data you explicitly provide. This includes:
          <ul>
            <li>Full Name</li>
            <li>Contact Number / WhatsApp Number</li>
            <li>Email Address</li>
            <li>Academic interests or specific queries submitted by you.</li>
          </ul>
        </li>
        <li>
          <strong>Automated Performance Tracking:</strong> We utilize web analytics tools including
          <strong> Google Analytics </strong>, <strong> Google Search Console </strong>, and Vercel native analytics
          to collect non-personally identifiable information. This includes your IP address, browser type,
          device details, and site navigation patterns to optimize performance and user experience.
        </li>
        <li>
          <strong>Institutional Data Pipelines:</strong> For registered students, the institution processes
          academic record data (such as names, roll numbers, and enrollment details) strictly for internal
          administrative purposes, including automated student certificate generation and educational verification.
        </li>
      </ul>

      <h2>2. Legal Basis and Purpose of Processing</h2>
      <p>We process your personal data under the following lawful grounds:</p>
      <ul>
        <li><strong>Consent:</strong> Your explicit consent provided at the time of submitting an inquiry form.</li>
        <li><strong>Legitimate Performance:</strong> For the execution of academic and institutional functions directly related to your enrollment or admission query.</li>
      </ul>
      <p>
        Your data is used solely to respond to your academic inquiries, improve website architecture, and
        manage institutional records. We do not sell, rent, or trade your data to third-party marketing agencies.
      </p>

      <h2>3. Data Storage, Infrastructure, and Security</h2>
      <ul>
        <li>
          <strong>Hosting & Domain:</strong> Our platform’s domain is registered through
          <strong> Hostinger </strong> and hosted via <strong> Vercel </strong>. Automated performance metrics
          are subject to their respective cloud infrastructure privacy standards.
        </li>
        <li>
          <strong>Internal Storage:</strong> Any data collected via forms or internal pipelines is securely
          moved and managed <strong>internally by the university authority</strong>. Access is strictly
          restricted to authorized administrative personnel.
        </li>
        <li>
          <strong>Data Retention:</strong> Personal data and inquiry details are retained only as long as
          necessary to fulfill the operational and statutory requirements of the institution, after which
          they are securely deleted or anonymized.
        </li>
      </ul>

      <h2>4. Data Principal Rights (Your Rights)</h2>
      <p>Under Indian data protection laws, visitors and students (Data Principals) hold the following rights:</p>
      <ul>
        <li><strong>Right to Access and Correction:</strong> You may request a summary of your personal data being processed or ask to correct inaccuracies.</li>
        <li><strong>Right to Erasure:</strong> You can request the deletion of your inquiry data when it is no longer required for its initial collection purpose.</li>
        <li><strong>Right to Withdraw Consent:</strong> You may withdraw your consent for data processing at any time by contacting our administrative desk.</li>
      </ul>

      <h2>5. Third-Party Links and Tools</h2>
      <p>
        Our Site may contain links to external web assets or embed external tools (e.g., Google Forms for
        query collection). We do not control the privacy protocols of these third-party services. We
        encourage you to review Google’s Privacy Policy when interacting with embedded forms.
      </p>

      <h2>6. Grievance Redressal Officer</h2>
      <p>
        In accordance with the provisions of the Digital Personal Data Protection Act, any discrepancies,
        complaints, or inquiries regarding the processing or safety of your personal data should be
        directed to our designated Grievance Officer:
      </p>
      <blockquote>
        <strong>Grievance Officer:</strong> Shri Thakorbhai K. Patel<br />
        <strong>Institution:</strong> Vadodara Jilla Kelavani Mandal (VJKM)<br />
        <strong>Postal Address:</strong> College Campus, Ta. Dabhoi, Dist. Vadodara, Gujarat, 391110<br />
        <strong>Email Address:</strong> <a href="mailto:vjkmd1957@gmail.com">vjkmd1957@gmail.com</a>
      </blockquote>

      <h2>7. Updates to This Policy</h2>
      <p>
        We reserve the right to update this Privacy Policy to reflect changing legal, technical, or
        administrative requirements. Any updates will be pushed directly to this page with an adjusted
        &quot;July 2026&quot; timestamp.
      </p>
    </>
  );
}
