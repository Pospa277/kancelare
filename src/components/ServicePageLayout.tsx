import Link from "next/link";

interface Feature {
  title: string;
  description: string;
}

interface Equipment {
  name: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  equipment: Equipment[];
  highlights: string[];
  ctaText?: string;
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  features,
  equipment,
  highlights,
  ctaText = "Mám zájem",
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-cream-dark to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(230,53,96,0.1),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-warm-gray leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Co získáte
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Hlavní výhody
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-warm-white rounded-2xl p-8 border border-accent/30 hover:shadow-lg hover:shadow-primary/5 transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-warm-gray leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Highlights */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Equipment */}
            <div>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Co je k dispozici
              </p>
              <h2 className="text-3xl font-bold text-white mb-8">
                Vybavení
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {equipment.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 bg-warm-white rounded-xl p-4 border border-accent/20"
                  >
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white text-sm font-medium">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Proč si vybrat nás
              </p>
              <h2 className="text-3xl font-bold text-white mb-8">
                Zajímavosti
              </h2>
              <div className="space-y-4">
                {highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-warm-white rounded-xl p-5 border border-accent/20"
                  >
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-white leading-relaxed text-sm">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Jak to u nás vypadá
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-900/30 to-slate-900/30 flex items-center justify-center border border-accent/20"
              >
                <div className="text-center p-6">
                  <svg className="w-12 h-12 text-white/20 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white/30 text-sm">Fotografie #{i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {ctaText}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Kontaktujte nás pro nezávaznou prohlídku nebo cenovou nabídku na
            míru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition-colors shadow-lg text-center"
            >
              Nezávazná poptávka
            </Link>
            <Link
              href="/galerie"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors text-center"
            >
              Prohlédnout prostory
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
