import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiMonitor,
} from "react-icons/fi";

const features = [
  "Professional business websites",
  "Responsive web design",
  "Modern web applications",
  "Fast and optimized development",
  "SEO-friendly structure",
  "Easy future expansion",
];

export const metadata = {
  alternates: { canonical: '/website-development/web-development' },
};

export default function WebDevelopmentPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-lg">
              <FiCode className="text-3xl" />
            </div>

            <span className="mt-6 inline-flex rounded-full border border-[#38a9f5]/30 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
              Web Development
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Modern Web Development
              <span className="block text-[#38a9f5]">
                For Growing Businesses
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              We create professional, responsive and scalable websites
              designed around your business goals and customer needs.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0086dc]"
              >
                Start Your Project
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

        </div>

      </section>

      {/* Features */}
      <section className="bg-[#f6fafd] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <div>

              <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
                Our Web Development
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#071827] sm:text-4xl">
                Websites Built Around
                <span className="block text-[#006cb5]">
                  Your Business
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                From a simple business website to a complete custom web
                application, we build solutions that provide a professional
                online experience for your customers.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <FiCheckCircle className="shrink-0 text-[#006cb5]" />

                    <span className="text-sm font-medium text-[#071827]">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* Right */}
            <div className="rounded-3xl bg-[#071827] p-7 shadow-xl sm:p-9">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#006cb5] text-white">
                <FiMonitor className="text-2xl" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Professional Web Solutions
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Build a strong digital presence with a website that looks
                professional, works smoothly and is ready to grow with
                your business.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="text-sm font-semibold text-[#38a9f5]">
                  What we focus on
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Design, performance, responsiveness, usability,
                  maintainability and business objectives.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-5xl px-5">

          <div className="rounded-3xl bg-[#071827] px-6 py-12 text-center sm:px-10">

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Build Your Website?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Tell us about your project and our team will help you
              choose the right solution.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#006cb5] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#0086dc]"
            >
              Get Started
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}