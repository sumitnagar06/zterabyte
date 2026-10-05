import {
  FiDatabase,
  FiHardDrive,
  FiMail,
  FiShield,
  FiSliders,
  FiZap,
} from "react-icons/fi";

const specifications = [
  {
    icon: FiHardDrive,
    title: "Fastest NVMe SSD Storage",
    description:
      "Choose from 1 GB, 2 GB or 5 GB storage depending on your plan.",
  },
  {
    icon: FiZap,
    title: "100 GB Bandwidth",
    description:
      "Every plan includes 100 GB bandwidth for website data transfer.",
  },
  {
    icon: FiMail,
    title: "Business Email Accounts",
    description:
      "Plan options include 5, 10 or 20 email accounts using your domain.",
  },
  {
    icon: FiDatabase,
    title: "MySQL Databases",
    description:
      "Database allowances range from 1 to 10, depending on your plan.",
  },
  {
    icon: FiShield,
    title: "Free SSL Certificate",
    description:
      "Secure your website with an SSL certificate included with each plan.",
  },
  {
    icon: FiSliders,
    title: "Plesk Control Panel",
    description:
      "Manage your hosting account and website through Plesk.",
  },
];

export default function LimitedHostingSpecifications() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#071827] sm:text-4xl">
          Limited Shared Hosting Technical Specifications
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-slate-600 sm:text-base">
          Check the resources and tools included with our Limited Shared Hosting plans.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specifications.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="min-h-64 rounded-lg bg-[#f3f8fe] p-7 sm:p-8"
            >
              <Icon aria-hidden="true" className="h-9 w-9 text-[#263b5b]" />
              <h3 className="mt-5 text-base font-semibold text-[#071827]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
