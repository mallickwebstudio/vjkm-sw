import { BreadcrumbNavigation } from "@/components/other/breadcrumb-navigation";
import { routing } from "@/i18n/routing";
import { getSeoMetadata } from "@/lib/metadata";
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
    <>
      <BreadcrumbNavigation
        items={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
      />
      <section className="relative bg-secondary/30">
        <div className="relative mx-auto container px-6 py-12 md:px-16 prose lg:prose-xl dark:prose-invert max-w-5xl">
          <TermsText />
        </div>
      </section>
    </>
  );
}

function TermsText() {
  return (
    <>
      <h1>Terms and Conditions</h1>
      <p>
        <strong>Effective Date:</strong> July 2026<br />
        <strong>Last Updated:</strong> July 2026
      </p>

      <hr />

      <p>
        Welcome to the official website of Vadodara Jilla Kelavani Mandal (VJKM) and VJKM Self Finance College, accessible via
        <strong> https://vadodarajillakelavanimandal.com </strong> and affiliated domains (the &quot;Site&quot;). These Terms and Conditions
        (&quot;Terms&quot;) govern your access to and use of this Site. By accessing, browsing, or using this Site,
        you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do
        not agree, please discontinue use of this Site immediately.
      </p>

      <hr />

      <h2>1. Informational Purpose and Accuracy of Content</h2>
      <p>
        This Site is maintained strictly as an informational platform to showcase our affiliated colleges,
        courses, campus infrastructure, and placement opportunities.
      </p>
      <ul>
        <li>
          <strong>Best of Knowledge:</strong> All academic configurations, fee structures, seat capacities,
          eligibility criteria, and admission deadlines listed on this Site are accurate to the best of our
          knowledge at the time of publishing.
        </li>
        <li>
          <strong>Changes Without Prior Notice:</strong> Academic specifications, schedules, and fee models
          are dynamically governed by university regulations and government norms. The Institution reserves the
          absolute right to modify, alter, or update any content on this Site at any time without prior notice.
        </li>
        <li>
          <strong>Verification Directive:</strong> Content on this website should not be construed as an
          irrevocable institutional contract. Students and applicants are strictly advised to cross-verify crucial
          information (such as exam deadlines and final fees) directly with the physical college administrative office.
        </li>
      </ul>

      <h2>2. Acceptable Use and Anti-Scraping Policy</h2>
      <p>
        You agree to use this Site purely for lawful, educational, and informational purposes.
      </p>
      <blockquote>
        <strong>Strict Prohibition on Data Scraping:</strong> Automated data extraction, data harvesting, web
        scraping, or utilizing bots, crawlers, or spiders to clone, download, or index data from this Site—including
        our underlying data modules, assets, student records, or certificate generation pipelines—is strictly prohibited.
      </blockquote>
      <p>You further agree not to:</p>
      <ul>
        <li>Submit fraudulent or malicious queries via our embedded inquiry channels or forms.</li>
        <li>Engage in any activity that stress-tests, disrupts, or compromises the security of our infrastructure hosted via Vercel.</li>
        <li>Attempt to bypass security features or reverse-engineer the Site&apos;s technical layout.</li>
      </ul>

      <h2>3. Financial Transactions and Donations</h2>
      <p>
        Currently, this Site does not facilitate standard academic fee collections, admission processing payments,
        or transactional tuition handling.
      </p>
      <ul>
        <li>
          <strong>Future Donations:</strong> The Institution may implement secure pathways to accept voluntary
          charitable contributions or institutional donations through this platform.
        </li>
        <li>
          <strong>Third-Party Compliance:</strong> Any future donations processed through this Site will be
          subject to the security provisions of our designated payment gateway partners. The Institution is
          not liable for errors or security failures originating within external banking or payment networks.
        </li>
      </ul>

      <h2>4. Intellectual Property Rights</h2>
      <p>
        All text, graphic layouts, dynamic component architectures, custom data objects, icons, logs, and overall
        source code on this platform are the property of Vadodara Jilla Kelavani Mandal or its technical developers.
        Unauthorized replication, commercial distribution, or modified reuse of any digital asset without explicit
        written consent from the institutional authority is legally actionable.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        Under no circumstances shall Vadodara Jilla Kelavani Mandal, its management, trustees, professors, or technical
        administrators be held liable for any direct, indirect, incidental, or consequential damages resulting from:
      </p>
      <ul>
        <li>Your reliance on any informational metric or typographical error present on this Site.</li>
        <li>Temporary technical blackouts, platform downtime, server drops, or hosting disruptions caused by cloud providers (Vercel/Hostinger).</li>
        <li>Data loss or transmission issues during the submission of external query forms.</li>
      </ul>

      <h2>6. Governing Law and Legal Jurisdiction</h2>
      <p>
        These Terms and Conditions shall be governed by, interpreted, and enforced in accordance with the laws of
        the Republic of India. Any legal disputes, claims, or actions arising from the operation or utilization of
        this digital asset shall fall under the exclusive legal jurisdiction of the competent courts located in
        <strong> Vadodara, Gujarat, India </strong>.
      </p>

      <h2>7. Revisions to the Terms</h2>
      <p>
        We reserve the right to amend these Terms at our discretion. Any modification updates will go into
        immediate effect as soon as they are deployed onto this page. Your continued use of the platform following
        an update indicates your binding acceptance of the revised terms.
      </p>
    </>
  );
}
