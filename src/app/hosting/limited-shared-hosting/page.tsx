import type { Metadata } from "next";
import LimitedHostingHero from "@/components/hosting/LimitedHostingHero";
import LimitedHostingPlans from "@/components/hosting/LimitedHostingPlans";
import LimitedHostingSpecifications from "@/components/hosting/LimitedHostingSpecifications";
// import StatsCounter from "@/components/common/StatsCounter";
import FAQ from "@/components/common/FAQ";
import { hostingFAQ } from "@/components/common/hostingFAQ";

export const metadata: Metadata = {
  alternates: { canonical: '/hosting/limited-shared-hosting' },
  title: "Limited Web Hosting Services in Kota | Fast & Reliable Hosting - ZTERABYTE",
  description:
    "Get reliable limited web hosting services with fast performance, SSL, business email and flexible hosting plans for your website from ZTERABYTE.",
};

const limitedHostingStats = [
  {
    value: 500,
    suffix: "+",
    label: "Websites Hosted",
    description: "Reliable shared hosting",
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Uptime",
    description: "Stable hosting environment",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Technical Support",
    description: "Help when you need it",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Hosting expertise",
  },
];

export default function LimitedHostingPage() {
  return (
    <main>

      {/* Hero */}
      <LimitedHostingHero />

      {/* Hosting Plans */}
      <LimitedHostingPlans />

      {/* Hosting Statistics */}
      {/* <StatsCounter items={limitedHostingStats} /> */}

      {/* Hosting Technical Specifications */}
      <LimitedHostingSpecifications />

      {/* FAQ */}
      <FAQ
        title="Limited Shared Hosting FAQs"
        description="Find answers to common questions about our shared hosting plans."
        items={hostingFAQ}
      />

    </main>
  );
}
