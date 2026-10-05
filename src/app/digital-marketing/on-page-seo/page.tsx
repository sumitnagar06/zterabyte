import OnPageSEOHero from "@/components/digital-marketing/OnPageSEOHero";
import OnPageSEOServices from "@/components/digital-marketing/OnPageSEOServices";
import OnPageSEOProcess from "@/components/digital-marketing/OnPageSEOProcess";
import OnPageSEOResults from "@/components/digital-marketing/OnPageSEOResults";
import OnPageSEOCTA from "@/components/digital-marketing/OnPageSEOCTA";

export const metadata = {
  alternates: { canonical: '/digital-marketing/on-page-seo' },
};

export default function OnPageSEOPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <OnPageSEOHero />
      <OnPageSEOServices />
      <OnPageSEOProcess />
      <OnPageSEOResults />
      <OnPageSEOCTA />

    </main>
  );
}