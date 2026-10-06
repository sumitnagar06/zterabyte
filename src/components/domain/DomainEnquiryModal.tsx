"use client";

import { FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiCheckCircle, FiMail, FiMapPin, FiPhone, FiSend, FiUser, FiX } from "react-icons/fi";

type DomainEnquiryModalProps = {
  domain: string;
};

export default function DomainEnquiryModal({ domain }: DomainEnquiryModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({ name: "", company: "", address: "", email: "", phone: "" });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function closeModal() {
    setIsOpen(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          domain,
          service: "Domain Registration",
          plan: domain,
          billing: "Domain registration",
          message: `I would like to register the available domain ${domain}.`,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send enquiry.");
      }
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to send enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.currentTarget;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setSubmitted(false);
          setSubmitError("");
          setIsOpen(true);
        }}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#004f86]"
      >
        Order Now <FiSend />
      </button>

      {mounted && isOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-[#071827]/70 p-3 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(event) => event.target === event.currentTarget && closeModal()}
        >
          <section className="my-3 w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl sm:my-6">
            <header className="relative bg-[#071827] px-6 py-7 text-white sm:px-8">
              <button type="button" onClick={closeModal} aria-label="Close domain registration form" className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                <FiX />
              </button>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#006cb5]/20 px-3 py-1.5 text-xs font-bold text-[#70c8fa]">
                <FiCheckCircle /> Domain available
              </span>
              <h2 className="mt-4 pr-8 text-2xl font-black sm:text-3xl">Register your domain</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">Share your contact details and our domain team will help you with the registration.</p>
            </header>

            <div className="border-b border-slate-200 bg-[#f6fafd] px-6 py-5 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Selected domain</p>
              <p className="mt-1 break-all text-lg font-bold text-[#006cb5]">{domain}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-8 sm:py-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-[#071827]">
                  Your name *
                  <span className="relative mt-2 block">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input required name="name" value={form.name} onChange={updateField} autoComplete="name" placeholder="Enter your full name" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 font-normal outline-none focus:border-[#006cb5] focus:bg-white" />
                  </span>
                </label>
                <label className="text-sm font-semibold text-[#071827]">
                  Company
                  <input name="company" value={form.company} onChange={updateField} autoComplete="organization" placeholder="Company name" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none focus:border-[#006cb5] focus:bg-white" />
                </label>

                <label className="text-sm font-semibold text-[#071827]">
                  Email address *
                  <span className="relative mt-2 block">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input required type="email" name="email" value={form.email} onChange={updateField} autoComplete="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 font-normal outline-none focus:border-[#006cb5] focus:bg-white" />
                  </span>
                </label>
                <label className="text-sm font-semibold text-[#071827]">
                  Phone number *
                  <span className="relative mt-2 block">
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input required type="tel" name="phone" value={form.phone} onChange={updateField} autoComplete="tel" placeholder="Enter your phone number" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 font-normal outline-none focus:border-[#006cb5] focus:bg-white" />
                  </span>
                </label>
                <label className="text-sm font-semibold text-[#071827] sm:col-span-2">
                  Complete Address with Pincode
                  <span className="relative mt-2 block">
                    <FiMapPin className="absolute left-4 top-4 text-slate-400" />
                    <textarea name="address" value={form.address} onChange={updateField} autoComplete="street-address" rows={3} placeholder="Enter your address" className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 font-normal outline-none focus:border-[#006cb5] focus:bg-white" />
                  </span>
                </label>
              </div>

              {submitted && <p role="status" className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-800">Your domain registration enquiry was sent. Our team will contact you soon.</p>}
              {submitError && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{submitError}</p>}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={closeModal} className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3 text-sm font-bold text-white hover:bg-[#004f86] disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? "Sending..." : "Request Registration"} <FiSend />
                </button>
              </div>
            </form>
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}
