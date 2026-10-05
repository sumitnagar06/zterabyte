import type { Metadata } from "next";
import UnlimitedHostingHero from "@/components/hosting/UnlimitedHostingHero";
import UnlimitedHostingPlans from "@/components/hosting/UnlimitedHostingPlans";
import UnlimitedHostingWhyChoose from "@/components/hosting/UnlimitedHostingWhyChoose";
//import StatsCounter from "@/components/common/StatsCounter";
import FAQ from "@/components/common/FAQ";
import { hostingFAQ } from "@/components/common/hostingFAQ";

export const metadata: Metadata = {
  alternates: { canonical: '/hosting/unlimited-shared-hosting' },
  title: "Unlimited Web Hosting Services in Kota | Fast & Reliable Hosting - ZTERABYTE",
  description:
    "Get reliable Unlimited web hosting services with fast performance, SSL, business email and flexible hosting plans for your website from ZTERABYTE.",
};

const unlimitedHostingStats = [
  {
    value: 1000,
    suffix: "+",
    label: "Websites Hosted",
    description: "Powerful hosting infrastructure",
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Uptime",
    description: "Designed for reliability",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Server Monitoring",
    description: "Continuous infrastructure monitoring",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Hosting expertise",
  },
];

export default function UnlimitedHostingPage() {
  return (
    <main>

      {/* Hero */}
      <UnlimitedHostingHero />

      {/* Unlimited Hosting Plans */}
      <UnlimitedHostingPlans />

      {/* Linux Shared Hosting Features */}
      <UnlimitedHostingWhyChoose />

      {/* Hosting Statistics */}
      {/* <StatsCounter
        items={unlimitedHostingStats}
        dark
      /> */}

      {/* FAQ */}
      <FAQ
        title="Unlimited Shared Hosting FAQs"
        description="Find answers to common questions about our unlimited shared hosting service."
        items={hostingFAQ}
      />

    </main>
  );
}
