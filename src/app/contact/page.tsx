import type { Metadata } from "next";
import ContactPageHero from "@/components/contact/ContactPageHero";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ExpertSupport from "@/components/contact/ExpertSupport";
import ContactNewsletter from "@/components/contact/ContactNewsletter";

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: "Contact ZTERABYTE | Website & Digital Marketing Services",
  description:
    "Contact ZTERABYTE for domain registration, hosting, website development, email hosting and digital marketing services.",
};

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      {/* 1. Main Contact Hero */}
      <ContactPageHero />

      {/* 2. Contact Information + Map */}
      <div id="contact-information">
        <ContactHero />
      </div>

      {/* 3. Contact Form */}
      <div id="contact-form">
        <ContactForm />
      </div>

      {/* 4. Expert Support */}
      <ExpertSupport />

      {/* 5. Newsletter */}
      <ContactNewsletter />

    </main>
  );
}