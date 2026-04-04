import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Farm",
  description:
    "Kowai Farm sits in the foothills near Kowai Bush, Canterbury, New Zealand. Learn about the land, the people, and the ethos behind Kowai Farmstay & Boarding.",
};

export default function TheFarmPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          PAGE HERO
          ═══════════════════════════════════════════════════ */}
      <section className="relative bg-forest py-28 px-4 text-cream">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 to-forest/95" />
        {/* TODO: Replace with next/image panoramic farm shot */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sage mb-4">
            About
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl text-cream mb-6 leading-tight">
            The land, the people, the life
          </h1>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
            Kowai is a working farm nestled near Kowai Bush in the Canterbury
            foothills of New Zealand. It is a place shaped by seasons, animals,
            and a family who believe that the best things in life happen slowly.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          OUR STORY
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta">
              Our story
            </p>
            <h2 className="font-heading text-4xl text-forest leading-snug">
              How a working farm became a place people come home to
            </h2>
            <div className="flex flex-col gap-4 text-charcoal/70 leading-relaxed">
              <p>
                Kowai Farm has been part of the Canterbury landscape for
                generations. What started as a traditional sheep and cattle
                property has evolved into something broader -- a diverse working
                farm that is also a place people come to experience, recharge,
                and connect with the land.
              </p>
              <p>
                The name &quot;Kowai&quot; comes from the native New Zealand
                kowhai tree, whose golden flowers are one of the first signs of
                spring. It felt like the right name for a place built on cycles,
                seasons, and the belief that good things take time.
              </p>
              <p>
                Over the years the farm has grown to include sheep, goats, cows,
                alpacas, chickens, and a beloved pack of miniature dachshunds.
                The farmstay grew naturally from a love of hosting. The dog
                boarding grew from a love of dogs. Both came from the same
                place -- a belief that this farm is too good not to share.
              </p>
            </div>
          </div>

          {/* TODO: Replace with next/image */}
          <div className="rounded-2xl bg-sage/15 aspect-[4/3] flex items-center justify-center text-sage/40 text-sm">
            Farm story photo
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE PEOPLE
          ═══════════════════════════════════════════════════ */}
      <section className="bg-warm-brown/5 py-24 px-4">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* TODO: Replace with next/image */}
            <div className="rounded-2xl bg-warm-brown/10 aspect-[4/3] flex items-center justify-center text-warm-brown/30 text-sm order-2 lg:order-1">
              Family / hosts photo
            </div>

            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.25em] text-terracotta">
                The people
              </p>
              <h2 className="font-heading text-4xl text-forest leading-snug">
                Hosted by people who genuinely love this life
              </h2>
              <div className="flex flex-col gap-4 text-charcoal/70 leading-relaxed">
                <p>
                  When you stay at Kowai, you are staying with us -- not at a
                  resort. We live and work on this farm every day, and we open
                  our doors because we believe more people should get to
                  experience what we are lucky enough to call normal.
                </p>
                <p>
                  We are dog people first and farmers second (do not tell the
                  sheep). Our miniature dachshunds are as much a part of the
                  farm as the livestock, and our love of dogs is exactly what
                  led us to start the boarding side of things. We wanted to
                  create the kind of place we would want to leave our own dogs.
                </p>
                <p>
                  Whether you are here for the farmstay or boarding your dog,
                  you will find us welcoming, honest, and genuinely happy to
                  have you. That is not marketing. That is just how we are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE ETHOS
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">
            Our values
          </p>
          <h2 className="font-heading text-4xl text-forest">
            What we believe in
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Genuine over polished",
              body: "We are not trying to be something we are not. The farm is real, the hospitality is honest, and the experience is authentic. No filter required.",
            },
            {
              title: "Animals come first",
              body: "The welfare of every animal on this farm -- from the livestock to the boarding dogs to our own pack -- is non-negotiable. Happy animals, happy farm.",
            },
            {
              title: "Small is intentional",
              body: "We keep numbers small on purpose. Fewer farmstay guests means better attention. Fewer boarding dogs means better care. Quality over quantity, always.",
            },
            {
              title: "Stewards of the land",
              body: "We farm with the long view in mind. Native plantings, sustainable practices, and a commitment to leaving this land in better shape than we found it.",
            },
            {
              title: "Seasons set the rhythm",
              body: "Spring lambing, summer evenings, autumn colours, winter fires. Every season at Kowai has its own character, and we lean into all of them.",
            },
            {
              title: "Share the good life",
              body: "Not everyone gets to live on a farm. But everyone deserves to experience it. That is why we opened our doors in the first place.",
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
          THE LAND
          ═══════════════════════════════════════════════════ */}
      <section className="bg-forest/5 py-24 px-4">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">
              Location
            </p>
            <h2 className="font-heading text-4xl text-forest">
              Kowai Bush, Canterbury
            </h2>
            <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
              Situated in the foothills near Kowai Bush, with the Southern Alps
              rising to the west and the Canterbury Plains stretching east. Close
              enough to Christchurch to be convenient, far enough away to feel
              like another world.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                label: "Region",
                value: "Canterbury, New Zealand",
              },
              {
                label: "Nearest city",
                value: "Christchurch (approx. 1 hour drive)",
              },
              {
                label: "Setting",
                value: "Rural foothills near native bush",
              },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl bg-cream border border-warm-brown/10 p-7"
              >
                <p className="text-xs uppercase tracking-widest text-sage mb-2">
                  {label}
                </p>
                <p className="font-heading text-xl text-forest">{value}</p>
              </div>
            ))}
          </div>

          {/* TODO: Replace with next/image landscape photo or map */}
          <div className="mt-10 rounded-2xl bg-sage/15 aspect-[21/9] flex items-center justify-center text-sage/40 text-sm">
            Landscape / location photo
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTAs
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl text-forest mb-4">
          Come and see for yourself
        </h2>
        <p className="text-charcoal/60 mb-8 max-w-lg mx-auto">
          The best way to understand Kowai is to be here. Book a farmstay,
          board your dog, or both.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/farmstay"
            className="rounded-full bg-terracotta px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-warm-brown"
          >
            Explore the Farmstay
          </Link>
          <Link
            href="/animals"
            className="rounded-full border border-forest px-8 py-3.5 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
          >
            Meet the Animals
          </Link>
          <Link
            href="/dog-boarding"
            className="rounded-full border border-forest px-8 py-3.5 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
          >
            Dog Boarding
          </Link>
        </div>
      </section>
    </>
  );
}
