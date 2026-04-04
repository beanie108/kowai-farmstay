import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Kowai Farmstay & Boarding — the farm, the animals, the accommodation, and the Canterbury landscape.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-terracotta mb-2">
          Gallery
        </p>
        <h1 className="font-heading text-5xl text-forest mb-4">
          A glimpse of Kowai
        </h1>
        <p className="text-lg text-charcoal/70 leading-relaxed">
          Pictures don&apos;t do it full justice, but they&apos;re a start. Scroll through
          and get a feel for what life at Kowai looks like.
        </p>
      </div>

      {/* Gallery grid — placeholder tiles
          TODO: Replace with real next/image components pointing to uploaded photos.
          Recommended: store images in /public/gallery/ or use a cloud image host (Cloudinary, etc.)
          and serve via next/image with fill + sizes for performance. */}
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-16">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl bg-sage/15 flex items-center justify-center text-sage/50 text-xs font-body"
          >
            Photo {i + 1}
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="text-center">
        <p className="text-charcoal/60 mb-4">Like what you see?</p>
        <Link
          href="/book"
          className="inline-block rounded-full bg-terracotta px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-warm-brown"
        >
          Make an Enquiry
        </Link>
      </div>
    </div>
  );
}
