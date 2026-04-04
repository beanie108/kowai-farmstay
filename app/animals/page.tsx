import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet the Animals",
  description:
    "Meet the animals at Kowai Farm — miniature dachshunds, sheep, goats, cows, alpacas, and chickens. Every one of them has a personality (and an opinion).",
};

const animals = [
  {
    name: "The Miniature Dachshunds",
    tagline: "The real bosses of the farm",
    description: [
      "If you have met a dachshund, you know they think the world revolves around them. At Kowai, it kind of does. Our pack of miniature dachshunds are the heart and soul of the farm -- equal parts stubborn, dramatic, and utterly loveable.",
      "They patrol the paddocks like they own them, burrow under every blanket they can find, and greet every visitor like a long-lost friend. If you are boarding your dog with us, these are the characters your dog will be hanging out with. They are excellent hosts.",
      "Each one has their own personality, their own favourite spot on the couch, and their own very loud opinion about dinner time. Come prepared to fall in love.",
    ],
    colour: "bg-terracotta/10",
    borderColour: "border-terracotta/20",
  },
  {
    name: "The Sheep",
    tagline: "The original residents",
    description: [
      "Sheep have been on this land longer than anything else. They are the backbone of the farm -- calm, curious, and surprisingly expressive once you learn to read them.",
      "Lambing season is a highlight for farmstay guests, especially families with children. There is nothing quite like watching a lamb take its first wobbly steps, and helping with bottle-feeding is an experience kids never forget.",
      "The rest of the year they drift through the paddocks, keeping the grass in check and providing that quintessential New Zealand farm backdrop that makes the whole place feel right.",
    ],
    colour: "bg-sage/10",
    borderColour: "border-sage/20",
  },
  {
    name: "The Goats",
    tagline: "Chaos with hooves",
    description: [
      "If the dachshunds are the bosses, the goats are the comedians. They are curious about everything, afraid of nothing, and absolutely certain that whatever you are eating is meant for them.",
      "Our goats have distinct personalities -- some are bold and will walk right up to you, others hang back and watch from a distance before deciding you are worth their time. They are fantastic with kids and endlessly entertaining to watch.",
      "Fair warning: they will try to eat your shoelaces. And your jacket. And anything else they can reach. That is just who they are.",
    ],
    colour: "bg-warm-brown/8",
    borderColour: "border-warm-brown/15",
  },
  {
    name: "The Cows",
    tagline: "Gentle giants with big eyes",
    description: [
      "The cows at Kowai are the calm ones. They move slowly, they watch everything, and they have a quiet presence that makes the farm feel grounded.",
      "Guests are often surprised by how much personality cows have up close. They are curious, gentle, and -- once they decide they trust you -- surprisingly affectionate. A cow nudging your hand for a pat is one of those experiences that stays with you.",
      "They are an important part of the farm ecosystem and a reminder that not everything needs to move fast to be meaningful.",
    ],
    colour: "bg-forest/8",
    borderColour: "border-forest/15",
  },
  {
    name: "The Alpacas",
    tagline: "Elegant, aloof, and slightly ridiculous",
    description: [
      "Alpacas look like they were designed by a committee that could not agree on anything. Long necks, fluffy bodies, and an expression that permanently suggests mild disapproval. They are magnificent.",
      "Our alpacas are a farmstay favourite. They keep their distance at first -- alpacas like to assess the situation before committing -- but once they warm up, they are gentle and surprisingly playful. Their soft fleece and quiet temperament make them wonderful to be around.",
      "They also serve a practical purpose on the farm as guardian animals, keeping an eye on the smaller livestock. Beauty and brains.",
    ],
    colour: "bg-sage/8",
    borderColour: "border-sage/15",
  },
  {
    name: "The Chickens",
    tagline: "Free-range and full of opinions",
    description: [
      "The chickens are the farm alarm clock. They start the day before anyone else and spend the rest of it doing exactly what they want, which is mostly scratching, pecking, and getting underfoot.",
      "Collecting eggs in the morning is a farmstay ritual. There is something deeply satisfying about reaching into a nesting box and pulling out a still-warm egg that you will have for breakfast ten minutes later. Kids love it. Adults love it. Even people who thought they did not care about chickens love it.",
      "Our flock roams free across the farm during the day and tucks themselves into the coop at dusk. They are low-maintenance, high-entertainment, and responsible for some of the best breakfasts you will ever have.",
    ],
    colour: "bg-terracotta/8",
    borderColour: "border-terracotta/15",
  },
];

export default function AnimalsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          PAGE HERO
          ═══════════════════════════════════════════════════ */}
      <section className="relative bg-forest py-28 px-4 text-cream">
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 to-forest/95" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sage mb-4">
            Farm life
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl text-cream mb-6 leading-tight">
            Meet the animals
          </h1>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
            A farm is only as alive as its animals. At Kowai, there is always
            someone to meet, something to feed, and something making noise well
            before your alarm goes off.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ANIMAL SECTIONS
          ═══════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {animals.map((animal, index) => (
          <section
            key={animal.name}
            className="py-20 border-b border-warm-brown/10 last:border-b-0"
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Photo placeholder */}
              <div
                className={`rounded-2xl ${animal.colour} aspect-[4/3] flex items-center justify-center text-charcoal/20 text-sm ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                {/* TODO: Replace with next/image */}
                {animal.name} photo
              </div>

              {/* Content */}
              <div
                className={`flex flex-col gap-5 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-terracotta">
                  {animal.tagline}
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl text-forest">
                  {animal.name}
                </h2>
                <div className="flex flex-col gap-4 text-charcoal/70 leading-relaxed">
                  {animal.description.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════ */}
      <section className="bg-terracotta/10 py-20 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl text-forest mb-4">
            Come and meet them in person
          </h2>
          <p className="text-charcoal/60 mb-8 max-w-lg mx-auto leading-relaxed">
            Photos and descriptions only go so far. The real experience is being
            here -- hearing the chickens, watching the alpacas, and getting
            ambushed by dachshunds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="rounded-full bg-terracotta px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-warm-brown"
            >
              Book a Farmstay
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-forest px-8 py-3.5 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              View the Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
