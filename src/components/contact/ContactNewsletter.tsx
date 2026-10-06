"use client";

import { FormEvent, useState } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiMail,
} from "react-icons/fi";

const benefits = [
  "Digital marketing updates",
  "Latest services & solutions",
  "Useful business insights",
];

export default function ContactNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to subscribe right now.");
      }
      setStatus("Thanks for subscribing. You are on our newsletter list.");
      setEmail("");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to subscribe right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="overflow-hidden bg-[#f6fafd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">

        <div className="relative overflow-hidden rounded-3xl bg-[#071827] px-6 py-10 shadow-xl sm:px-10 sm:py-12 lg:px-14">

          {/* Background Effects */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#006cb5]/25 blur-3xl" />

          <div className="absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-[#38a9f5]/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT CONTENT */}
            <div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006cb5] text-white shadow-lg">
                <FiMail className="text-2xl" />
              </div>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl">
                Stay Connected With
                <span className="block text-[#38a9f5]">
                  ZTERABYTE
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Stay informed about our latest digital services, solutions
                and useful updates for your business.
              </p>

              {/* Benefits */}
              <div className="mt-6 space-y-3">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <FiCheckCircle className="shrink-0 text-[#38a9f5]" />
                    {benefit}
                  </div>
                ))}

              </div>

            </div>

            {/* NEWSLETTER FORM */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-7">

              <h3 className="text-lg font-bold text-white">
                Subscribe to Our Newsletter
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Enter your email address to receive updates and useful
                information from our team.
              </p>

              <form className="mt-6" onSubmit={handleSubmit}>

                <label
                  htmlFor="newsletter-email"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Email Address
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">

                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    placeholder="Enter your email address"
                    className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#38a9f5] focus:ring-2 focus:ring-[#38a9f5]/20"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0086dc] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                    <FiArrowRight />
                  </button>

                </div>

                <p className="mt-4 text-xs leading-5 text-slate-500">
                  By subscribing, you agree to receive updates from
                  Zterabyte.
                </p>

                {status && (
                  <p role="status" aria-live="polite" className="mt-3 text-sm text-slate-200">
                    {status}
                  </p>
                )}

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
