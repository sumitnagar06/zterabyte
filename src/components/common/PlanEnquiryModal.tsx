"use client";

import { FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FiCheckCircle,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiUser,
  FiX,
} from "react-icons/fi";

type PlanEnquiryModalProps = {
  service: string;
  plan: string;
  price?: string;
  billing?: string;
  features?: string[];
};

export default function PlanEnquiryModal({
  service,
  plan,
  price,
  billing = "1 Year",
  features = [],
}: PlanEnquiryModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    address: "",
    domain: "",
    phone: "",
    email: "",
    message: "",
  });

  /* --------------------------------
     Check client mount
  -------------------------------- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* --------------------------------
     Lock background scroll
     and preserve page width
  -------------------------------- */
  useEffect(() => {
    if (!isOpen) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  /* --------------------------------
     Default enquiry message
  -------------------------------- */
  const defaultMessage = `Hello Zterabyte,

I am interested in the following plan:

Service: ${service}
Plan: ${plan}
${price ? `Price: ${price}` : ""}
Billing: ${billing}

Domain Name: ${formData.domain || "Not provided"}${
    features.length > 0
      ? `

Selected Details:
${features.map((feature) => `- ${feature}`).join("\n")}`
      : ""
  }

Please provide me with more information about this plan.`;

  /* --------------------------------
     Open modal
  -------------------------------- */
  function openModal() {
    setFormData((previous) => ({
      ...previous,
      message: defaultMessage,
    }));

    setSubmitted(false);
    setIsOpen(true);
  }

  /* --------------------------------
     Close modal
  -------------------------------- */
  function closeModal() {
    setIsOpen(false);
  }

  /* --------------------------------
     Handle input changes
  -------------------------------- */
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setFormData((previous) => {
      const updatedData = {
        ...previous,
        [name]: value,
      };

      return {
        ...updatedData,
        message:
          name === "domain"
            ? `Hello Zterabyte,

I am interested in the following plan:

Service: ${service}
Plan: ${plan}
${price ? `Price: ${price}` : ""}
Billing: ${billing}

Domain Name: ${value || "Not provided"}${
                features.length > 0
                  ? `

Selected Details:
${features.map((feature) => `- ${feature}`).join("\n")}`
                  : ""
              }

Please provide me with more information about this plan.`
            : updatedData.message,
      };
    });
  }

  /* --------------------------------
     Handle form submit
  -------------------------------- */
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setIsSubmitting(true);
  setSubmitError("");
  setSubmitted(false);

  try {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        company: formData.company,
        address: formData.address,
        domain: formData.domain,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,

        // Selected plan information
        service,
        plan,
        price,
        billing,
        features,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Unable to send enquiry."
      );
    }

    setSubmitted(true);
  } catch (error) {
    console.error("Enquiry submission error:", error);

    setSubmitError(
      error instanceof Error
        ? error.message
        : "Unable to send enquiry. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <>
      {/* =========================================
          ORDER / ENQUIRY BUTTON
      ========================================= */}
      <button
        type="button"
        onClick={openModal}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#004f86]"
      >
        Order Now
        <FiSend />
      </button>

      {/* =========================================
          MODAL
          Render directly into document.body
      ========================================= */}
      {mounted &&
        isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-[#071827]/70 p-2 backdrop-blur-sm sm:items-center sm:p-4"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            {/* =====================================
                MODAL CONTAINER
            ===================================== */}
            <div className="relative my-2 w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl sm:my-6 sm:max-h-[calc(100dvh-3rem)] sm:rounded-3xl">
              {/* ===================================
                  HEADER
              =================================== */}
              <div className="bg-[#071827] px-5 py-5 sm:px-8 sm:py-6">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close enquiry form"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  <FiX />
                </button>

                <div className="pr-10">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#006cb5]/20 px-3 py-1.5 text-xs font-bold text-[#70c8fa]">
                    <FiCheckCircle />
                    Plan Enquiry
                  </span>

                  {/* Title */}
                  <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                    Order {plan}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Fill in your details and our team will contact you
                    regarding your selected plan.
                  </p>
                </div>
              </div>

              {/* ===================================
                  SELECTED PLAN INFORMATION
              =================================== */}
              <div className="border-b border-slate-200 bg-[#f6fafd] px-6 py-5 sm:px-8">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Service */}
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Service
                    </p>

                    <p className="mt-1 break-words text-sm font-bold text-[#071827]">
                      {service}
                    </p>
                  </div>

                  {/* Plan */}
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Plan
                    </p>

                    <p className="mt-1 break-words text-sm font-bold text-[#006cb5]">
                      {plan}
                    </p>
                  </div>

                  {/* Billing */}
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Billing
                    </p>

                    <p className="mt-1 break-words text-sm font-bold text-[#071827]">
                      {billing}
                    </p>
                  </div>
                </div>

                {/* Price */}
                {price && (
                  <div className="mt-4 border-t border-slate-200 pt-4">
                    <span className="text-xs font-semibold text-slate-400">
                      Plan Price
                    </span>

                    <span className="ml-2 text-lg font-black text-[#006cb5]">
                      {price}
                    </span>
                  </div>
                )}

                {/* Features */}
                {features.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-200 pt-4">
                    {features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-1.5 text-xs font-medium text-slate-600"
                      >
                        <FiCheckCircle className="shrink-0 text-[#006cb5]" />

                        <span>{feature}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* ===================================
                  ENQUIRY FORM
              =================================== */}
              <form
                onSubmit={handleSubmit}
                 className="px-5 py-5 sm:px-8 sm:py-8"
              >
                {/* Name + Company */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="plan-name"
                      className="mb-2 block text-sm font-semibold text-[#071827]"
                    >
                      Your Name *
                    </label>

                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        id="plan-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:bg-white focus:ring-2 focus:ring-[#006cb5]/10"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="plan-company"
                      className="mb-2 block text-sm font-semibold text-[#071827]"
                    >
                      Company
                    </label>

                    <input
                      id="plan-company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:bg-white focus:ring-2 focus:ring-[#006cb5]/10"
                    />
                  </div>

                  {/* Domain Name */}
                  <div>
                    <label
                      htmlFor="plan-domain"
                      className="mb-2 block text-sm font-semibold text-[#071827]"
                    >
                      Domain Name *
                    </label>

                    <div className="relative">
                      <FiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        id="plan-domain"
                        name="domain"
                        type="text"
                        required
                        value={formData.domain}
                        onChange={handleChange}
                        placeholder="example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:bg-white focus:ring-2 focus:ring-[#006cb5]/10"
                      />
                    </div>

                    <p className="mt-1.5 text-xs text-slate-400">
                      Enter your existing or preferred domain name.
                    </p>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="plan-phone"
                      className="mb-2 block text-sm font-semibold text-[#071827]"
                    >
                      Phone *
                    </label>

                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        id="plan-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:bg-white focus:ring-2 focus:ring-[#006cb5]/10"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="plan-email"
                      className="mb-2 block text-sm font-semibold text-[#071827]"
                    >
                      Email *
                    </label>

                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        id="plan-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:bg-white focus:ring-2 focus:ring-[#006cb5]/10"
                      />
                    </div>
                  </div>
                </div>

                {/* =================================
                    ADDRESS
                ================================= */}
                <div className="mt-5">
                  <label
                    htmlFor="plan-address"
                    className="mb-2 block text-sm font-semibold text-[#071827]"
                  >
                    Complete Address with Pincode
                  </label>

                  <div className="relative">
                    <FiMapPin className="absolute left-4 top-4 text-slate-400" />
                    <textarea
                      id="plan-address"
                      name="address"
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      autoComplete="street-address"
                      placeholder="Enter your address"
                      className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:bg-white focus:ring-2 focus:ring-[#006cb5]/10"
                    />
                  </div>
                </div>

                {/* =================================
                    MESSAGE
                ================================= */}
                <div className="mt-5">
                  <label
                    htmlFor="plan-message"
                    className="mb-2 block text-sm font-semibold text-[#071827]"
                  >
                    Message
                  </label>

                  <textarea
                    id="plan-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    readOnly
                    aria-readonly="true"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-100 px-4 py-3.5 text-sm leading-6 text-[#071827] outline-none"
                  />
                </div>

                {/* =================================
                    SUCCESS MESSAGE
                ================================= */}
                {submitted && (
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-green-600" />

                    <div>
                      <p className="text-sm font-bold text-green-800">
                        Enquiry submitted successfully.
                      </p>

                      <p className="mt-1 text-xs leading-5 text-green-700">
                        Our team will review your enquiry and contact you soon.
                      </p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4">
                    <p className="text-sm font-bold text-red-800">
                      Unable to submit enquiry.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-red-700">
                      {submitError}
                    </p>
                  </div>
                )}

                {/* =================================
                    FORM BUTTONS
                ================================= */}
                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  {/* Cancel */}
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#004f86] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Enquiry"}

                    {isSubmitting ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                      <FiSend />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
