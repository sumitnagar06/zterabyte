import ShopifyWhyChoose from "@/components/website/ShopifyWhyChoose";
import ShopifyFeatures from "@/components/website/ShopifyFeatures";
import ShopifyCustomization from "@/components/website/ShopifyCustomization";
import ShopifyCommerce from "@/components/website/ShopifyCommerce";
import ShopifyConversion from "@/components/website/ShopifyConversion";
import ShopifyProcess from "@/components/website/ShopifyProcess";
import ShopifyCTA from "@/components/website/ShopifyCTA";


import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShoppingBag,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

const highlights = [
  "Professional Shopify store design",
  "Mobile-friendly shopping experience",
  "Product and collection setup",
  "Payment and order management",
];

export const metadata = {
  alternates: { canonical: '/website-development/shopify' },
};

export default function ShopifyPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">

        {/* Background Effects */}
        <div className="absolute -left-40 -top-20 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#38a9f5]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            {/* LEFT CONTENT */}
            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
                <FiShoppingBag />
                Shopify Website Development
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Build a Powerful
                <span className="block text-[#38a9f5]">
                  Shopify Store
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Launch a professional Shopify store designed to showcase
                your products, provide a smooth shopping experience and
                help your business grow online.
              </p>

              {/* Highlights */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <FiCheckCircle className="mt-0.5 shrink-0 text-[#38a9f5]" />
                    {item}
                  </div>
                ))}

              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#0086dc]"
                >
                  Start Your Shopify Store
                  <FiArrowRight />
                </Link>

                <Link
                  href="/website-development"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Development Services
                </Link>

              </div>

            </div>

            {/* RIGHT VISUAL */}
            <div className="relative">

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur sm:p-7">

                {/* Store Header */}
                <div className="overflow-hidden rounded-2xl bg-white">

                  <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-4 sm:px-5">

                    <div className="flex items-center gap-2">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#006cb5] text-white">
                        <FiShoppingBag />
                      </div>

                      <span className="text-sm font-black text-[#071827]">
                        Your Shopify Store
                      </span>

                    </div>

                    <div className="flex gap-2 text-slate-400">
                      <FiSmartphone />
                      <FiShoppingBag />
                    </div>

                  </div>

                  {/* Store Preview */}
                  <div className="p-5 sm:p-7">

                    <div className="rounded-2xl bg-[#eaf6ff] p-5 sm:p-7">

                      <div className="max-w-xs">

                        <span className="text-xs font-bold uppercase tracking-wider text-[#006cb5]">
                          New Collection
                        </span>

                        <h2 className="mt-2 text-2xl font-black leading-tight text-[#071827]">
                          Your Brand.
                          <span className="block text-[#006cb5]">
                            Your Store.
                          </span>
                        </h2>

                        <div className="mt-4 h-9 w-28 rounded-lg bg-[#006cb5]" />

                      </div>

                    </div>

                    {/* Products */}
                    <div className="mt-5 grid grid-cols-3 gap-3">

                      <div className="rounded-xl bg-slate-100 p-3">
                        <div className="aspect-square rounded-lg bg-[#dbeeff]" />
                        <div className="mt-2 h-2.5 w-3/4 rounded bg-slate-200" />
                        <div className="mt-2 h-2.5 w-1/2 rounded bg-slate-100" />
                      </div>

                      <div className="rounded-xl bg-slate-100 p-3">
                        <div className="aspect-square rounded-lg bg-[#dbeeff]" />
                        <div className="mt-2 h-2.5 w-3/4 rounded bg-slate-200" />
                        <div className="mt-2 h-2.5 w-1/2 rounded bg-slate-100" />
                      </div>

                      <div className="rounded-xl bg-slate-100 p-3">
                        <div className="aspect-square rounded-lg bg-[#dbeeff]" />
                        <div className="mt-2 h-2.5 w-3/4 rounded bg-slate-200" />
                        <div className="mt-2 h-2.5 w-1/2 rounded bg-slate-100" />
                      </div>

                    </div>

                  </div>

                </div>

                {/* Floating Feature */}
                <div className="absolute -bottom-3 right-4 flex items-center gap-3 rounded-xl border border-white/10 bg-[#006cb5] px-4 py-3 shadow-xl sm:right-8">

                  <FiZap className="text-[#70c8fa]" />

                  <div>
                    <p className="text-[10px] text-blue-100">
                      Shopify Store
                    </p>

                    <p className="text-xs font-bold text-white">
                      Ready to Grow
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      <ShopifyWhyChoose />
      <ShopifyFeatures />
       <ShopifyCustomization />
       <ShopifyCommerce />
       <ShopifyConversion />
       <ShopifyProcess />
       <ShopifyCTA />
    </main>
  );
}