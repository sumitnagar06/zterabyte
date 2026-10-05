import SEOAndSMOHero from "@/components/digital-marketing/SEOAndSMOHero";
import SEOAndSMOWhyChoose from "@/components/digital-marketing/SEOAndSMOWhyChoose";
import SEOAndSMOServices from "@/components/digital-marketing/SEOAndSMOServices";
import SEOAndSMOProcess from "@/components/digital-marketing/SEOAndSMOProcess";
import SEOAndSMOResults from "@/components/digital-marketing/SEOAndSMOResults";
import SEOAndSMOCTA from "@/components/digital-marketing/SEOAndSMOCTA";


export const metadata = {
  alternates: { canonical: '/digital-marketing/seo-smo' },
};

export default function SEOAndSMOPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <SEOAndSMOHero />
      <SEOAndSMOWhyChoose />
      <SEOAndSMOServices />
      <SEOAndSMOProcess />
      <SEOAndSMOResults />
      <SEOAndSMOCTA />

    </main>
  );
}