export function SplitSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Diagonal Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full transform -translate-x-48 -translate-y-48 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full transform translate-x-40 translate-y-40 opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Block */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder Image */}
              <div className="bg-gray-300 h-96 lg:h-full min-h-[400px] flex items-center justify-center">
                <span className="text-gray-600 text-lg">Immagine sezione ottimizzazione</span>
              </div>
              
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Ottimizza l'ambiente con soluzioni intelligenti
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Trasformiamo la tua casa o il tuo ufficio in un ambiente perfetto, 
              con sistemi di climatizzazione e riscaldamento che uniscono efficienza energetica 
              e massimo comfort.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Efficienza garantita</h4>
                  <p className="text-gray-600">Risparmio energetico fino al 30% con tecnologie moderne</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Controllo smart</h4>
                  <p className="text-gray-600">Gestione remota e programmazione intelligente</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Assistenza continua</h4>
                  <p className="text-gray-600">Supporto tecnico 24/7 per la tua tranquillità</p>
                </div>
              </div>
            </div>
            
            <button className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Scopri le soluzioni
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
