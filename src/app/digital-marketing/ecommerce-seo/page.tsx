import EcommerceSEOHero from "@/components/digital-marketing/EcommerceSEOHero";
import EcommerceSEOServices from "@/components/digital-marketing/EcommerceSEOServices";
import EcommerceSEOProcess from "@/components/digital-marketing/EcommerceSEOProcess";
import EcommerceSEOResults from "@/components/digital-marketing/EcommerceSEOResults";
import EcommerceSEOCTA from "@/components/digital-marketing/EcommerceSEOCTA";

export const metadata = {
  alternates: { canonical: '/digital-marketing/ecommerce-seo' },
};

export default function EcommerceSEOPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <EcommerceSEOHero />
      <EcommerceSEOServices />
      <EcommerceSEOProcess />
      <EcommerceSEOResults />
      <EcommerceSEOCTA />

    </main>
  );
}