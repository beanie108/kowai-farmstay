import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kowai Farmstay & Boarding. Email stay@kowaifarmstay.co.nz or use the booking form. Located in Kowai Bush, Canterbury, New Zealand.",
};

export default function ContactPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          PAGE HEADER
          ═══════════════════════════════════════════════════ */}
      <section className="bg-forest/5 py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
            Contact
          </p>
          <h1 className="font-heading text-5xl text-forest mb-6">
            Get in touch
          </h1>
          <p className="text-lg text-charcoal/60 leading-relaxed max-w-xl mx-auto">
            Questions about the farmstay, dog boarding, or the farm in general?
            We are happy to help. Reach out and we will get back to you.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT DETAILS + BOOKING PROMPT
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-heading text-3xl text-forest mb-8">
                Contact details
              </h2>
              <dl className="flex flex-col gap-6">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-sage mb-1.5">
                    Email
                  </dt>
                  <dd>
                    <a
                      href="mailto:stay@kowaifarmstay.co.nz"
                      className="text-terracotta hover:text-warm-brown transition-colors text-lg font-medium"
                    >
                      stay@kowaifarmstay.co.nz
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-sage mb-1.5">
                    Location
                  </dt>
                  <dd className="text-charcoal/70 text-lg">
                    Kowai Bush, Canterbury, New Zealand
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-sage mb-1.5">
                    Response time
                  </dt>
                  <dd className="text-charcoal/70">
                    We aim to respond to all enquiries within 24 hours. If you
                    are enquiring during a busy period, it may take a little
                    longer -- but we will always get back to you.
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-sage mb-1.5">
                    Website
                  </dt>
                  <dd>
                    <a
                      href="https://kowaifarmstay.co.nz"
                      className="text-charcoal/70 hover:text-terracotta transition-colors"
                    >
                      kowaifarmstay.co.nz
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl bg-sage/10 aspect-video flex items-center justify-center text-sage/40 text-sm border border-warm-brown/10">
              {/* TODO: Embed Google Maps or a static map image once the
                  exact address is confirmed. Use an iframe embed from
                  Google Maps > Share > Embed a map. */}
              Map -- coming soon
            </div>
          </div>

          {/* Booking prompt + FAQ */}
          <div className="flex flex-col gap-8">
            {/* Booking form prompt */}
            <div className="rounded-2xl bg-terracotta/8 border border-terracotta/15 p-8 flex flex-col gap-4">
              <h2 className="font-heading text-2xl text-forest">
                Looking to book?
              </h2>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                If you want to make a farmstay or dog boarding enquiry, the
                fastest way is through our booking form. It takes about 2 minutes
                and gives us everything we need to check availability and get
                back to you with a quote.
              </p>
              <Link
                href="/book"
                className="self-start rounded-full bg-terracotta px-6 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-warm-brown"
              >
                Go to booking form
              </Link>
            </div>

            {/* Common questions */}
            <div className="rounded-2xl bg-cream border border-warm-brown/15 p-8 flex flex-col gap-6">
              <h2 className="font-heading text-2xl text-forest">
                Common questions
              </h2>

              {[
                {
                  q: "How far are you from Christchurch?",
                  a: "Approximately one hour's drive from central Christchurch, through some of Canterbury's most beautiful countryside.",
                },
                {
                  q: "Can I visit the farm before booking?",
                  a: "If you would like to see the farm before committing to a farmstay or boarding booking, get in touch and we can arrange a visit.",
                },
                {
                  q: "Do you have phone contact?",
                  a: "We prefer email for initial enquiries as it lets us give you a thorough response. Once a booking is confirmed, we will share a phone number for day-of logistics.",
                },
                {
                  q: "What if I need to change or cancel my booking?",
                  a: "We understand plans change. Get in touch as early as possible and we will do our best to accommodate. Our cancellation policy will be shared with your booking confirmation.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="flex flex-col gap-1.5">
                  <h3 className="font-medium text-sm text-forest">{q}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════ */}
      <section className="bg-forest py-16 px-4 text-center text-cream">
        <div className="max-w-xl mx-auto">
          <h2 className="font-heading text-3xl mb-3">
            We would love to hear from you
          </h2>
          <p className="text-cream/70 mb-6">
            Whether it is a question, a booking, or just to say hello -- drop us
            a line.
          </p>
          <a
            href="mailto:stay@kowaifarmstay.co.nz"
            className="inline-block rounded-full bg-terracotta px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-warm-brown"
          >
            Email Us
          </a>
        </div>
      </section>
    </>
  );
}
