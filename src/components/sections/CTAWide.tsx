import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export function CTAWide() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Hai bisogno di un preventivo personalizzato?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contattaci oggi stesso per una consulenza gratuita e scopri le nostre 
            soluzioni su misura per le tue esigenze di climatizzazione e riscaldamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/preventivo" variant="secondary">
              Richiedi Preventivo
            </Button>
            <Button href="/contatti">
              Contattaci
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
