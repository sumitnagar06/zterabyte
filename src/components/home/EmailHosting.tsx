import Link from "next/link";
import {
  FiMail,
  FiCheck,
  FiShield,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";

const emailPlans = [
  {
    title: "Business Email Hosting",
    description:
      "Professional email hosting for small businesses, startups and growing teams.",
    icon: FiMail,
    features: [
      "Professional business email",
      "Custom domain email address",
      "Reliable email hosting",
      "Webmail access",
      "Spam protection",
      "Technical support",
    ],
    href: "/email-hosting/business-email-hosting",
  },
  {
    title: "Enterprise Email Hosting",
    description:
      "Advanced email hosting for organizations that need professional communication at scale.",
    icon: FiUsers,
    features: [
      "Enterprise email accounts",
      "Custom domain email",
      "Scalable email solution",
      "Webmail access",
      "Enhanced security",
      "Dedicated support",
    ],
    href: "/email-hosting/enterprise-email-hosting",
  },
];

export default function EmailHosting() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">

      {/* Background Decoration */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#eaf6ff] opacity-60 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#eaf6ff] opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
            <FiMail />
            Email Hosting
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Professional Email for
            <span className="block text-[#006cb5]">
              Your Business
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Build trust with professional email addresses using your own
            business domain. Choose a solution that fits your team and
            organization.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left Visual */}
          <div className="relative">

            <div className="overflow-hidden rounded-3xl bg-[#071827] p-7 shadow-2xl sm:p-9">

              {/* Decorative Circle */}
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#006cb5]/20 blur-2xl" />

              <div className="relative">

                {/* Mail Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#006cb5] text-white">
                  <FiMail className="text-3xl" />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  Your Business Deserves a Professional Email
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Use your own domain to create a professional identity
                  for every member of your organization.
                </p>

                {/* Email Preview */}
                <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">

                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Example
                  </p>

                  <div className="mt-3 flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#006cb5] text-white">
                      <FiMail />
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        hello@yourcompany.com
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Professional business communication
                      </p>
                    </div>

                  </div>

                </div>

                {/* Security */}
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#006cb5]/15 p-4">

                  <FiShield className="text-xl text-[#38a9f5]" />

                  <p className="text-sm text-slate-300">
                    Professional communication with a focus on security
                    and reliability.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Plans */}
          <div className="space-y-5">

            {emailPlans.map((plan) => {
              const Icon = plan.icon;

              return (
                <div
                  key={plan.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b9ddf5] hover:shadow-xl sm:p-7"
                >

                  <div className="flex flex-col gap-5 sm:flex-row">

                    {/* Icon */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition group-hover:bg-[#006cb5] group-hover:text-white">
                      <Icon className="text-2xl" />
                    </div>

                    <div className="flex-1">

                      <h3 className="text-xl font-bold text-[#071827] transition group-hover:text-[#006cb5]">
                        {plan.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {plan.description}
                      </p>

                      {/* Features */}
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">

                        {plan.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2"
                          >
                            <FiCheck className="shrink-0 text-[#006cb5]" />

                            <span className="text-sm text-slate-600">
                              {feature}
                            </span>
                          </div>
                        ))}

                      </div>

                      {/* Button */}
                      <Link
                        href={plan.href}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#006cb5]"
                      >
                        Explore Email Hosting

                        <FiArrowRight className="transition group-hover:translate-x-1" />
                      </Link>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}
