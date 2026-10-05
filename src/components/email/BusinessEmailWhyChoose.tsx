import {
  FiCalendar,
  FiClock,
  FiDatabase,
  FiHeadphones,
  FiHardDrive,
  FiLock,
  FiMail,
  FiRefreshCw,
  FiShield,
  FiTag,
  FiUserCheck,
} from "react-icons/fi";

const features = [
  {
    icon: FiHardDrive,
    title: "5 GB Storage",
    description: "A 5 GB mailbox for each Business Email account.",
  },
  {
    icon: FiDatabase,
    title: "Additional Storage",
    description: "Add more mailbox space when you need it.",
  },
  {
    icon: FiRefreshCw,
    title: "360° Synchronisation",
    description: "Sync email using POP3 or IMAP.",
  },
  {
    icon: FiTag,
    title: "Private-labeled Email",
    description: "Personalise email addresses with your own domain.",
  },
  {
    icon: FiCalendar,
    title: "Calendars",
    description: "Organise meetings and schedules from anywhere.",
  },
  {
    icon: FiMail,
    title: "Auto-Responder",
    description: "Set up automatic replies for incoming messages.",
  },
  {
    icon: FiShield,
    title: "Anti-virus Protection",
    description: "Protection features to help screen suspicious email.",
  },
  {
    icon: FiLock,
    title: "Branded SSL",
    description: "Secure email connections with your own Digital Certificate.",
  },
  {
    icon: FiClock,
    title: "99.99% Uptime",
    description: "High reliability & availability for your business email.",
  },
  {
    icon: FiUserCheck,
    title: "World-Class Support",
    description: "Get help from our team when you need it.",
  },
  {
    icon: FiHeadphones,
    title: "24/7 Support",
    description: "Email assistance is available around the clock.",
  },
];

export default function BusinessEmailWhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl">
          Why Choose Business Email?
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
