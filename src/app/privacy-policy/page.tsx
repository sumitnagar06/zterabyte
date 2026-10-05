import Link from "next/link";
import {
  FiChevronRight,
  FiDatabase,
  FiEye,
  FiFileText,
  FiLock,
  FiMail,
  FiShield,
  FiUserCheck,
} from "react-icons/fi";

export const metadata = {
  alternates: { canonical: '/privacy-policy' },
  title: "Privacy Policy | Zterabyte",
  description:
    "Read the Zterabyte Privacy Policy to understand how we collect, use, protect and manage information when you use our website and digital services.",
};

const sections = [
  {
    id: "information-we-collect",
    icon: FiDatabase,
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          We may collect information that you voluntarily provide when you
          contact us, submit an enquiry, request a quotation, purchase or
          enquire about a service, or otherwise communicate with Zterabyte.
        </p>

        <p className="mt-4">
          Depending on the service you request, this information may include:
        </p>

        <ul className="mt-4 space-y-2">
          <li>Your name and company or business name</li>
          <li>Email address and telephone number</li>
          <li>Domain name and website information</li>
          <li>Service requirements and enquiry details</li>
          <li>Billing and transaction-related information</li>
          <li>
            Technical information necessary to provide hosting, email,
            website or related services
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    icon: FiUserCheck,
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>
          Information collected through our website or services may be used
          for legitimate business purposes, including:
        </p>

        <ul className="mt-4 space-y-2">
          <li>Responding to enquiries and service requests</li>
          <li>Providing quotations and requested services</li>
          <li>Setting up and managing customer services</li>
          <li>Providing customer and technical support</li>
          <li>Communicating service-related information</li>
          <li>Processing and maintaining business records</li>
          <li>Improving our website, services and customer experience</li>
          <li>Protecting our systems and preventing misuse or fraud</li>
          <li>Meeting applicable legal or regulatory requirements</li>
        </ul>
      </>
    ),
  },
  {
    id: "hosting-domain-email",
    icon: FiFileText,
    title: "3. Domain, Hosting & Email Services",
    content: (
      <>
        <p>
          When you request domain registration, web hosting, email hosting or
          related services, certain information may be required to configure,
          maintain and support those services.
        </p>

        <p className="mt-4">
          Some services may also involve third-party infrastructure,
          registrars, service providers or technology platforms. Information
          required to activate or maintain a requested service may therefore
          be processed by the relevant provider where necessary.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    icon: FiEye,
    title: "4. Cookies & Website Information",
    content: (
      <>
        <p>
          Our website may use cookies or similar technologies that help the
          website function properly, understand website usage, remember
          preferences and improve the overall user experience.
        </p>

        <p className="mt-4">
          Your browser may allow you to control or disable cookies. Disabling
          certain cookies may affect the functionality or performance of some
          parts of the website.
        </p>
      </>
    ),
  },
  {
    id: "sharing-information",
    icon: FiShield,
    title: "5. Sharing of Information",
    content: (
      <>
        <p>
          Zterabyte does not sell or rent personal information to third
          parties for their independent marketing purposes.
        </p>

        <p className="mt-4">
          Information may be shared with service providers or business
          partners where reasonably necessary to deliver a requested service,
          operate our website, process transactions, provide technical
          infrastructure or comply with applicable law.
        </p>

        <p className="mt-4">
          We may also disclose information where required by law, legal
          process or a valid request from an appropriate authority.
        </p>
      </>
    ),
  },
  {
    id: "security",
    icon: FiLock,
    title: "6. Data Security",
    content: (
      <>
        <p>
          We take reasonable administrative and technical measures designed
          to protect information against unauthorized access, misuse, loss,
          alteration or disclosure.
        </p>

        <p className="mt-4">
          However, no internet transmission, electronic storage system or
          online service can be guaranteed to be completely secure.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    icon: FiDatabase,
    title: "7. Data Retention",
    content: (
      <p>
        We may retain information for as long as reasonably necessary to
        provide requested services, maintain business and transaction records,
        resolve disputes, provide support and meet applicable legal or
        regulatory obligations.
      </p>
    ),
  },
  {
    id: "third-party-links",
    icon: FiEye,
    title: "8. Third-Party Websites & Services",
    content: (
      <p>
        Our website may contain links to third-party websites or services.
        Zterabyte is not responsible for the privacy practices, security or
        content of third-party websites. We recommend reviewing the privacy
        policy of any external service you use.
      </p>
    ),
  },
  {
    id: "your-rights",
    icon: FiUserCheck,
    title: "9. Your Choices & Rights",
    content: (
      <>
        <p>
          Subject to applicable law, you may contact us regarding personal
          information you have provided to Zterabyte, including requests to
          review, correct or update inaccurate information.
        </p>

        <p className="mt-4">
          Where applicable, you may also request deletion or restriction of
          certain information. Some information may need to be retained where
          required for legal, security, billing or legitimate business
          purposes.
        </p>
      </>
    ),
  },
  {
    id: "children",
    icon: FiShield,
    title: "10. Children's Privacy",
    content: (
      <p>
        Zterabyte's services are primarily intended for businesses,
        professionals and individuals seeking digital services. We do not
        knowingly seek to collect personal information from children through
        our website.
      </p>
    ),
  },
  {
    id: "changes",
    icon: FiFileText,
    title: "11. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy when our services, business
        practices or legal requirements change. The revised policy will be
        published on this page with an updated revision date.
      </p>
    ),
  },
  {
    id: "contact",
    icon: FiMail,
    title: "12. Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how information
          is handled by Zterabyte, please contact our team.
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

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      {/* =========================================
          HERO
      ========================================= */}
      <section className="relative overflow-hidden bg-[#071827]">
        {/* Decoration */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#006cb5]/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#006cb5]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">

            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-lg">
              <FiShield className="text-2xl" />
            </div>

            {/* Label */}
            <span className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#70c8fa]">
              Legal & Privacy
            </span>

            {/* Heading */}
            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              This Privacy Policy explains how Zterabyte may collect, use,
              protect and manage information when you visit our website or use
              our services.
            </p>

            <p className="mt-5 text-sm font-medium text-slate-400">
              Last Updated: September 2026
            </p>

          </div>
        </div>
      </section>

      {/* =========================================
          POLICY CONTENT
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
                  Privacy Policy
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
                    <FiShield className="text-xl" />
                  </div>

                  <div>
                    <h2 className="text-lg font-black text-[#071827]">
                      Our Commitment to Privacy
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Zterabyte respects the privacy of customers and website
                      visitors. We aim to handle information responsibly and
                      use it only where reasonably necessary to provide and
                      improve our services.
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
                  BOTTOM NOTICE
              ===================================== */}
              <div className="mt-8 rounded-2xl bg-[#071827] p-6 sm:p-8">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <h2 className="text-xl font-black text-white">
                      Have a Privacy Question?
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                      Contact our team if you have a question about this policy
                      or information associated with your Zterabyte services.
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