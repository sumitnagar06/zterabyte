import Image from "next/image";
import Link from "next/link";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiArrowRight,
  FiGlobe,
} from "react-icons/fi";

import {
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Domains",
    href: "/domains",
  },
  {
    title: "Limited Shared Hosting",
    href: "/hosting/limited-shared-hosting",
  },
  {
     title: "Linux Shared Hosting",
     href: "/hosting/linux-shared-hosting",
  },
  {
    title: "WordPress Hosting",
    href: "/hosting/wordpress-hosting",
  },
  {
    title: "Business Email Hosting",
    href: "/email-hosting/business-email-hosting",
  },
  {
    title: "Enterprise Email Hosting",
    href: "/email-hosting/enterprise-email-hosting",
  },
];

/* =========================================================
   DEVELOPMENT
========================================================= */

const developmentLinks = [
  {
    title: "eCommerce Development",
    href: "/website-development/ecommerce",
  },
  {
    title: "Mobile App Development",
    href: "/website-development/mobile-app",
  },
  {
    title: "Shopify Development",
    href: "/website-development/shopify",
  },
  {
    title: "Web Development",
    href: "/website-development/web-development",
  },
  {
    title: "WordPress Development",
    href: "/website-development/wordpress",
  },
];

/* =========================================================
   DIGITAL MARKETING
========================================================= */

const marketingLinks = [
  {
    title: "eCommerce SEO",
    href: "/digital-marketing/ecommerce-seo",
  },
  {
    title: "Email Marketing",
    href: "/digital-marketing/email-marketing",
  },
  {
    title: "Facebook Marketing",
    href: "/digital-marketing/facebook-marketing",
  },
  {
    title: "Google Ads",
    href: "/digital-marketing/google-ads",
  },
  {
    title: "Instagram Marketing",
    href: "/digital-marketing/instagram-marketing",
  },
  {
    title: "Local SEO",
    href: "/digital-marketing/local-seo",
  },
  {
    title: "Off Page SEO",
    href: "/digital-marketing/off-page-seo",
  },
  {
    title: "On Page SEO",
    href: "/digital-marketing/on-page-seo",
  },
  {
    title: "SEO & SMO",
    href: "/digital-marketing/seo-smo",
  },
  {
    title: "Twitter Marketing",
    href: "/digital-marketing/twitter-marketing",
  },
];

/* =========================================================
   DESIGN
========================================================= */

const designLinks = [
  {
    title: "Graphics Design",
    href: "/design/graphics-design",
  },
  {
    title: "Logo Design",
    href: "/design/logo-design",
  },
  {
    title: "UI/UX Design",
    href: "/design/ui-ux-design",
  },
];

/* =========================================================
   COMPANY
========================================================= */

const companyLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: " Our Client",
    href:"/our-client",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
  {
    title: " Refund & Cancellation",
    href: "/refund-cancellation",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071827] text-white">

      {/* =====================================================
          TOP CTA
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 pt-16 lg:px-6 lg:pt-20">

        <div className="overflow-hidden rounded-3xl border border-[#38a9f5]/20 bg-[#006cb5]/10">

          <div className="flex flex-col gap-6 p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <div className="flex items-center gap-2 text-sm font-semibold text-[#38a9f5]">
                <FiGlobe />
                Complete Digital Solutions
              </div>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Need help with your next digital project?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Talk to our team about domains, hosting, websites,
                applications, design or digital marketing.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0082d8]"
            >
              Contact Us
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-6 lg:py-20">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.35fr_0.9fr_1.25fr_1.25fr_0.9fr_1.15fr]">

          {/* =================================================
              BRAND
          ================================================== */}

          <div>

            {/* Footer Logo */}
            <Link href="/" className="inline-block">
              <div className="relative h-[50px] w-[180px]">
                <Image
                  src="/images/logo.png"
                  alt="Zterabyte"
                  fill
                  sizes="180px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="mt-1 max-w-sm text-sm leading-7 text-slate-400">
              MSME Registered Enterprise<br/>
              Udyam Registration No.: (UDYAM-RJ-24-0098420)
            </p>

            {/* Social Media */}
            <div className="mt-7 flex gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/zterabyte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zterabyte on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-[#006cb5] hover:bg-[#006cb5] hover:text-white"
              >
                <FiFacebook />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/zterabyte/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zterabyte on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-[#006cb5] hover:bg-[#006cb5] hover:text-white"
              >
                <FiInstagram />
              </a>

              {/* X */}
              <a
                href="https://x.com/zterabyte_in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zterabyte on X"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-[#006cb5] hover:bg-[#006cb5] hover:text-white"
              >
                <FaXTwitter />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@zterabyte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zterabyte on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-[#006cb5] hover:bg-[#006cb5] hover:text-white"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-3">

              {services.map((service) => (
                <li key={service.title}>

                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
                  >

                    <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

                    {service.title}

                  </Link>

                </li>
              ))}

            </ul>

            

          </div>

          {/* =================================================
              DESIGN & DEVELOPMENT
          ================================================== */}

          <div>

            {/* Design Links */}

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Design
            </h3>

            <ul className="mt-5 space-y-3">

              {designLinks.map((link) => (
                <li key={link.title}>

                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
                  >

                    <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

                    {link.title}

                  </Link>

                </li>
              ))}

            </ul>

              {/* Development Links */}

            <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-white">
              Development
            </h3>

            <ul className="mt-6 space-y-3">

              {developmentLinks.map((link) => (
                <li key={link.title}>

                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
                  >

                    <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

                    {link.title}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              DIGITAL MARKETING
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Digital Marketing
            </h3>

            <ul className="mt-6 space-y-3">

              {marketingLinks.map((link) => (
                <li key={link.title}>

                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
                  >

                    <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

                    {link.title}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              COMPANY
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-3">

              {companyLinks.map((link) => (
                <li key={link.title}>

                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#38a9f5]"
                  >

                    <FiArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

                    {link.title}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">

              {/* Phone */}
              <a
                href="tel:+91-9119220608"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-[#38a9f5]"
              >
                <FiPhone className="mt-0.5 shrink-0 text-[#38a9f5]" />

                <span>
                  +91 91192 20608
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@zterabyte.com"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-[#38a9f5]"
              >
                <FiMail className="mt-0.5 shrink-0 text-[#38a9f5]" />

                <span>
                  info@zterabyte.com
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm leading-6 text-slate-400">

                <FiMapPin className="mt-0.5 shrink-0 text-[#38a9f5]" />

                <span>
                  1234, Basant Vihar,
                  <br />
                  Dadabari, Kota,
                  <br />
                  Rajasthan 324009
                  <br />
                  India
                </span>

              </div>

            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#006cb5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0082d8]"
            >
              Get in Touch
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-6">

          <p>
            © {new Date().getFullYear()} ZTERABYTE. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-5">

            <Link
              href="/refund-cancellation"
              className="transition hover:text-white"
            >
              Refund & Cancellation
            </Link>

            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
