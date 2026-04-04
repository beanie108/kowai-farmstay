import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Animals",
  description:
    "Meet the animals at Kowai Farm — from sheep and cattle to chickens and the farm dogs. Farm life wouldn't be the same without them.",
};

export default function AnimalsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-terracotta mb-2">
          Farm life
        </p>
        <h1 className="font-heading text-5xl text-forest mb-4">
          Meet the Animals
        </h1>
        <p className="text-lg text-charcoal/70 leading-relaxed">
          A farm is only as alive as its animals. At Kowai, there&apos;s always
          something to meet, something to feed, and something making noise at
          dawn.
        </p>
      </div>

      {/* Animal cards — content placeholders */}
      <section className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Sheep",
            description:
              "The heartbeat of the farm. Lambing season is a favourite with guests — especially the younger ones.",
            emoji: "🐑",
          },
          {
            name: "Cattle",
            description:
              "Slow-moving, curious, and surprisingly relaxing to be around. They make excellent company.",
            emoji: "🐄",
          },
          {
            name: "Chickens",
            description:
              "Free-ranging and always underfoot. Collect eggs with them in the morning — it never gets old.",
            emoji: "🐓",
          },
          {
            name: "Farm Dogs",
            description:
              "Working dogs are part of the daily rhythm. They know the farm better than anyone.",
            emoji: "🐕",
          },
          {
            name: "TODO: Add more",
            description:
              "Update this section with the actual animals on the farm. Add photos and real descriptions.",
            emoji: "🌿",
          },
        ].map(({ name, description, emoji }) => (
          <div
            key={name}
            className="rounded-2xl bg-cream border border-warm-brown/15 overflow-hidden flex flex-col"
          >
            {/* Image placeholder */}
            <div className="bg-sage/15 aspect-video flex items-center justify-center text-5xl">
              {emoji}
            </div>
            <div className="p-6 flex flex-col gap-2 flex-1">
              <h3 className="font-heading text-xl text-forest">{name}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="rounded-2xl bg-terracotta/10 border border-terracotta/20 p-10 text-center">
        <h2 className="font-heading text-3xl text-forest mb-3">
          Come and meet them in person
        </h2>
        <p className="text-charcoal/60 mb-6 max-w-md mx-auto">
          The best way to understand Kowai is to be here. Book a farmstay and
          wake up to the whole lot.
        </p>
        <Link
          href="/book"
          className="inline-block rounded-full bg-terracotta px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-warm-brown"
        >
          Book a Farmstay
        </Link>
      </div>
    </div>
  );
}
