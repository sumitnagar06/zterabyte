"use client";

import Image from "next/image";
import { useState } from "react";
import PlanEnquiryModal from "@/components/common/PlanEnquiryModal";
import { FiCheck, FiInfo } from "react-icons/fi";

type Region = "india" | "us";

type PlanFeature = {
  name: string;
  tooltip?: string;
};

type HostingPlan = {
  name: string;
  description: string;
  price: string;
  salePrice: string;
  saleActive: boolean;
  period: string;
  billing: string;
  popular: boolean;
  features: PlanFeature[];
};

// Dummy regular and sale prices for both regions. Replace these amounts with
// the final WordPress Hosting prices before publishing.
const plans: Record<Region, HostingPlan[]> = {
  india: [
    {
      name: "Starter",
      description: "A simple place to start your WordPress journey.",
      price: "₹6000",
      salePrice: "₹3900",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: false,
      features: [
        { name: "1 Website" },
        { name: "10 GB NVMe SSD Storage" },
        { name: "5 Email Accounts" },
        { name: "5 Databases" },
        { name: "300 Concurrent Users" },
        { name: "Unmetered Bandwidth" },
        { name: "Managed WordPress Updates" },
        { name: "Web Application Firewall" },
        { name: "DDoS Protection" },
        { name: "Free Malware Scanning" },
        { name: "Free SSL Certificate" },
      ],
    },
    {
      name: "Performance",
      description: "More room for a growing website and its audience.",
      price: "₹7600",
      salePrice: "₹4940",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: false,
      features: [
        { name: "5 Website" },
        { name: "25 GB NVMe SSD Storage" },
        { name: "25 Email Accounts" },
        { name: "15 Databases" },
        { name: "300 Concurrent Users" },
        { name: "Unmetered Bandwidth" },
        { name: "Managed WordPress Updates" },
        { name: "Web Application Firewall" },
        { name: "DDoS Protection" },
        { name: "Free Malware Scanning" },
        { name: "Free SSL Certificate" },
      ],
    },
    {
      name: "Business",
      description: "A flexible option for business-critical websites.",
      price: "₹9000",
      salePrice: "₹5860",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: true,
      features: [
        { name: "10 Website" },
        { name: "50 GB NVMe SSD Storage" },
        { name: "50 Email Accounts" },
        { name: "25 Databases" },
        { name: "300 Concurrent Users" },
        { name: "Unmetered Bandwidth" },
        { name: "Managed WordPress Updates" },
        { name: "Web Application Firewall" },
        { name: "DDoS Protection" },
        { name: "Free Malware Scanning" },
        { name: "Free SSL Certificate" },
      ],
    },
    {
      name: "Professional",
      description: "A higher tier for established WordPress projects.",
      price: "₹21900",
      salePrice: "₹14300",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: false,
      features: [
        { name: "25 Website" },
        { name: "75 GB NVMe SSD Storage" },
        { name: "75 Email Accounts" },
        { name: "50 Databases" },
        { name: "600 Concurrent Users" },
        { name: "Unmetered Bandwidth" },
        { name: "Managed WordPress Updates" },
        { name: "Web Application Firewall" },
        { name: "DDoS Protection" },
        { name: "Free Malware Scanning" },
        { name: "Free SSL Certificate" },
      ],
    },
  ],
  us: [
    {
      name: "Starter",
      description: "A simple place to start your WordPress journey.",
      price: "₹6000",
      salePrice: "₹3900",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: false,
      features: [
        { name: "1 Website" },
        { name: "10 GB NVMe SSD Storage" },
        { name: "5 Email Accounts" },
        { name: "5 Databases" },
        { name: "300 Concurrent Users" },
        { name: "Unmetered Bandwidth" },
        { name: "Managed WordPress Updates" },
        { name: "Web Application Firewall" },
        { name: "DDoS Protection" },
        { name: "Free Malware Scanning" },
        { name: "Free SSL Certificate" },
      ],
    },
    {
      name: "Performance",
      description: "More room for a growing website and its audience.",
      price: "₹7600",
      salePrice: "₹4940",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: false,
      features: [
        { name: "5 Website" },
        { name: "25 GB NVMe SSD Storage" },
        { name: "25 Email Accounts" },
        { name: "15 Databases" },
        { name: "300 Concurrent Users" },
        { name: "Unmetered Bandwidth" },
        { name: "Managed WordPress Updates" },
        { name: "Web Application Firewall" },
        { name: "DDoS Protection" },
        { name: "Free Malware Scanning" },
        { name: "Free SSL Certificate" },
      ],
    },
    {
      name: "Business",
      description: "A flexible option for business-critical websites.",
      price: "₹9000",
      salePrice: "₹5860",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: true,
      features: [
        { name: "10 Website" },
        { name: "50 GB NVMe SSD Storage" },
        { name: "50 Email Accounts" },
        { name: "25 Databases" },
        { name: "300 Concurrent Users" },
        { name: "Unmetered Bandwidth" },
        { name: "Managed WordPress Updates" },
        { name: "Web Application Firewall" },
        { name: "DDoS Protection" },
        { name: "Free Malware Scanning" },
        { name: "Free SSL Certificate" },
      ],
    },
    {
      name: "Professional",
      description: "A higher tier for established WordPress projects.",
      price: "₹21900",
      salePrice: "₹14300",
      saleActive: true,
      period: "/year",
      billing: "Yearly",
      popular: false,
      features: [
        { name: "25 Website" },
        { name: "75 GB NVMe SSD Storage" },
        { name: "75 Email Accounts" },
        { name: "50 Databases" },
        { name: "600 Concurrent Users" },
        { name: "Unmetered Bandwidth" },
        { name: "Managed WordPress Updates" },
        { name: "Web Application Firewall" },
        { name: "DDoS Protection" },
        { name: "Free Malware Scanning" },
        { name: "Free SSL Certificate" },
      ],
    },
  ],
};

export default function WordPressHostingPlans() {
  const [region, setRegion] = useState<Region>("us");
  const activePlans = plans[region];

  return (
    <section id="hosting-plans" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
            WordPress Hosting Plans
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            WordPress Hosting for
            <span className="block text-[#006cb5]">Every Stage of Growth</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Choose from four options for personal websites, businesses and growing WordPress projects.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-md">
          <div
            className="grid grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 shadow-sm"
            role="tablist"
            aria-label="WordPress hosting pricing region"
          >
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
                <Image src="/flags/india.svg" alt="India" width={22} height={15} className="h-[15px] w-[22px] rounded-sm object-cover" />
                India
              </span>
            </button>
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
                <Image src="/flags/usa.svg" alt="United States" width={22} height={15} className="h-[15px] w-[22px] rounded-sm object-cover" />
                US
              </span>
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-slate-500">
            Showing{" "}
            <span className="font-bold text-[#006cb5]">
              {region === "india" ? "India" : "United States"}
            </span>{" "}
            Server Location Plans
          </p>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {activePlans.map((plan) => {
            const finalPrice = plan.saleActive ? plan.salePrice : plan.price;
            const regularPriceValue = Number(plan.price.replace(/[^\d]/g, ""));
            const salePriceValue = Number(plan.salePrice.replace(/[^\d]/g, ""));
            const discountPercentage = plan.saleActive
              ? Math.round(
                  ((regularPriceValue - salePriceValue) / regularPriceValue) *
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
              {plan.popular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#006cb5] px-5 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </div>
              )}

              <h2 className="text-2xl font-bold text-[#071827]">{plan.name}</h2>
              <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                {plan.description}
              </p>

              <div className="mt-5 h-6">
                {plan.saleActive && (
                  <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-600">
                    Sale · {discountPercentage}% Off
                  </span>
                )}
              </div>

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

              <p className="mt-2 text-xs text-slate-400">Billed Yearly</p>

              <div className="mt-5">
                <PlanEnquiryModal
                  service={`WordPress Hosting - ${region === "india" ? "India" : "US"}`}
                  plan={plan.name}
                  price={`${finalPrice}${plan.period}`}
                  billing={plan.billing}
                  features={plan.features.map((feature) => feature.name)}
                />
              </div>

              <div className="my-7 h-px bg-slate-100" />
              <p className="mb-4 text-sm font-bold text-[#071827]">
                Plan Includes
              </p>
              <div className="space-y-3.5">
                {plan.features.map((feature: PlanFeature) => (
                  <div key={feature.name} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eaf6ff] text-[#006cb5]">
                      <FiCheck className="text-xs" />
                    </span>
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
      </div>
    </section>
  );
}
