import Link from "next/link";

const quickLinks = [
  { label: "Farmstay", href: "/farmstay" },
  { label: "Dog Boarding", href: "/dog-boarding" },
  { label: "Gallery", href: "/gallery" },
  { label: "Book Now", href: "/book" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-brown/20 bg-forest text-cream/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-2xl text-cream">Kowai</span>
            <p className="text-xs uppercase tracking-widest text-sage">
              Farmstay & Boarding
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/70">
              A working farm offering unique farmstay accommodation and premium
              dog boarding in New Zealand.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-sage">
              Explore
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-sage">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-cream/70">
              <li>
                <span className="block text-xs uppercase tracking-wide text-sage/80 mb-0.5">
                  Email
                </span>
                <a
                  href="mailto:stay@kowaifarmstay.co.nz"
                  className="transition-colors hover:text-cream"
                >
                  stay@kowaifarmstay.co.nz
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-sage/80 mb-0.5">
                  Website
                </span>
                <a
                  href="https://kowaifarmstay.co.nz"
                  className="transition-colors hover:text-cream"
                >
                  kowaifarmstay.co.nz
                </a>
              </li>
              <li className="mt-2">
                <Link
                  href="/book"
                  className="inline-block rounded-full bg-terracotta px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-warm-brown"
                >
                  Make an Enquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-cream/10 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-cream/40">
          <p>&copy; {currentYear} Kowai Farmstay & Boarding. All rights reserved.</p>
          <Link href="/terms" className="transition-colors hover:text-cream/70">
            Terms & Conditions
          </Link>
          <p>
            Built by{" "}
            <a
              href="https://sogrow.co.nz"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream/70"
            >
              Sogrow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
