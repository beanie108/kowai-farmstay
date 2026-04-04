import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pack = [
  { name: "Lump", bg: "bg-terracotta/10", src: "/images/lump.jpg" },
  { name: "Beanie", bg: "bg-warm-brown/10", src: null },
  { name: "Kali", bg: "bg-sage/15", src: null },
  { name: "Ellie-Mae", bg: "bg-terracotta/8", src: null },
  { name: "Cub", bg: "bg-sage/10", src: "/images/cub.jpg" },
  { name: "Dax", bg: "bg-forest/10", src: null },
];

export const metadata: Metadata = {
  title: "Home",
  description:
    "Escape to Kowai — farmstay accommodation and bespoke dog boarding on a working Canterbury farm. Meet the animals, breathe the air, slow down. Book your stay or your dog's farm holiday.",
};

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center bg-forest px-4 text-center text-cream">
        {/* TODO: Replace with a next/image hero background */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/85 to-forest/95" />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">
            Kowai Bush, Canterbury, New Zealand
          </p>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-cream leading-tight">
            Where nature and lifestyle meets a warm welcome
          </h1>

          <p className="max-w-xl text-lg text-cream/80 leading-relaxed">
            A genuine lifestyle block offering unique farmstay experience and
            bespoke in-home dog boarding. Whether you are looking for a place to
            stay or a place for your dog to stay, you will find it here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/farmstay"
              className="rounded-full bg-terracotta px-8 py-3.5 text-sm font-medium text-cream shadow-lg transition-colors hover:bg-warm-brown"
            >
              Explore the Farmstay
            </Link>
            <Link
              href="/dog-boarding"
              className="rounded-full border border-cream/40 px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Dog Boarding
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40 text-xs">
          <span>Scroll</span>
          <span className="block h-6 w-px bg-cream/30" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TWO WAYS TO EXPERIENCE KOWAI
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">
            What we offer
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-forest">
            Two ways to experience Kowai
          </h2>
          <p className="mt-4 text-charcoal/60 max-w-lg mx-auto">
            A farm holiday for you, or a farm holiday for your dog. Either way,
            they will not want to leave.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Farmstay card */}
          <div className="group rounded-2xl bg-sage/10 p-10 flex flex-col gap-5 transition-shadow hover:shadow-md">
            <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
              <Image
                src="/images/farmstay.jpg"
                alt="Aerial view of Kowai Farmstay surrounded by gardens and Canterbury mountain ranges"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="font-heading text-2xl text-forest">
              Farmstay Accommodation
            </h3>
            <p className="text-charcoal/70 leading-relaxed">
              Wake up to birdsong and mountain views. Collect eggs, feed the
              animals, or simply sit on the porch with a coffee and watch the
              farm come alive. Comfortable guest rooms, home-cooked breakfast,
              and all the space you could ask for.
            </p>
            <ul className="flex flex-wrap gap-3 text-xs text-sage">
              <li className="rounded-full bg-sage/15 px-3 py-1">Breakfast included</li>
              <li className="rounded-full bg-sage/15 px-3 py-1">Farm activities</li>
              <li className="rounded-full bg-sage/15 px-3 py-1">Dogs welcome</li>
            </ul>
            <Link
              href="/farmstay"
              className="mt-auto self-start text-sm font-medium text-terracotta hover:text-warm-brown transition-colors"
            >
              Learn more &rarr;
            </Link>
          </div>

          {/* Dog boarding card */}
          <div className="group rounded-2xl bg-terracotta/8 p-10 flex flex-col gap-5 transition-shadow hover:shadow-md">
            <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
              <Image
                src="/images/dogs.jpg"
                alt="Four miniature dachshunds looking up at their owner at Kowai Farmstay"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="font-heading text-2xl text-forest">
              Bespoke Dog Boarding
            </h3>
            <p className="text-charcoal/70 leading-relaxed">
              Not a kennel. Not a cage. Your dog joins our pack on a working
              farm, with room to run, fresh air to breathe, and genuine
              one-on-one care from people who understand dogs. Specialising
              in miniature dachshunds, but all breeds welcome.
            </p>
            <ul className="flex flex-wrap gap-3 text-xs text-terracotta">
              <li className="rounded-full bg-terracotta/10 px-3 py-1">In-home care</li>
              <li className="rounded-full bg-terracotta/10 px-3 py-1">Daily updates</li>
              <li className="rounded-full bg-terracotta/10 px-3 py-1">Farm walks</li>
            </ul>
            <Link
              href="/dog-boarding"
              className="mt-auto self-start text-sm font-medium text-terracotta hover:text-warm-brown transition-colors"
            >
              Learn more &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ANIMALS TEASER
          ═══════════════════════════════════════════════════ */}
      <section className="bg-forest/5 py-24 px-4">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">
              Farm life
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-forest">
              Meet the locals
            </h2>
            <p className="mt-4 text-charcoal/60 max-w-lg mx-auto">
              Meet Lump, Beanie, Kali, Ellie-Mae, Cub and Dax — the heart of the pack at Kowai.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {pack.map(({ name, bg, src }) => (
              <div
                key={name}
                className={`${bg} rounded-xl aspect-square flex flex-col items-center justify-center gap-2 overflow-hidden relative`}
              >
                {src ? (
                  <>
                    <Image
                      src={src}
                      alt={name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />
                    <span className="absolute bottom-2 left-0 right-0 text-center text-sm font-medium text-cream drop-shadow-md z-10">
                      {name}
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-full bg-white/40" />
                    <span className="text-sm font-medium text-charcoal/70">{name}</span>
                  </>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TRUST SIGNALS
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl text-forest">
            Why guests and dog owners choose Kowai
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Genuine farm experience",
              body: "This is not a theme park or a resort. Kowai is a real working farm where you get to be part of the daily rhythm.",
            },
            {
              title: "Personal, not commercial",
              body: "You are staying with a family, not checking into a business. Small numbers, personal attention, real hospitality.",
            },
            {
              title: "Dogs treated like family",
              body: "Your dog sleeps inside, joins the pack, and gets proper one-on-one care. We send daily photo updates so you never worry.",
            },
            {
              title: "Canterbury at its best",
              body: "Nestled near Kowai Bush with the Southern Alps as a backdrop. Clean air, wide skies, and the kind of quiet that recharges you.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-sage" />
              </div>
              <h3 className="font-heading text-lg text-forest">{title}</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════════════════ */}
      <section className="bg-warm-brown/5 py-24 px-4">
        <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">
              Guest reviews
            </p>
            <h2 className="font-heading text-4xl text-forest">
              What people say
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "I can confirm I am 100% relaxed leaving my fur babies in B and B's care. They are both incredibly knowledgeable and passionate about the breed, and their home at Kowai Bush is a secure, welcoming, and exciting environment for the wee dachshunds. My incredibly needy, anxiety-ridden little man Tytan absolutely loves visiting his Aunty Billiejean, Uncle Ben, and all his extended furry whānau. 100/10 would recommend.",
                author: "Kim Smith",
              },
              {
                quote:
                  "Oh my goodness — sausage heaven! Our little Mini lives her absolute best life with Ben and Billiejean. She comes home looking a million bucks and, as an added bonus, often a kilo or so lighter from all the pack patrols! As usually the smallest one there, she is so well looked after. We couldn't recommend them more.",
                author: "Olivia Panther",
              },
              {
                quote:
                  "We've been trusting Ben and Billiejean with our girls for years — even during long stretches of international travel. I couldn't think of anyone in the world I'd rather leave them with. Peanut and Peekaboo are regulars at Kowai Bush and it truly is their second home. They're treated and spoilt as if they were Ben and Billiejean's very own, and they're always incredibly excited to go back. Complete peace of mind, every time.",
                author: "Erika Sedin",
              },
            ].map(({ quote, author }) => (
              <blockquote
                key={author}
                className="rounded-2xl bg-cream border border-warm-brown/15 p-8 flex flex-col gap-4"
              >
                <p className="text-charcoal/70 leading-relaxed italic text-sm">
                  &ldquo;{quote}&rdquo;
                </p>
                <footer className="mt-auto text-xs text-warm-brown font-medium">
                  &mdash; {author}
                </footer>
              </blockquote>
            ))}
          </div>

          <p className="text-center mt-8 text-xs text-charcoal/40">
            {/* TODO: Link to Google Reviews or other review platform when available */}
            Reviews will be linked to verified platforms once live.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════ */}
      <section className="bg-terracotta py-20 px-4 text-center text-cream">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl mb-4">
            Ready to experience Kowai?
          </h2>
          <p className="text-cream/80 max-w-lg mx-auto mb-8 leading-relaxed">
            Whether you want to book a farmstay for yourself or a farm holiday
            for your dog, it starts with a simple enquiry. We will get back to
            you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="rounded-full bg-cream px-8 py-3.5 text-sm font-medium text-terracotta shadow transition-colors hover:bg-cream/90"
            >
              Make an Enquiry
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-cream/40 px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
