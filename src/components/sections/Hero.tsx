import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10">
        <Container>
          <div className="min-h-[80vh] flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Climatizzazione e Riscaldamento
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                20 anni di esperienza al servizio del tuo comfort
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/preventivo" variant="secondary">
                  Richiedi Preventivo
                </Button>
                <Button href="/servizi">
                  Scopri i Nostri Servizi
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
