import type { Metadata } from "next";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Book / Enquire",
  description:
    "Make a farmstay or dog boarding enquiry at Kowai. Fill in the form and we will be in touch within 24 hours with availability and pricing.",
};

export default function BookPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          PAGE HEADER
          ═══════════════════════════════════════════════════ */}
      <section className="bg-forest/5 py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
            Enquiries
          </p>
          <h1 className="font-heading text-5xl text-forest mb-6">
            Make an enquiry
          </h1>
          <p className="text-lg text-charcoal/60 leading-relaxed max-w-xl mx-auto">
            Whether you want to stay on the lifestyle block or board your dog, it starts
            here. Fill in the form below and we will come back to you within
            24 hours with availability and a personalised quote.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DUAL PATH
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Farmstay path */}
          <div className="rounded-2xl bg-sage/10 border border-sage/20 p-8 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-sage font-medium">
              For you
            </p>
            <h2 className="font-heading text-2xl text-forest">
              Farmstay enquiry
            </h2>
            <p className="text-sm text-charcoal/60 leading-relaxed">
              Interested in staying on the lifestyle block? Let us know your dates, how
              many guests, and any special requirements. We will confirm
              availability and send you a personalised quote.
            </p>
            <ul className="text-xs text-charcoal/50 flex flex-col gap-1.5">
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">&#10003;</span>
                Breakfast and farm activities included
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">&#10003;</span>
                Discounts for longer stays
              </li>
            </ul>
            <Link
              href="/farmstay"
              className="mt-auto self-start text-sm text-terracotta hover:text-warm-brown font-medium transition-colors"
            >
              Learn more about the farmstay &rarr;
            </Link>
          </div>

          {/* Dog boarding path */}
          <div className="rounded-2xl bg-terracotta/8 border border-terracotta/15 p-8 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-terracotta font-medium">
              For your dog
            </p>
            <h2 className="font-heading text-2xl text-forest">
              Dog boarding enquiry
            </h2>
            <p className="text-sm text-charcoal/60 leading-relaxed">
              Need a place for your dog while you are away? Tell us the dates,
              your dog&apos;s breed and temperament, and anything we should know.
              We will check availability and get back to you.
            </p>
            <ul className="text-xs text-charcoal/50 flex flex-col gap-1.5">
              <li className="flex items-start gap-2">
                <span className="text-terracotta mt-0.5">&#10003;</span>
                In-home boarding, not a kennel
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terracotta mt-0.5">&#10003;</span>
                Dachshund specialists (all breeds welcome)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terracotta mt-0.5">&#10003;</span>
                Daily photo updates
              </li>
            </ul>
            <Link
              href="/dog-boarding"
              className="mt-auto self-start text-sm text-terracotta hover:text-warm-brown font-medium transition-colors"
            >
              Learn more about boarding &rarr;
            </Link>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            HOW IT WORKS
            ═══════════════════════════════════════════════════ */}
        <div className="mb-16">
          <h2 className="font-heading text-2xl text-forest text-center mb-8">
            How the enquiry process works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Fill in the form",
                body: "Select farmstay, dog boarding, or both. Add your dates and details. Takes about 2 minutes.",
              },
              {
                step: "2",
                title: "We reply within 24 hours",
                body: "We check availability, put together a personalised quote, and get back to you by email.",
              },
              {
                step: "3",
                title: "Confirm and book",
                body: "Happy with the quote? We confirm your booking and send you everything you need to know before arrival.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col gap-3 text-center">
                <span className="font-heading text-4xl text-terracotta/25">
                  {step}
                </span>
                <h3 className="font-heading text-lg text-forest">{title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            THE FORM
            ═══════════════════════════════════════════════════ */}
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl text-forest text-center mb-2">
            Enquiry form
          </h2>
          <p className="text-center text-sm text-charcoal/50 mb-8">
            Fields marked with <span className="text-terracotta">*</span> are
            required
          </p>

          <EnquiryForm />

          <p className="mt-8 text-sm text-charcoal/50 text-center">
            Prefer to email us directly?{" "}
            <a
              href="mailto:stay@kowaifarmstay.co.nz"
              className="text-terracotta hover:text-warm-brown transition-colors"
            >
              stay@kowaifarmstay.co.nz
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
