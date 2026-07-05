"use client";

import { useActionState } from "react";
import { submitBoardingApplication } from "@/app/actions/boardingApplication";
import type { BoardingApplicationFormState } from "@/app/actions/boardingApplication";

const initialState: BoardingApplicationFormState = { success: false };

const inputClassName =
  "rounded-lg border border-warm-brown/30 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20";

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
          Thanks for your boarding application. We&apos;ll review the details and
          get back to you within 24 hours.
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

      <div>
        <h3 className="text-sm font-medium text-charcoal mb-4">Owner details</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="ownerFirstName" className="text-sm font-medium text-charcoal">
              First name <span className="text-terracotta" aria-hidden="true">*</span>
            </label>
            <input
              id="ownerFirstName"
              name="ownerFirstName"
              type="text"
              required
              autoComplete="given-name"
              className={inputClassName}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="ownerLastName" className="text-sm font-medium text-charcoal">
              Last name <span className="text-terracotta" aria-hidden="true">*</span>
            </label>
            <input
              id="ownerLastName"
              name="ownerLastName"
              type="text"
              required
              autoComplete="family-name"
              className={inputClassName}
            />
          </div>
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
              className={inputClassName}
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
              className={inputClassName}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-charcoal mb-4">Dog details</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="dogName" className="text-sm font-medium text-charcoal">
              Dog&apos;s name <span className="text-terracotta" aria-hidden="true">*</span>
            </label>
            <input id="dogName" name="dogName" type="text" required className={inputClassName} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dogBreed" className="text-sm font-medium text-charcoal">
              Breed
            </label>
            <input id="dogBreed" name="dogBreed" type="text" className={inputClassName} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dogAge" className="text-sm font-medium text-charcoal">
              Age
            </label>
            <input id="dogAge" name="dogAge" type="text" className={inputClassName} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dogWeight" className="text-sm font-medium text-charcoal">
              Weight (kg)
            </label>
            <input id="dogWeight" name="dogWeight" type="number" min="0" className={inputClassName} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="checkIn" className="text-sm font-medium text-charcoal">
              Check-in <span className="text-terracotta" aria-hidden="true">*</span>
            </label>
            <input id="checkIn" name="checkIn" type="date" required className={inputClassName} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="checkOut" className="text-sm font-medium text-charcoal">
              Check-out <span className="text-terracotta" aria-hidden="true">*</span>
            </label>
            <input id="checkOut" name="checkOut" type="date" required className={inputClassName} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-charcoal mb-4">Health & care</h3>
        <div className="flex flex-col gap-4">
          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-medium text-charcoal">
              Vaccinations up to date? <span className="text-terracotta" aria-hidden="true">*</span>
            </legend>
            <div className="flex flex-wrap gap-3 mt-1">
              {["yes", "no"].map((value) => (
                <label key={value} className="flex items-center gap-2 cursor-pointer text-sm text-charcoal">
                  <input
                    type="radio"
                    name="vaccinationsUpToDate"
                    value={value}
                    required
                    className="accent-terracotta"
                  />
                  {value === "yes" ? "Yes" : "No"}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="medicalConditions" className="text-sm font-medium text-charcoal">
              Medical conditions
            </label>
            <textarea
              id="medicalConditions"
              name="medicalConditions"
              rows={3}
              className={`${inputClassName} resize-y`}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="allergies" className="text-sm font-medium text-charcoal">
              Allergies
            </label>
            <input id="allergies" name="allergies" type="text" className={inputClassName} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="vetClinic" className="text-sm font-medium text-charcoal">
              Vet / clinic
            </label>
            <input id="vetClinic" name="vetClinic" type="text" className={inputClassName} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-charcoal mb-4">Emergency contact</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="emergencyContactName" className="text-sm font-medium text-charcoal">
              Name
            </label>
            <input
              id="emergencyContactName"
              name="emergencyContactName"
              type="text"
              className={inputClassName}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="emergencyContactPhone" className="text-sm font-medium text-charcoal">
              Phone
            </label>
            <input
              id="emergencyContactPhone"
              name="emergencyContactPhone"
              type="tel"
              className={inputClassName}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="specialInstructions" className="text-sm font-medium text-charcoal">
          Special instructions
        </label>
        <textarea
          id="specialInstructions"
          name="specialInstructions"
          rows={4}
          className={`${inputClassName} resize-y`}
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer text-sm text-charcoal">
        <input
          type="checkbox"
          name="consentGiven"
          value="true"
          required
          className="mt-1 accent-terracotta"
        />
        <span>
          I accept the{" "}
          <a href="/terms" className="text-terracotta hover:text-warm-brown transition-colors">
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
        {isPending ? "Sending..." : "Submit Application"}
      </button>
    </form>
  );
}
