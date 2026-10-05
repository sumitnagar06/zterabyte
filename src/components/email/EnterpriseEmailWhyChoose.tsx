import {
  FiCalendar,
  FiDatabase,
  FiEdit3,
  FiGrid,
  FiHardDrive,
  FiLock,
  FiMail,
  FiRefreshCw,
  FiShield,
  FiSmartphone,
} from "react-icons/fi";

const features = [
  {
    icon: FiHardDrive,
    title: "30 GB Storage",
    description: "Generous 30 GB storage for every email account.",
  },
  {
    icon: FiDatabase,
    title: "Get Additional Storage",
    description: "Add more space as your email storage needs grow.",
  },
  {
    icon: FiEdit3,
    title: "Signature Designer",
    description: "Create a business signature for outgoing emails.",
  },
  {
    icon: FiSmartphone,
    title: "POP3 & IMAP Access",
    description: "Access your email across your devices.",
  },
  {
    icon: FiMail,
    title: "Your Email, Your Brand",
    description: "Use professional email addresses on your domain.",
  },
  {
    icon: FiCalendar,
    title: "Calendars & Contacts",
    description: "Organise business contacts and schedules anywhere.",
  },
  {
    icon: FiShield,
    title: "ClamAV Protection",
    description: "Help protect your business email from online threats.",
  },
  {
    icon: FiRefreshCw,
    title: "Auto-Responder",
    description: "Set up automatic replies to incoming messages.",
  },
  {
    icon: FiLock,
    title: "Anti-virus Protection",
    description: "Keep email safer with protection against malicious content.",
  },
  {
    icon: FiGrid,
    title: "Calendar & Planner",
    description: "Plan meetings, create events and organise your schedule.",
  },
];

export default function EnterpriseEmailWhyChoose() {
  return (
    <section className="bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl">
          Why Choose Enterprise Email Solution
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
