"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PlanEnquiryModal from "@/components/common/PlanEnquiryModal";

import {
  FiCalendar,
  FiCloud,
  FiGlobe,
  FiMail,
  FiMinus,
  FiPlus,
  FiShield,
  FiSmartphone,
  FiUser,
} from "react-icons/fi";

/* ============================================================
   BILLING DURATIONS
   ============================================================ */

const durations = [
  {
    months: 1,
    label: "1 Month",
    price: 100,
    salePrice: 89,
    saleActive: false,
  },
  {
    months: 3,
    label: "3 Months",
    price: 300,
    salePrice: 249,
    saleActive: false,
  },
  {
    months: 5,
    label: "5 Months",
    price: 600,
    salePrice: 399,
    saleActive: false,
  },
  {
    months: 12,
    label: "12 Months",
    price: 1200,
    salePrice: 899,
    saleActive: false,
  },
];

/* ============================================================
   FEATURES
   ============================================================ */

const features = [
  {
    icon: FiCloud,
    title: "30 GB space per account",
    description:
      "Create professional email addresses using your own domain.",
  },
  {
    icon: FiCloud,
    title: "Get Additional Storage at 25.00/5GB",
    description:
      "Buy Additional Storage for more space."
  },
  {
    icon: FiMail,
    title: "Custom Email",
    description:
      "Email IDs like yourname@yourdomain.com for a professional business identity.",
  },
  {
    icon: FiCalendar,
    title: "Calendar & Contacts",
    description:
      "Organize your contacts, meetings and business schedule.",
  },
];

/* ============================================================
   COMPONENT
   ============================================================ */

export default function EnterpriseEmailPlans() {
  const [accounts, setAccounts] = useState(1);
  const [duration, setDuration] = useState(1);

  const selectedDuration = durations.find(
    (item) => item.months === duration
  );

  /* ============================================================
     PRICE CALCULATION
     ============================================================ */

  const regularTotalPrice = useMemo(() => {
    if (!selectedDuration) return 0;

    return accounts * selectedDuration.price;
  }, [accounts, selectedDuration]);

  const totalPrice = useMemo(() => {
    if (!selectedDuration) return 0;

    const finalPrice = selectedDuration.saleActive
      ? selectedDuration.salePrice
      : selectedDuration.price;

    return accounts * finalPrice;
  }, [accounts, selectedDuration]);

  const saleActive = selectedDuration?.saleActive ?? false;

  const regularPricePerAccount = selectedDuration?.price ?? 0;

  const finalPricePerAccount = selectedDuration
    ? selectedDuration.saleActive
      ? selectedDuration.salePrice
      : selectedDuration.price
    : 0;

  /*
   * Effective monthly price for dropdown / display.
   *
   * Example:
   * 12 Months sale price = ₹899
   * ₹899 ÷ 12 = ₹74.92 / account / month
   */
  const monthlyPricePerAccount = selectedDuration
    ? finalPricePerAccount / selectedDuration.months
    : 0;

  /* ============================================================
     ACCOUNT CONTROLS
     ============================================================ */

  const increaseAccounts = () => {
    setAccounts((current) => Math.min(current + 1, 200));
  };

  const decreaseAccounts = () => {
    setAccounts((current) => Math.max(current - 1, 1));
  };

  return (
    <main className="bg-[#f6fafd]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071827] py-20 lg:py-24">

        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#006cb5]/30 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#38a9f5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-[#38a9f5]/30 bg-[#006cb5]/20 px-4 py-2 text-sm font-semibold text-[#70c8ff]">
              <FiMail />
              Enterprise Email Hosting
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

              Professional Email for

              <span className="block text-[#38a9f5]">
                Your Growing Business
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Give your team professional email addresses on your own
              domain with generous storage, powerful productivity tools
              and reliable business communication.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          PRICING CONFIGURATOR
      ====================================================== */}

      <section id="email-plans" className="-mt-10 relative z-10 pb-16 sm:pb-20 lg:pb-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-6">

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

            <div className="grid lg:grid-cols-3">

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="p-7 sm:p-9 lg:col-span-1">

                <span className="text-sm font-bold uppercase tracking-wider text-[#006cb5]">
                  What&apos;s Included
                </span>

                <h2 className="mt-3 text-2xl font-bold text-[#071827]">
                  Enterprise Email
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Everything your business needs for professional
                  email communication.
                </p>

                <div className="mt-7 space-y-5">

                  {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="flex gap-3"
                      >

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                          <Icon />
                        </div>

                        <div>

                          <h3 className="text-sm font-bold text-[#071827]">
                            {feature.title}
                          </h3>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {feature.description}
                          </p>

                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>


              {/* =================================================
                  CONFIGURATION
              ================================================== */}

              <div className="border-y border-slate-200 bg-[#f8fbfe] p-7 sm:p-9 lg:border-x lg:border-y-0">

                <span className="text-sm font-bold uppercase tracking-wider text-[#006cb5]">
                  Configure Your Plan
                </span>

                <h2 className="mt-3 text-2xl font-bold text-[#071827]">
                  How many email accounts do you need?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Choose the number of business email accounts
                  required for your team.
                </p>


                {/* =================================================
                    ACCOUNTS
                ================================================== */}

                <div className="mt-8">

                  <label className="text-sm font-semibold text-[#071827]">
                    Number of Accounts
                  </label>

                  <div className="mt-3 flex h-14 overflow-hidden rounded-xl border border-slate-200 bg-white">

                    <button
                      type="button"
                      onClick={decreaseAccounts}
                      disabled={accounts <= 1}
                      className="flex w-14 items-center justify-center border-r border-slate-200 text-slate-600 transition hover:bg-[#eaf6ff] hover:text-[#006cb5] disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Decrease accounts"
                    >
                      <FiMinus />
                    </button>

                    <div className="flex flex-1 items-center justify-center gap-2">

                      <FiUser className="text-[#006cb5]" />

                      <span className="text-lg font-bold text-[#071827]">
                        {accounts}
                      </span>

                      <span className="text-sm text-slate-500">
                        accounts
                      </span>

                    </div>

                    <button
                      type="button"
                      onClick={increaseAccounts}
                      disabled={accounts >= 200}
                      className="flex w-14 items-center justify-center border-l border-slate-200 text-slate-600 transition hover:bg-[#eaf6ff] hover:text-[#006cb5] disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Increase accounts"
                    >
                      <FiPlus />
                    </button>

                  </div>

                </div>


                {/* =================================================
                    DURATION
                ================================================== */}

                <div className="mt-7">

                  <label
                    htmlFor="enterprise-email-duration"
                    className="text-sm font-semibold text-[#071827]"
                  >
                    Billing Duration
                  </label>

                  <select
                    id="enterprise-email-duration"
                    value={duration}
                    onChange={(event) =>
                      setDuration(Number(event.target.value))
                    }
                    className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-[#071827] outline-none transition focus:border-[#006cb5] focus:ring-2 focus:ring-[#006cb5]/10"
                  >

                    {durations.map((item) => {
                      const finalPrice = item.saleActive
                        ? item.salePrice
                        : item.price;

                      const monthlyPrice =
                        finalPrice / item.months;

                      return (
                        <option
                          key={item.months}
                          value={item.months}
                        >
                          {item.label} @ ₹
                          {monthlyPrice.toLocaleString("en-IN", {
                            maximumFractionDigits: 2,
                          })}
                          /acc/mo
                        </option>
                      );
                    })}

                  </select>

                </div>

                {/* Note */}
                 <p className="mt-4 font-light leading-tight text-[#071827]">
                      You can add more Business Email accounts for your panel, as your business grows!
                 </p>  


                {/* =================================================
                    PRICE INFO
                ================================================== */}

                {/* <div className="mt-7 rounded-2xl border border-[#d8edfb] bg-[#eaf6ff] p-5">
                  <div className="flex items-center justify-between gap-4">

                    <span className="text-sm text-slate-600">
                      Regular price per account
                    </span>

                    <span
                      className={
                        saleActive
                          ? "font-semibold text-slate-400 line-through"
                          : "font-bold text-[#006cb5]"
                      }
                    >
                      ₹
                      {regularPricePerAccount.toLocaleString(
                        "en-IN"
                      )}
                    </span>

                  </div>

                  {saleActive && (
                    <div className="mt-3 flex items-center justify-between gap-4">

                      <span className="text-sm text-slate-600">
                        Sale price per account
                      </span>

                      <span className="font-bold text-[#006cb5]">
                        ₹
                        {finalPricePerAccount.toLocaleString(
                          "en-IN"
                        )}
                      </span>

                    </div>
                  )}


                  <div className="mt-3 flex items-center justify-between gap-4">

                    <span className="text-sm text-slate-600">
                      Accounts
                    </span>

                    <span className="font-bold text-[#071827]">
                      {accounts}
                    </span>

                  </div>

                  <div className="mt-3 flex items-center justify-between gap-4">

                    <span className="text-sm text-slate-600">
                      Duration
                    </span>

                    <span className="font-bold text-[#071827]">
                      {selectedDuration?.label}
                    </span>

                  </div>

                </div> */}

              </div>


              {/* =================================================
                  TOTAL PRICE
              ================================================== */}

              <div className="flex flex-col bg-[#071827] p-7 text-white sm:p-9">

                <div>

                  <span className="text-sm font-bold uppercase tracking-wider text-[#70c8ff]">
                    Total Price
                  </span>

                  <p className="mt-2 text-sm text-slate-400">
                    Based on your selected accounts and duration.
                  </p>

                </div>


                {/* Price */}
                <div className="mt-10">

                  {saleActive && (
                    <span className="block text-lg font-semibold text-slate-500 line-through">
                      ₹
                      {regularTotalPrice.toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  )}

                  <span className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </span>

                  <p className="mt-2 text-sm text-slate-400">
                    Total for{" "}
                    {selectedDuration?.label.toLowerCase()}
                  </p>

                  {saleActive && (
                    <span className="mt-3 inline-flex rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-300">
                      Sale Price
                    </span>
                  )}

                </div>


                {/* =================================================
                    CALCULATION
                ================================================== */}

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">

                  <div className="flex items-center justify-between gap-4 text-sm">

                    <span className="text-slate-400">
                      {accounts} accounts
                    </span>

                    <span className="font-semibold text-white">
                      ₹
                      {(
                        accounts * monthlyPricePerAccount
                      ).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                      })}
                    </span>

                  </div>


                  <div className="mt-3 flex items-center justify-between gap-4 text-sm">

                    <span className="text-slate-400">
                      Duration
                    </span>

                    <span className="font-semibold text-white">
                      {duration} month
                      {duration > 1 ? "s" : ""}
                    </span>

                  </div>


                  {saleActive && (
                    <div className="mt-3 flex items-center justify-between gap-4 text-sm">

                      <span className="text-slate-400">
                        Regular total
                      </span>

                      <span className="font-semibold text-slate-500 line-through">
                        ₹
                        {regularTotalPrice.toLocaleString(
                          "en-IN"
                        )}
                      </span>

                    </div>
                  )}

                </div>


                {/* =================================================
                    ORDER NOW
                ================================================== */}

                <PlanEnquiryModal
                  service="Enterprise Email Hosting"
                  plan={`Enterprise Email - ${accounts} Account${
                    accounts > 1 ? "s" : ""
                  }`}
                  price={`₹${totalPrice.toLocaleString(
                    "en-IN"
                  )}`}
                  billing={
                    selectedDuration?.label || "1 Month"
                  }
                  features={[
                    `${accounts} email account${
                      accounts > 1 ? "s" : ""
                    }`,

                    saleActive
                      ? `Sale price: ₹${monthlyPricePerAccount.toLocaleString(
                          "en-IN",
                          {
                            maximumFractionDigits: 2,
                          }
                        )} per account / month`
                      : `₹${monthlyPricePerAccount.toLocaleString(
                          "en-IN",
                          {
                            maximumFractionDigits: 2,
                          }
                        )} per account / month`,

                    selectedDuration?.label || "1 Month",

                    "30 GB mailbox storage",
                    "Calendar & contacts",
                    "Multi-device sync",
                    "Email protection",
                  ]}
                />


                <p className="mt-4 text-center text-xs text-slate-500">
                  * All prices shown are inclusive of 18% GST.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY ZTERABYTE
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-[#006cb5]">
              Business Communication
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#071827] sm:text-4xl">
              Built for Professional Business Email
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Give your employees professional email addresses,
              reliable access and tools that help your business
              communicate effectively.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: FiMail,
                title: "Professional Identity",
                text:
                  "Use your own domain for professional business communication.",
              },
              {
                icon: FiShield,
                title: "Security Focused",
                text:
                  "Protect business communication with email security features.",
              },
              {
                icon: FiSmartphone,
                title: "Work Anywhere",
                text:
                  "Access your business email across desktop and mobile devices.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ff] text-[#006cb5]">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#071827]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}
