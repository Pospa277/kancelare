import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream-dark border-t border-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tight text-white">
                FREEWORK
              </span>
            </Link>
            <p className="text-warm-gray text-sm leading-relaxed">
              Luxusní kancelářské prostory v srdci Olomouce. Moderní zázemí pro
              váš byznys.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Služby</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/soukroma-kancelar"
                  className="text-warm-gray text-sm hover:text-primary-light transition-colors"
                >
                  Soukromá kancelář
                </Link>
              </li>
              <li>
                <Link
                  href="/sdilena-kancelar"
                  className="text-warm-gray text-sm hover:text-primary-light transition-colors"
                >
                  Sdílená kancelář
                </Link>
              </li>
              <li>
                <Link
                  href="/coworking"
                  className="text-warm-gray text-sm hover:text-primary-light transition-colors"
                >
                  Coworking
                </Link>
              </li>
              <li>
                <Link
                  href="/zasedaci-mistnosti"
                  className="text-warm-gray text-sm hover:text-primary-light transition-colors"
                >
                  Zasedací místnosti
                </Link>
              </li>
              <li>
                <Link
                  href="/skoleni"
                  className="text-warm-gray text-sm hover:text-primary-light transition-colors"
                >
                  Školení & Workshop
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Kontakt</h3>
            <ul className="space-y-2 text-warm-gray text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                tř. Kosmonautů 1221/2a, Olomouc
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@freework.cz
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +420 xxx xxx xxx
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Otevírací doba</h3>
            <ul className="space-y-2 text-warm-gray text-sm">
              <li className="flex justify-between">
                <span>Po – Pá</span>
                <span>8:00 – 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>So – Ne</span>
                <span>Po domluvě</span>
              </li>
            </ul>
            <p className="text-warm-gray-light text-xs mt-4">
              Držitelé klíčů mají přístup 24/7
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-warm-gray-light text-sm">
            © {new Date().getFullYear()} FREEWORK. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-6">
            <Link
              href="/galerie"
              className="text-warm-gray-light text-sm hover:text-primary-light transition-colors"
            >
              Galerie
            </Link>
            <Link
              href="/kontakt"
              className="text-warm-gray-light text-sm hover:text-primary-light transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
