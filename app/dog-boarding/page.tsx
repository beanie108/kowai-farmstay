import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Boarding",
  description:
    "Premium dog boarding on a working farm in Canterbury, NZ. Your dog gets space to run, farm life to explore, and genuine care — not a kennel.",
};

export default function DogBoardingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-terracotta mb-2">
          Dog Boarding
        </p>
        <h1 className="font-heading text-5xl text-forest mb-4">
          A farm holiday for your dog
        </h1>
        <p className="text-lg text-charcoal/70 leading-relaxed">
          While you&apos;re away, your dog lives as part of the farm family. Space to
          run, fresh air, and genuine one-on-one care — never a kennel.
        </p>
      </div>

      {/* Availability calendar placeholder */}
      <section className="mb-16 rounded-2xl border border-warm-brown/20 bg-terracotta/5 p-8">
        <h2 className="font-heading text-2xl text-forest mb-2">
          Boarding Availability
        </h2>
        <p className="text-sm text-charcoal/60 mb-6">
          Check available dates below. Spots are limited — enquire early.
        </p>
        {/* TODO: Replace src with published Microsoft 365 calendar embed URL.
            In Outlook → Calendar → Share → Publish to web → Copy HTML embed code.
            You may use a separate calendar for dog boarding vs farmstay availability. */}
        <div className="rounded-xl overflow-hidden border border-warm-brown/10 bg-white">
          <iframe
            src="about:blank"
            title="Dog boarding availability calendar"
            className="w-full"
            style={{ height: "600px", border: "none" }}
            aria-label="Dog boarding availability calendar"
          />
        </div>
        <p className="mt-3 text-xs text-charcoal/40">
          Calendar powered by Microsoft 365. If the calendar does not load,{" "}
          <a
            href="mailto:stay@kowaifarmstay.co.nz"
            className="underline hover:text-terracotta"
          >
            contact us directly
          </a>
          .
        </p>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl text-forest mb-8">
          How it works
        </h2>
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Check availability",
              body: "Use the calendar above to see open dates, then send an enquiry.",
            },
            {
              step: "02",
              title: "Tell us about your dog",
              body: "We ask about breed, temperament, diet, and any special needs.",
            },
            {
              step: "03",
              title: "Drop-off & settle in",
              body: "Your dog arrives and gets familiar with the farm at their own pace.",
            },
            {
              step: "04",
              title: "Pick up a happy dog",
              body: "Exercised, loved, and ready to head home — and probably missing the farm.",
            },
          ].map(({ step, title, body }) => (
            <li
              key={step}
              className="rounded-xl bg-cream border border-warm-brown/15 p-6 flex flex-col gap-3"
            >
              <span className="font-heading text-4xl text-terracotta/30">
                {step}
              </span>
              <h3 className="font-heading text-lg text-forest">{title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* What&apos;s included */}
      <section className="mb-16 rounded-2xl bg-forest text-cream p-10">
        <h2 className="font-heading text-3xl mb-6">
          What&apos;s included
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-cream/80 text-sm">
          {[
            "Daily farm walks and off-leash run time",
            "Fed to your dog's regular diet and schedule",
            "Indoor sleeping — never left outside overnight",
            "Daily updates and photos on request",
            "Flea, tick, and health checks on arrival",
            "Up to date vaccinations required (C5)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 text-sage">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center">
        <h2 className="font-heading text-3xl text-forest mb-3">
          Book your dog in
        </h2>
        <p className="text-charcoal/60 mb-6 max-w-md mx-auto">
          Spots fill up fast. Send an enquiry to check availability and get a
          quote.
        </p>
        <Link
          href="/book"
          className="inline-block rounded-full bg-terracotta px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-warm-brown"
        >
          Make a Boarding Enquiry
        </Link>
      </div>
    </div>
  );
}
