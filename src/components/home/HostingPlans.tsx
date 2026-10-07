import Link from "next/link";
import {
  FiServer,
  FiHardDrive,
  FiShield,
  FiZap,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";

const plans = [
  {
    name: "Limited Shared Hosting",
    description:
      "A simple and affordable hosting solution for personal websites, portfolios and small business websites.",
    icon: FiHardDrive,
    popular: false,

    features: [
      "Reliable Shared Hosting",
      "Website Control Panel",
      "Email Accounts",
      "Database Support",
      "SSL Support",
      "Technical Assistance",
    ],

    href: "/hosting/limited-shared-hosting",
  },

  {
    name: "Linux Shared Hosting",
    description:
      "A powerful hosting solution for growing businesses, websites and online projects that need more resources.",
    icon: FiServer,
    popular: true,

    features: [
      "Unlimited Website Hosting",
      "Unlimited Bandwidth",
      "Unlimited Email Accounts",
      "Database Support",
      "Free SSL Support",
      "Technical Assistance",
    ],

    href: "/hosting/linux-shared-hosting",
  },
];

export default function HostingPlans() {
  return (
    <section className="relative overflow-hidden bg-[#f6fafd] py-20 lg:py-24">

      {/* Background Decoration */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#006cb5]/5 blur-3xl" />

      <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#006cb5]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
            <FiServer />
            Web Hosting
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Hosting Built for
            <span className="block text-[#006cb5]">
              Your Growing Business
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Choose a hosting solution that matches your website requirements.
            Start small and upgrade as your online presence grows.
          </p>

        </div>

        {/* Hosting Cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-7 lg:grid-cols-2">

          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                  plan.popular
                    ? "border-[#006cb5] shadow-lg"
                    : "border-slate-200"
                }`}
              >

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#006cb5] px-4 py-1.5 text-xs font-bold text-white">
                    RECOMMENDED
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                    plan.popular
                      ? "bg-[#006cb5] text-white"
                      : "bg-[#eaf6ff] text-[#006cb5]"
                  }`}
                >
                  <Icon className="text-2xl" />
                </div>

                {/* Plan Name */}
                <h3 className="mt-6 text-2xl font-bold text-[#071827]">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="my-7 h-px bg-slate-100" />

                {/* Features */}
                <div className="space-y-4">

                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf6ff] text-[#006cb5]">
                        <FiCheck className="text-sm" />
                      </span>

                      <span className="text-sm font-medium text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}

                </div>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-[#006cb5] text-white hover:bg-[#004f86]"
                      : "border border-[#006cb5] text-[#006cb5] hover:bg-[#eaf6ff]"
                  }`}
                >
                  View Hosting Details
                  <FiArrowRight />
                </Link>

              </div>
            );
          })}

        </div>

        {/* Bottom Trust Bar */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">

          <div className="flex items-center justify-center gap-3 sm:justify-start">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
              <FiZap />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                Fast Performance
              </p>

              <p className="text-xs text-slate-500">
                Built for speed
              </p>
            </div>

          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-start">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
              <FiShield />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                Secure Hosting
              </p>

              <p className="text-xs text-slate-500">
                SSL-ready infrastructure
              </p>
            </div>

          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-start">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
              <FiServer />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                Reliable Support
              </p>

              <p className="text-xs text-slate-500">
                Help when you need it
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
