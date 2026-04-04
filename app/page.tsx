import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Escape to Kowai — farmstay accommodation and dog boarding on a working New Zealand farm. Book your stay or your dog's home away from home.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center bg-forest px-4 text-center text-cream">
        {/* Placeholder for hero image — replace bg-forest with a next/image background */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 to-forest/95" />
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-sage">
            Canterbury, New Zealand
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-cream">
            Life is better on the farm.
          </h1>
          <p className="max-w-xl text-lg text-cream/80 leading-relaxed">
            Unique farmstay accommodation and premium dog boarding on a working
            New Zealand farm. Come stay — or leave your dog with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/farmstay"
              className="rounded-full bg-terracotta px-7 py-3 text-sm font-medium text-cream shadow transition-colors hover:bg-warm-brown"
            >
              Explore Farmstay
            </Link>
            <Link
              href="/dog-boarding"
              className="rounded-full border border-cream/40 px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Dog Boarding
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl text-forest">
            Two ways to experience Kowai
          </h2>
          <p className="mt-3 text-warm-brown">
            Farmstay for you. Boarding for your dog.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Farmstay card */}
          <div className="rounded-2xl bg-sage/10 p-8 flex flex-col gap-4">
            <span className="text-3xl">🏡</span>
            <h3 className="font-heading text-2xl text-forest">
              Farmstay Accommodation
            </h3>
            <p className="text-charcoal/80 leading-relaxed">
              Wake up to birdsong, roll your sleeves up, and experience genuine
              New Zealand farm life. Comfortable rooms, home-cooked meals, and
              wide open space.
            </p>
            <Link
              href="/farmstay"
              className="mt-auto self-start text-sm font-medium text-terracotta hover:text-warm-brown transition-colors"
            >
              Learn more &rarr;
            </Link>
          </div>
          {/* Dog boarding card */}
          <div className="rounded-2xl bg-terracotta/10 p-8 flex flex-col gap-4">
            <span className="text-3xl">🐾</span>
            <h3 className="font-heading text-2xl text-forest">
              Premium Dog Boarding
            </h3>
            <p className="text-charcoal/80 leading-relaxed">
              Your dog gets space to run, fresh air, and genuine care — not a
              kennel. They stay as part of the farm family while you&apos;re away.
            </p>
            <Link
              href="/dog-boarding"
              className="mt-auto self-start text-sm font-medium text-terracotta hover:text-warm-brown transition-colors"
            >
              Learn more &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-terracotta py-16 px-4 text-center text-cream">
        <h2 className="font-heading text-3xl sm:text-4xl">
          Ready to book?
        </h2>
        <p className="mt-3 text-cream/80 max-w-md mx-auto">
          Enquire now and we&apos;ll get back to you within 24 hours.
        </p>
        <Link
          href="/book"
          className="mt-6 inline-block rounded-full bg-cream px-8 py-3 text-sm font-medium text-terracotta shadow transition-colors hover:bg-cream/90"
        >
          Make an Enquiry
        </Link>
      </section>
    </>
  );
}
