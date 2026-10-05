import WordPressHostingPlans from "@/components/hosting/WordPressHostingPlans";
import WordPressHostingWhyChoose from "@/components/hosting/WordPressHostingWhyChoose";
import FAQ, { type FAQItem } from "@/components/common/FAQ";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCloud,
  FiDatabase,
  FiLock,
  FiZap,
} from "react-icons/fi";

const benefits = [
  { icon: FiZap, title: "WordPress Ready", text: "A hosting experience designed around WordPress sites." },
  { icon: FiDatabase, title: "Room to Grow", text: "Choose from four tiers as your website needs change." },
  { icon: FiLock, title: "SSL Ready", text: "Plan for a secure HTTPS website." },
  { icon: FiCloud, title: "Helpful Support", text: "Get in touch with our team about your hosting needs." },
];

const wordpressHostingFAQ: FAQItem[] = [
  {
    question: "What is managed WordPress hosting?",
    answer:
      "Managed WordPress hosting is a hosting service designed for WordPress websites, with tools and support focused on running and maintaining WordPress.",
  },
  {
    question: "Is WordPress pre-installed with these plans?",
    answer:
      "Yes. The plans are designed to make it easy to get started with WordPress. Contact our team if you need help setting up your website.",
  },
  {
    question: "What is included in each WordPress hosting plan?",
    answer:
      "Plan features vary by tier. Review the highlights on each plan card and contact us if you need details about a specific plan.",
  },
  {
    question: "Can I upgrade my WordPress hosting plan later?",
    answer:
      "Yes. You can move to a higher plan as your website needs grow. Contact our team to discuss the available options.",
  },
  {
    question: "Do WordPress hosting plans include SSL?",
    answer:
      "The plans are SSL-ready so your WordPress website can use a secure HTTPS connection. Contact us for help with setup.",
  },
  {
    question: "Are backups and security features available?",
    answer:
      "Managed WordPress hosting includes automated backup and security features. Contact our team for details about the schedule and protection available for your plan.",
  },
];

export default function WordPressHostingPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071827] py-20 sm:py-24 lg:py-28">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#006cb5]/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[#38a9f5]/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/20 bg-[#006cb5]/10 px-4 py-2 text-sm font-semibold text-[#70c8fa]">
              <FiCloud /> WordPress Hosting
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hosting Made for
              <span className="block text-[#38a9f5]">Your WordPress Site</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Find a home for your blog, business website or growing online project with a WordPress-focused hosting plan.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Four plan options", "WordPress-ready hosting", "SSL-ready plans", "Helpful support"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                  <FiCheckCircle className="shrink-0 text-[#38a9f5]" /> {feature}
                </div>
              ))}
            </div>
            <a href="#hosting-plans" className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#0086dc]">
              Explore WordPress Plans <FiArrowRight />
            </a>
          </div>
          <div className="mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-[#38a9f5]/20 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006cb5] text-2xl font-black text-white">W</div>
                <div>
                  <p className="text-sm text-slate-400">Your WordPress Website</p>
                  <h2 className="mt-1 text-xl font-bold text-white">Ready to Grow</h2>
                </div>
              </div>
              <div className="mt-7 rounded-2xl bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Hosting designed for</p>
                <p className="mt-2 text-2xl font-black text-[#071827]">WordPress Projects</p>
                <div className="mt-6 space-y-4">
                  {["Simple site setup", "Flexible plan choices", "Support for your next step"].map((item, index) => (
                    <div key={item}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-500">{item}</span>
                        <FiCheckCircle className="text-[#006cb5]" />
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full bg-[#006cb5] ${["w-[90%]", "w-[76%]", "w-[84%]"][index]}`} /></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {benefits.slice(0, 2).map(({ icon: Icon, title }) => (
                  <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4 text-[#38a9f5]"><Icon /><p className="mt-3 text-xs font-bold text-white">{title}</p></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WordPressHostingPlans />

      <section className="bg-[#f6fafd] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                  <Icon />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#071827]">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WordPressHostingWhyChoose />

      <FAQ
        title="WordPress Hosting FAQs"
        description="Find answers to common questions about our managed WordPress hosting plans."
        items={wordpressHostingFAQ}
      />
    </main>
  );
}
