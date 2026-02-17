import Link from "next/link";

const services = [
  {
    title: "Soukromá kancelář",
    description:
      "Vlastní uzamykatelný prostor pro váš tým. Plně vybavená kancelář s maximálním soukromím a komfortem.",
    href: "/soukroma-kancelar",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Sdílená kancelář",
    description:
      "Sdílejte moderní prostor s dalšími profesionály. Ideální pro malé týmy a freelancery.",
    href: "/sdilena-kancelar",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Coworking",
    description:
      "Flexibilní pracovní místo v inspirativním prostředí. Přijďte kdykoliv a pracujte ve společnosti ambiciózních lidí.",
    href: "/coworking",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Zasedací místnosti",
    description:
      "Reprezentativní prostory pro vaše schůzky, prezentace a jednání s klienty.",
    href: "/zasedaci-mistnosti",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: "Školení & Workshop",
    description:
      "Prostorné místnosti s moderní technikou pro školení, workshopy a firemní akce.",
    href: "/skoleni",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const galleryImages = [
  { alt: "Moderní kancelářský prostor", placeholder: "bg-secondary/20" },
  { alt: "Coworkingová zóna", placeholder: "bg-primary/10" },
  { alt: "Zasedací místnost", placeholder: "bg-accent/40" },
  { alt: "Recepce a vstupní hala", placeholder: "bg-secondary/15" },
  { alt: "Odpočinková zóna", placeholder: "bg-primary/15" },
  { alt: "Kuchyňka a zázemí", placeholder: "bg-accent/30" },
];

const locations = [
  {
    name: "Hlavní nádraží Olomouc",
    distance: "10 min pěšky",
    icon: "🚂",
  },
  {
    name: "Centrum / Horní náměstí",
    distance: "8 min pěšky",
    icon: "🏛️",
  },
  {
    name: "OC Šantovka",
    distance: "5 min pěšky",
    icon: "🛍️",
  },
  {
    name: "Tržnice Olomouc",
    distance: "7 min pěšky",
    icon: "🏪",
  },
  {
    name: "Univerzita Palackého",
    distance: "12 min pěšky",
    icon: "🎓",
  },
  {
    name: "Autobusové nádraží",
    distance: "12 min pěšky",
    icon: "🚌",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-foreground via-foreground to-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,97,58,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(232,201,160,0.2),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm tracking-widest uppercase mb-4">
              Prémiové kancelářské prostory
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
              Váš nový pracovní prostor v{" "}
              <span className="text-primary-light">srdci Olomouce</span>
            </h1>
            <p className="text-lg sm:text-xl text-warm-gray-light leading-relaxed mb-10 max-w-2xl">
              FREEWORK nabízí luxusní kanceláře, coworkingové prostory a
              zasedací místnosti na prestižní adrese tř. Kosmonautů. Moderní
              zázemí pro váš byznys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl text-center"
              >
                Nezávazná poptávka
              </Link>
              <Link
                href="/galerie"
                className="border-2 border-cream/30 text-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-cream/10 transition-all text-center"
              >
                Prohlédnout prostory
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative shape */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }} />
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Co nabízíme
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Naše služby
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto text-lg">
              Vyberte si z pestré nabídky kancelářských řešení přesně to, co
              potřebuje váš byznys.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-warm-white rounded-2xl p-8 border border-accent/30 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-primary font-semibold text-sm">
                  Zjistit více
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why FREEWORK */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Proč si vybrat nás
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Proč FREEWORK?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Prémiová lokalita",
                desc: "Přímo v centru Olomouce, skvělá dostupnost MHD i autem.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "Moderní vybavení",
                desc: "Vysokorychlostní internet, tiskárny, projektory a další.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Flexibilní pronájem",
                desc: "Od hodinového pronájmu po dlouhodobé smlouvy – vše podle vás.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Komunita",
                desc: "Staňte se součástí komunity profesionálů a podnikatelů.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Naše prostory
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Galerie
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto text-lg">
              Podívejte se, jak vypadají naše moderní kancelářské prostory.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`aspect-[4/3] rounded-2xl ${img.placeholder} flex items-center justify-center border border-accent/20`}
              >
                <div className="text-center p-6">
                  <svg className="w-12 h-12 text-warm-gray-light mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-warm-gray-light text-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-md"
            >
              Zobrazit celou galerii
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Kde nás najdete
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Skvělá lokalita
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed mb-8">
                Naše kanceláře se nachází na adrese{" "}
                <strong className="text-foreground">
                  tř. Kosmonautů 1221/2a, Olomouc
                </strong>
                . Strategická poloha v centru města s výbornou dopravní
                dostupností.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locations.map((loc) => (
                  <div
                    key={loc.name}
                    className="flex items-center gap-3 bg-warm-white rounded-xl p-4 border border-accent/20"
                  >
                    <span className="text-2xl">{loc.icon}</span>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {loc.name}
                      </p>
                      <p className="text-warm-gray text-sm">{loc.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-secondary/10 rounded-2xl flex items-center justify-center border border-accent/20">
              <div className="text-center p-8">
                <svg className="w-16 h-16 text-warm-gray-light mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-warm-gray-light">Mapa bude doplněna</p>
                <p className="text-warm-gray-light text-sm mt-1">
                  tř. Kosmonautů 1221/2a, Olomouc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Připraveni začít?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Kontaktujte nás a domluvte si nezávaznou prohlídku našich prostor.
            Rádi vám najdeme to pravé řešení pro váš byznys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-cream transition-colors shadow-lg text-center"
            >
              Kontaktujte nás
            </Link>
            <a
              href="tel:+420000000000"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors text-center"
            >
              Zavolejte nám
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
