import ClientCard from "@/components/clients/ClientCard";
import { clients } from "@/data/clients";

export const metadata = {
  alternates: { canonical: '/our-client' },
  title: "Our Clients | ZTERABYTE",
  description:
    "Explore the businesses and organizations that have trusted ZTERABYTE for hosting, website development, design, email and digital marketing services.",
};

export default function OurClientPage() {
  return (
    <main className="w-full max-w-full overflow-x-clip">
      {/* =========================================
          HERO
      ========================================= */}
      <section className="relative overflow-hidden bg-[#071827]">
        {/* Background decoration */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#006cb5]/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#006cb5]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            {/* Label */}
            <span className="inline-flex items-center rounded-full border border-[#006cb5]/30 bg-[#006cb5]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#70c8fa]">
              Our Clients
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Businesses That{" "}
              <span className="text-[#70c8fa]">Trust ZTERABYTE</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              We are proud to work with businesses and organizations that
              trust Zterabyte for their digital, hosting, design and marketing
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CLIENTS
      ========================================= */}
      <section className="bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#006cb5]">
              Trusted Partnerships
            </span>

            <h2 className="mt-3 text-3xl font-black text-[#071827] sm:text-4xl">
              Our Valued Clients
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              From websites and hosting to email, design and digital marketing,
              our clients rely on ZTERABYTE for practical digital solutions.
            </p>
          </div>

          {/* =====================================
              CLIENT GRID
              4 cards desktop
              2 cards tablet
              1 card mobile
          ===================================== */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#071827] px-6 py-12 text-center shadow-xl sm:px-10 sm:py-14">
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#70c8fa]">
              Start Your Project
            </span>

            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Want to Become Our Next Client?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Tell us about your business and your requirements. Our team will
              help you choose the right digital solution for your goals.
            </p>

            <a
              href="/contact"
              className="
                mt-8 inline-flex items-center justify-center rounded-xl
                bg-[#006cb5] px-7 py-3.5 text-sm font-bold text-white
                transition hover:bg-[#0086dc]
              "
            >
              Contact Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}