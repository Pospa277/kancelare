"use client";

import { Metadata } from "next";
import { useState } from "react";

const categories = [
  { id: "vse", label: "Vše" },
  { id: "kancelare", label: "Kanceláře" },
  { id: "coworking", label: "Coworking" },
  { id: "zasedaci", label: "Zasedací místnosti" },
  { id: "spolecne", label: "Společné prostory" },
];

const galleryItems = [
  {
    id: 1,
    title: "Soukromá kancelář – pohled od okna",
    category: "kancelare",
    aspect: "aspect-[4/3]",
    bg: "bg-secondary/15",
  },
  {
    id: 2,
    title: "Soukromá kancelář – pracovní stůl",
    category: "kancelare",
    aspect: "aspect-square",
    bg: "bg-primary/10",
  },
  {
    id: 3,
    title: "Coworkingový prostor – celkový pohled",
    category: "coworking",
    aspect: "aspect-[4/3]",
    bg: "bg-accent/30",
  },
  {
    id: 4,
    title: "Zasedací místnost – velká",
    category: "zasedaci",
    aspect: "aspect-[3/4]",
    bg: "bg-secondary/20",
  },
  {
    id: 5,
    title: "Kuchyňka a odpočinková zóna",
    category: "spolecne",
    aspect: "aspect-[4/3]",
    bg: "bg-primary/8",
  },
  {
    id: 6,
    title: "Sdílená kancelář – pracovní místa",
    category: "kancelare",
    aspect: "aspect-square",
    bg: "bg-accent/20",
  },
  {
    id: 7,
    title: "Coworking – tiché zóny",
    category: "coworking",
    aspect: "aspect-[4/3]",
    bg: "bg-secondary/10",
  },
  {
    id: 8,
    title: "Zasedací místnost – malá",
    category: "zasedaci",
    aspect: "aspect-[4/3]",
    bg: "bg-primary/12",
  },
  {
    id: 9,
    title: "Recepce a vstupní hala",
    category: "spolecne",
    aspect: "aspect-[3/4]",
    bg: "bg-accent/25",
  },
  {
    id: 10,
    title: "Školící místnost",
    category: "zasedaci",
    aspect: "aspect-[4/3]",
    bg: "bg-secondary/18",
  },
  {
    id: 11,
    title: "Coworking – společný stůl",
    category: "coworking",
    aspect: "aspect-square",
    bg: "bg-primary/10",
  },
  {
    id: 12,
    title: "Terasa a venkovní prostory",
    category: "spolecne",
    aspect: "aspect-[4/3]",
    bg: "bg-accent/35",
  },
];

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState("vse");

  const filteredItems =
    activeCategory === "vse"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-foreground to-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,97,58,0.3),transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-primary-light font-semibold text-sm tracking-widest uppercase mb-4">
            Naše prostory
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-cream leading-tight mb-6">
            Galerie
          </h1>
          <p className="text-lg text-warm-gray-light leading-relaxed max-w-3xl">
            Podívejte se, jak vypadají naše moderní kancelářské prostory.
            Kvalitní fotografie nahradíme brzy.
          </p>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-cream-dark text-warm-gray hover:bg-accent/50 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry-like Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`break-inside-avoid ${item.aspect} ${item.bg} rounded-2xl flex items-center justify-center border border-accent/20 hover:shadow-lg transition-shadow cursor-pointer group`}
              >
                <div className="text-center p-6">
                  <svg
                    className="w-12 h-12 text-warm-gray-light mx-auto mb-3 group-hover:text-primary transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-warm-gray-light text-sm group-hover:text-warm-gray transition-colors">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
