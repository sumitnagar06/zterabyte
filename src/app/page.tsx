import type { Metadata } from "next";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import Services from "@/components/home/Services";
import DomainSection from "@/components/home/DomainSection";
// import HostingPlans from "@/components/home/HostingPlans";
// import EmailHosting from "@/components/home/EmailHosting";
// import Development from "@/components/home/Development";
// import DesignServices from "@/components/home/DesignServices";
// import Marketing from "@/components/home/Marketing";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import HomeCTA from "@/components/home/HomeCTA";

const homeTitle =
  "ZTERABYTE - Web Development, Web Hosting & Digital Marketing";
const homeDescription =
  "Build your online presence with ZTERABYTE. Domain, Web Hosting, Website Development, Email Hosting, Digital Marketing and more.";
const socialImage = "https://www.zterabyte.com/images/zterabyte.jpg";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  openGraph: {
    type: "website",
    url: "https://www.zterabyte.com/",
    title: homeTitle,
    description: homeDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [socialImage],
  },
};

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />

      <Hero />

      <TrustStats />

      <Services />

      <DomainSection />

      {/* <HostingPlans /> */}

      {/* <EmailHosting /> */}

      {/* <Development /> */}

      {/* <DesignServices /> */}

      {/* <Marketing /> */}

      <WhyChooseUs />

      <Process />

      <Testimonials />

      <HomeCTA />
    </>
  );
}
