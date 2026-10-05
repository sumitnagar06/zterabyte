import Link from "next/link";
import {
  FiGlobe,
  FiServer,
  FiMail,
  FiCode,
  FiPenTool,
  FiTrendingUp,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const serviceGroups = [
  {
    icon: FiGlobe,
    title: "Domain Registration",
    description:
      "Find and register the right domain name to establish your business identity online.",
    items: [
      "Domain Registration",
      "Domain Management",
      "Popular Domain Extensions",
    ],
    href: "/domains",
  },

  {
    icon: FiServer,
    title: "Web Hosting",
    description:
      "Reliable hosting solutions for websites and businesses with different hosting requirements.",
    items: [
      "Limited Shared Hosting",
      "Unlimited Shared Hosting",
      "Hosting Management",
    ],
    href: "/hosting",
  },

  {
    icon: FiMail,
    title: "Email Hosting",
    description:
      "Professional email solutions using your own business domain.",
    items: [
      "Business Email Hosting",
      "Enterprise Email Hosting",
      "Professional Email",
    ],
    href: "/email-hosting",
  },

  {
    icon: FiCode,
    title: "Website Development",
    description:
      "Modern websites and applications designed around your business requirements.",
    items: [
      "Web Development",
      "eCommerce Development",
      "Shopify Development",
      "WordPress Development",
      "Mobile Application Development",
    ],
    href: "/development",
  },

  {
    icon: FiPenTool,
    title: "Creative Design",
    description:
      "Build a professional and consistent visual identity for your business.",
    items: [
      "Logo Design",
      "UI/UX Design",
      "Graphics Design",
    ],
    href: "/design",
  },

  {
    icon: FiTrendingUp,
    title: "Digital Marketing",
    description:
      "Reach the right audience and improve your business visibility online.",
    items: [
      "SEO & SMO",
      "Local SEO",
      "eCommerce SEO",
      "Social Media Marketing",
      "Google Ads",
      "Email Marketing",
    ],
    href: "/digital-marketing",
  },
];

export const metadata = {
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <main>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#071827] py-20 lg:py-28">

        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
              Our Services
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Complete Digital Solutions
              <span className="block text-[#38a9f5]">
                For Your Business
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
              From domain registration and hosting to website development,
              creative design and digital marketing, Zterabyte provides
              the essential services businesses need to grow online.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICE GRID
      ====================================================== */}
      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-6">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {serviceGroups.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b9ddf5] hover:shadow-xl"
                >

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">
                    <Icon className="text-2xl" />
                  </div>

                  {/* Title */}
                  <h2 className="mt-6 text-2xl font-bold text-[#071827] transition group-hover:text-[#006cb5]">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  {/* Services */}
                  <div className="mt-6 flex-1 space-y-3">

                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2"
                      >
                        <FiCheckCircle className="mt-0.5 shrink-0 text-[#006cb5]" />

                        <span className="text-sm text-slate-600">
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>

                  {/* Link */}
                  <Link
                    href={service.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#006cb5]"
                  >
                    Explore Service

                    <FiArrowRight className="transition group-hover:translate-x-1" />
                  </Link>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          DIGITAL JOURNEY
      ====================================================== */}
      <section className="bg-[#f6fafd] py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <div>

              <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
                One Digital Partner
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#071827] sm:text-4xl">
                Everything You Need to
                <span className="block text-[#006cb5]">
                  Build and Grow Online
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Your digital journey doesn't have to be complicated.
                Start with the essentials and add services as your
                business grows.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0082d8]"
              >
                Discuss Your Requirements
                <FiArrowRight />
              </Link>

            </div>


            {/* Right */}
            <div className="rounded-3xl bg-[#071827] p-7 shadow-xl sm:p-9">

              <div className="space-y-4">

                {[
                  {
                    number: "01",
                    title: "Establish",
                    text: "Domain, hosting and professional email.",
                  },
                  {
                    number: "02",
                    title: "Build",
                    text: "Website, eCommerce store or application.",
                  },
                  {
                    number: "03",
                    title: "Design",
                    text: "Create a strong and consistent brand identity.",
                  },
                  {
                    number: "04",
                    title: "Grow",
                    text: "SEO, social media, advertising and marketing.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5"
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

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#006cb5] py-16">

        <div className="mx-auto max-w-4xl px-5 text-center lg:px-6">

          <span className="text-sm font-semibold text-blue-100">
            HAVE A PROJECT IN MIND?
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Let's Find the Right Solution
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Tell us about your business and requirements. Our team can
            help you choose the right combination of digital services.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#006cb5] transition hover:bg-[#eaf6ff]"
          >
            Get Started
            <FiArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
}