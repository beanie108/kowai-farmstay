import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Kowai Farmstay & Boarding — the farm, the animals, the farmstay, the dogs, and the Canterbury seasons. A glimpse of life at Kowai.",
};

const categories = [
  {
    name: "The Farm",
    description: "Paddocks, fences, sunrise, and wide Canterbury skies.",
    count: 6,
    colour: "bg-sage/12",
    textColour: "text-sage/50",
  },
  {
    name: "Farmstay",
    description: "Guest rooms, breakfast, porch views, and the farmstay experience.",
    count: 4,
    colour: "bg-warm-brown/8",
    textColour: "text-warm-brown/40",
  },
  {
    name: "Our Dogs",
    description: "The miniature dachshund pack in their natural habitat.",
    count: 6,
    colour: "bg-terracotta/10",
    textColour: "text-terracotta/40",
  },
  {
    name: "Animals",
    description: "Sheep, goats, cows, alpacas, chickens -- the whole crew.",
    count: 6,
    colour: "bg-forest/8",
    textColour: "text-forest/30",
  },
  {
    name: "Seasons",
    description: "Spring lambs, summer light, autumn gold, winter fires.",
    count: 4,
    colour: "bg-sage/8",
    textColour: "text-sage/40",
  },
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
            through and get a feel for what life at Kowai looks like across
            every season.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CATEGORISED GALLERY GRID
          ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {categories.map((category) => (
          <div key={category.name} className="mb-16 last:mb-0">
            {/* Category header */}
            <div className="mb-6">
              <h2 className="font-heading text-2xl text-forest">
                {category.name}
              </h2>
              <p className="text-sm text-charcoal/50 mt-1">
                {category.description}
              </p>
            </div>

            {/* Photo grid
                TODO: Replace placeholder divs with next/image components.
                Recommended approach:
                1. Store images in /public/gallery/{category-slug}/
                2. Use next/image with fill + sizes for responsive loading
                3. Add meaningful alt text describing each photo
                4. Consider using a lightbox library (e.g. yet-another-react-lightbox)
                   for full-screen viewing
            */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {Array.from({ length: category.count }).map((_, i) => (
                <div
                  key={i}
                  className={`${category.colour} aspect-square rounded-xl flex items-center justify-center ${category.textColour} text-xs font-body`}
                >
                  {category.name} {i + 1}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Note about more photos */}
        <div className="mt-8 text-center rounded-2xl bg-sage/10 border border-sage/20 p-8">
          <p className="text-charcoal/50 text-sm">
            More photos being added regularly. Follow our journey and see even
            more of life at Kowai.
          </p>
          {/* TODO: Add social media links once accounts are set up */}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════ */}
      <section className="bg-terracotta py-16 px-4 text-center text-cream">
        <div className="max-w-xl mx-auto">
          <h2 className="font-heading text-3xl mb-3">
            Like what you see?
          </h2>
          <p className="text-cream/80 mb-6">
            The real thing is even better. Book a farmstay and experience Kowai
            for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="rounded-full bg-cream px-8 py-3 text-sm font-medium text-terracotta transition-colors hover:bg-cream/90"
            >
              Make an Enquiry
            </Link>
            <Link
              href="/animals"
              className="rounded-full border border-cream/40 px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Meet the Animals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
