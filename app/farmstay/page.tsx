import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import { farmstayBookings } from "@/data/availability";

export const metadata: Metadata = {
  title: "Farmstay Accommodation",
  description:
    "Stay on a real lifestyle block in Canterbury, New Zealand. Wake up to mountain views, meet the animals, and experience genuine Kiwi hospitality at Kowai Farmstay.",
};

export default function FarmstayPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          PAGE HERO
          ═══════════════════════════════════════════════════ */}
      <section className="relative bg-forest py-28 px-4 text-cream">
        <Image
          src="/images/farmstay-hero.jpg"
          alt="Aerial view of Kowai Farmstay house and gardens with Southern Alps in background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 to-forest/90" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sage mb-4">
            Accommodation
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl text-cream mb-6 leading-tight">
            Experience the rural lifestyle
          </h1>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
            No queues, no room service, no mini bar. Just wide open space,
            genuine hospitality, and a farm that comes alive every morning.
            Kowai Farmstay is accommodation the way it should be -- honest,
            comfortable, and utterly different.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE EXPERIENCE
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] order-2 lg:order-1">
            <Image
              src="/images/living-room.jpg"
              alt="Warm living room with wood fire at Kowai Farmstay"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta">
              The experience
            </p>
            <h2 className="font-heading text-4xl text-forest leading-snug">
              A place to slow down, breathe deep, and remember what matters
            </h2>
            <div className="flex flex-col gap-4 text-charcoal/70 leading-relaxed">
              <p>
                Kowai Farmstay is not a hotel pretending to be rural. It is a
                genuine lifestyle block where you wake up to birdsong, the Southern
                Alps catch the morning light, and there is always an animal
                waiting to say hello.
              </p>
              <p>
                You can be as involved or as relaxed as you like. Help with the
                morning feed, collect eggs from the chicken coop, take a walk
                through the paddocks with the dogs -- or simply sit on the porch
                with a coffee and watch it all unfold. There is no itinerary. The
                farm sets the pace.
              </p>
              <p>
                Guests stay in comfortable, well-appointed rooms with views over
                the farm and surrounding countryside. Breakfast is home-cooked,
                hearty, and made with local ingredients. This is not luxury in
                the five-star sense -- it is luxury in the real sense. Space,
                quiet, good food, and someone genuinely happy to have you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE ANIMALS
          ═══════════════════════════════════════════════════ */}
      <section className="bg-forest/5 py-24 px-4">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">
              Farm life
            </p>
            <h2 className="font-heading text-4xl text-forest">
              The animals are part of the deal
            </h2>
            <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
              Miniature dachshunds, sheep, goats, cows, alpacas, and chickens.
              They are all here, and they are all expecting you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/cows-sheep.jpg", alt: "Cows and sheep grazing in the paddock" },
              { src: "/images/goats.jpg", alt: "Goats grazing under the trees" },
              { src: "/images/garden-lawn.jpg", alt: "Lush green lawns and gardens at Kowai" },
            ].map(({ src, alt }) => (
              <div key={src} className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT IS INCLUDED
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl text-forest">
            What is included
          </h2>
          <p className="mt-4 text-charcoal/60 max-w-lg mx-auto">
            Everything you need for a genuine lifestyle block experience, nothing you do
            not.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Comfortable guest rooms",
              body: "Clean, well-appointed rooms with quality linen, farm views, and everything you need for a restful stay. Warm in winter, cool in summer.",
            },
            {
              title: "Home-cooked breakfast",
              body: "A proper breakfast every morning. Fresh eggs from our chickens, local bread, seasonal fruit, good coffee. Set you up for the day.",
            },
            {
              title: "Farm activities",
              body: "Feed the animals, collect eggs, help with the morning routine, or take a walk around the lifestyle block. Get involved as much or as little as you want.",
            },
            {
              title: "Local knowledge",
              body: "We know Canterbury inside out. Hiking tracks, wineries, hot springs, gorge walks -- ask us and we will point you in the right direction.",
            },
            {
              title: "Peace and quiet",
              body: "No traffic noise, no screens competing for your attention. Just birdsong, wide skies, and the kind of quiet that actually recharges you.",
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="rounded-xl bg-cream border border-warm-brown/15 p-7 flex flex-col gap-3"
            >
              <h3 className="font-heading text-lg text-forest">{title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PHOTO GALLERY
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="relative rounded-xl overflow-hidden aspect-[3/4] md:col-span-2 md:row-span-2">
            <Image src="/images/deck-garden.jpg" alt="Covered deck overlooking lush garden" fill className="object-cover" sizes="(max-width: 768px) 50vw, 50vw" />
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-square">
            <Image src="/images/kitchen.jpg" alt="Modern kitchen at Kowai Farmstay" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-square">
            <Image src="/images/bedroom-master.jpg" alt="Master bedroom with garden views" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-square">
            <Image src="/images/bench-mountains.jpg" alt="Bench seat under trees with mountain views" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-square">
            <Image src="/images/vege-garden.jpg" alt="Raised vegetable garden beds" fill className="object-cover" sizes="25vw" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RATES
          ═══════════════════════════════════════════════════ */}
      <section className="bg-warm-brown/5 py-24 px-4">
        <div className="mx-auto max-w-3xl sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">
            Rates
          </p>
          <h2 className="font-heading text-4xl text-forest mb-6">
            Pricing
          </h2>
          <p className="text-charcoal/60 leading-relaxed mb-8 max-w-xl mx-auto">
            Simple, transparent pricing. Everything you need for a genuine rural lifestyle experience is included.
          </p>

          <div className="flex justify-center mb-6">
            <div className="rounded-2xl bg-terracotta text-cream px-12 py-10 text-center">
              <p className="text-xs uppercase tracking-widest text-cream/70 mb-3">Per person, per night</p>
              <p className="font-heading text-6xl mb-1">$280</p>
              <p className="text-sm text-cream/70">incl. GST</p>
            </div>
          </div>

          <div className="rounded-2xl bg-cream border border-warm-brown/15 p-8 text-left">
            <ul className="flex flex-col gap-3 text-sm text-charcoal/70">
              <li className="flex items-start gap-3">
                <span className="text-sage mt-0.5">&#10003;</span>
                <span>Nightly rate includes breakfast and lifestyle block activities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sage mt-0.5">&#10003;</span>
                <span>Discounts available for stays of 3 nights or more</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sage mt-0.5">&#10003;</span>
                <span>Seasonal pricing applies — summer and school holidays are peak periods</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          AVAILABILITY CALENDAR
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-warm-brown/20 bg-sage/5 p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-2">
            Availability
          </p>
          <h2 className="font-heading text-3xl text-forest mb-3">
            Check available dates
          </h2>
          <p className="text-sm text-charcoal/60 mb-8">
            See what dates are open below. To book, send us an enquiry with your
            preferred dates and we will confirm within 24 hours.
          </p>

          <AvailabilityCalendar
            bookedRanges={farmstayBookings}
            label="Farmstay availability"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════ */}
      <section className="bg-forest text-cream py-20 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl sm:text-5xl mb-4">
            Ready to stay on the lifestyle block?
          </h2>
          <p className="text-cream/70 mb-8 max-w-lg mx-auto leading-relaxed">
            Send us an enquiry with your dates and we will get back to you
            within 24 hours with availability and a personalised quote.
          </p>
          <Link
            href="/book"
            className="inline-block rounded-full bg-terracotta px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-warm-brown shadow-lg"
          >
            Make a Farmstay Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
