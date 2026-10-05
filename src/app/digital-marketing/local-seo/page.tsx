import LocalSEOHero from "@/components/digital-marketing/LocalSEOHero";
import LocalSEOServices from "@/components/digital-marketing/LocalSEOServices";
import LocalSEOProcess from "@/components/digital-marketing/LocalSEOProcess";
import LocalSEOResults from "@/components/digital-marketing/LocalSEOResults";
import LocalSEOCTA from "@/components/digital-marketing/LocalSEOCTA";

export const metadata = {
  alternates: { canonical: '/digital-marketing/local-seo' },
};

export default function LocalSEOPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <LocalSEOHero />
      <LocalSEOServices />
      <LocalSEOProcess />
      <LocalSEOResults />
      <LocalSEOCTA />

    </main>
  );
}