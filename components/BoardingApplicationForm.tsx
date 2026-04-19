"use client";

import { useActionState } from "react";
import { submitBoardingApplication } from "@/app/actions/boardingApplication";
import type { BoardingApplicationFormState } from "@/app/actions/boardingApplication";

const initialState: BoardingApplicationFormState = { success: false };

export default function BoardingApplicationForm() {
  const [state, formAction, isPending] = useActionState(
    submitBoardingApplication,
    initialState
  );

  if (state.success) {
    return (
      <div className="rounded-2xl bg-sage/15 border border-sage/30 p-10 text-center">
        <h2 className="font-heading text-3xl text-forest mb-3">
          Application received!
        </h2>
        <p className="text-charcoal/70 max-w-md mx-auto">
          Thanks for your boarding enquiry. We&apos;ll get back to you within 24
          hours at the email address you provided.
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
      {state.error && (
        <div
          role="alert"
          className="rounded-lg bg-terracotta/10 border border-terracotta/30 px-4 py-3 text-sm text-terracotta"
        >
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="ownerFirstName"
            className="text-sm font-medium text-charcoal"
          >
            Your first name{" "}
            <span className="text-terracotta" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="ownerFirstName"
            name="ownerFirstName"
            type="text"
            required
            autoComplete="given-name"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="ownerLastName"
            className="text-sm font-medium text-charcoal"
          >
            Your last name{" "}
            <span className="text-terracotta" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="ownerLastName"
            name="ownerLastName"
            type="text"
            required
            autoComplete="family-name"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="ownerPhone" className="text-sm font-medium text-charcoal">
            Phone <span className="text-terracotta" aria-hidden="true">*</span>
          </label>
          <input
            id="ownerPhone"
            name="ownerPhone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+64 21 000 0000"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="ownerEmail" className="text-sm font-medium text-charcoal">
            Email <span className="text-terracotta" aria-hidden="true">*</span>
          </label>
          <input
            id="ownerEmail"
            name="ownerEmail"
            type="email"
            required
            autoComplete="email"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
      </div>

      <div className="border-t border-warm-brown/15 pt-6">
        <p className="text-sm font-medium text-charcoal mb-4">About your dog</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dogName" className="text-sm font-medium text-charcoal">
              Dog&apos;s name{" "}
              <span className="text-terracotta" aria-hidden="true">*</span>
            </label>
            <input
              id="dogName"
              name="dogName"
              type="text"
              required
              className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dogBreed" className="text-sm font-medium text-charcoal">
              Breed{" "}
              <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
            </label>
            <input
              id="dogBreed"
              name="dogBreed"
              type="text"
              className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dogAge" className="text-sm font-medium text-charcoal">
              Age{" "}
              <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
            </label>
            <input
              id="dogAge"
              name="dogAge"
              type="text"
              placeholder="e.g. 3 years"
              className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dogWeight" className="text-sm font-medium text-charcoal">
              Weight (kg){" "}
              <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
            </label>
            <input
              id="dogWeight"
              name="dogWeight"
              type="text"
              inputMode="decimal"
              placeholder="e.g. 12"
              className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="checkIn" className="text-sm font-medium text-charcoal">
            Check-in <span className="text-terracotta" aria-hidden="true">*</span>
          </label>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            required
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="checkOut" className="text-sm font-medium text-charcoal">
            Check-out <span className="text-terracotta" aria-hidden="true">*</span>
          </label>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            required
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="text-sm font-medium text-charcoal">
          Vaccinations up to date (C5 or equivalent)?{" "}
          <span className="text-terracotta" aria-hidden="true">*</span>
        </legend>
        <div className="flex flex-wrap gap-4 mt-1">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-charcoal">
            <input
              type="radio"
              name="vaccinationsUpToDate"
              value="yes"
              required
              className="accent-terracotta"
            />
            Yes
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-charcoal">
            <input
              type="radio"
              name="vaccinationsUpToDate"
              value="no"
              className="accent-terracotta"
            />
            No
          </label>
        </div>
      </fieldset>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="medicalConditions" className="text-sm font-medium text-charcoal">
          Medical conditions{" "}
          <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
        </label>
        <textarea
          id="medicalConditions"
          name="medicalConditions"
          rows={2}
          className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20 resize-y"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="allergies" className="text-sm font-medium text-charcoal">
            Allergies{" "}
            <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
          </label>
          <input
            id="allergies"
            name="allergies"
            type="text"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="vetClinic" className="text-sm font-medium text-charcoal">
            Vet / clinic{" "}
            <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
          </label>
          <input
            id="vetClinic"
            name="vetClinic"
            type="text"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="emergencyContactName"
            className="text-sm font-medium text-charcoal"
          >
            Emergency contact name{" "}
            <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
          </label>
          <input
            id="emergencyContactName"
            name="emergencyContactName"
            type="text"
            autoComplete="name"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="emergencyContactPhone"
            className="text-sm font-medium text-charcoal"
          >
            Emergency contact phone{" "}
            <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
          </label>
          <input
            id="emergencyContactPhone"
            name="emergencyContactPhone"
            type="tel"
            autoComplete="tel"
            className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="specialInstructions" className="text-sm font-medium text-charcoal">
          Special instructions or notes{" "}
          <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
        </label>
        <textarea
          id="specialInstructions"
          name="specialInstructions"
          rows={3}
          placeholder="Feeding, behaviour, favourite toys..."
          className="rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20 resize-y"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer text-sm text-charcoal">
        <input
          type="checkbox"
          name="consentGiven"
          value="true"
          required
          className="accent-terracotta mt-0.5 shrink-0"
        />
        <span>
          I agree to the{" "}
          <a href="/terms" className="text-terracotta underline underline-offset-2">
            terms and conditions
          </a>
          . <span className="text-terracotta" aria-hidden="true">*</span>
        </span>
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-full bg-terracotta px-8 py-3 text-sm font-medium text-cream shadow transition-colors hover:bg-warm-brown disabled:opacity-60 disabled:cursor-not-allowed self-start"
      >
        {isPending ? "Sending..." : "Submit application"}
      </button>
    </form>
  );
}
