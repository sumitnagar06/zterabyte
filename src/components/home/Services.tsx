import Link from "next/link";
import {
  FiGlobe,
  FiServer,
  FiMail,
  FiCode,
  FiPenTool,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    icon: FiGlobe,
    title: "Domain Registration",
    description:
      "Find the perfect domain name for your business and establish your professional identity online.",
    href: "/domains",
    tag: "Domains",
  },
  {
    icon: FiServer,
    title: "Web Hosting",
    description:
      "Reliable and scalable hosting solutions designed to keep your websites fast, secure and available.",
    href: "/hosting/limited-shared-hosting",
    tag: "Hosting",
  },
  {
    icon: FiMail,
    title: "Email Hosting",
    description:
      "Professional business email solutions that help your company communicate with confidence.",
    href: "/email-hosting/business-email-hosting",
    tag: "Business Email",
  },
  {
    icon: FiCode,
    title: "Website Development",
    description:
      "Modern websites and web applications built around your business goals and customer needs.",
    href: "/website-development/web-development",
    tag: "Development",
  },
  {
    icon: FiPenTool,
    title: "Creative Design",
    description:
      "Build a memorable brand with professional logo, UI/UX and graphics design services.",
    href: "/design/logo-design",
    tag: "Design",
  },
  {
    icon: FiTrendingUp,
    title: "Digital Marketing",
    description:
      "Grow your online visibility with SEO, social media marketing, email marketing and Google Ads.",
    href: "/digital-marketing",
    tag: "Marketing",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f6fafd] py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-semibold text-[#006cb5]">
            What We Offer
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl lg:text-5xl">
            Everything You Need to
            <span className="block text-[#006cb5]">
              Grow Online
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From registering your domain to building your website and
            marketing your business, Zterabyte provides complete digital
            solutions under one roof.
          </p>

        </div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b9ddf5] hover:shadow-xl"
              >

                {/* Decorative Shape */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#eaf6ff] transition duration-300 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5] transition duration-300 group-hover:bg-[#006cb5] group-hover:text-white">

                  <Icon className="text-2xl" />

                </div>

                {/* Tag */}
                <p className="relative mt-6 text-xs font-bold uppercase tracking-wider text-[#006cb5]">
                  {service.tag}
                </p>

                {/* Title */}
                <h3 className="relative mt-2 text-xl font-bold text-[#071827] transition group-hover:text-[#006cb5]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                {/* Link */}
                <div className="relative mt-6 flex items-center gap-2 text-sm font-bold text-[#006cb5]">
                  Explore Service

                  <FiArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}
