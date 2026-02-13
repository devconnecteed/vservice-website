export function CertificationsSection() {
  const certifications = [
    {
      title: "Certificazione UNI EN ISO 9001",
      description: "Sistema di gestione per la qualità, garantendo standard elevati in tutti i nostri processi aziendali e servizi offerti."
    },
    {
      title: "Certificazione F-Gas",
      description: "Abilitazione alla gestione di gas fluorurati ad effetto serra, nel rispetto delle normative ambientali europee."
    },
    {
      title: "Qualifica FGAS 2023",
      description: "Certificazione aggiornata per la manipolazione di sistemi di condizionamento secondo le più recenti disposizioni legislative."
    }
  ]

  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Le nostre certificazioni
          </h2>
        </div>
        
        {/* Three Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Logo Placeholder */}
              <div className="mx-auto w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              {/* Certification Title */}
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {cert.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Additional Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600 text-sm">Anni di esperienza</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600 text-sm">Clienti soddisfatti</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Assistenza tecnica</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Garanzia sui lavori</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
