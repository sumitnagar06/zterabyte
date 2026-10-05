import type { Metadata } from "next";
import WebsiteDevelopmentHero from "@/components/website/WebsiteDevelopmentHero";
import WhyChooseWebsite from "@/components/website/WhyChooseWebsite";
import DevelopmentProcess from "@/components/website/DevelopmentProcess";
import StatsCounter from "@/components/common/StatsCounter";
import FAQ from "@/components/common/FAQ";
import WebsiteDevelopmentCTA from "@/components/website/WebsiteDevelopmentCTA";

export const metadata: Metadata = {
  alternates: { canonical: '/website-development' },
  title: "Website Development Company in Kota | Web Design Services - ZTERABYTE",
  description:
    "ZTERABYTE provides professional website development and web design services in Kota for businesses, startups and organizations.",
};

const websiteStats = [
  {
    value: 500,
    suffix: "+",
    label: "Websites Delivered",
    description: "Professional websites developed",
  },
  {
    value: 99,
    suffix: "%",
    label: "Responsive",
    description: "Mobile-friendly development",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Web development expertise",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support",
    description: "Technical assistance",
  },
];

const websiteFAQ = [
  {
    question: "What types of websites do you develop?",
    answer:
      "We develop business websites, corporate websites, e-commerce websites, WordPress websites and custom web applications based on your business requirements.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. We build responsive websites that are designed to work across desktops, tablets and smartphones.",
  },
  {
    question: "Can you develop an e-commerce website?",
    answer:
      "Yes. We can develop online stores with product management, shopping functionality and other features required for your business.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can redesign an existing website to provide a more modern design, better user experience and improved responsiveness.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "The technology stack depends on the project. We can use modern technologies such as React, Next.js, Node.js, WordPress and other suitable tools.",
  },
  {
    question: "Can I add new features to my website later?",
    answer:
      "Yes. We can structure the website so that additional functionality can be added as your business grows.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <main>

      {/* Hero + Services */}
      <WebsiteDevelopmentHero />

      {/* Why Choose Us */}
      <WhyChooseWebsite />

      {/* Development Process */}
      <DevelopmentProcess />

      {/* Website Development Statistics */}
      <StatsCounter
        items={websiteStats}
        dark
      />

      {/* FAQ */}
      <FAQ
        title="Website Development FAQs"
        description="Find answers to common questions about our website development services."
        items={websiteFAQ}
      />

      <WebsiteDevelopmentCTA />

    </main>
  );
}