"use client";

import { useActionState } from "react";
import { submitEnquiry } from "@/app/actions/enquiry";
import type { EnquiryFormState } from "@/app/actions/enquiry";

const initialState: EnquiryFormState = { success: false };

export default function EnquiryForm() {
  const [state, formAction, isPending] = useActionState(
    submitEnquiry,
    initialState
  );

  if (state.success) {
    return (
      <div className="rounded-2xl bg-sage/15 border border-sage/30 p-10 text-center">
        <h2 className="font-heading text-3xl text-forest mb-3">
          Enquiry received!
        </h2>
        <p className="text-charcoal/70 max-w-md mx-auto">
          Thanks for getting in touch. We&apos;ll come back to you within 24 hours at
          the email address you provided.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col gap-6 rounded-2xl border border-warm-brown/20 bg-cream p-8 shadow-sm"
    >
      {/* Server-side error */}
      {state.error && (
        <div
          role="alert"
          className="rounded-lg bg-terracotta/10 border border-terracotta/30 px-4 py-3 text-sm text-terracotta"
        >
          {state.error}
        </div>
      )}

      {/* Enquiry type */}
      <fieldset className="flex flex-col gap-2">
        <legend className="text-sm font-medium text-charcoal">
          What are you enquiring about?{" "}
          <span className="text-terracotta" aria-hidden="true">*</span>
        </legend>
        <div className="flex flex-wrap gap-3 mt-1">
          {[
            { value: "farmstay", label: "Farmstay accommodation" },
            { value: "dog-boarding", label: "Dog boarding" },
            { value: "both", label: "Both" },
          ].map(({ value, label }) => (
            <label
              key={value}
              className="flex items-center gap-2 cursor-pointer text-sm text-charcoal"
            >
              <input
                type="radio"
                name="enquiryType"
                value={value}
                required
                className="accent-terracotta"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-charcoal">
            Full name <span className="text-terracotta" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-charcoal">
            Email address <span className="text-terracotta" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@example.com"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-charcoal">
          Phone number{" "}
          <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+64 21 000 0000"
          className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
        />
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="checkIn" className="text-sm font-medium text-charcoal">
            Arrival date
          </label>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="checkOut" className="text-sm font-medium text-charcoal">
            Departure date
          </label>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
      </div>

      {/* Guest + dog count */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="guests" className="text-sm font-medium text-charcoal">
            Number of guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min="1"
            max="20"
            placeholder="2"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="dogCount" className="text-sm font-medium text-charcoal">
            Number of dogs
          </label>
          <input
            id="dogCount"
            name="dogCount"
            type="number"
            min="0"
            max="10"
            placeholder="0"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-charcoal">
          Anything else we should know?{" "}
          <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Dog breeds, dietary requirements, questions about the farm..."
          className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20 resize-y"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="rounded-full bg-terracotta px-8 py-3 text-sm font-medium text-cream shadow transition-colors hover:bg-warm-brown disabled:opacity-60 disabled:cursor-not-allowed self-start"
      >
        {isPending ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
