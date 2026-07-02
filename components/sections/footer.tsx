import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Porcelain Veneers", href: "/veneers" },
      { label: "Teeth Whitening", href: "/teeth-whitening" },
      { label: "Invisalign", href: "/invisalign" },
      { label: "Dental Implants", href: "/dental-implants" },
      { label: "Smile Makeover", href: "/smile-makeover" },
    ],
  },
  {
    title: "Clinic",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Meet the Doctors", href: "/doctors" },
      { label: "All Services", href: "/services" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Book Appointment", href: "/book-appointment" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink pt-20 text-porcelain">
      <div className="container">
        <div className="grid gap-14 pb-16 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <span className="font-display text-2xl tracking-tight">
              Lumina <span className="italic text-accent">Dental</span>
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Luxury cosmetic dentistry for your perfect smile — precision
              craft, concierge care, unmistakable results.
            </p>
            <div className="mt-7 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/55 transition-colors hover:text-porcelain"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 border-t border-white/10 py-10 text-sm text-white/55 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-accent" /> 5th Avenue, New York, NY
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-accent" /> +1 (212) 555-0148
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-accent" /> hello@luminadental.com
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Lumina Dental. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white/70">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-white/70">Privacy</Link>
            <Link href="/contact" className="hover:text-white/70">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
