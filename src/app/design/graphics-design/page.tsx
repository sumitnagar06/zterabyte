import GraphicsDesignHero from "@/components/design/GraphicsDesignHero";
import GraphicsDesignWhyChoose from "@/components/design/GraphicsDesignWhyChoose";
import GraphicsDesignProcess from "@/components/design/GraphicsDesignProcess";
import GraphicsDesignServices from "@/components/design/GraphicsDesignServices";
import GraphicsDesignCTA from "@/components/design/GraphicsDesignCTA";

export const metadata = {
  alternates: { canonical: '/design/graphics-design' },
};

export default function GraphicsDesignPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <GraphicsDesignHero />
      <GraphicsDesignWhyChoose />
      <GraphicsDesignProcess />
      <GraphicsDesignServices />
      <GraphicsDesignCTA />

    </main>
  );
}