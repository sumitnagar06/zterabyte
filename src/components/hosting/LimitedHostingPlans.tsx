"use client";

import PlanEnquiryModal from "@/components/common/PlanEnquiryModal";

import {
  FiCheck,
  FiShield,
  FiZap,
  FiHeadphones,
  FiInfo,
} from "react-icons/fi";

type Feature = {
  name: string;
  tooltip: string;
};

const plans = [
  {
    name: "Starter",
    description:
      "Perfect for personal websites and small projects.",
    price: "₹1000",
    salePrice: "₹800",
    saleActive: true,
    period: "/Year",
    popular: false,
    features: [
      {
        name: "1 Website",
      },
      {
        name: "1 GB NVMe Storage",
        tooltip:
          "Get 1 GB of fast NVMe storage for your website files, images and other website data.",
      },
      {
        name: "100 GB Bandwidth",
        tooltip:
          "Your website can transfer up to 100 GB of data during the billing period.",
      },
      {
        name: "5 Email Accounts",
        tooltip:
          "Create up to 5 professional email accounts using your domain name.",
      },
      {
        name: "Free SSL Certificate",
        tooltip:
          "Helps secure your website with HTTPS encryption and protects data exchanged between your website and visitors.",
      },
      {
        name: "1 MySQL Database",
        tooltip:
          "Includes 1 MySQL database for your website or web application.",
      },
      {
        name: "Plesk Panel",
        tooltip:
          "Manage your hosting account and websites with our intuitive plesk panel.",
      },
      {
        name: "24/7 Support",
        tooltip:
          "Get hosting assistance whenever you need help with your service.",
      },
    ],
  },

  {
    name: "Business",
    description:
      "A powerful choice for growing business websites.",
    price: "₹1200",
    salePrice: "₹1000",
    saleActive: true,
    period: "/Year",
    popular: true,
    features: [
      {
        name: "1 Websites",
        tooltip:
          "Host up to 5 websites under the same hosting account.",
      },
      {
        name: "2 GB NVMe Storage",
        tooltip:
          "Get 2 GB of fast NVMe storage for website files, images, databases and other hosting data.",
      },
      {
        name: "100 GB Bandwidth",
        tooltip:
          "Your website can transfer up to 100 GB of data during the billing period.",
      },
      {
        name: "10 Email Accounts",
        tooltip:
          "Create up to 10 professional email accounts using your domain names.",
      },
      {
        name: "Free SSL Certificate",
        tooltip:
          "Helps secure your website with HTTPS encryption and protects data exchanged between your website and visitors.",
      },
      {
        name: "2 MySQL Databases",
        tooltip:
          "Create up to 2 MySQL databases for your websites and applications.",
      },
      {
        name: "Plesk Panel",
        tooltip:
          "Manage your hosting account and websites with our intuitive plesk panel.",
      },
      {
        name: "24/7 Support",
        tooltip:
          "Get hosting assistance whenever you need help with your service.",
      },
    ],
  },

  {
    name: "Premium",
    description:
      "More resources for established websites and businesses.",
    price: "₹2000",
    salePrice: "₹1800",
    saleActive: true,
    period: "/Year",
    popular: false,
    features: [
      {
        name: "1 Websites",
        tooltip:
          "Host up to 1 websites under the same hosting account.",
      },
      {
        name: "5 GB NVMe Storage",
        tooltip:
          "Get 5 GB of fast NVMe storage for website files, images, databases and other hosting data.",
      },
      {
        name: "100 GB Bandwidth",
        tooltip:
          "Your website can transfer up to 100 GB of data during the billing period.",
      },
      {
        name: "20 Email Accounts",
        tooltip:
          "Create up to 20 professional email accounts using your domain names.",
      },
      {
        name: "Free SSL Certificate",
        tooltip:
          "Helps secure your website with HTTPS encryption and protects data exchanged between your website and visitors.",
      },
      {
        name: "10 Databases",
        tooltip:
          "Create multiple databases for your websites and applications according to available hosting resources and service policies.",
      },
      {
        name: "Plesk Panel",
        tooltip:
          "Manage your hosting account and websites with our intuitive plesk panel.",
      },
      {
        name: "24/7 Support",
        tooltip:
          "Get hosting assistance whenever you need help with your service.",
      },
    ],
  },
];

export default function LimitedHostingPlans() {
  return (
    <section
      id="hosting-plans"
      className="bg-[#f6fafd] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
            Limited Shared Hosting
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Reliable Hosting for
            <span className="block text-[#006cb5]">
              Your Growing Website
            </span>
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Choose a hosting plan designed for speed, security and
            reliable website performance.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {plans.map((plan) => {
            const finalPrice = plan.saleActive
              ? plan.salePrice
              : plan.price;
            const discountPercentage = plan.saleActive
              ? Math.round(
                  ((Number(plan.price.replace(/[^\d]/g, "")) -
                    Number(plan.salePrice.replace(/[^\d]/g, ""))) /
                    Number(plan.price.replace(/[^\d]/g, ""))) *
                    100
                )
              : 0;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                  plan.popular
                    ? "border-[#006cb5] ring-2 ring-[#006cb5]/10"
                    : "border-slate-200"
                }`}
              >

                {/* Popular */}
                {plan.popular && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#006cb5] px-5 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </div>
                )}

                {/* Plan Name */}
                <h2 className="text-2xl font-bold text-[#071827]">
                  {plan.name}
                </h2>

                {/* Description */}
                <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                  {plan.description}
                </p>

                {/* Sale Space */}
                <div className="mt-5 h-6">
                  {plan.saleActive && (
                    <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-600">
                      Sale · {discountPercentage}% Off
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mt-5 flex flex-wrap items-end gap-2">
                  {plan.saleActive ? (
                    <>
                      {/* Regular Price */}
                      <span className="text-lg font-semibold text-slate-400 line-through">
                        {plan.price}
                      </span>

                      {/* Sale Price */}
                      <span className="text-4xl font-black text-[#006cb5]">
                        {plan.salePrice}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl font-black text-[#071827]">
                      {plan.price}
                    </span>
                  )}

                  <span className="mb-1 text-sm text-slate-500">
                    {plan.period}
                  </span>
                </div>

                {/* Billing */}
                <p className="mt-2 text-xs text-slate-400">
                  Billed Yearly
                </p>

                {/* CTA */}
                <PlanEnquiryModal
                  service="Limited Shared Hosting"
                  plan={plan.name}
                  price={`${finalPrice}${plan.period}`}
                  billing="Yearly"
                  features={plan.features.map(
                    (feature) => feature.name
                  )}
                />

                {/* Divider */}
                <div className="my-7 h-px bg-slate-100" />

                {/* Features Heading */}
                <p className="mb-4 text-sm font-bold text-[#071827]">
                  Plan Includes
                </p>

                {/* Features */}
                <div className="space-y-3.5">
                  {plan.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex items-start gap-3"
                    >
                      {/* Check */}
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eaf6ff] text-[#006cb5]">
                        <FiCheck className="text-xs" />
                      </span>

                      {/* Feature */}
                      <div className="flex min-w-0 items-center gap-1.5">
                        <span className="text-sm text-slate-600">
                          {feature.name}
                        </span>

                        {/* Tooltip - only when available */}
                        {feature.tooltip && (
                          <div className="group relative shrink-0">
                            <button
                              type="button"
                              aria-label={`More information about ${feature.name}`}
                              className="flex h-4 w-4 items-center justify-center rounded-full text-slate-400 transition hover:text-[#006cb5] focus:text-[#006cb5] focus:outline-none"
                            >
                              <FiInfo className="text-[13px]" />
                            </button>

                            {/* Tooltip */}
                            <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 hidden w-60 -translate-x-1/2 rounded-xl bg-[#071827] px-3.5 py-3 text-left text-xs leading-5 text-white shadow-xl group-hover:block group-focus-within:block">
                              {feature.tooltip}

                              {/* Arrow */}
                              <span className="absolute left-1/2 top-full -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-[#071827]" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="mt-8 text-xs text-slate-400 font-bold">
          * All hosting plan prices shown are inclusive of 18% GST.
        </p>


        {/* Trust Features */}
        <div className="mt-12 grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3">

          {/* Fast Performance */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
              <FiZap />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                Fast Performance
              </p>

              <p className="text-xs text-slate-500">
                Optimized hosting environment
              </p>
            </div>
          </div>

          {/* Secure Hosting */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
              <FiShield />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                Secure Hosting
              </p>

              <p className="text-xs text-slate-500">
                SSL and security protection
              </p>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
              <FiHeadphones />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                24/7 Support
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
