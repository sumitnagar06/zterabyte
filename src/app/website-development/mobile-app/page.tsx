import MobileAppWhyChoose from "@/components/website/MobileAppWhyChoose";
import MobileAppFeatures from "@/components/website/MobileAppFeatures";
import MobileAppPlatforms from "@/components/website/MobileAppPlatforms";
import MobileAppOptimization from "@/components/website/MobileAppOptimization";
import MobileAppSecurity from "@/components/website/MobileAppSecurity";
import MobileAppProcess from "@/components/website/MobileAppProcess";
import MobileAppCTA from "@/components/website/MobileAppCTA";

import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiLayers,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

const highlights = [
  "Android & iOS application development",
  "Modern and user-friendly mobile UI",
  "Business-focused app functionality",
  "Responsive and performance-oriented apps",
];

export const metadata = {
  alternates: { canonical: '/website-development/mobile-app' },
};

export default function MobileAppPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">

        {/* Background Effects */}
        <div className="absolute -left-40 -top-20 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#38a9f5]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            {/* =========================
                LEFT CONTENT
            ========================== */}
            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
                <FiSmartphone />
                Mobile Application Development
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Build Powerful
                <span className="block text-[#38a9f5]">
                  Mobile Applications
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Create modern mobile applications that help your business
                connect with customers, simplify processes and deliver
                useful digital experiences.
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
                  Start Your App Project
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

            {/* =========================
                RIGHT MOBILE VISUAL
            ========================== */}
            <div className="flex justify-center lg:justify-end">

              <div className="relative">

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-[#006cb5]/20 blur-3xl" />

                {/* Phone */}
                <div className="relative w-[270px] rounded-[2.8rem] border-[8px] border-[#020b14] bg-[#020b14] p-2 shadow-2xl sm:w-[300px]">

                  <div className="overflow-hidden rounded-[2.2rem] bg-white">

                    {/* Phone Header */}
                    <div className="bg-[#006cb5] px-5 pb-6 pt-7">

                      <div className="flex items-center justify-between">

                        <div>
                          <p className="text-[9px] font-medium text-blue-100">
                            Welcome back
                          </p>

                          <h2 className="mt-1 text-sm font-black text-white">
                            Your Business App
                          </h2>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">
                          <FiSmartphone />
                        </div>

                      </div>

                    </div>

                    {/* App Content */}
                    <div className="p-4">

                      {/* Balance / Overview */}
                      <div className="rounded-2xl bg-[#eaf6ff] p-4">

                        <p className="text-[9px] font-semibold uppercase tracking-wider text-[#006cb5]">
                          Dashboard
                        </p>

                        <div className="mt-3 flex items-end justify-between">

                          <div>
                            <p className="text-[9px] text-slate-400">
                              Monthly Activity
                            </p>

                            <p className="mt-1 text-2xl font-black text-[#071827]">
                              8,420
                            </p>
                          </div>

                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                            <FiZap />
                          </div>

                        </div>

                      </div>

                      {/* App Features */}
                      <div className="mt-4 grid grid-cols-2 gap-3">

                        <div className="rounded-xl border border-slate-100 p-3">

                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                            <FiLayers />
                          </div>

                          <p className="mt-3 text-[10px] font-bold text-[#071827]">
                            Services
                          </p>

                          <p className="mt-1 text-[9px] text-slate-400">
                            Manage easily
                          </p>

                        </div>

                        <div className="rounded-xl border border-slate-100 p-3">

                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf6ff] text-[#006cb5]">
                            <FiCode />
                          </div>

                          <p className="mt-3 text-[10px] font-bold text-[#071827]">
                            Features
                          </p>

                          <p className="mt-1 text-[9px] text-slate-400">
                            Built for you
                          </p>

                        </div>

                      </div>

                      {/* Activity */}
                      <div className="mt-4 rounded-xl border border-slate-100 p-4">

                        <div className="flex items-center justify-between">

                          <p className="text-[10px] font-bold text-[#071827]">
                            Recent Activity
                          </p>

                          <span className="text-[9px] font-semibold text-[#006cb5]">
                            View All
                          </span>

                        </div>

                        <div className="mt-4 space-y-3">

                          {[1, 2, 3].map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-3"
                            >

                              <div className="h-8 w-8 rounded-lg bg-slate-100" />

                              <div className="flex-1">

                                <div className="h-2 w-3/4 rounded bg-slate-200" />

                                <div className="mt-2 h-2 w-1/2 rounded bg-slate-100" />

                              </div>

                            </div>
                          ))}

                        </div>

                      </div>

                      {/* Bottom Navigation */}
                      <div className="mt-4 flex items-center justify-around rounded-xl bg-[#071827] px-3 py-3">

                        <div className="h-1.5 w-8 rounded-full bg-[#38a9f5]" />
                        <div className="h-1.5 w-8 rounded-full bg-slate-600" />
                        <div className="h-1.5 w-8 rounded-full bg-slate-600" />
                        <div className="h-1.5 w-8 rounded-full bg-slate-600" />

                      </div>

                    </div>

                  </div>

                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-4 -left-6 rounded-xl border border-white/10 bg-[#006cb5] px-4 py-3 shadow-xl sm:-left-10">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[#70c8fa]">
                      <FiCheckCircle />
                    </div>

                    <div>
                      <p className="text-[10px] text-blue-100">
                        Mobile Experience
                      </p>

                      <p className="text-xs font-bold text-white">
                        Android & iOS Ready
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      <MobileAppWhyChoose />
      <MobileAppFeatures />
      <MobileAppPlatforms />
      <MobileAppOptimization />
      <MobileAppSecurity />
      <MobileAppProcess />
      <MobileAppCTA />

    </main>
  );
}