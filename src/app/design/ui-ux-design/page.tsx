import UIUXDesignHero from "@/components/design/UIUXDesignHero";
import UIUXDesignWhyChoose from "@/components/design/UIUXDesignWhyChoose";
import UIUXDesignProcess from "@/components/design/UIUXDesignProcess";
import UIUXDesignDeliverables from "@/components/design/UIUXDesignDeliverables";
import UIUXDesignCTA from "@/components/design/UIUXDesignCTA";

export const metadata = {
  alternates: { canonical: '/design/ui-ux-design' },
};

export default function UIUXDesignPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      <UIUXDesignHero />
      <UIUXDesignWhyChoose />
      <UIUXDesignProcess />
      <UIUXDesignDeliverables />
      <UIUXDesignCTA />

    </main>
  );
}