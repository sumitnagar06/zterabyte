import Link from "next/link";
import { FiCheck, FiX } from "react-icons/fi";

type ComparisonValue = boolean | string;

const products = ["Enterprise Email", "Business Email"];

const features: { name: string; values: ComparisonValue[] }[] = [
  { name: "Webmail", values: [true, true] },
  { name: "IMAP Sync", values: [true, true] },
  { name: "Disk Space", values: ["30 GB", "5 GB"] },
  { name: "POP & IMAP Access", values: [true, true] },
  { name: "Branded SSL Certificates", values: [true, true] },
  { name: "TLS Support", values: [true, true] },
  { name: "Cloudmark Email Protection", values: [true, true] },
  { name: "Identities", values: [true, true] },
  { name: "Mobile Responsive", values: [true, true] },
  { name: "Last Login IP", values: [true, true] },
  { name: "News Feed", values: [true, true] },
  { name: "Weather Widget", values: [true, true] },
  { name: "Custom Themes", values: [true, true] },
  { name: "Calendar Widget", values: [true, true] },
];

function FeatureValue({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return <FiCheck aria-label="Included" className="mx-auto text-lg font-bold text-[#006cb5]" />;
  }

  if (value === false) {
    return <FiX aria-label="Not included" className="mx-auto text-lg font-bold text-red-600" />;
  }

  return <span>{value}</span>;
}

export default function EnterpriseEmailComparison() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10 lg:px-6">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-[#38434f] sm:text-4xl">
            Enterprise Email vs Other Options
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Compare our email products
          </p>
          <Link
            href="#email-plans"
            className="mt-6 inline-flex rounded-md bg-[#006cb5] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#0082d8]"
          >
            View Plans
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-left text-xs text-slate-600 sm:text-sm">
            <thead>
              <tr>
                <th scope="col" className="w-[25%] border-b border-slate-200 px-3 py-4 font-normal sm:px-4">
                  Product Features
                </th>
                {products.map((product, index) => (
                  <th
                    key={product}
                    scope="col"
                    className={`border border-b-0 border-slate-200 px-3 py-4 text-center font-semibold sm:px-4 ${
                      index === 0 ? "border-t-[#84939a] text-[#38434f]" : "text-[#168ed0]"
                    }`}
                  >
                    {product}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.name}>
                  <th scope="row" className="border-b border-slate-200 px-3 py-3 text-left font-normal sm:px-4">
                    {feature.name}
                  </th>
                  {feature.values.map((value, index) => (
                    <td
                      key={`${feature.name}-${index}`}
                      className={`border px-3 py-3 text-center ${
                        index === 0
                          ? "border-[#9eaaae]"
                          : "border-slate-200"
                      }`}
                    >
                      <FeatureValue value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
