import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Farmstay Accommodation",
  description:
    "Stay on a real working farm in Canterbury, NZ. Farmstay accommodation at Kowai — wake up to animals, fresh air, and genuine New Zealand rural life.",
};

export default function FarmstayPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-terracotta mb-2">
          Accommodation
        </p>
        <h1 className="font-heading text-5xl text-forest mb-4">
          Farmstay at Kowai
        </h1>
        <p className="text-lg text-charcoal/70 leading-relaxed">
          A genuine working farm experience in Canterbury, New Zealand. Unwind,
          get involved, and wake up to a world that moves at nature&apos;s pace.
        </p>
      </div>

      {/* Availability calendar placeholder */}
      <section className="mb-16 rounded-2xl border border-warm-brown/20 bg-sage/5 p-8">
        <h2 className="font-heading text-2xl text-forest mb-2">
          Availability Calendar
        </h2>
        <p className="text-sm text-charcoal/60 mb-6">
          Check available dates below. To book, use the enquiry form.
        </p>
        {/* TODO: Replace src with published Microsoft 365 calendar embed URL.
            In Outlook → Calendar → Share → Publish to web → Copy HTML embed code.
            Paste the iframe src value below. */}
        <div className="rounded-xl overflow-hidden border border-warm-brown/10 bg-white">
          <iframe
            src="about:blank"
            title="Farmstay availability calendar"
            className="w-full"
            style={{ height: "600px", border: "none" }}
            aria-label="Farmstay availability calendar"
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

      {/* What to expect */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl text-forest mb-8">
          What to expect
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Farm life, for real",
              body: "Help with morning feeds, collect eggs, meet the animals. Or simply watch it all unfold from the porch.",
            },
            {
              title: "Comfortable rooms",
              body: "Clean, well-appointed guest rooms with views over the farm and countryside.",
            },
            {
              title: "Home-cooked meals",
              body: "Breakfast included. Wholesome food, local ingredients, and good coffee.",
            },
            {
              title: "Wide open space",
              body: "Wander the farm tracks, breathe the clean Canterbury air, and genuinely switch off.",
            },
            {
              title: "Dogs welcome",
              body: "Travelling with your dog? We can accommodate well-behaved dogs alongside your stay.",
            },
            {
              title: "Personal hosting",
              body: "You're staying with us, not at a resort. Genuine Kiwi hospitality, every time.",
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="rounded-xl bg-cream border border-warm-brown/15 p-6 flex flex-col gap-2"
            >
              <h3 className="font-heading text-lg text-forest">{title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-2xl bg-forest text-cream p-10 text-center">
        <h2 className="font-heading text-3xl mb-3">Ready to stay?</h2>
        <p className="text-cream/70 mb-6 max-w-md mx-auto">
          Send us an enquiry and we&apos;ll confirm availability and rates within 24
          hours.
        </p>
        <Link
          href="/book"
          className="inline-block rounded-full bg-terracotta px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-warm-brown"
        >
          Make an Enquiry
        </Link>
      </div>
    </div>
  );
}
