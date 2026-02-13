import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">V.Service</h3>
            <p className="text-gray-400">
              Leader in climatizzazione e riscaldamento con 20 anni di esperienza.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2">
              <li><Link href="/servizi" className="text-gray-400 hover:text-white">Climatizzazione</Link></li>
              <li><Link href="/servizi" className="text-gray-400 hover:text-white">Riscaldamento</Link></li>
              <li><Link href="/servizi" className="text-gray-400 hover:text-white">Manutenzione</Link></li>
              <li><Link href="/servizi" className="text-gray-400 hover:text-white">Assistenza</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Azienda</h4>
            <ul className="space-y-2">
              <li><Link href="/azienda" className="text-gray-400 hover:text-white">Chi Siamo</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white">Galleria</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white">News</Link></li>
              <li><Link href="/contatti" className="text-gray-400 hover:text-white">Contatti</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Via Roma 123</li>
              <li>20100 Milano (MI)</li>
              <li>Tel: 02 12345678</li>
              <li>Email: info@vservice.it</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 V.Service. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
