import type { Metadata } from "next";
import BusinessEmailPlans from "@/components/email/BusinessEmailPlans";
import BusinessEmailWhyChoose from "@/components/email/BusinessEmailWhyChoose";
// import StatsCounter from "@/components/common/StatsCounter";
import FAQ from "@/components/common/FAQ";
import { emailFAQ } from "@/components/common/emailFAQ";

export const metadata: Metadata = {
  alternates: { canonical: '/email-hosting/business-email-hosting' },
  title: "Business Email Hosting in Kota | Professional Email - ZTERABYTE",
  description:
    "Create professional business email accounts with reliable email hosting from ZTERABYTE. Suitable for businesses, teams and organizations.",
};

const businessEmailStats = [
  {
    value: 5000,
    suffix: "+",
    label: "Email Accounts",
    description: "Professional business mailboxes",
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Email Uptime",
    description: "Reliable email access",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Email Support",
    description: "Assistance when you need it",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Email hosting expertise",
  },
];

export default function BusinessEmailPage() {
  return (
    <main>

      {/* Business Email Plans */}
      <BusinessEmailPlans />

      {/* Email Statistics */}
      {/* <StatsCounter
        items={businessEmailStats}
      /> */}

      {/* Business Email Features */}
      <BusinessEmailWhyChoose />

      {/* FAQ */}
      <FAQ
        title="Business Email FAQs"
        description="Find answers to common questions about professional business email."
        items={emailFAQ}
      />

    </main>
  );
}
