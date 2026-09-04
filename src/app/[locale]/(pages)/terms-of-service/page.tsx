import { routing } from "@/i18n/routing";
import { getSeoMetadata, siteConfig } from "@/lib/metadata";
import { LocalePageProps } from "@/types";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return getSeoMetadata({
    locale,
    page: "terms",
    path: "/terms-of-service",
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
        <TermsText />
      </div>
    </section>
  );
}

function TermsText() {
  return (
    <>
      <h1 className="font-serif tracking-tight text-foreground">Terms and Conditions</h1>
      <p className="text-muted-foreground text-sm">
        <strong>Effective Date:</strong> July 2026<br />
        <strong>Last Updated:</strong> July 2026
      </p>

      <hr className="my-6 border-border" />

      <p>
        Welcome to the official web portal of <strong>VJKM Self Finance College</strong> (BSW &amp; MSW Programs), managed by <strong>Vadodara Jilla Kelavani Mandal (VJKM)</strong>, accessible at{" "}
        <a href={siteConfig.baseUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary">
          {siteConfig.baseUrl}
        </a>{" "}
        (the &quot;Site&quot;).
      </p>
      <p>
        These Terms and Conditions (&quot;Terms&quot;) govern your access to, browsing of, and interaction with this Site. By visiting, browsing, or using any digital service on this Site, you acknowledge that you have read, understood, and irrevocably agree to be bound by these Terms and all applicable laws and regulations. If you do not accept these Terms, please discontinue use of this Site immediately.
      </p>

      <hr className="my-6 border-border" />

      <h2>1. Educational &amp; Informational Scope</h2>
      <p>
        This portal is operated as an official informational and academic communication resource for <strong>VJKM Self Finance College</strong>, offering Bachelor of Social Work (BSW) and Master of Social Work (MSW) degrees permanently affiliated with <strong>Shri Govind Guru University (SGGU), Godhra</strong>.
      </p>
      <ul>
        <li>
          <strong>Information Accuracy:</strong> Academic curriculum descriptions, faculty rosters, fieldwork practicum outlines, seat matrices, eligibility rules, and admission timelines are published in good faith and accurate to the best of our knowledge at the time of publication.
        </li>
        <li>
          <strong>Regulatory Supersession:</strong> Academic norms, admission procedures, examination rules, and fee structures are dynamically determined by the Education Department of Gujarat, <strong>Gujarat Common Admission Services (GCAS)</strong>, and <strong>Shri Govind Guru University (SGGU)</strong>. Official statutory circulars take precedence over web portal summaries.
        </li>
        <li>
          <strong>Verification Obligation:</strong> Content published on this Site does not constitute a legally binding contractual guarantee of admission. Prospective students and parents are strongly encouraged to cross-verify crucial admission cutoff marks, required documentation, and deadlines directly with the on-campus Admission Desk in Dabhoi.
        </li>
      </ul>

      <h2>2. Acceptable Use and Anti-Scraping Policy</h2>
      <p>
        Users agree to utilize this web portal exclusively for legitimate, lawful, educational, and informational purposes.
      </p>
      <blockquote className="border-l-4 border-primary pl-4 my-4 not-italic">
        <strong>Strict Anti-Scraping Directive:</strong> Automated data mining, bulk content scraping, data harvesting, or utilizing web robots, spiders, crawlers, or AI extraction scripts to systematically duplicate, mirror, or extract institutional content, notice feeds, student databases, or internal document pipelines from this Site without explicit written authorization is strictly prohibited.
      </blockquote>
      <p>You specifically agree not to:</p>
      <ul>
        <li>Submit false, fraudulent, spam, or malicious inquiries via our admission desks, contact forms, or communication channels.</li>
        <li>Conduct unauthorized security vulnerability assessments, load-stress tests, or denial-of-service attempts against our cloud infrastructure.</li>
        <li>Attempt unauthorized access to administrative backends, private endpoints (including <code>/invoice</code> or <code>/api</code>), or underlying server configuration files.</li>
      </ul>

      <h2>3. Academic Fees and Financial Transactions</h2>
      <p>
        This website serves as an informational portal. It does not directly solicit credit card transactions or online commercial payments:
      </p>
      <ul>
        <li>
          <strong>Admission Fee Payments:</strong> Official admission registration fees are processed strictly via the centralized Government of Gujarat GCAS Portal (<code>gcas.gujgov.edu.in</code>). Tuition fees for admitted students are payable directly at the designated college bank counter or physical campus accounts office against an authorized receipt.
        </li>
        <li>
          <strong>Voluntary Trust Donations:</strong> Any future digital contributions or charitable alumni donations toward trust educational initiatives through this portal will be handled via RBI-authorized, PCI-DSS compliant banking payment gateways.
        </li>
      </ul>

      <h2>4. Intellectual Property Rights</h2>
      <p>
        All digital assets—including text, institutional logos, photo galleries, graphic layouts, course structures, custom software components, and original source code—are the intellectual property of <strong>Vadodara Jilla Kelavani Mandal (VJKM)</strong> and its technical developers, protected under the Copyright Act of India.
      </p>
      <p>
        Unauthorized commercial replication, redistribution, or modification of any photographic or editorial content without explicit written consent from the Board of Trustees is strictly prohibited and subject to legal prosecution.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        Under no circumstances shall <strong>VJKM Self Finance College</strong>, Vadodara Jilla Kelavani Mandal, its trustees, principal, faculty, or technical partners be held liable for any direct, indirect, incidental, or consequential damages resulting from:
      </p>
      <ul>
        <li>Any typographical errors, temporary discrepancies, or outdated circulars present on this Site.</li>
        <li>Temporary platform downtime, maintenance windows, or cloud infrastructure outages.</li>
        <li>Delays or failures in communication caused by external network disruptions or incorrect contact details provided by users.</li>
      </ul>

      <h2>6. Governing Law and Exclusive Legal Jurisdiction</h2>
      <p>
        These Terms and Conditions shall be governed by, interpreted, and enforced in full accordance with the substantive laws of the <strong>Republic of India</strong>. Any legal dispute, arbitration, claim, or proceeding arising from or relating to the utilization of this institutional web portal shall be subject to the exclusive jurisdiction of the competent courts in <strong>Vadodara, Gujarat, India</strong>.
      </p>

      <h2>7. Modifications to Terms</h2>
      <p>
        The Institution reserves the right to revise or amend these Terms and Conditions at any time to reflect changing institutional policies or regulatory mandates. Revisions become effective immediately upon being published on this page.
      </p>

      <h2>8. Contact &amp; Physical Campus</h2>
      <p>For questions or formal clarifications regarding these Terms:</p>
      <blockquote className="border-l-4 border-primary pl-4 my-4 not-italic">
        <strong>VJKM Self Finance College</strong><br />
        Managed by: Vadodara Jilla Kelavani Mandal (Est. 1959)<br />
        Campus Address: Station Road, Near VJKM Trust Campus, Ta. Dabhoi, Dist. Vadodara, Gujarat - 391110<br />
        Telephone Helplines: +91 94095 80986 / +91 82381 34737<br />
        Administrative Email: <a href="mailto:maulikpatel9028@gmail.com" className="text-primary hover:underline">maulikpatel9028@gmail.com</a>
      </blockquote>
    </>
  );
}
