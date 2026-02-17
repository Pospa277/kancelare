"use client";

import { useState } from "react";

const serviceOptions = [
  "Soukromá kancelář",
  "Sdílená kancelář",
  "Coworking",
  "Zasedací místnost",
  "Školení / Workshop",
  "Jiné",
];

const timeSlots = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function KontaktPage() {
  const [activeTab, setActiveTab] = useState<"kontakt" | "rezervace">(
    "kontakt"
  );

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-foreground to-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,97,58,0.3),transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-primary-light font-semibold text-sm tracking-widest uppercase mb-4">
            Spojte se s námi
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-cream leading-tight mb-6">
            Kontakt & Rezervace
          </h1>
          <p className="text-lg text-warm-gray-light leading-relaxed max-w-3xl">
            Máte zájem o naše prostory? Napište nám nebo si rovnou zarezervujte
            prohlídku.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Kontaktní údaje
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Adresa</h3>
                    <p className="text-warm-gray text-sm mt-1">
                      tř. Kosmonautů 1221/2a
                      <br />
                      779 00 Olomouc
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">E-mail</h3>
                    <p className="text-warm-gray text-sm mt-1">
                      info@freework.cz
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Telefon</h3>
                    <p className="text-warm-gray text-sm mt-1">
                      +420 xxx xxx xxx
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Otevírací doba
                    </h3>
                    <p className="text-warm-gray text-sm mt-1">
                      Po – Pá: 8:00 – 18:00
                      <br />
                      So – Ne: Po domluvě
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-[4/3] bg-secondary/10 rounded-2xl flex items-center justify-center border border-accent/20">
                <div className="text-center p-6">
                  <svg
                    className="w-12 h-12 text-warm-gray-light mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-warm-gray-light text-sm">
                    Mapa bude doplněna
                  </p>
                </div>
              </div>
            </div>

            {/* Forms */}
            <div className="lg:col-span-2">
              {/* Tab Switcher */}
              <div className="flex gap-2 mb-8 bg-cream-dark p-1.5 rounded-full w-fit">
                <button
                  onClick={() => setActiveTab("kontakt")}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                    activeTab === "kontakt"
                      ? "bg-primary text-white shadow-md"
                      : "text-warm-gray hover:text-foreground"
                  }`}
                >
                  Kontaktní formulář
                </button>
                <button
                  onClick={() => setActiveTab("rezervace")}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                    activeTab === "rezervace"
                      ? "bg-primary text-white shadow-md"
                      : "text-warm-gray hover:text-foreground"
                  }`}
                >
                  Rezervace prohlídky
                </button>
              </div>

              {/* Contact Form */}
              {activeTab === "kontakt" && (
                <form
                  className="bg-warm-white rounded-2xl p-8 border border-accent/30"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Napište nám
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Jméno a příjmení *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-background text-foreground placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Jan Novák"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-background text-foreground placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="jan@firma.cz"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-background text-foreground placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="+420 123 456 789"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Zájem o službu
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors">
                        <option value="">Vyberte službu...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Zpráva *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-background text-foreground placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                      placeholder="Popište nám váš požadavek..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
                  >
                    Odeslat zprávu
                  </button>
                </form>
              )}

              {/* Reservation Form */}
              {activeTab === "rezervace" && (
                <form
                  className="bg-warm-white rounded-2xl p-8 border border-accent/30"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Rezervace prohlídky
                  </h2>
                  <p className="text-warm-gray mb-8">
                    Zarezervujte si nezávaznou prohlídku našich prostor. Ukážeme
                    vám vše a odpovíme na všechny dotazy.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Jméno a příjmení *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-background text-foreground placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Jan Novák"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-background text-foreground placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="jan@firma.cz"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-background text-foreground placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="+420 123 456 789"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Zájem o službu *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      >
                        <option value="">Vyberte službu...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Preferovaný datum *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Preferovaný čas *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      >
                        <option value="">Vyberte čas...</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Poznámka
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-background text-foreground placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                      placeholder="Máte specifické požadavky nebo otázky?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
                  >
                    Rezervovat prohlídku
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
