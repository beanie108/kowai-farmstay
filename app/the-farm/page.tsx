import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Farm",
  description:
    "Learn about Kowai Farm — a working Canterbury farm with a rich history, diverse land, and a genuine commitment to sustainable farming.",
};

export default function TheFarmPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-terracotta mb-2">
          About
        </p>
        <h1 className="font-heading text-5xl text-forest mb-4">
          The Farm
        </h1>
        <p className="text-lg text-charcoal/70 leading-relaxed">
          Kowai is a working farm in the heart of Canterbury, New Zealand.
          Surrounded by wide skies and rolling country, it&apos;s a place where
          seasons still matter and the land tells its own story.
        </p>
      </div>

      {/* Farm story placeholder */}
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-5 text-charcoal/80 leading-relaxed">
          <h2 className="font-heading text-3xl text-forest">Our story</h2>
          <p>
            {/* TODO: Replace with real farm story copy from client */}
            Kowai Farm has been part of the Canterbury landscape for generations.
            What started as a working sheep and cattle property has grown into a
            diverse farm that now welcomes guests from New Zealand and around the
            world.
          </p>
          <p>
            The name &quot;Kowai&quot; comes from the native New Zealand tree whose golden
            flowers signal the arrival of spring — a fitting name for a place
            built on renewal and the rhythms of the land.
          </p>
          <p>
            Today we run a mix of livestock, maintain native plantings, and share
            this place with guests who want to experience rural New Zealand the
            real way — not through a brochure.
          </p>
        </div>

        {/* Image placeholder */}
        <div className="rounded-2xl bg-sage/20 aspect-[4/3] flex items-center justify-center text-sage/60">
          <p className="text-sm">Farm photo — coming soon</p>
        </div>
      </section>

      {/* Farm facts */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl text-forest mb-8">The land</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              label: "Location",
              value: "Canterbury, New Zealand",
            },
            {
              label: "Farm size",
              value: "TODO ha — update with actual size",
            },
            {
              label: "Elevation",
              value: "TODO — update with actual elevation",
            },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="rounded-xl bg-forest/5 border border-forest/10 p-6"
            >
              <p className="text-xs uppercase tracking-widest text-sage mb-1">
                {label}
              </p>
              <p className="font-heading text-xl text-forest">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/farmstay"
          className="rounded-full bg-terracotta px-7 py-3 text-sm font-medium text-cream text-center transition-colors hover:bg-warm-brown"
        >
          Stay on the Farm
        </Link>
        <Link
          href="/animals"
          className="rounded-full border border-forest px-7 py-3 text-sm font-medium text-forest text-center transition-colors hover:bg-forest hover:text-cream"
        >
          Meet the Animals
        </Link>
      </div>
    </div>
  );
}
