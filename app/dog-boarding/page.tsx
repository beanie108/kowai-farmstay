import type { Metadata } from "next";
import Link from "next/link";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import { dogBoardingBookings } from "@/data/availability";

export const metadata: Metadata = {
  title: "Dog Boarding",
  description:
    "Bespoke in-home dog boarding on a working Canterbury farm. Not a kennel — your dog joins the pack, sleeps inside, and gets genuine one-on-one care. Dachshund specialists.",
};

export default function DogBoardingPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          PAGE HERO
          ═══════════════════════════════════════════════════ */}
      <section className="relative bg-forest py-28 px-4 text-cream">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 to-forest/95" />
        {/* TODO: Replace with next/image of dogs on the farm */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sage mb-4">
            Dog Boarding
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl text-cream mb-6 leading-tight">
            A farm holiday for your dog
          </h1>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
            Your dog does not get locked in a kennel. They get a lifestyle block. Space to
            run, fresh Canterbury air, and a pack of miniature dachshunds to
            play with. This is dog boarding the way it should be.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          NOT A KENNEL
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta">
              Why we are different
            </p>
            <h2 className="font-heading text-4xl text-forest leading-snug">
              This is not a kennel. This is your dog joining our family.
            </h2>
            <div className="flex flex-col gap-4 text-charcoal/70 leading-relaxed">
              <p>
                Most boarding facilities are built for volume. Dogs in cages,
                limited outdoor time, staff who barely know your dog&apos;s name.
                That is not us. At Kowai, your dog stays in our home, on a
                lifestyle block, as part of our pack.
              </p>
              <p>
                We are a family of miniature dachshund lovers. Our own sausage
                dogs live here on the lifestyle block, and your dog joins right in with
                them. They sleep inside, they eat on schedule, they go on farm
                walks, and they get the kind of attention that only comes from
                genuine dog people who actually enjoy having them around.
              </p>
              <p>
                We know how hard it is to leave your dog. That is exactly why we
                do this the way we do. Small numbers, big care, daily updates.
                Your dog will be so happy they might not want to come home.
              </p>
            </div>
          </div>

          {/* TODO: Replace with next/image */}
          <div className="rounded-2xl bg-terracotta/10 aspect-[4/3] flex items-center justify-center text-terracotta/30 text-sm">
            Dogs on the farm photo
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT DACHSHUND OWNERS CAN EXPECT
          ═══════════════════════════════════════════════════ */}
      <section className="bg-terracotta/5 py-24 px-4">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">
              Dachshund specialists
            </p>
            <h2 className="font-heading text-4xl text-forest">
              Built for sausage dogs
            </h2>
            <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
              We are dachshund people through and through. If you have a
              miniature dachshund, you are in exactly the right place.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "We speak dachshund",
                body: "We know the stubbornness, the drama, the burrowing under blankets, and the absolute need to be the centre of attention. Your dachshund will feel right at home.",
              },
              {
                title: "Ramps everywhere that matter",
                body: "We promote ramp access throughout our home — onto couches, beds, the deck, and more. Your dachshund gets full access without the jump.",
              },
              {
                title: "Pack socialisation",
                body: "Your dachshund joins our resident dachshund pack. They play together, nap together, and go on farm walks together. It is social time at its best.",
              },
              {
                title: "Temperature comfort",
                body: "Dachshunds feel the cold. Our dogs sleep inside with blankets and warmth, not in a draughty kennel run. Summer or winter, they are comfortable.",
              },
              {
                title: "Feeding fussiness handled",
                body: "We know dachshunds can be particular about food. We follow your feeding instructions exactly and track meals to make sure nothing is missed.",
              },
              {
                title: "Daily photo updates",
                body: "We send photos and updates every day so you can see exactly how your sausage dog is getting on. Spoiler: they will be living their best life.",
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

          <p className="text-center mt-10 text-sm text-charcoal/50">
            Not a dachshund? No problem. We welcome all breeds -- the above just
            gives you a sense of the level of care every dog receives.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl text-forest">How it works</h2>
        </div>

        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Send an enquiry",
              body: "Tell us your dates, your dog, and any special requirements. We will check availability and come back to you within 24 hours.",
            },
            {
              step: "02",
              title: "Meet and greet",
              body: "If it is your first time, we like to meet your dog beforehand. It helps them settle in faster and gives you peace of mind.",
            },
            {
              step: "03",
              title: "Drop off and settle in",
              body: "Your dog arrives and joins the pack. We give them time to explore at their own pace. Most settle in within the first hour.",
            },
            {
              step: "04",
              title: "Pick up a happy dog",
              body: "Well-exercised, well-loved, and probably a little reluctant to leave. You will get daily updates the whole time they are with us.",
            },
          ].map(({ step, title, body }) => (
            <li
              key={step}
              className="rounded-xl bg-cream border border-warm-brown/15 p-7 flex flex-col gap-3"
            >
              <span className="font-heading text-5xl text-terracotta/20">
                {step}
              </span>
              <h3 className="font-heading text-lg text-forest">{title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT IS INCLUDED
          ═══════════════════════════════════════════════════ */}
      <section className="bg-forest text-cream py-24 px-4">
        <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl mb-8 text-center">
            What is included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "In-home boarding -- your dog sleeps inside, not in a kennel",
              "Daily farm walks and off-leash time in secure paddocks",
              "Fed to your dog's regular diet and schedule",
              "Daily photo and video updates sent to you",
              "Flea, tick, and health check on arrival",
              "Medication administered if required (at no extra charge)",
              "One-on-one attention from experienced dog people",
              "Small group sizes -- never more than a handful of boarding dogs at once",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-cream/80 text-sm"
              >
                <span className="text-sage mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEEDING & FOOD
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta">Feeding</p>
            <h2 className="font-heading text-4xl text-forest leading-snug">
              We feed only the best
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              Our pack is fed premium ACANA dry food — one of the highest quality
              dog food brands available in New Zealand. We rotate between two
              varieties depending on the season and each dog's needs.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              If your dog has a specific diet, food sensitivities, or you prefer
              to bring their own food, that is absolutely fine — we follow your
              feeding instructions to the letter.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                name: "ACANA Highest Protein Pacifica",
                description: "Wild-caught fish formula — high protein, grain-free, and rich in Omega-3. Great for skin, coat, and energy.",
                tag: "Fish formula",
              },
              {
                name: "ACANA Classics Prairie Poultry",
                description: "Free-run chicken, turkey, and eggs — a balanced, digestible everyday recipe that most dogs love.",
                tag: "Poultry formula",
              },
            ].map(({ name, description, tag }) => (
              <div key={name} className="rounded-2xl bg-cream border border-warm-brown/15 p-6 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg text-forest leading-snug">{name}</h3>
                  <span className="shrink-0 text-xs rounded-full bg-sage/15 text-sage px-3 py-1">{tag}</span>
                </div>
                <p className="text-sm text-charcoal/60 leading-relaxed">{description}</p>
              </div>
            ))}
            <p className="text-xs text-charcoal/40 mt-1">
              All food is served to your dog's regular portion size and schedule.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT TO BRING
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl text-forest">
            What to bring for your dog
          </h2>
          <p className="mt-4 text-charcoal/60 max-w-lg mx-auto">
            The less disruption to your dog&apos;s routine, the faster they settle.
            Here is what helps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Their regular food",
              body: "Bring enough of their usual food for the stay, portioned if possible. We follow your feeding instructions exactly.",
            },
            {
              title: "Bedding or a blanket",
              body: "Something that smells like home helps them settle faster. We have spare bedding too, but their own is best.",
            },
            {
              title: "Medication and instructions",
              body: "If your dog is on any medication, bring it clearly labelled with dosage instructions. We will make sure it is given on time.",
            },
            {
              title: "Lead, collar, and harness",
              body: "Their own gear for walks. We have spares, but dogs are more comfortable in what they know.",
            },
            {
              title: "Vaccination records",
              body: "We require up-to-date vaccinations (C5 or equivalent) for the safety of all dogs. Bring a copy or email it beforehand.",
            },
            {
              title: "A favourite toy",
              body: "Optional but recommended. A familiar toy can make all the difference during the first night.",
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

      {/* ═══════════════════════════════════════════════════
          PRICING
          ═══════════════════════════════════════════════════ */}
      <section className="bg-warm-brown/5 py-24 px-4">
        <div className="mx-auto max-w-3xl sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">
            Pricing
          </p>
          <h2 className="font-heading text-4xl text-forest mb-6">
            Boarding rates
          </h2>
          <p className="text-charcoal/60 leading-relaxed mb-8 max-w-xl mx-auto">
            Simple, transparent pricing. No hidden fees — the price you see is the price you pay.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl bg-cream border-2 border-warm-brown/20 p-8 text-center">
              <p className="text-xs uppercase tracking-widest text-terracotta mb-3">One dog</p>
              <p className="font-heading text-5xl text-forest mb-1">$55</p>
              <p className="text-sm text-charcoal/50">per night, incl. GST</p>
            </div>
            <div className="rounded-2xl bg-terracotta text-cream p-8 text-center">
              <p className="text-xs uppercase tracking-widest text-cream/70 mb-3">Two dogs</p>
              <p className="font-heading text-5xl mb-1">$90</p>
              <p className="text-sm text-cream/70">per night, incl. GST</p>
            </div>
          </div>

          <div className="rounded-2xl bg-cream border border-warm-brown/15 p-8 text-left">
            <ul className="flex flex-col gap-3 text-sm text-charcoal/70">
              <li className="flex items-start gap-3">
                <span className="text-sage mt-0.5">&#10003;</span>
                <span>All care, walks, and daily photo updates included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sage mt-0.5">&#10003;</span>
                <span>No hidden fees — the quoted price is the final price</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sage mt-0.5">&#10003;</span>
                <span>Peak period rates may apply during school holidays and public holidays</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          AVAILABILITY CALENDAR
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-warm-brown/20 bg-terracotta/5 p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-2">
            Availability
          </p>
          <h2 className="font-heading text-3xl text-forest mb-3">
            Check boarding availability
          </h2>
          <p className="text-sm text-charcoal/60 mb-8">
            We keep numbers small so every dog gets proper attention. Check
            available dates below, then send an enquiry to secure your spot.
          </p>

          <AvailabilityCalendar
            bookedRanges={dogBoardingBookings}
            label="Dog boarding availability"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          REASSURANCE
          ═══════════════════════════════════════════════════ */}
      <section className="bg-sage/10 py-24 px-4">
        <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl text-forest">
              We know how hard it is to leave them
            </h2>
            <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
              Every dog owner who boards for the first time feels the same way.
              Here is what we want you to know.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Your dog sleeps inside our home",
                body: "Not in a kennel, not in a shed. Inside, with blankets, on proper bedding. If they usually sleep on a bed, they will probably end up on ours too.",
              },
              {
                title: "We send updates without you asking",
                body: "You will get photos and a quick message every day. No need to wonder or worry -- you will see exactly how they are doing.",
              },
              {
                title: "We keep numbers deliberately small",
                body: "We never take on more dogs than we can give genuine attention to. This is not a business built on volume -- it is built on quality of care.",
              },
              {
                title: "Your dog is never left alone",
                body: "Someone is always home. Farm life means we are here all day, every day. Your dog has company from the moment they arrive until you pick them up.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-3">
                <h3 className="font-heading text-xl text-forest">{title}</h3>
                <p className="text-charcoal/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════ */}
      <section className="bg-terracotta py-20 px-4 text-center text-cream">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl mb-4">
            Give your dog the lifestyle block holiday they deserve
          </h2>
          <p className="text-cream/80 max-w-lg mx-auto mb-8 leading-relaxed">
            Spots are limited. Send us an enquiry with your dates and your
            dog&apos;s details, and we will get back to you within 24 hours.
          </p>
          <Link
            href="/book"
            className="inline-block rounded-full bg-cream px-8 py-3.5 text-sm font-medium text-terracotta shadow transition-colors hover:bg-cream/90"
          >
            Make a Boarding Enquiry
          </Link>
          <p className="mt-6 text-xs text-cream/50">
            By making a booking you agree to our{" "}
            <Link href="/terms" className="underline hover:text-cream/80 transition-colors">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
