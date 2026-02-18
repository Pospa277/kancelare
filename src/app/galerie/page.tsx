"use client";

import { useState } from "react";

const categories = [
  { id: "vse", label: "Vše" },
  { id: "kancelare", label: "Kanceláře" },
  { id: "coworking", label: "Coworking" },
  { id: "zasedaci", label: "Zasedací místnosti" },
  { id: "spolecne", label: "Společné prostory" },
];

const galleryItems = [
  { id: 1, title: "Soukromá kancelář – pohled od okna", category: "kancelare", aspect: "aspect-[4/3]", gradient: "from-blue-900/30 to-slate-800/30" },
  { id: 2, title: "Soukromá kancelář – pracovní stůl", category: "kancelare", aspect: "aspect-square", gradient: "from-indigo-900/30 to-slate-800/30" },
  { id: 3, title: "Coworkingový prostor – celkový pohled", category: "coworking", aspect: "aspect-[4/3]", gradient: "from-violet-900/30 to-slate-800/30" },
  { id: 4, title: "Zasedací místnost – velká", category: "zasedaci", aspect: "aspect-[3/4]", gradient: "from-cyan-900/30 to-slate-800/30" },
  { id: 5, title: "Kuchyňka a odpočinková zóna", category: "spolecne", aspect: "aspect-[4/3]", gradient: "from-emerald-900/30 to-slate-800/30" },
  { id: 6, title: "Sdílená kancelář – pracovní místa", category: "kancelare", aspect: "aspect-square", gradient: "from-blue-900/30 to-indigo-900/30" },
  { id: 7, title: "Coworking – tiché zóny", category: "coworking", aspect: "aspect-[4/3]", gradient: "from-purple-900/30 to-slate-800/30" },
  { id: 8, title: "Zasedací místnost – malá", category: "zasedaci", aspect: "aspect-[4/3]", gradient: "from-teal-900/30 to-slate-800/30" },
  { id: 9, title: "Recepce a vstupní hala", category: "spolecne", aspect: "aspect-[3/4]", gradient: "from-sky-900/30 to-slate-800/30" },
  { id: 10, title: "Školící místnost", category: "zasedaci", aspect: "aspect-[4/3]", gradient: "from-indigo-900/30 to-cyan-900/30" },
  { id: 11, title: "Coworking – společný stůl", category: "coworking", aspect: "aspect-square", gradient: "from-violet-900/30 to-indigo-900/30" },
  { id: 12, title: "Terasa a venkovní prostory", category: "spolecne", aspect: "aspect-[4/3]", gradient: "from-emerald-900/30 to-teal-900/30" },
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-cream-dark to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(230,53,96,0.1),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Naše prostory
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Galerie
          </h1>
          <p className="text-lg text-warm-gray leading-relaxed max-w-3xl">
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
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-warm-white text-warm-gray hover:text-white hover:bg-accent/50 border border-accent/30"
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
                className={`break-inside-avoid ${item.aspect} bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center border border-accent/20 hover:shadow-lg hover:shadow-primary/5 transition-shadow cursor-pointer group`}
              >
                <div className="text-center p-6">
                  <svg
                    className="w-12 h-12 text-white/20 mx-auto mb-3 group-hover:text-primary/50 transition-colors"
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
                  <p className="text-white/30 text-sm group-hover:text-warm-gray transition-colors">
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
