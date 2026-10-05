import OffPageSEOHero from "@/components/digital-marketing/OffPageSEOHero";
import OffPageSEOServices from "@/components/digital-marketing/OffPageSEOServices";
import OffPageSEOProcess from "@/components/digital-marketing/OffPageSEOProcess";
import OffPageSEOResults from "@/components/digital-marketing/OffPageSEOResults";
import OffPageSEOCTA from "@/components/digital-marketing/OffPageSEOCTA";

export const metadata = {
  alternates: { canonical: '/digital-marketing/off-page-seo' },
};

export default function OffPageSEOPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <OffPageSEOHero />

      <OffPageSEOServices />

      <OffPageSEOProcess />

      <OffPageSEOResults />

      <OffPageSEOCTA />

    </main>
  );
}