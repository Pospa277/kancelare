import Link from "next/link";

const services = [
  {
    title: "Soukromá Kancelář",
    href: "/soukroma-kancelar",
    features: [
      "Vlastní uzamykatelný prostor",
      "Plně vybavená kancelář",
      "Maximální soukromí",
    ],
    gradient: "from-blue-900/50 via-blue-800/30 to-slate-900/50",
  },
  {
    title: "Sdílená Kancelář",
    href: "/sdilena-kancelar",
    features: [
      "Sdílený prostor s profesionály",
      "Flexibilní podmínky",
      "Networking a komunita",
    ],
    gradient: "from-indigo-900/50 via-indigo-800/30 to-slate-900/50",
  },
  {
    title: "Sdílený Stůl (Coworking)",
    href: "/coworking",
    features: [
      "Hot-desk princip",
      "Inspirativní prostředí",
      "Denní i měsíční členství",
    ],
    gradient: "from-violet-900/50 via-violet-800/30 to-slate-900/50",
  },
  {
    title: "Zasedací Místnosti",
    href: "/zasedaci-mistnosti",
    features: [
      "Kapacita 4–20 osob",
      "Moderní technika",
      "Hodinový pronájem",
    ],
    gradient: "from-cyan-900/50 via-cyan-800/30 to-slate-900/50",
  },
  {
    title: "Školení & Workshop",
    href: "/skoleni",
    features: [
      "Kapacita až 30 osob",
      "Flexibilní uspořádání",
      "Kompletní technická podpora",
    ],
    gradient: "from-emerald-900/50 via-emerald-800/30 to-slate-900/50",
  },
];

const whyItems = [
  {
    title: "24/7 Přístup",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Servisovaná kancelář",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Representativní prostory",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Klid na práci",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Flexibilní možnosti",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Prémiová lokalita",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const locations = [
  {
    name: "Hlavní nádraží",
    distance: "8 min",
    type: "MHD",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-4 4v3m-4-3h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v9a2 2 0 002 2zm-2 3h12" />
      </svg>
    ),
  },
  {
    name: "Centrum",
    distance: "6 min",
    type: "pěšky",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Galerie Šantovka",
    distance: "9 min",
    type: "pěšky",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
];

const partners = [
  "ASGV",
  "ACOM",
  "Brinidic",
  "Olomouc",
  "Jerkovna",
  "Smiteth",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background with gradient placeholder for office photo */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#12243d] to-[#0a1628]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(30,70,120,0.25),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(230,53,96,0.08),transparent_50%)]" />
          {/* Subtle grid pattern to add visual interest */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Luxusní kanceláře
              <br />
              uprostřed Olomouce.
            </h1>
            <p className="text-lg sm:text-xl text-warm-gray leading-relaxed mb-10 max-w-2xl">
              Moderní kancelářské prostory na prestižní adrese. Soukromé
              kanceláře, coworking i zasedací místnosti – vše pod jednou
              střechou.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors text-center"
              >
                Rezervovat prohlídku
              </Link>
              <Link
                href="#sluzby"
                className="border border-warm-gray/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/5 transition-colors text-center"
              >
                Zobrazit služby
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom badges */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-accent/50 bg-background/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-start divide-x divide-accent/50">
              <div className="flex items-center gap-3 py-5 pr-8">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/80 text-sm font-medium">24/7 přístup</span>
              </div>
              <div className="flex items-center gap-3 py-5 px-8">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/80 text-sm font-medium">Prémiová adresa</span>
              </div>
              <div className="flex items-center gap-3 py-5 pl-8">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/80 text-sm font-medium">Servisovaná kancelář</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Vyberte si prostor pro práci
            </h2>
            <p className="text-warm-gray max-w-2xl text-lg">
              Od soukromých kanceláří po flexibilní coworking – najděte řešení,
              které sedí přesně vašemu byznysu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-warm-white rounded-2xl overflow-hidden border border-accent/30 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className={`aspect-[16/10] bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
                  <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-warm-gray text-sm">
                        <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-primary font-semibold text-sm">
                    Detail služby
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why FREEWORK */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Proč FREEWORK?
            </h2>
            <div className="flex items-center gap-0">
              <div className="h-1 w-16 bg-primary rounded-full" />
              <div className="h-1 flex-1 bg-gradient-to-r from-primary/30 to-transparent rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {whyItems.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-warm-white rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 border border-accent/30">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="galerie" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Galerie
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Soukromá kancelář", gradient: "from-blue-900/40 to-slate-800/40" },
              { label: "Coworkingový prostor", gradient: "from-indigo-900/40 to-slate-800/40" },
              { label: "Zasedací místnost", gradient: "from-cyan-900/40 to-slate-800/40" },
            ].map((img, i) => (
              <div
                key={i}
                className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${img.gradient} flex items-center justify-center border border-accent/20 overflow-hidden relative group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
                <div className="text-center p-6 relative z-10">
                  <svg className="w-12 h-12 text-white/20 mx-auto mb-3 group-hover:text-white/40 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white/40 text-sm">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 border border-warm-gray/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/5 transition-colors"
            >
              Zobrazit galerii
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="lokalita" className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map placeholder */}
            <div className="aspect-[4/3] bg-warm-white rounded-2xl flex items-center justify-center border border-accent/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/20" />
              <div className="text-center p-8 relative z-10">
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

            {/* Location info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Uprostřed města.
                <br />
                Všude blízko.
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed mb-8">
                Naše kanceláře se nachází na strategickém místě v centru
                Olomouce s výbornou dostupností.
              </p>
              <div className="space-y-4 mb-8">
                {locations.map((loc) => (
                  <div
                    key={loc.name}
                    className="flex items-center gap-4 bg-warm-white rounded-xl p-4 border border-accent/20"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                      {loc.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">
                        {loc.name}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-bold text-sm">{loc.distance}</span>
                      <span className="text-warm-gray text-sm ml-1">{loc.type}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 border border-warm-gray/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/5 transition-colors"
              >
                Jak se k nám dostanete
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-background border-t border-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-warm-gray-light text-sm font-medium tracking-widest uppercase mb-10">
            Nám důvěřují
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-warm-gray-light/40 font-bold text-xl tracking-wider hover:text-warm-gray transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
