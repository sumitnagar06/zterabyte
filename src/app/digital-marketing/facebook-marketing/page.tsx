import FacebookMarketingHero from "@/components/digital-marketing/FacebookMarketingHero";
import FacebookMarketingServices from "@/components/digital-marketing/FacebookMarketingServices";
import FacebookMarketingProcess from "@/components/digital-marketing/FacebookMarketingProcess";
import FacebookMarketingResults from "@/components/digital-marketing/FacebookMarketingResults";
import FacebookMarketingCTA from "@/components/digital-marketing/FacebookMarketingCTA";

export const metadata = {
  alternates: { canonical: '/digital-marketing/facebook-marketing' },
};

export default function FacebookMarketingPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <FacebookMarketingHero />
      <FacebookMarketingServices />
      <FacebookMarketingProcess />
      <FacebookMarketingResults />
      <FacebookMarketingCTA />

    </main>
  );
}