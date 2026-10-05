import type { Metadata } from "next";

import Link from "next/link";
import StatsCounter from "@/components/common/StatsCounter";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiServer,
  FiMail,
  FiCode,
  FiPenTool,
  FiTrendingUp,
  FiShield,
  FiUsers,
  FiTarget,
} from "react-icons/fi";

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: "About ZTERABYTE | Digital Services in Kota - ZTERABYTE",
  description:
    "Register your domain name with ZTERABYTE. Find and manage .com, .in, .net, .org and other domain extensions with reliable domain services in Kota.",
};

const services = [
  {
    icon: FiGlobe,
    title: "Domain Registration",
    text: "Build your online identity with a domain that represents your business.",
  },
  {
    icon: FiServer,
    title: "Web Hosting",
    text: "Choose hosting solutions designed to support your websites and applications.",
  },
  {
    icon: FiMail,
    title: "Email Hosting",
    text: "Professional business email using your own domain.",
  },
  {
    icon: FiCode,
    title: "Website Development",
    text: "Modern websites, eCommerce stores and web applications.",
  },
  {
    icon: FiPenTool,
    title: "Creative Design",
    text: "Logo, UI/UX and graphics design for a consistent brand identity.",
  },
  {
    icon: FiTrendingUp,
    title: "Digital Marketing",
    text: "SEO, social media, email marketing and advertising solutions.",
  },
];

const values = [
  {
    icon: FiUsers,
    title: "Customer First",
    text: "We start by understanding your business requirements and goals.",
  },
  {
    icon: FiTarget,
    title: "Business Focused",
    text: "Our digital solutions are designed around practical business objectives.",
  },
  {
    icon: FiShield,
    title: "Reliable Solutions",
    text: "We focus on dependable services that businesses can use with confidence.",
  },
  {
    icon: FiTrendingUp,
    title: "Growth Oriented",
    text: "We help businesses establish, improve and grow their digital presence.",
  },
];

const companyStats = [
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Experience in digital solutions",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Happy Clients",
    description: "Businesses served",
  },
  {
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successful digital projects",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Focused on customer success",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full max-w-full overflow-x-clip">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#071827] py-20 lg:py-28">

        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
              About Zterabyte
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building Better
              <span className="block text-[#38a9f5]">
                Digital Experiences
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
              Zterabyte provides digital services that help businesses
              establish, manage and grow their online presence — from
              domains and hosting to websites, design and digital marketing.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0082d8]"
              >
                Talk to Our Team
                <FiArrowRight />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Our Services
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ====================================================== */}
      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-6">

          <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2">

            {/* Content */}
            <div>

              <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
                Who We Are
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#071827] sm:text-4xl">
                More Than Just a
                <span className="block text-[#006cb5]">
                  Digital Service Provider
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                A successful online business needs more than a website.
                It needs a strong digital foundation, professional
                communication, reliable technology and a strategy for
                reaching customers.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Zterabyte brings these essential services together so
                businesses can work with one digital partner throughout
                their online journey.
              </p>

              <div className="mt-7 space-y-4">

                {[
                  "Domains and hosting",
                  "Professional business email",
                  "Website and application development",
                  "Creative design solutions",
                  "Digital marketing services",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <FiCheckCircle className="shrink-0 text-[#006cb5]" />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>


            {/* Visual */}
            <div>

              <div className="relative overflow-hidden rounded-3xl bg-[#071827] p-7 shadow-2xl sm:p-9">

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#006cb5]/25 blur-3xl" />

                <div className="relative">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#006cb5] text-white">
                    <FiGlobe className="text-3xl" />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white">
                    One Digital Partner
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Connect the essential parts of your digital presence
                    through one coordinated ecosystem.
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-3">

                    {[
                      "Domain",
                      "Hosting",
                      "Email",
                      "Development",
                      "Design",
                      "Marketing",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-semibold text-slate-300"
                      >
                        {item}
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

        <StatsCounter
        items={companyStats}
        dark
      />

      {/* =====================================================
          MISSION & VALUES
      ====================================================== */}
      <section className="bg-[#f6fafd] py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-6">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Mission */}
            <div>

              <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
                Mission & Values
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#071827] sm:text-4xl">
                Technology With a
                <span className="block text-[#006cb5]">
                  Purpose
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Our goal is simple: make digital technology easier,
                more accessible and more useful for businesses.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                We focus on understanding the real business problem
                first and then choosing the right digital solution.
              </p>

            </div>


            {/* Values */}
            <div className="grid gap-5 sm:grid-cols-2">

              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                      <Icon className="text-xl" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#071827]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {value.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMPLETE SOLUTIONS
      ====================================================== */}
      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
              Our Services
            </span>

            <h2 className="mt-5 text-3xl font-bold text-[#071827] sm:text-4xl">
              Complete Digital Solutions
              <span className="block text-[#006cb5]">
                Under One Roof
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Whether you are starting a new business or improving an
              existing digital presence, we provide services for every
              stage of the journey.
            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-[#f6fafd] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >

                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-white text-[#006cb5] shadow-sm transition group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#071827] transition group-hover:text-[#006cb5]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.text}
                  </p>

                  {/* <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#006cb5]"
                  >
                    Explore Service
                    <FiArrowRight />
                  </Link> */}

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          DIGITAL JOURNEY
      ====================================================== */}
      <section className="bg-[#071827] py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="inline-flex rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
                Your Digital Journey
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                From Your First Domain
                <span className="block text-[#38a9f5]">
                  to Digital Growth
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                Your digital journey can start with a simple domain
                registration and grow into a complete online ecosystem.
                We provide the services that can support each stage.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0082d8]"
              >
                Discuss Your Requirements
                <FiArrowRight />
              </Link>

            </div>


            {/* Journey */}
            <div className="min-w-0 space-y-4">

              {[
                {
                  number: "01",
                  title: "Establish",
                  text: "Domain, hosting and professional email.",
                },
                {
                  number: "02",
                  title: "Build",
                  text: "Website, eCommerce store or mobile application.",
                },
                {
                  number: "03",
                  title: "Design",
                  text: "Logo, UI/UX and graphics that represent your brand.",
                },
                {
                  number: "04",
                  title: "Grow",
                  text: "SEO, social media, email marketing and advertising.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex min-w-0 gap-5 rounded-2xl border border-white/10 bg-white/5 p-5"
                >

                  <span className="text-2xl font-black text-[#38a9f5]/30">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#006cb5] py-16">

        <div className="mx-auto max-w-4xl px-5 text-center lg:px-6">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Build Your Digital Future
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Have a website, hosting, design or marketing requirement?
            Talk to the Zterabyte team.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#006cb5] transition hover:bg-[#eaf6ff]"
          >
            Contact Us
            <FiArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
}