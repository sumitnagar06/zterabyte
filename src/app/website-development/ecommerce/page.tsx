import EcommerceWhyChoose from "@/components/website/EcommerceWhyChoose";
import EcommerceFeatures from "@/components/website/EcommerceFeatures";
import EcommerceStorePreview from "@/components/website/EcommerceStorePreview";
import EcommercePaymentOrders from "@/components/website/EcommercePaymentOrders";
import EcommerceMobileBenefits from "@/components/website/EcommerceMobileBenefits";
import EcommerceCTA from "@/components/website/EcommerceCTA";

import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCreditCard,
  FiPackage,
  FiShoppingCart,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi";

const benefits = [
  "Responsive Shopping Experience",
  "Product & Catalog Management",
  "Secure Payment Integration",
  "Order Management",
];

export const metadata = {
  alternates: { canonical: '/website-development/ecommerce' },
};

export default function EcommerceWebsitePage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      {/* =====================================================
          E-COMMERCE HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-24">

        {/* Background decoration */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#006cb5]/25 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#38a9f5]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}
            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/30 bg-[#006cb5]/20 px-4 py-2 text-sm font-semibold text-[#70c8ff]">
                <FiShoppingCart />
                E-Commerce Website Development
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Build an Online Store
                <span className="block text-[#38a9f5]">
                  That Grows Your Business
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Build a powerful, modern and user-friendly e-commerce website
                designed to showcase your products, provide a smooth shopping
                experience and help your business grow online.
              </p>

              {/* Benefits */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <FiCheckCircle className="shrink-0 text-[#38a9f5]" />
                    {item}
                  </div>
                ))}

              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0086dc]"
                >
                  Start Your Store
                  <FiArrowRight />
                </Link>

                <a
                  href="#ecommerce-services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </a>

              </div>

            </div>

            {/* =================================================
                RIGHT STORE VISUAL
            ================================================== */}
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#006cb5]/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur sm:p-7">

                {/* Store Header */}
                <div className="rounded-2xl bg-[#0d2436] p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                      <FiShoppingCart />
                    </div>

                    <div className="flex-1">

                      <div className="h-3 w-28 rounded bg-white/80" />

                      <div className="mt-2 h-2 w-20 rounded bg-white/20" />

                    </div>

                    <div className="hidden gap-2 sm:flex">
                      <span className="h-2 w-10 rounded bg-white/20" />
                      <span className="h-2 w-10 rounded bg-white/20" />
                      <span className="h-2 w-10 rounded bg-white/20" />
                    </div>

                  </div>

                </div>

                {/* Store Preview */}
                <div className="mt-4 overflow-hidden rounded-2xl bg-white p-5">

                  {/* Store Banner */}
                  <div className="rounded-xl bg-[#eaf6ff] p-5">

                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#006cb5]">
                      Online Store
                    </p>

                    <h2 className="mt-2 text-xl font-black text-[#071827] sm:text-2xl">
                      Your Brand.
                      <span className="block text-[#006cb5]">
                        Your Store.
                      </span>
                    </h2>

                    <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
                      A professional shopping experience built around your
                      products and customers.
                    </p>

                    <div className="mt-4 inline-flex rounded-lg bg-[#006cb5] px-4 py-2 text-[10px] font-bold text-white">
                      Shop Now
                    </div>

                  </div>

                  {/* Products */}
                  <div className="mt-4 grid grid-cols-3 gap-3">

                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-slate-100 bg-[#f8fafc] p-2"
                      >

                        <div className="flex h-20 items-center justify-center rounded-lg bg-[#eaf6ff]">
                          <FiPackage className="text-2xl text-[#006cb5]" />
                        </div>

                        <div className="mt-2 h-2 w-12 rounded bg-slate-200" />

                        <div className="mt-2 h-2 w-8 rounded bg-[#006cb5]/30" />

                      </div>
                    ))}

                  </div>

                </div>

                {/* Store Stats */}
                <div className="mt-4 grid grid-cols-3 gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiTrendingUp className="text-lg text-[#38a9f5]" />

                    <p className="mt-2 text-[10px] text-slate-400">
                      Growth
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Online
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiCreditCard className="text-lg text-[#38a9f5]" />

                    <p className="mt-2 text-[10px] text-slate-400">
                      Payments
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Secure
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiSmartphone className="text-lg text-[#38a9f5]" />

                    <p className="mt-2 text-[10px] text-slate-400">
                      Experience
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Responsive
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          EXISTING E-COMMERCE SECTIONS
      ====================================================== */}

      <EcommerceWhyChoose />

      <EcommerceFeatures />

      <EcommerceStorePreview />

      <EcommercePaymentOrders />

      <EcommerceMobileBenefits />

      <EcommerceCTA />

    </main>
  );
}