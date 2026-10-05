import {
  FiActivity,
  FiCloud,
  FiDatabase,
  FiLayers,
  FiMaximize2,
  FiMonitor,
  FiRefreshCw,
  FiServer,
  FiShield,
  FiTool,
} from "react-icons/fi";
import { FaWordpressSimple } from "react-icons/fa6";

const features = [
  {
    icon: FaWordpressSimple,
    title: "Pre-installed WordPress",
    description: "Launch your WordPress website in a few simple steps.",
  },
  {
    icon: FiRefreshCw,
    title: "Automatic Updates",
    description: "Keep your WordPress installation up to date.",
  },
  {
    icon: FiMaximize2,
    title: "Easy Scalability",
    description: "Move to a higher plan as your needs grow.",
  },
  {
    icon: FiLayers,
    title: "Integrated Caching",
    description: "Help improve page load speeds with caching.",
  },
  {
    icon: FiDatabase,
    title: "Built-in Redundancy",
    description: "Extra resilience to help protect your website data.",
  },
  {
    icon: FiTool,
    title: "Managed Services",
    description: "Get WordPress support for your technical needs.",
  },
  {
    icon: FiMonitor,
    title: "Intuitive Dashboard",
    description: "Manage your hosting from an easy-to-use control panel.",
  },
  {
    icon: FiActivity,
    title: "Malware Scans & Removal",
    description: "Scan your site and help keep it protected.",
  },
  {
    icon: FiCloud,
    title: "Automated Cloud Backups",
    description: "Keep backups ready to restore when needed.",
  },
  {
    icon: FiShield,
    title: "DDoS Protection",
    description: "Help protect availability from DDoS attacks.",
  },
];

export default function WordPressHostingWhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl">
          Why Choose Managed WordPress Hosting Plans
        </h2>

        <div className="mt-10 grid grid-cols-2 border-l border-t border-slate-200 sm:grid-cols-3 xl:grid-cols-5">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex min-h-56 flex-col items-center border-b border-r border-slate-200 px-4 py-8 text-center sm:px-5"
            >
              <div className="flex h-16 items-center justify-center text-[#168ed0]">
                <Icon aria-hidden="true" className="h-12 w-12 stroke-[1.4]" />
              </div>
              <h3 className="mt-5 text-base font-bold leading-5 text-[#263443]">
                {title}
              </h3>
              <p className="mt-2 max-w-52 text-xs leading-5 tracking-wide text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
