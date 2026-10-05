import type { Metadata } from "next";
import DigitalMarketingHero from "@/components/digital-marketing/DigitalMarketingHero";
import DigitalMarketingWhyChoose from "@/components/digital-marketing/DigitalMarketingWhyChoose";
import DigitalMarketingServices from "@/components/digital-marketing/DigitalMarketingServices";
import DigitalMarketingProcess from "@/components/digital-marketing/DigitalMarketingProcess";
import DigitalMarketingResults from "@/components/digital-marketing/DigitalMarketingResults";
import DigitalMarketingCTA from "@/components/digital-marketing/DigitalMarketingCTA";

export const metadata: Metadata = {
  alternates: { canonical: '/digital-marketing' },
  title: "Digital Marketing Company in Kota | SEO Services - ZTERABYTE",
  description:
    "Grow your business online with SEO, social media and digital marketing services from ZTERABYTE. Get more visibility and reach potential customers.",
};

export default function DigitalMarketingPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <DigitalMarketingHero />
      <DigitalMarketingWhyChoose />
      <DigitalMarketingServices />
      <DigitalMarketingProcess />
      <DigitalMarketingResults />
      <DigitalMarketingCTA />

    </main>
  );
}