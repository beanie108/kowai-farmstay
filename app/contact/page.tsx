import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kowai Farmstay & Boarding. Email us at stay@kowaifarmstay.co.nz or use the contact form.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-terracotta mb-2">
          Contact
        </p>
        <h1 className="font-heading text-5xl text-forest mb-4">
          Get in touch
        </h1>
        <p className="text-lg text-charcoal/70 leading-relaxed">
          Questions, special requests, or just want to know more? We&apos;re happy to
          chat.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact details */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-heading text-2xl text-forest mb-4">
              Contact details
            </h2>
            <dl className="flex flex-col gap-5">
              <div>
                <dt className="text-xs uppercase tracking-widest text-sage mb-1">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:stay@kowaifarmstay.co.nz"
                    className="text-terracotta hover:text-warm-brown transition-colors text-lg"
                  >
                    stay@kowaifarmstay.co.nz
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-sage mb-1">
                  Location
                </dt>
                <dd className="text-charcoal/70">
                  Canterbury, New Zealand
                  {/* TODO: Add full address once confirmed */}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-sage mb-1">
                  Response time
                </dt>
                <dd className="text-charcoal/70">
                  We aim to respond to all enquiries within 24 hours.
                </dd>
              </div>
            </dl>
          </div>

          {/* Map placeholder */}
          <div className="rounded-xl bg-sage/10 aspect-video flex items-center justify-center text-sage/60 text-sm border border-warm-brown/10">
            {/* TODO: Embed Google Maps or static map image once address is confirmed */}
            Map — coming soon
          </div>
        </div>

        {/* Quick contact note */}
        <div className="rounded-2xl bg-cream border border-warm-brown/20 p-8 flex flex-col gap-4 h-fit">
          <h2 className="font-heading text-2xl text-forest">
            Before you get in touch
          </h2>
          <p className="text-charcoal/70 text-sm leading-relaxed">
            If you&apos;re looking to make a booking enquiry, our{" "}
            <a href="/book" className="text-terracotta hover:underline">
              booking form
            </a>{" "}
            is the fastest way to get things moving. It takes 2 minutes and
            gives us everything we need to confirm availability and pricing.
          </p>
          <a
            href="/book"
            className="mt-2 inline-block self-start rounded-full bg-terracotta px-6 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-warm-brown"
          >
            Go to booking form
          </a>
        </div>
      </div>
    </div>
  );
}
