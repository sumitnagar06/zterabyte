import TwitterMarketingHero from "@/components/digital-marketing/TwitterMarketingHero";
import TwitterMarketingServices from "@/components/digital-marketing/TwitterMarketingServices";
import TwitterMarketingProcess from "@/components/digital-marketing/TwitterMarketingProcess";
import TwitterMarketingResults from "@/components/digital-marketing/TwitterMarketingResults";
import TwitterMarketingCTA from "@/components/digital-marketing/TwitterMarketingCTA";

export const metadata = {
  alternates: { canonical: '/digital-marketing/twitter-marketing' },
};

export default function TwitterMarketingPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <TwitterMarketingHero />
      <TwitterMarketingServices />
      <TwitterMarketingProcess />
      <TwitterMarketingResults />
      <TwitterMarketingCTA />

    </main>
  );
}