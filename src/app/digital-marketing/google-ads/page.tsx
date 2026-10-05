import GoogleAdsHero from "@/components/digital-marketing/GoogleAdsHero";
import GoogleAdsServices from "@/components/digital-marketing/GoogleAdsServices";
import GoogleAdsProcess from "@/components/digital-marketing/GoogleAdsProcess";
import GoogleAdsResults from "@/components/digital-marketing/GoogleAdsResults";
import GoogleAdsCTA from "@/components/digital-marketing/GoogleAdsCTA";

export const metadata = {
  alternates: { canonical: '/digital-marketing/google-ads' },
};

export default function GoogleAdsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <GoogleAdsHero />
      <GoogleAdsServices />
      <GoogleAdsProcess />
      <GoogleAdsResults />
      <GoogleAdsCTA />

    </main>
  );
}