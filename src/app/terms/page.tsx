import Link from "next/link";
import {
  FiAlertCircle,
  FiChevronRight,
  FiCreditCard,
  FiFileText,
  FiGlobe,
  FiLock,
  FiMail,
  FiRefreshCw,
  FiShield,
  FiUserCheck,
  FiXCircle,
} from "react-icons/fi";

export const metadata = {
  alternates: { canonical: '/terms' },
  title: "Terms & Conditions | Zterabyte",
  description:
    "Read the Terms & Conditions governing the use of the Zterabyte website and our domain, hosting, email, website development, design and digital marketing services.",
};

const sections = [
  {
    id: "acceptance",
    icon: FiUserCheck,
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing the Zterabyte website or requesting, purchasing or
          using any of our services, you acknowledge that you have read,
          understood and agreed to these Terms & Conditions.
        </p>

        <p className="mt-4">
          If you do not agree with these terms, please do not use our website
          or services.
        </p>
      </>
    ),
  },
  {
    id: "services",
    icon: FiGlobe,
    title: "2. Our Services",
    content: (
      <>
        <p>
          Zterabyte provides digital and technology services that may include
          domain registration, web hosting, email hosting, website
          development, eCommerce development, mobile application development,
          logo and graphic design, UI/UX design and digital marketing
          services.
        </p>

        <p className="mt-4">
          The exact features, pricing, timelines and deliverables of a service
          may vary according to the plan or quotation agreed with the
          customer.
        </p>
      </>
    ),
  },
  {
    id: "customer-responsibilities",
    icon: FiUserCheck,
    title: "3. Customer Responsibilities",
    content: (
      <>
        <p>
          Customers are responsible for providing accurate, complete and
          up-to-date information required for the delivery of requested
          services.
        </p>

        <p className="mt-4">
          Customers are also responsible for ensuring that the content,
          materials, information, images, trademarks and other resources they
          provide to Zterabyte are legally permitted to be used.
        </p>

        <p className="mt-4">
          Customers should keep their account credentials, passwords and other
          access information confidential and should not knowingly provide
          unauthorized persons with access to their services.
        </p>
      </>
    ),
  },
  {
    id: "domain-services",
    icon: FiGlobe,
    title: "4. Domain Registration & Management",
    content: (
      <>
        <p>
          Domain registration and related services may be subject to the rules,
          policies and terms of the applicable domain registry or registrar.
        </p>

        <p className="mt-4">
          Customers are responsible for providing accurate domain registration
          information and ensuring that their chosen domain does not infringe
          the rights of another person or organization.
        </p>

        <p className="mt-4">
          Domain availability, registration, renewal, transfer and suspension
          are subject to applicable registry and registrar requirements.
        </p>
      </>
    ),
  },
  {
    id: "hosting",
    icon: FiShield,
    title: "5. Web & Email Hosting",
    content: (
      <>
        <p>
          Hosting services are provided according to the resources, features
          and limitations associated with the selected hosting plan.
        </p>

        <p className="mt-4">
          Customers must not use hosting or email services for activities that
          violate applicable law, abuse network resources, distribute malware,
          conduct unauthorized attacks, send unlawful spam or otherwise
          interfere with the security or operation of our systems.
        </p>

        <p className="mt-4">
          Zterabyte may investigate and take appropriate action where a
          service is reasonably believed to be involved in prohibited or
          harmful activity.
        </p>
      </>
    ),
  },
  {
    id: "website-development",
    icon: FiFileText,
    title: "6. Website & Application Development",
    content: (
      <>
        <p>
          Website and application development projects are generally performed
          according to the requirements, scope and deliverables agreed with
          the customer.
        </p>

        <p className="mt-4">
          Changes or additional requirements outside the agreed project scope
          may require additional time or charges.
        </p>

        <p className="mt-4">
          Project timelines may depend on timely communication, content,
          approvals, credentials and other materials supplied by the
          customer.
        </p>
      </>
    ),
  },
  {
    id: "design",
    icon: FiFileText,
    title: "7. Design Services",
    content: (
      <>
        <p>
          Design services may include logo design, graphics, UI/UX design and
          other creative work as agreed with the customer.
        </p>

        <p className="mt-4">
          The number of concepts, revisions, source files and final formats
          provided will depend on the scope agreed for the project.
        </p>

        <p className="mt-4">
          Final approved designs may be considered accepted once the customer
          confirms approval or begins using the delivered work.
        </p>
      </>
    ),
  },
  {
    id: "digital-marketing",
    icon: FiRefreshCw,
    title: "8. Digital Marketing Services",
    content: (
      <>
        <p>
          Digital marketing services may include SEO, SMO, social media
          marketing, advertising, email marketing and related services.
        </p>

        <p className="mt-4">
          Marketing performance can depend on search engine algorithms,
          advertising platforms, competition, market conditions, customer
          activity and other factors outside our direct control.
        </p>

        <p className="mt-4">
          Zterabyte does not guarantee a specific search engine ranking,
          number of leads, sales, traffic level or advertising result unless a
          specific written guarantee has been expressly agreed.
        </p>
      </>
    ),
  },
  {
    id: "pricing-payment",
    icon: FiCreditCard,
    title: "9. Pricing & Payment",
    content: (
      <>
        <p>
          Service prices are based on the applicable plan, quotation or
          agreement provided to the customer.
        </p>

        <p className="mt-4">
          Customers are responsible for making payments according to the
          agreed payment schedule.
        </p>

        <p className="mt-4">
          Where applicable, services may be delayed, suspended or restricted
          if required payments remain outstanding.
        </p>

        <p className="mt-4">
          Third-party charges, domain fees, advertising budgets, premium
          software, plugins, themes, licenses or other external costs may be
          charged separately where they are not included in the agreed
          service price.
        </p>
      </>
    ),
  },
  {
    id: "renewal",
    icon: FiRefreshCw,
    title: "10. Renewals",
    content: (
      <>
        <p>
          Services such as domain registration, hosting and email hosting may
          require periodic renewal.
        </p>

        <p className="mt-4">
          Customers are responsible for ensuring that renewal payments are
          completed before the applicable expiry date where renewal is
          required.
        </p>

        <p className="mt-4">
          Expired services may be suspended or become unavailable according to
          the applicable service or third-party provider rules.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    icon: FiLock,
    title: "11. Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise agreed in writing, each party retains ownership of
          intellectual property that it owned before a project began.
        </p>

        <p className="mt-4">
          Customer-provided content, trademarks, images and other materials
          remain the responsibility of the customer.
        </p>

        <p className="mt-4">
          The ownership or licensing of final project deliverables, source
          code, design files, stock assets, fonts, plugins and third-party
          software will depend on the project agreement and applicable
          licenses.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    icon: FiAlertCircle,
    title: "12. Acceptable Use",
    content: (
      <>
        <p>
          Customers must use Zterabyte services lawfully and responsibly.
        </p>

        <p className="mt-4">
          Customers must not use our services to host, distribute, transmit
          or promote content or activity that is illegal, fraudulent,
          malicious, abusive or that violates the rights of others.
        </p>

        <p className="mt-4">
          We reserve the right to investigate suspected misuse and take
          reasonable action to protect our customers, infrastructure and
          services.
        </p>
      </>
    ),
  },
  {
    id: "suspension",
    icon: FiXCircle,
    title: "13. Suspension & Termination",
    content: (
      <>
        <p>
          Zterabyte may suspend or terminate a service where reasonably
          necessary because of non-payment, serious misuse, security concerns,
          violation of these terms or other circumstances permitted by the
          applicable agreement.
        </p>

        <p className="mt-4">
          Where practical, we may attempt to communicate with the customer
          before taking action, except where immediate action is reasonably
          necessary to protect systems, users or third parties.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    icon: FiGlobe,
    title: "14. Third-Party Services",
    content: (
      <>
        <p>
          Some Zterabyte services may depend on third-party platforms,
          registrars, hosting infrastructure, payment providers, advertising
          platforms, software or other external services.
        </p>

        <p className="mt-4">
          Such third-party services may have their own terms, policies,
          pricing and availability. Zterabyte is not responsible for changes
          made by third-party providers that are outside our reasonable
          control.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    icon: FiShield,
    title: "15. Service Availability",
    content: (
      <p>
        We aim to provide reliable and professional services, but we cannot
        guarantee uninterrupted availability in every circumstance. Service
        availability may be affected by maintenance, technical problems,
        network issues, third-party failures, security incidents or other
        events beyond our reasonable control.
      </p>
    ),
  },
  {
    id: "limitation",
    icon: FiAlertCircle,
    title: "16. Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, Zterabyte will not be
          responsible for indirect, incidental, special or consequential loss
          arising from the use or inability to use a service.
        </p>

        <p className="mt-4">
          Customers are responsible for maintaining appropriate backups of
          important website, application, email and other business data unless
          a specific backup service has been agreed.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    icon: FiRefreshCw,
    title: "17. Changes to These Terms",
    content: (
      <p>
        Zterabyte may update these Terms & Conditions from time to time to
        reflect changes in our services, business practices or applicable
        requirements. Updated terms will be published on this page with a
        revised date.
      </p>
    ),
  },
  {
    id: "contact",
    icon: FiMail,
    title: "18. Contact Us",
    content: (
      <>
        <p>
          If you have questions regarding these Terms & Conditions or any
          Zterabyte service, please contact our team.
        </p>

        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 font-bold text-[#006cb5] transition hover:text-[#004f86]"
        >
          Contact Zterabyte
          <FiChevronRight />
        </Link>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      {/* =========================================
          HERO
      ========================================= */}
      <section className="relative overflow-hidden bg-[#071827]">

        {/* Background Decoration */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#006cb5]/15 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#006cb5]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-lg">
              <FiFileText className="text-2xl" />
            </div>

            {/* Label */}
            <span className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#70c8fa]">
              Legal Information
            </span>

            {/* Heading */}
            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Terms & Conditions
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              These terms explain the general conditions that apply when you
              access our website or use Zterabyte digital and technology
              services.
            </p>

            {/* Date */}
            <p className="mt-5 text-sm font-medium text-slate-400">
              Last Updated: September 2026
            </p>

          </div>
        </div>
      </section>

      {/* =========================================
          TERMS CONTENT
      ========================================= */}
      <section className="bg-[#f6fafd] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

            {/* =====================================
                SIDEBAR
            ===================================== */}
            <aside className="hidden lg:block">

              <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="mb-4 text-sm font-black text-[#071827]">
                  Terms & Conditions
                </p>

                <nav className="space-y-1">

                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-[#eaf6ff] hover:text-[#006cb5]"
                    >
                      {section.title}
                    </a>
                  ))}

                </nav>

              </div>
            </aside>

            {/* =====================================
                CONTENT
            ===================================== */}
            <div className="min-w-0">

              {/* Introduction */}
              <div className="mb-6 rounded-2xl border border-[#cfe9fa] bg-[#eaf6ff] p-6 sm:p-7">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#006cb5] shadow-sm">
                    <FiFileText className="text-xl" />
                  </div>

                  <div>

                    <h2 className="text-lg font-black text-[#071827]">
                      Please Read These Terms Carefully
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      These Terms & Conditions provide the general framework
                      for using Zterabyte services. Individual projects or
                      service plans may also be governed by separate
                      quotations, invoices, agreements or service-specific
                      terms.
                    </p>

                  </div>

                </div>

              </div>

              {/* Sections */}
              <div className="space-y-6">

                {sections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <article
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >

                      {/* Section Heading */}
                      <div className="flex items-start gap-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                          <Icon className="text-xl" />
                        </div>

                        <h2 className="pt-2 text-xl font-black text-[#071827] sm:text-2xl">
                          {section.title}
                        </h2>

                      </div>

                      {/* Section Content */}
                      <div
                        className="
                          mt-5 text-sm leading-7 text-slate-600
                          [&_p]:max-w-4xl
                        "
                      >
                        {section.content}
                      </div>

                    </article>
                  );
                })}

              </div>

              {/* =====================================
                  BOTTOM CTA
              ===================================== */}
              <div className="mt-8 rounded-2xl bg-[#071827] p-6 sm:p-8">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <h2 className="text-xl font-black text-white">
                      Need Clarification?
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                      If you have any questions about these terms or a
                      particular Zterabyte service, our team is available to
                      help.
                    </p>

                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0086dc]"
                  >
                    Contact Us
                    <FiChevronRight />
                  </Link>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}