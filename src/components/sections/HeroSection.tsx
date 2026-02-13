import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero_home_img.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 lg:pt-36 pb-48 lg:pb-64">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Calore e comfort...
            <br />
            ovunque tu voglia
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            Soluzioni innovative per climatizzazione e riscaldamento con 20 anni
            di esperienza al tuo servizio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/servizi"
              className="inline-flex items-center justify-center px-8 py-4 bg-v-light text-white font-semibold rounded-lg hover:bg-v-dark transition-colors"
            >
              Scopri i nostri servizi
            </Link>

            <Link
              href="/preventivo"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-v-dark transition-colors"
            >
              Richiedi un preventivo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
