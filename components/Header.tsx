"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Farmstay", href: "/farmstay" },
  { label: "Dog Boarding", href: "/dog-boarding" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-warm-brown/20 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Wordmark */}
        <Link
          href="/"
          className="flex flex-col leading-none text-forest hover:text-terracotta transition-colors"
        >
          <span className="font-heading text-xl font-normal tracking-wide">
            Kowai
          </span>
          <span className="text-xs font-body uppercase tracking-widest text-warm-brown">
            Farmstay & Boarding
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={[
                "text-sm font-body transition-colors",
                pathname === href
                  ? "text-terracotta font-medium border-b-2 border-terracotta pb-0.5"
                  : "text-charcoal hover:text-terracotta",
              ].join(" ")}
            >
              {label}
            </Link>
          ))}
          {/* Primary CTA */}
          <Link
            href="/book"
            className="ml-2 rounded-full bg-terracotta px-5 py-2 text-sm font-medium text-cream shadow-sm transition-colors hover:bg-warm-brown"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-warm-brown/20 bg-cream px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "block rounded-lg px-3 py-2.5 text-sm font-body transition-colors",
                    pathname === href
                      ? "bg-terracotta/10 text-terracotta font-medium"
                      : "text-charcoal hover:bg-sage/10 hover:text-forest",
                  ].join(" ")}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-terracotta px-5 py-2.5 text-center text-sm font-medium text-cream transition-colors hover:bg-warm-brown"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
