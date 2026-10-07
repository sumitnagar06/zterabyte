"use client";

import { useState } from "react";
import Image from "next/image";
import PlanEnquiryModal from "@/components/common/PlanEnquiryModal";

import {
  FiCheck,
  FiShield,
  FiZap,
  FiHeadphones,
  FiDatabase,
  FiInfo,
} from "react-icons/fi";

type Region = "india" | "us";

type Feature = {
  name: string;
  tooltip: string;
};

const plans = {
  india: [
    {
      name: "Business",
      description: "Ideal for businesses that need more websites, resources and professional hosting.",
      price: "₹4000",
      salePrice: "₹3200",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: false,
      features: [
        {
          name: "Single Domain",
        },
        {
          name: "Free SSL Certificate",
          tooltip:
            "Now with our Free SSL you get added security and can gain your customers' trust on your website. Refer to the FAQs section to learn how to enable the Free SSL certificate.",
        },
        {
          name: "20 GB NVMe SSD Storage",
        },
        {
          name: "200 GB Data Transfer",
        },
        {
          name: "10 Email Accounts",
          tooltip:
            "The total storage used by emails cannot exceed 10GB space",
        },
        {
          name: "Free cPanel",
          tooltip:
            "Get cPanel - The Linux web hosting industry's most reliable, intuitive control panel to ease management of files, emails, domains on you hosting order - absolutely free!",
        },
        {
          name: "1-click Install Enabled",
          tooltip:
            "1-click Install of 400+ Scripts and popular CMSes sych as Joomla, WordPress, Drupal, PHPBB and more",
        },
        {
          name: "24/7 Support",
          tooltip:
            "Get assistance whenever you need help with your hosting service.",
        },
      ],
    },

    {
      name: "Professional",
      description: "A powerful hosting solution for growing businesses and high-traffic websites.",
      price: "₹8800",
      salePrice: "₹7000",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: true,
      features: [
        {
          name: "5 Domains",
        },
        {
          name: "Free SSL Certificate",
          tooltip:
            "Now with our Free SSL you get added security and can gain your customers' trust on your website. Refer to the FAQs section to learn how to enable the Free SSL certificate.",
        },
        {
          name: "25 GB NVMe SSD Storage",
        },
        {
          name: "Unmetered Data Transfer",
        },
        {
          name: "25 Email Accounts",
          tooltip:
            "The total storage used by emails cannot exceed 10GB space",
        },
        {
          name: "Free cPanel",
          tooltip:
            "Get cPanel - The Linux web hosting industry's most reliable, intuitive control panel to ease management of files, emails, domains on you hosting order - absolutely free!",
        },
        {
          name: "1-click Install Enabled",
          tooltip:
            "1-click Install of 400+ Scripts and popular CMSes sych as Joomla, WordPress, Drupal, PHPBB and more",
        },
        {
          name: "24/7 Support",
          tooltip:
            "Get assistance whenever you need help with your hosting service.",
        },
      ],
    },

    {
      name: "Enterprise",
      description:
        "Designed for established businesses requiring maximum resources and support.",
      price: "₹10600",
      salePrice: "₹8500",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: false,
      features: [
        {
          name: "10 Domains",
        },
        {
          name: "Free SSL Certificate",
          tooltip:
            "Now with our Free SSL you get added security and can gain your customers' trust on your website. Refer to the FAQs section to learn how to enable the Free SSL certificate.",
        },
        {
          name: "50 GB NVMe SSD Storage",
        },
        {
          name: "Unmetered Data Transfer",
        },
        {
          name: "50 Email Accounts",
          tooltip:
            "The total storage used by emails cannot exceed 10GB space",
        },
        {
          name: "Free cPanel",
          tooltip:
            "Get cPanel - The Linux web hosting industry's most reliable, intuitive control panel to ease management of files, emails, domains on you hosting order - absolutely free!",
        },
        {
          name: "1-click Install Enabled",
          tooltip:
            "1-click Install of 400+ Scripts and popular CMSes sych as Joomla, WordPress, Drupal, PHPBB and more",
        },
        {
          name: "24/7 Support",
          tooltip:
            "Get assistance whenever you need help with your hosting service.",
        },
      ],
    },
  ],

  us: [
    {
      name: "Business",
      description:
        "Ideal for businesses that need more websites, resources and professional hosting.",
      price: "₹3400",
      salePrice: "₹2720",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: false,
      features: [
        {
          name: "Single Domain",
        },
        {
          name: "Free SSL Certificate",
          tooltip:
            "Now with our Free SSL you get added security and can gain your customers' trust on your website. Refer to the FAQs section to learn how to enable the Free SSL certificate.",
        },
        {
          name: "20 GB NVMe SSD Storage",
        },
        {
          name: "200 GB Data Transfer",
        },
        {
          name: "10 Email Accounts",
          tooltip:
            "The total storage used by emails cannot exceed 10GB space",
        },
        {
          name: "Free cPanel",
          tooltip:
            "Get cPanel - The Linux web hosting industry's most reliable, intuitive control panel to ease management of files, emails, domains on you hosting order - absolutely free!",
        },
        {
          name: "1-click Install Enabled",
          tooltip:
            "1-click Install of 400+ Scripts and popular CMSes sych as Joomla, WordPress, Drupal, PHPBB and more",
        },
        {
          name: "24/7 Support",
          tooltip:
            "Get assistance whenever you need help with your hosting service.",
        },
      ],
    },

    {
      name: "Professional",
      description: "A powerful hosting solution for growing businesses and high-traffic websites.",
      price: "₹8500",
      salePrice: "₹6800",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: true,
      features: [
        {
          name: "5 Domains",
        },
        {
          name: "Free SSL Certificate",
          tooltip:
            "Now with our Free SSL you get added security and can gain your customers' trust on your website. Refer to the FAQs section to learn how to enable the Free SSL certificate.",
        },
        {
          name: "25 GB NVMe SSD Storage",
        },
        {
          name: "Unmetered Data Transfer",
        },
        {
          name: "25 Email Accounts",
          tooltip:
            "The total storage used by emails cannot exceed 10GB space",
        },
        {
          name: "Free cPanel",
          tooltip:
            "Get cPanel - The Linux web hosting industry's most reliable, intuitive control panel to ease management of files, emails, domains on you hosting order - absolutely free!",
        },
        {
          name: "1-click Install Enabled",
          tooltip:
            "1-click Install of 400+ Scripts and popular CMSes sych as Joomla, WordPress, Drupal, PHPBB and more",
        },
        {
          name: "24/7 Support",
          tooltip:
            "Get assistance whenever you need help with your hosting service.",
        },
      ],
    },

    {
      name: "Enterprise",
      description: "Designed for established businesses requiring maximum resources and support.",
      price: "₹10300",
      salePrice: "₹8200",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: false,
      features: [
        {
          name: "10 Domains",
        },
        {
          name: "Free SSL Certificate",
          tooltip:
            "Now with our Free SSL you get added security and can gain your customers' trust on your website. Refer to the FAQs section to learn how to enable the Free SSL certificate.",
        },
        {
          name: "50 GB NVMe SSD Storage",
        },
        {
          name: "Unmetered Data Transfer",
        },
        {
          name: "50 Email Accounts",
          tooltip:
            "The total storage used by emails cannot exceed 10GB space",
        },
        {
          name: "Free cPanel",
          tooltip:
            "Get cPanel - The Linux web hosting industry's most reliable, intuitive control panel to ease management of files, emails, domains on you hosting order - absolutely free!",
        },
        {
          name: "1-click Install Enabled",
          tooltip:
            "1-click Install of 400+ Scripts and popular CMSes sych as Joomla, WordPress, Drupal, PHPBB and more",
        },
        {
          name: "24/7 Support",
          tooltip:
            "Get assistance whenever you need help with your hosting service.",
        },
      ],
    },
  ],
};

export default function UnlimitedHostingPlans() {
  const [region, setRegion] = useState<Region>("us");

  const activePlans = plans[region];

  return (
    <section
      id="hosting-plans"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
            Linux Shared Hosting
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Linux Shared Hosting for
            <span className="block text-[#006cb5]">
              Growing Businesses
            </span>
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Get the resources, flexibility and performance your growing
            business needs to build a stronger online presence.
          </p>
        </div>

        {/* Region Tabs */}
        <div className="mx-auto mt-10 w-full max-w-md">
          <div
            className="grid grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 shadow-sm"
            role="tablist"
            aria-label="Hosting pricing region"
          >
            {/* India Tab */}
            <button
              type="button"
              role="tab"
              aria-selected={region === "india"}
              onClick={() => setRegion("india")}
              className={`rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 sm:px-6 ${
                region === "india"
                  ? "bg-[#006cb5] text-white shadow-md"
                  : "text-slate-600 hover:bg-white hover:text-[#006cb5]"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Image
                  src="/flags/india.svg"
                  alt="India"
                  width={22}
                  height={15}
                  className="h-[15px] w-[22px] rounded-sm object-cover"
                />
                India
              </span>
            </button>

            {/* US Tab */}
            <button
              type="button"
              role="tab"
              aria-selected={region === "us"}
              onClick={() => setRegion("us")}
              className={`rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 sm:px-6 ${
                region === "us"
                  ? "bg-[#006cb5] text-white shadow-md"
                  : "text-slate-600 hover:bg-white hover:text-[#006cb5]"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Image
                  src="/flags/usa.svg"
                  alt="United States"
                  width={22}
                  height={15}
                  className="h-[15px] w-[22px] rounded-sm object-cover"
                />
                US
              </span>
            </button>
          </div>
        </div>

        {/* Active Region Text */}
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-slate-500">
            Showing{" "}
            <span className="font-bold text-[#006cb5]">
              {region === "india" ? "India" : "United States"}
            </span>{" "}
            Server Location Plans
          </p>
        </div>

        {/* Hosting Plans */}
        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {activePlans.map((plan) => {
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

                {/* Popular Badge */}
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

                {/* Sale Badge Space */}
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
                      <span className="text-lg font-semibold text-slate-400 line-through">
                        {plan.price}
                      </span>

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

                {/* Enquiry Button */}
                <PlanEnquiryModal
                  service={`Linux Shared Hosting - ${
                    region === "india" ? "India" : "US"
                  }`}
                  plan={plan.name}
                  price={`${finalPrice}${plan.period}`}
                  billing={plan.billing}
                  features={plan.features.map((feature) => feature.name)}
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
                      {/* Check Icon */}
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eaf6ff] text-[#006cb5]">
                        <FiCheck className="text-xs" />
                      </span>

                      {/* Feature + Tooltip */}
                      <div className="flex min-w-0 items-center gap-1.5">
                        <span className="text-sm text-slate-600">
                          {feature.name}
                        </span>

                        {feature.tooltip && (
                          <div className="group relative shrink-0">
                            <button
                              type="button"
                              aria-label={`More information about ${feature.name}`}
                              className="flex h-4 w-4 items-center justify-center rounded-full text-slate-400 transition hover:text-[#006cb5] focus:text-[#006cb5] focus:outline-none"
                            >
                              <FiInfo className="text-[13px]" />
                            </button>

                            <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 hidden w-60 -translate-x-1/2 rounded-xl bg-[#071827] px-3.5 py-3 text-left text-xs leading-5 text-white shadow-xl group-hover:block group-focus-within:block">
                              {feature.tooltip}

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


        {/* Hosting Benefits */}
        <div className="mt-12 grid gap-5 rounded-2xl border border-slate-200 bg-[#f6fafd] p-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Performance */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
              <FiZap />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                High Performance
              </p>

              <p className="text-xs text-slate-500">
                Built for speed
              </p>
            </div>
          </div>

          {/* Resources */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
              <FiDatabase />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                Flexible Resources
              </p>

              <p className="text-xs text-slate-500">
                Room to grow
              </p>
            </div>
          </div>

          {/* Security */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
              <FiShield />
            </div>

            <div>
              <p className="text-sm font-bold text-[#071827]">
                Secure Hosting
              </p>

              <p className="text-xs text-slate-500">
                Protected environment
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
                Priority Support
              </p>

              <p className="text-xs text-slate-500">
                Help when needed
              </p>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
