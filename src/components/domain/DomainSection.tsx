"use client";

import { FormEvent, useState } from "react";
import DomainEnquiryModal from "@/components/domain/DomainEnquiryModal";

const extensions = [
  {
    extension: ".com",
    label: "Most Popular",
  },
  {
    extension: ".in",
    label: "India",
  },
  {
    extension: ".net",
    label: "Technology",
  },
  {
    extension: ".org",
    label: "Organization",
  },
  {
    extension: ".co.in",
    label: "Business India",
  },
  {
    extension: ".org.in",
    label: "Organization India",
  },
];

type DomainResult = {
  domain: string;
  available: boolean;
  message: string;
};

export default function DomainSection() {
  const [domainName, setDomainName] = useState("");
  const [results, setResults] = useState<DomainResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    let value = domainName.trim().toLowerCase();

    // Empty input
    if (!value) {
      setError("Please enter a domain name.");
      setResults([]);
      return;
    }

    // Remove protocol
    value = value
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .replace(/\/.*$/, "")
      .trim();

    /*
     * DOMAIN VALIDATION 
     * Also supports a plain name:
     * example
     */

    const domainRegex =
      /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i;

    /*
     * If user enters a complete domain
     * then check ONLY that domain.
     */
    const isCompleteDomain = value.includes(".");

    if (isCompleteDomain && !domainRegex.test(value)) {
      setError("Please enter a valid domain name.");
      setResults([]);
      return;
    }

    /*
     * If user enters only the domain name
     * allow only letters, numbers and hyphen.
     */
    if (!isCompleteDomain) {
      if (
        !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(
          value
        )
      ) {
        setError("Please enter a valid domain name.");
        setResults([]);
        return;
      }
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      let domains: string[];

      /*
       * COMPLETE DOMAIN
       */
      if (isCompleteDomain) {
        domains = [value];
      } else {
        /*
         * PLAIN DOMAIN NAME
         * Check default extensions.
         */
        domains = extensions.map(
          (item) => `${value}${item.extension}`
        );
      }

      const responses = await Promise.all(
        domains.map(async (domain) => {
          const response = await fetch(
            `/api/domain/availability?domain=${encodeURIComponent(
              domain
            )}`,
            {
              method: "GET",
              cache: "no-store",
            }
          );

          const data = await response.json();

          if (!response.ok || !data.success) {
            throw new Error(
              data.message || "Unable to check domain."
            );
          }

          return {
            domain: data.domain || domain,
            available: Boolean(data.available),
            message:
              data.message ||
              (data.available
                ? "Domain Available"
                : "Already Registered"),
          };
        })
      );

      setResults(responses);
    } catch (err) {
      console.error(
        "Domain availability error:",
        err
      );

      setError(
        "Unable to check domain availability. Please try again."
      );

      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="domain-search"
      className="w-full bg-[#f6fafd] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find the Perfect Domain for Your Business
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Your domain is the foundation of your online identity.
            Choose a memorable domain name and give your business a
            professional presence on the internet.
          </p>
        </div>

        {/* =====================================================
            SEARCH
        ====================================================== */}

        <form
          onSubmit={handleSearch}
          className="mx-auto mt-10 flex w-full max-w-3xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={domainName}
            onChange={(e) => {
              setDomainName(e.target.value);
              setError("");
              setResults([]);
            }}
            placeholder="Enter your domain name"
            disabled={loading}
            className="block h-14 min-h-14 w-full flex-1 appearance-none rounded-xl border border-gray-300 bg-white px-5 text-base leading-normal text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-gray-50 sm:h-14"
          />

          <button
            type="submit"
            disabled={loading}
            className="h-14 rounded-xl bg-blue-600 px-7 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Checking..." : "Check Domain"}
          </button>
        </form>

        {/* =====================================================
            ERROR
        ====================================================== */}

        {error && (
          <p className="mt-4 text-center text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        {/* =====================================================
            RESULTS
        ====================================================== */}

        {results.length > 0 && (
           <div
                className={`mx-auto mt-8 grid max-w-4xl gap-4 ${
                results.length === 1
                    ? "grid-cols-1 place-items-center"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
            >
            {results.map((result) => (
              <div
                key={result.domain}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <p className="break-all text-base font-semibold text-gray-900">
                  {result.domain}
                </p>

                <p
                  className={`mt-2 text-sm font-semibold ${
                    result.available
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {result.available
                    ? "✓ Domain Available"
                    : "✕ Already Registered"}
                </p>

                {result.available && (
                  <div className="mt-4">
                    <DomainEnquiryModal domain={result.domain} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Easy Registration */}

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              ✓
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Easy Registration
              </h3>

              <p className="text-sm text-gray-600">
                Simple and hassle-free domain registration.
              </p>
            </div>
          </div>

          {/* Secure Management */}

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              ✓
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Secure Management
              </h3>

              <p className="text-sm text-gray-600">
                Manage your domain safely and easily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
