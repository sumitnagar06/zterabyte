import Link from "next/link";
import {
  FiAlertCircle,
  FiCalendar,
  FiCheckCircle,
  FiChevronRight,
  FiClock,
  FiCreditCard,
  FiFileText,
  FiGlobe,
  FiMail,
  FiRefreshCw,
  FiShield,
  FiXCircle,
} from "react-icons/fi";

export const metadata = {
  alternates: { canonical: '/refund-cancellation' },
  title: "Refund & Cancellation Policy | Zterabyte",
  description:
    "Read Zterabyte's Refund & Cancellation Policy covering website development, hosting, domain, email hosting, design and digital marketing services.",
};

const sections = [
  {
    id: "overview",
    icon: FiFileText,
    title: "1. Policy Overview",
    content: (
      <>
        <p>
          This Refund & Cancellation Policy explains the general conditions
          under which customers may request cancellation or a refund for
          Zterabyte services.
        </p>

        <p className="mt-4">
          Because different services involve different costs, commitments and
          third-party providers, refund eligibility may vary depending on the
          type of service, the stage of the project and the work already
          completed.
        </p>

        <p className="mt-4">
          Any specific refund or cancellation terms agreed in a written
          quotation, invoice, proposal or service agreement will take
          precedence over this general policy where applicable.
        </p>
      </>
    ),
  },

  {
    id: "general-refund",
    icon: FiCreditCard,
    title: "2. General Refund Terms",
    content: (
      <>
        <p>
          Customers should contact Zterabyte as soon as possible if they wish
          to cancel a service or request a refund.
        </p>

        <p className="mt-4">
          Refunds, where applicable, are generally considered based on the
          amount of work completed, resources already purchased or consumed,
          third-party charges, project stage and the specific service
          agreement.
        </p>

        <div className="mt-5 rounded-xl border border-[#cfe9fa] bg-[#eaf6ff] p-5">
          <p className="font-bold text-[#071827]">
            Suggested general refund structure
          </p>

          <ul className="mt-3 space-y-2">
            <li>
              Cancellation before substantial work begins: eligible for a
              refund after deduction of applicable processing or committed
              costs.
            </li>

            <li>
              Cancellation after work has started: refund may be reduced based
              on the work already completed.
            </li>

            <li>
              Cancellation after substantial completion or final approval:
              generally not eligible for a refund.
            </li>
          </ul>
        </div>
      </>
    ),
  },

  {
    id: "website-project",
    icon: FiGlobe,
    title: "3. Website & Application Projects",
    content: (
      <>
        <p>
          Website development, eCommerce development and application projects
          involve time, planning, development and other resources. Therefore,
          project cancellation is handled according to the stage of the
          project.
        </p>

        <p className="mt-4">
          If a customer cancels before development work begins, Zterabyte may
          consider a refund after deducting any non-refundable or already
          committed costs.
        </p>

        <p className="mt-4">
          If development has already started, the refundable amount may be
          calculated after considering the work completed up to the
          cancellation date.
        </p>

        <p className="mt-4">
          Once the agreed project has been substantially completed, delivered
          or approved by the customer, the project may no longer be eligible
          for a refund.
        </p>
      </>
    ),
  },

  {
    id: "design-project",
    icon: FiCheckCircle,
    title: "4. Logo, Graphic & UI/UX Design",
    content: (
      <>
        <p>
          Design projects may involve research, concepts, creative work and
          revisions before the final design is delivered.
        </p>

        <p className="mt-4">
          Cancellation before substantial design work begins may be considered
          for a refund after applicable costs are deducted.
        </p>

        <p className="mt-4">
          Once concepts, designs or revisions have been substantially
          completed, the refundable amount may be reduced according to the
          work already performed.
        </p>

        <p className="mt-4">
          Final approved designs are generally not eligible for a refund after
          approval or delivery.
        </p>
      </>
    ),
  },

  {
    id: "domain-refund",
    icon: FiGlobe,
    title: "5. Domain Registration & Transfer",
    content: (
      <>
        <p>
          Domain registration, renewal and transfer services may involve
          third-party registrars and domain registries.
        </p>

        <p className="mt-4">
          Once a domain has been successfully registered or renewed, the
          applicable domain fee may be non-refundable because the registration
          has already been processed with the relevant provider.
        </p>

        <p className="mt-4">
          Domain transfers that have already been initiated or completed may
          also be subject to the applicable registrar or registry rules.
        </p>

        <p className="mt-4">
          Customers should carefully verify the domain name before confirming
          registration or renewal.
        </p>
      </>
    ),
  },

  {
    id: "hosting-refund",
    icon: FiShield,
    title: "6. Web & Email Hosting",
    content: (
      <>
        <p>
          Hosting and email hosting services may be subject to the plan,
          billing period and terms agreed at the time of purchase.
        </p>

        <p className="mt-4">
          If a refund request is made shortly after purchase and before
          substantial service usage, Zterabyte may review the request based on
          the applicable plan and service conditions.
        </p>

        <p className="mt-4">
          Refunds may not be available for periods already used, consumed
          resources, domain-related charges, setup charges or third-party
          services.
        </p>

        <p className="mt-4">
          Any promotional, discounted or special pricing may be subject to
          separate refund conditions.
        </p>
      </>
    ),
  },

  {
    id: "digital-marketing",
    icon: FiRefreshCw,
    title: "7. Digital Marketing Services",
    content: (
      <>
        <p>
          Digital marketing services such as SEO, SMO, social media marketing,
          email marketing and advertising involve ongoing planning,
          optimization and execution.
        </p>

        <p className="mt-4">
          Once marketing work has started, refunds may be adjusted according
          to the work performed and third-party costs already incurred.
        </p>

        <p className="mt-4">
          Advertising budgets paid to third-party advertising platforms are
          generally separate from Zterabyte service charges and may not be
          refundable through Zterabyte once spent or committed.
        </p>

        <p className="mt-4">
          Marketing results cannot be used by themselves as a basis for a
          refund unless a specific written agreement provides otherwise.
        </p>
      </>
    ),
  },

  {
    id: "cancellation",
    icon: FiXCircle,
    title: "8. Project Cancellation",
    content: (
      <>
        <p>
          A customer may request cancellation by contacting Zterabyte through
          an official communication channel.
        </p>

        <p className="mt-4">
          Cancellation requests should include the customer's name, service
          or project name, order or invoice information where available, and
          the reason for cancellation.
        </p>

        <p className="mt-4">
          Cancellation does not automatically guarantee a refund. Zterabyte
          will review the request according to the applicable service terms,
          project stage and costs already incurred.
        </p>
      </>
    ),
  },

  {
    id: "customer-delay",
    icon: FiClock,
    title: "9. Customer Delays & Project Hold",
    content: (
      <>
        <p>
          Project timelines may depend on the customer providing content,
          images, credentials, approvals, feedback and other required
          information.
        </p>

        <p className="mt-4">
          If a project is delayed because required customer information or
          approvals are not provided, the project timeline may be extended.
        </p>

        <p className="mt-4">
          Extended customer delays do not automatically create a right to a
          refund for work already completed.
        </p>
      </>
    ),
  },

  {
    id: "non-refundable",
    icon: FiAlertCircle,
    title: "10. Non-Refundable Costs",
    content: (
      <>
        <p>
          Certain costs may be non-refundable because they are paid to or
          committed with third-party providers or have already been consumed.
        </p>

        <p className="mt-4">
          Depending on the service, these may include:
        </p>

        <ul className="mt-4 space-y-2">
          <li>Domain registration and renewal charges</li>
          <li>Third-party software, plugins or licenses</li>
          <li>Premium themes, templates or digital assets</li>
          <li>Third-party hosting or infrastructure costs</li>
          <li>Advertising budgets already spent or committed</li>
          <li>Payment processing or transaction charges</li>
          <li>Completed development or design work</li>
          <li>Other costs specifically identified in a quotation or invoice</li>
        </ul>
      </>
    ),
  },

  {
    id: "refund-method",
    icon: FiCreditCard,
    title: "11. Refund Method & Processing",
    content: (
      <>
        <p>
          Approved refunds will normally be processed using the original
          payment method where reasonably possible.
        </p>

        <p className="mt-4">
          Processing time may depend on the payment provider, bank or other
          financial institution involved in the transaction.
        </p>

        <p className="mt-4">
          Zterabyte is not responsible for delays caused by banks, payment
          gateways or other third-party financial institutions after a refund
          has been initiated.
        </p>
      </>
    ),
  },

  {
    id: "refund-request",
    icon: FiMail,
    title: "12. How to Request a Refund",
    content: (
      <>
        <p>
          To request a refund or cancellation, contact the Zterabyte team with
          the relevant service and customer details.
        </p>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-bold text-[#071827]">
            Please include:
          </p>

          <ul className="mt-3 space-y-2">
            <li>Your name and company name, if applicable</li>
            <li>Registered email address</li>
            <li>Phone number</li>
            <li>Service or project name</li>
            <li>Invoice or order reference, if available</li>
            <li>Reason for the refund or cancellation request</li>
          </ul>
        </div>

        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 font-bold text-[#006cb5] transition hover:text-[#004f86]"
        >
          Submit an Enquiry
          <FiChevronRight />
        </Link>
      </>
    ),
  },

  {
    id: "review",
    icon: FiShield,
    title: "13. Refund Review",
    content: (
      <>
        <p>
          Every refund request may be reviewed individually. Zterabyte may
          consider the service type, project stage, work completed, payment
          history, third-party expenses and the terms agreed with the customer.
        </p>

        <p className="mt-4">
          Submitting a refund request does not mean that the request will
          automatically be approved.
        </p>
      </>
    ),
  },

  {
    id: "policy-changes",
    icon: FiRefreshCw,
    title: "14. Changes to This Policy",
    content: (
      <p>
        Zterabyte may update this Refund & Cancellation Policy from time to
        time to reflect changes in our services, pricing, business practices
        or applicable requirements. Updated information will be published on
        this page with a revised date.
      </p>
    ),
  },

  {
    id: "contact",
    icon: FiMail,
    title: "15. Contact Us",
    content: (
      <>
        <p>
          If you have questions about cancellation, refunds or any specific
          service terms, please contact the Zterabyte team before making a
          purchase or requesting cancellation.
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

export default function RefundCancellationPage() {
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
              <FiRefreshCw className="text-2xl" />
            </div>

            {/* Label */}
            <span className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#70c8fa]">
              Refund & Cancellation
            </span>

            {/* Heading */}
            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Refund & Cancellation Policy
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Our refund and cancellation terms explain how requests are
              handled for Zterabyte's digital, hosting, development, design
              and marketing services.
            </p>

            {/* Date */}
            <p className="mt-5 text-sm font-medium text-slate-400">
              Last Updated: September 2026
            </p>

          </div>
        </div>
      </section>

      {/* =========================================
          CONTENT
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
                  Refund & Cancellation
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
                MAIN CONTENT
            ===================================== */}
            <div className="min-w-0">

              {/* Introduction */}
              <div className="mb-6 rounded-2xl border border-[#cfe9fa] bg-[#eaf6ff] p-6 sm:p-7">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#006cb5] shadow-sm">
                    <FiShield className="text-xl" />
                  </div>

                  <div>

                    <h2 className="text-lg font-black text-[#071827]">
                      Clear & Fair Cancellation Terms
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      We aim to handle cancellation and refund requests fairly
                      while considering the work completed and costs already
                      incurred for each service.
                    </p>

                  </div>

                </div>

              </div>

              {/* =====================================
                  QUICK POLICY SUMMARY
              ===================================== */}
              <div className="mb-6 grid gap-4 sm:grid-cols-3">

                {/* Before Work */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                    <FiCalendar />
                  </div>

                  <h3 className="mt-4 text-base font-black text-[#071827]">
                    Before Work Starts
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Cancellation may be eligible for a refund after applicable
                    committed costs are considered.
                  </p>

                </div>

                {/* Work In Progress */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                    <FiClock />
                  </div>

                  <h3 className="mt-4 text-base font-black text-[#071827]">
                    Work In Progress
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Refund eligibility may be adjusted according to completed
                    work and expenses.
                  </p>

                </div>

                {/* Completed */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                    <FiCheckCircle />
                  </div>

                  <h3 className="mt-4 text-base font-black text-[#071827]">
                    Completed Work
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Completed, delivered or approved work is generally not
                    eligible for a refund.
                  </p>

                </div>

              </div>

              {/* =====================================
                  POLICY SECTIONS
              ===================================== */}
              <div className="space-y-6">

                {sections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <article
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >

                      {/* Heading */}
                      <div className="flex items-start gap-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                          <Icon className="text-xl" />
                        </div>

                        <h2 className="pt-2 text-xl font-black text-[#071827] sm:text-2xl">
                          {section.title}
                        </h2>

                      </div>

                      {/* Content */}
                      <div
                        className="
                          mt-5 text-sm leading-7 text-slate-600
                          [&_p]:max-w-4xl
                          [&_li]:relative
                          [&_li]:pl-5
                          [&_li]:before:absolute
                          [&_li]:before:left-0
                          [&_li]:before:top-[11px]
                          [&_li]:before:h-1.5
                          [&_li]:before:w-1.5
                          [&_li]:before:rounded-full
                          [&_li]:before:bg-[#006cb5]
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
                      Have a Refund or Cancellation Question?
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                      Contact our team before cancelling a service so we can
                      review your specific situation and explain the applicable
                      terms.
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