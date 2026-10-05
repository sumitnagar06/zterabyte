import EmailMarketingHero from "@/components/digital-marketing/EmailMarketingHero";
import EmailMarketingServices from "@/components/digital-marketing/EmailMarketingServices";
import EmailMarketingProcess from "@/components/digital-marketing/EmailMarketingProcess";
import EmailMarketingResults from "@/components/digital-marketing/EmailMarketingResults";
import EmailMarketingCTA from "@/components/digital-marketing/EmailMarketingCTA";

export const metadata = {
  alternates: { canonical: '/digital-marketing/email-marketing' },
};

export default function EmailMarketingPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <EmailMarketingHero />
      <EmailMarketingServices />
      <EmailMarketingProcess />
      <EmailMarketingResults />
      <EmailMarketingCTA />

    </main>
  );
}