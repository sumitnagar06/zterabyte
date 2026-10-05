import Link from "next/link";
import { FiArrowRight, FiPenTool, FiServer } from "react-icons/fi";

type MegaItem = {
  title: string;
  href: string;
};

type MegaColumn = {
  heading: string;
  items: MegaItem[];
};

type MegaMenuProps = {
  columns: MegaColumn[];
};

export default function MegaMenu({ columns }: MegaMenuProps) {
  const isHostingMenu = columns.some((column) => column.heading === "Web Hosting");
  const isEmailHostingMenu = columns.some(
    (column) => column.heading === "Business Email"
  );
  const isWebsiteDevelopmentMenu = columns.some(
    (column) => column.heading === "Web Development"
  );
  const isDesignMenu = columns.some(
    (column) => column.heading === "Creative Design"
  );
  const hasIllustration =
    isHostingMenu ||
    isEmailHostingMenu ||
    isWebsiteDevelopmentMenu ||
    isDesignMenu;

  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2 translate-y-2 rounded-2xl border border-slate-100 bg-white p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

      <div
        className={`grid gap-8 ${
          columns.length > 1 ? "grid-cols-2" : "grid-cols-1"
        } ${
          hasIllustration ? "lg:grid-cols-[1fr_0.9fr]" : ""
        }`}
      >
        {columns.map((column) => (
          <div key={column.heading}>

            <h3 className="mb-4 border-b border-slate-100 pb-3 text-xs font-bold uppercase tracking-wider text-[#006cb5]">
              {column.heading}
            </h3>

            <div className="space-y-1">
              {column.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group/item flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-[#eaf6ff] hover:text-[#006cb5]"
                >
                  <span>{item.title}</span>

                  <FiArrowRight className="text-[#006cb5] opacity-0 transition group-hover/item:translate-x-1 group-hover/item:opacity-100" />
                </Link>
              ))}
            </div>

          </div>
        ))}

        {hasIllustration && (
          <div className="flex min-h-56 items-center justify-center p-4">
            {isHostingMenu ? (
              <FiServer
                className="h-24 w-24 text-[#168ed0]"
                aria-label="Hosting server"
                role="img"
              />
            ) : isEmailHostingMenu ? (
              <svg
                viewBox="0 0 230 220"
                role="img"
                aria-label="Open email envelope"
                className="h-40 w-full max-w-[200px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M54 17H143L162 36V119H54V17Z" fill="white" stroke="#168ED0" strokeWidth="5" strokeLinejoin="round" />
                <path d="M143 18V37H161" fill="none" stroke="#168ED0" strokeWidth="5" strokeLinejoin="round" />
                <text x="108" y="88" fill="#4B5053" fontFamily="Arial, sans-serif" fontSize="50" fontWeight="600" textAnchor="middle">@</text>
                <path d="M27 91L48 65M193 91L172 65" stroke="#168ED0" strokeWidth="6" strokeLinejoin="round" />
                <path d="M27 91L110 130L193 91V187H27V91Z" fill="white" stroke="#168ED0" strokeWidth="6" strokeLinejoin="round" />
                <path d="M27 187L110 119L193 187" fill="none" stroke="#168ED0" strokeWidth="6" strokeLinejoin="round" />
              </svg>
            ) : isWebsiteDevelopmentMenu ? (
              <svg
                viewBox="0 0 180 140"
                role="img"
                aria-label="Website development browser and code illustration"
                className="h-36 w-44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="20" y="18" width="140" height="100" rx="12" stroke="#168ED0" strokeWidth="6" />
                <path d="M23 47H157" stroke="#168ED0" strokeWidth="5" />
                <circle cx="38" cy="33" r="3.5" fill="#168ED0" />
                <circle cx="51" cy="33" r="3.5" fill="#168ED0" />
                <circle cx="64" cy="33" r="3.5" fill="#168ED0" />
                <path d="M72 68L57 81L72 94M108 68L123 81L108 94M99 64L82 98" stroke="#168ED0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M72 119V130M108 119V130M61 130H119" stroke="#168ED0" strokeWidth="6" strokeLinecap="round" />
              </svg>
            ) : (
              <FiPenTool
                className="h-24 w-24 text-[#168ed0]"
                aria-label="Creative design"
                role="img"
              />
            )}
          </div>
        )}
      </div>

      <div className="mt-6 rounded-xl bg-[#071827] p-4">

        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="text-sm font-semibold text-white">
              Need help choosing a service?
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Talk to our team about the right solution for your business.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 rounded-lg bg-[#006cb5] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0082d8]"
          >
            Talk to Us
          </Link>

        </div>

      </div>

    </div>
  );
}
