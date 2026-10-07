import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCloud,
  FiDatabase,
  FiGlobe,
  FiShield,
  FiZap,
} from "react-icons/fi";

const features = [
  "Powerful shared hosting environment",
  "Flexible website growth",
  "Free SSL protection",
  "24/7 server monitoring",
];

export default function UnlimitedHostingHero() {
  return (
    <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">

      {/* Background Effects */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[#38a9f5]/15 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#006cb5]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
              <FiGlobe />
              Linux Shared Hosting
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              More Power for
              <span className="block text-[#38a9f5]">
                Growing Websites
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Get a powerful shared hosting environment designed for
              websites that need more flexibility, resources and room to
              grow.
            </p>

            {/* Features */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <FiCheckCircle className="shrink-0 text-[#38a9f5]" />
                  {feature}
                </div>
              ))}

            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#hosting-plans"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#0086dc]"
              >
                View Hosting Plans
                <FiArrowRight />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Talk to Our Team
              </Link>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-lg">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[#006cb5]/20 blur-3xl" />

              <div className="relative rounded-3xl border border-[#38a9f5]/20 bg-white/5 p-5 shadow-2xl backdrop-blur sm:p-7">

                {/* Dashboard Header */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                      <FiCloud className="text-xl" />
                    </div>

                    <div>

                      <p className="text-xs text-slate-400">
                        Hosting Environment
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-white">
                        Linux Shared Hosting
                      </h2>

                    </div>

                  </div>

                  <div className="rounded-full bg-[#006cb5]/20 px-3 py-1 text-[10px] font-bold text-[#70c8fa]">
                    High Performance
                  </div>

                </div>

                {/* Resource Overview */}
                <div className="mt-7 rounded-2xl bg-white p-5">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Website Resources
                      </p>

                      <p className="mt-1 text-xl font-black text-[#071827]">
                        Ready to Scale
                      </p>

                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                      <FiZap />
                    </div>

                  </div>

                  {/* Resource Bars */}
                  <div className="mt-6 space-y-4">

                    <div>

                      <div className="flex items-center justify-between text-[10px]">

                        <span className="font-semibold text-slate-500">
                          Performance
                        </span>

                        <span className="font-bold text-[#006cb5]">
                          Excellent
                        </span>

                      </div>

                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full w-[92%] rounded-full bg-[#006cb5]" />
                      </div>

                    </div>

                    <div>

                      <div className="flex items-center justify-between text-[10px]">

                        <span className="font-semibold text-slate-500">
                          Reliability
                        </span>

                        <span className="font-bold text-[#006cb5]">
                          99.9%
                        </span>

                      </div>

                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full w-[99%] rounded-full bg-[#006cb5]" />
                      </div>

                    </div>

                  </div>

                </div>

                {/* Feature Grid */}
                <div className="mt-4 grid grid-cols-3 gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiDatabase className="text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Storage
                    </p>

                    <p className="mt-1 text-xs font-bold text-white">
                      Flexible
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiShield className="text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Security
                    </p>

                    <p className="mt-1 text-xs font-bold text-white">
                      Protected
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <FiGlobe className="text-[#38a9f5]" />

                    <p className="mt-3 text-[10px] text-slate-400">
                      Websites
                    </p>

                    <p className="mt-1 text-xs font-bold text-white">
                      Multiple
                    </p>

                  </div>

                </div>

                {/* Status */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">

                  <div className="flex items-center gap-2">

                    <FiCheckCircle className="text-[#38a9f5]" />

                    <span className="text-xs text-slate-300">
                      Server Monitoring
                    </span>

                  </div>

                  <span className="text-xs font-bold text-[#70c8fa]">
                    24/7
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
