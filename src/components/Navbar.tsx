"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#sluzby", label: "Služby" },
  { href: "#galerie", label: "Galerie" },
  { href: "#lokalita", label: "Lokalita" },
  { href: "#cenik", label: "Ceník" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-accent/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              FREEWORK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-warm-gray hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/kontakt"
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Rezervovat prohlídku
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-warm-gray hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Otevřít menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-accent/30">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-warm-gray hover:text-white hover:bg-warm-white rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="mx-4 mt-3 bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Rezervovat prohlídku
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
