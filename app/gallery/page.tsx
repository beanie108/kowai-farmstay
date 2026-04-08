import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Kowai Farmstay & Boarding — the farm, the animals, the dogs, and life at Kowai in Canterbury, New Zealand.",
};

const photos = [
  // Farm & grounds
  { src: "/images/hero.jpg", alt: "Aerial view of Kowai nestled in trees with Canterbury mountains" },
  { src: "/images/driveway.jpg", alt: "The welcoming driveway entrance to Kowai" },
  { src: "/images/bench-mountains.jpg", alt: "Bench seat under trees with Southern Alps views" },
  { src: "/images/old-tree.jpg", alt: "Ancient tree on the Kowai property" },
  { src: "/images/garden-trees.jpg", alt: "Garden and mature trees at Kowai" },
  { src: "/images/green-track.jpg", alt: "Lush green track through the property" },
  { src: "/images/garden-lawn.jpg", alt: "Lush green lawns and gardens" },
  { src: "/images/open-lawn.jpg", alt: "Open lawn under mature trees" },
  { src: "/images/bush-path.jpg", alt: "Bush walk path through the property" },
  { src: "/images/bush-walk.jpg", alt: "Native bush and woodland at Kowai" },
  { src: "/images/vege-garden.jpg", alt: "Raised vegetable garden beds" },

  // Farmstay
  { src: "/images/living-room.jpg", alt: "Warm living room with wood fire" },
  { src: "/images/kitchen.jpg", alt: "Modern kitchen at Kowai Farmstay" },
  { src: "/images/deck-garden.jpg", alt: "Covered deck overlooking lush garden" },
  { src: "/images/deck-seating.jpg", alt: "Outdoor deck seating area" },
  { src: "/images/bedroom-master.jpg", alt: "Master bedroom with garden views" },
  { src: "/images/bedroom-2.jpg", alt: "Guest bedroom" },
  { src: "/images/bathroom.jpg", alt: "Clean bathroom with natural light" },

  // Lifestyle / branding shots
  { src: "/images/softcon-m1.jpg", alt: "Life at Kowai" },
  { src: "/images/softcon-m2.jpg", alt: "Life at Kowai" },
  { src: "/images/softcon-m3.jpg", alt: "Life at Kowai" },
  { src: "/images/softcon-m4.jpg", alt: "Life at Kowai" },
  { src: "/images/softcon-m5.jpg", alt: "Life at Kowai" },
  { src: "/images/softcon-m6.jpg", alt: "Life at Kowai" },
  { src: "/images/softcon-m7.jpg", alt: "Life at Kowai" },
  { src: "/images/softcon-o1.jpg", alt: "Life at Kowai" },
  { src: "/images/softcon-o2.jpg", alt: "Life at Kowai" },
  { src: "/images/softcon-o3.jpg", alt: "Life at Kowai" },
  { src: "/images/softcon-o4.jpg", alt: "Life at Kowai" },
  { src: "/images/softcon-o5.jpg", alt: "Life at Kowai" },
  { src: "/images/billiejean-b1.jpg", alt: "Billiejean with the dachshunds" },
  { src: "/images/billiejean-b2.jpg", alt: "Billiejean with the dachshunds" },
  { src: "/images/billiejean-b3.jpg", alt: "Billiejean with the dachshunds" },
  { src: "/images/billiejean-b4.jpg", alt: "Billiejean with the dachshunds" },
  { src: "/images/billiejean-b5.jpg", alt: "Billiejean with the dachshunds" },
  { src: "/images/cyberwise-b1.jpg", alt: "The pack at Kowai" },
  { src: "/images/cyberwise-b2.jpg", alt: "The pack at Kowai" },
  { src: "/images/billiejean.jpg", alt: "Billiejean at Kowai" },
  { src: "/images/ben.jpg", alt: "Ben at Kowai" },
  { src: "/images/rye.jpg", alt: "Rye at Kowai" },

  // The pack — group shots
  { src: "/images/pack-group.jpg", alt: "The miniature dachshund pack at Kowai" },
  { src: "/images/pack-together.jpg", alt: "The pack together" },
  { src: "/images/pack-looking-up.jpg", alt: "Dachshunds looking up" },
  { src: "/images/pack-duo.jpg", alt: "Two dachshunds from the pack" },
  { src: "/images/pack.jpg", alt: "The whole pack" },
  { src: "/images/furkids.jpg", alt: "The fur kids" },
  { src: "/images/snooze.jpg", alt: "Dogs snoozing together" },
  { src: "/images/dogs-play.jpg", alt: "Dogs playing together" },
  { src: "/images/dogs-together-2.jpg", alt: "The pack together on the farm" },

  // Individual — Beanie
  { src: "/images/beanie.jpg", alt: "Beanie the miniature dachshund on a skateboard" },
  { src: "/images/beanie-bear.jpg", alt: "Beanie with her bear" },
  { src: "/images/beanie3.jpg", alt: "Beanie the miniature dachshund" },
  { src: "/images/beaniebear.jpg", alt: "Beanie and her favourite bear" },

  // Individual — Kali
  { src: "/images/kali.jpg", alt: "Kali the miniature dachshund" },
  { src: "/images/kali2.jpg", alt: "Kali portrait" },

  // Individual — Ellie-Mae
  { src: "/images/ellie-mae.jpg", alt: "Ellie-Mae the miniature dachshund" },

  // Individual — Dax
  { src: "/images/dax.jpg", alt: "Dax relaxing" },

  // Individual — Lump
  { src: "/images/lump.jpg", alt: "Lump the miniature dachshund" },
  { src: "/images/lump2.jpg", alt: "Lump enjoying the farm" },
  { src: "/images/lump-snooze.jpg", alt: "Lump having a snooze" },

  // Individual — Cub
  { src: "/images/cub.jpg", alt: "Cub the miniature dachshund" },
  { src: "/images/bw-cub.jpg", alt: "Cub in black and white" },

  // Boarding guests
  { src: "/images/em.jpg", alt: "Em enjoying her stay at Kowai" },
  { src: "/images/em2.jpg", alt: "Em at Kowai Boarding" },
  { src: "/images/em3.jpg", alt: "Em at Kowai Boarding" },
  { src: "/images/em-kali.jpg", alt: "Em and Kali together" },
  { src: "/images/shouty-em.jpg", alt: "Em being cheeky" },
  { src: "/images/esta.jpg", alt: "Esta at Kowai Boarding" },
  { src: "/images/otto.jpg", alt: "Otto at Kowai Boarding" },
  { src: "/images/benny.jpg", alt: "Benny at Kowai Boarding" },
  { src: "/images/peanut-peekaboo.jpg", alt: "Peanut and Peekaboo at Kowai Boarding" },
  { src: "/images/peekaboo.jpg", alt: "Peekaboo at Kowai Boarding" },

  // Farm animals
  { src: "/images/cows-sheep.jpg", alt: "Cows and sheep grazing in the paddock" },
  { src: "/images/cows.jpg", alt: "Hereford cattle at Kowai" },
  { src: "/images/sheep.jpg", alt: "Sheep at Kowai" },
  { src: "/images/goats.jpg", alt: "Goats grazing under the trees" },
  { src: "/images/goats2.jpg", alt: "Goats at Kowai" },
  { src: "/images/goats3.jpg", alt: "Goats enjoying the farm" },
  { src: "/images/alpacas.jpg", alt: "Alpacas at Kowai" },
  { src: "/images/chickens.jpg", alt: "Chickens at Kowai" },
  { src: "/images/birds.jpg", alt: "NZ Fantail" },
];

export default function GalleryPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          PAGE HERO
          ═══════════════════════════════════════════════════ */}
      <section className="bg-forest/5 py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
            Gallery
          </p>
          <h1 className="font-heading text-5xl text-forest mb-6">
            A glimpse of Kowai
          </h1>
          <p className="text-lg text-charcoal/60 leading-relaxed max-w-xl mx-auto">
            Pictures do not do it full justice, but they are a start. Scroll
            through and get a feel for what life at Kowai looks like.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          GALLERY GRID
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map(({ src, alt }) => (
            <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="text-center rounded-2xl bg-sage/10 border border-sage/20 p-8 mt-12">
          <p className="text-charcoal/50 text-sm">
            More photos being added regularly as the seasons change.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════ */}
      <section className="bg-terracotta py-16 px-4 text-center text-cream">
        <div className="max-w-xl mx-auto">
          <h2 className="font-heading text-3xl mb-3">Like what you see?</h2>
          <p className="text-cream/80 mb-6">
            The real thing is even better. Come and experience Kowai for yourself.
          </p>
          <Link
            href="/book"
            className="rounded-full bg-cream px-8 py-3 text-sm font-medium text-terracotta transition-colors hover:bg-cream/90"
          >
            Make an Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
