
import WordPressWhyChoose from "@/components/website/WordPressWhyChoose";
import WordPressFeatures from "@/components/website/WordPressFeatures";
import WordPressCustomization from "@/components/website/WordPressCustomization";
import WordPressSecurity from "@/components/website/WordPressSecurity";
import WordPressOptimization from "@/components/website/WordPressOptimization";
import WordPressProcess from "@/components/website/WordPressProcess";
import WordPressCTA from "@/components/website/WordPressCTA";

import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiGlobe,
  FiLayout,
  FiSmartphone,
} from "react-icons/fi";

const highlights = [
  "Professional WordPress website design",
  "Custom themes and layouts",
  "Mobile responsive development",
  "Easy content management",
];

export const metadata = {
  alternates: { canonical: '/website-development/wordpress' },
};

export default function WordPressPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">

        {/* Background Effects */}
        <div className="absolute -left-40 -top-20 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#38a9f5]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            {/* LEFT CONTENT */}
            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
                <FiGlobe />
                WordPress Website Development
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Build a Professional
                <span className="block text-[#38a9f5]">
                  WordPress Website
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Create a powerful and easy-to-manage WordPress website
                designed around your brand, content, customers and business
                goals.
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
                  Start Your WordPress Website
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

                {/* Browser */}
                <div className="overflow-hidden rounded-2xl bg-white">

                  {/* Browser Header */}
                  <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">

                    <span className="h-3 w-3 rounded-full bg-slate-300" />
                    <span className="h-3 w-3 rounded-full bg-slate-300" />
                    <span className="h-3 w-3 rounded-full bg-slate-300" />

                    <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-[10px] text-slate-400">
                      yourbusiness.com
                    </div>

                  </div>

                  {/* Website */}
                  <div className="p-5 sm:p-7">

                    {/* Navigation */}
                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#006cb5] text-white">
                          <FiCode />
                        </div>

                        <span className="text-sm font-black text-[#071827]">
                          YOUR BRAND
                        </span>

                      </div>

                      <div className="hidden items-center gap-4 sm:flex">

                        <span className="h-2 w-10 rounded bg-slate-200" />
                        <span className="h-2 w-10 rounded bg-slate-200" />
                        <span className="h-2 w-10 rounded bg-slate-200" />
                        <span className="h-2 w-10 rounded bg-slate-200" />

                      </div>

                      <div className="sm:hidden">
                        <FiLayout className="text-slate-400" />
                      </div>

                    </div>

                    {/* Hero Preview */}
                    <div className="mt-7 rounded-2xl bg-[#eaf6ff] p-5 sm:p-7">

                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#006cb5]">
                        WordPress Website
                      </span>

                      <h2 className="mt-2 text-2xl font-black leading-tight text-[#071827]">
                        Your Business.
                        <span className="block text-[#006cb5]">
                          Your Website.
                        </span>
                      </h2>

                      <p className="mt-3 max-w-xs text-[10px] leading-5 text-slate-500">
                        A professional website designed to help your
                        business build a strong online presence.
                      </p>

                      <div className="mt-4 h-9 w-28 rounded-lg bg-[#006cb5]" />

                    </div>

                    {/* Content Blocks */}
                    <div className="mt-5 grid grid-cols-3 gap-3">

                      <div className="rounded-xl bg-slate-100 p-3">

                        <div className="h-10 rounded-lg bg-[#dbeeff]" />

                        <div className="mt-2 h-2.5 w-3/4 rounded bg-slate-200" />

                        <div className="mt-2 h-2.5 w-1/2 rounded bg-slate-100" />

                      </div>

                      <div className="rounded-xl bg-slate-100 p-3">

                        <div className="h-10 rounded-lg bg-[#dbeeff]" />

                        <div className="mt-2 h-2.5 w-3/4 rounded bg-slate-200" />

                        <div className="mt-2 h-2.5 w-1/2 rounded bg-slate-100" />

                      </div>

                      <div className="rounded-xl bg-slate-100 p-3">

                        <div className="h-10 rounded-lg bg-[#dbeeff]" />

                        <div className="mt-2 h-2.5 w-3/4 rounded bg-slate-200" />

                        <div className="mt-2 h-2.5 w-1/2 rounded bg-slate-100" />

                      </div>

                    </div>

                  </div>

                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-3 right-4 flex items-center gap-3 rounded-xl border border-white/10 bg-[#006cb5] px-4 py-3 shadow-xl sm:right-8">

                  <FiSmartphone className="text-[#70c8fa]" />

                  <div>

                    <p className="text-[10px] text-blue-100">
                      WordPress Website
                    </p>

                    <p className="text-xs font-bold text-white">
                      Easy to Manage
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      <WordPressWhyChoose />
      <WordPressFeatures />
      <WordPressCustomization />
      <WordPressSecurity />
      <WordPressOptimization />
      <WordPressProcess />
      <WordPressCTA />

    </main>
  );
}