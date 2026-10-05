import {
  FiCloud,
  FiCode,
  FiHeadphones,
  FiPackage,
  FiRepeat,
  FiSettings,
  FiShield,
  FiTerminal,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const features = [
  {
    icon: FiZap,
    title: "Lightning-fast Websites",
    description: "Enjoy quick page loads for your visitors.",
  },
  {
    icon: FiSettings,
    title: "Free cPanel Included",
    description: "Manage your Linux hosting from cPanel.",
  },
  {
    icon: FiShield,
    title: "Easy SSL Setup",
    description: "Secure your website with an SSL certificate.",
  },
  {
    icon: FiHeadphones,
    title: "24/7 Expert Support",
    description: "Get help with your hosting when you need it.",
  },
  {
    icon: FiPackage,
    title: "1-click Installer",
    description: "Install WordPress and 400+ popular applications.",
  },
  {
    icon: FiCloud,
    title: "Enhanced Security",
    description: "Add a layer of protection against online threats.",
  },
  {
    icon: FiTrendingUp,
    title: "Easy Upgrades",
    description: "Move to a higher plan as your business grows.",
  },
  {
    icon: FiTerminal,
    title: "Secure Shell Access",
    description: "Connect to your hosting through an encrypted channel.",
  },
  {
    icon: FiCode,
    title: "Popular Programming Tools",
    description: "Work with PHP, MySQL, Ruby and more.",
  },
  {
    icon: FiRepeat,
    title: "Website Migration",
    description: "Ask our team about moving your website to us.",
  },
];

export default function UnlimitedHostingWhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-6">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl">
          Why Choose Linux Shared Web Hosting Services
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
