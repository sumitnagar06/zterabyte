import type { Metadata } from "next";

import DomainHero from "@/components/domain/DomainHero";
import DomainServices from "@/components/domain/DomainServices";
import DomainSection from "@/components/domain/DomainSection";
import DomainExtensions from "@/components/domain/DomainExtensions";
import DomainWhyChoose from "@/components/domain/DomainWhyChoose";
import DomainTransfer from "@/components/domain/DomainTransfer";
import DomainSecurity from "@/components/domain/DomainSecurity";
import DomainCTA from "@/components/domain/DomainCTA";

export const metadata: Metadata = {
  alternates: { canonical: '/domains' },
  title: "Cheap Domain Registration in Kota | Buy Domain Name - ZTERABYTE",
  description:
    "Register your domain name with ZTERABYTE. Find and manage .com, .in, .net, .org and other domain extensions with reliable domain services in Kota.",
};

export default function DomainsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <DomainHero />
      <DomainServices />
      <DomainSection />
      <DomainExtensions />
      <DomainWhyChoose />
      <DomainTransfer />
      <DomainSecurity />
      <DomainCTA />
    </main>
  );
}