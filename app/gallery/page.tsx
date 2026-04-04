import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Kowai Farmstay & Boarding — the farm, the animals, the farmstay, the dogs, and the Canterbury seasons. A glimpse of life at Kowai.",
};

const farmPhotos = [
  { src: "/images/hero.jpg", alt: "Aerial view of Kowai nestled in trees with Canterbury mountains" },
  { src: "/images/driveway.jpg", alt: "The welcoming driveway entrance to Kowai Farmstay" },
  { src: "/images/old-tree.jpg", alt: "Ancient tree on the Kowai property" },
  { src: "/images/bench-mountains.jpg", alt: "Bench seat under trees with Southern Alps views" },
  { src: "/images/garden-trees.jpg", alt: "Garden and mature trees at Kowai" },
  { src: "/images/green-track.jpg", alt: "Lush green track through the property" },
];

const farmstayPhotos = [
  { src: "/images/living-room.jpg", alt: "Warm living room with wood fire at Kowai Farmstay" },
  { src: "/images/kitchen.jpg", alt: "Modern kitchen at Kowai Farmstay" },
  { src: "/images/deck-garden.jpg", alt: "Covered deck overlooking lush garden" },
  { src: "/images/deck-seating.jpg", alt: "Outdoor deck seating area" },
  { src: "/images/bedroom-master.jpg", alt: "Master bedroom with garden views" },
  { src: "/images/bedroom-2.jpg", alt: "Guest bedroom" },
  { src: "/images/bathroom.jpg", alt: "Clean bathroom with natural light" },
  { src: "/images/vege-garden.jpg", alt: "Raised vegetable garden beds" },
];

const dogPhotos = [
  { src: "/images/dogs.jpg", alt: "The miniature dachshund pack at Kowai" },
  { src: "/images/lump.jpg", alt: "Lump the miniature dachshund" },
  { src: "/images/cub.jpg", alt: "Cub at Kowai Farmstay" },
];

const animalPhotos = [
  { src: "/images/cows-sheep.jpg", alt: "Cows and sheep grazing in the paddock" },
  { src: "/images/cows.jpg", alt: "Hereford cattle at Kowai" },
  { src: "/images/goats.jpg", alt: "Goats grazing under the trees" },
];

const groundsPhotos = [
  { src: "/images/garden-lawn.jpg", alt: "Lush green lawns and gardens" },
  { src: "/images/open-lawn.jpg", alt: "Open lawn under mature trees" },
  { src: "/images/bush-path.jpg", alt: "Bush walk path through the property" },
  { src: "/images/bush-walk.jpg", alt: "Native bush and woodland at Kowai" },
];

function PhotoGrid({ photos }: { photos: { src: string; alt: string }[] }) {
  return (
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
  );
}

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
          GALLERY SECTIONS
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 flex flex-col gap-16">

        <div>
          <h2 className="font-heading text-2xl text-forest mb-1">The Farm</h2>
          <p className="text-sm text-charcoal/50 mb-6">Paddocks, trees, wide Canterbury skies and mountain views.</p>
          <PhotoGrid photos={farmPhotos} />
        </div>

        <div>
          <h2 className="font-heading text-2xl text-forest mb-1">Farmstay</h2>
          <p className="text-sm text-charcoal/50 mb-6">Guest rooms, the kitchen, the deck, and the spaces in between.</p>
          <PhotoGrid photos={farmstayPhotos} />
        </div>

        <div>
          <h2 className="font-heading text-2xl text-forest mb-1">Our Dogs</h2>
          <p className="text-sm text-charcoal/50 mb-6">The miniature dachshund pack — the heart of Kowai.</p>
          <PhotoGrid photos={dogPhotos} />
        </div>

        <div>
          <h2 className="font-heading text-2xl text-forest mb-1">Animals</h2>
          <p className="text-sm text-charcoal/50 mb-6">Sheep, goats, cows, alpacas, chickens — the whole crew.</p>
          <PhotoGrid photos={animalPhotos} />
        </div>

        <div>
          <h2 className="font-heading text-2xl text-forest mb-1">Grounds & Nature</h2>
          <p className="text-sm text-charcoal/50 mb-6">Gardens, bush walks, lawns and the natural world around us.</p>
          <PhotoGrid photos={groundsPhotos} />
        </div>

        <div className="text-center rounded-2xl bg-sage/10 border border-sage/20 p-8">
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
