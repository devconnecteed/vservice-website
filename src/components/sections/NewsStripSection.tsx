import Link from 'next/link'

export function NewsStripSection() {
  const newsItems = [
    {
      id: 1,
      title: "Nuove tecnologie per il risparmio energetico",
      excerpt: "Scopri le ultime innovazioni nel settore della climatizzazione",
      date: "15 Gennaio 2024",
      category: "Innovazione"
    },
    {
      id: 2,
      title: "Manutenzione primaverile: i consigli degli esperti",
      excerpt: "Prepara i tuoi impianti per la stagione estiva",
      date: "10 Gennaio 2024",
      category: "Manutenzione"
    },
    {
      id: 3,
      title: "Bonus ristrutturazione 2024: come approfittarne",
      excerpt: "Guida completa alle agevolazioni fiscali per impianti efficienti",
      date: "5 Gennaio 2024",
      category: "Bonus"
    },
    {
      id: 4,
      title: "Climatizzazione smart: controllo da remoto",
      excerpt: "Gestisci i tuoi impianti ovunque ti trovi con l'app dedicata",
      date: "28 Dicembre 2023",
      category: "Tecnologia"
    }
  ]

  return (
    <section className="relative py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-0">
            Ultime news
          </h2>
          <Link 
            href="/news"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Vedi tutte
          </Link>
        </div>
        
        {/* Horizontal Scroll Cards */}
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
            {newsItems.map((item) => (
              <div 
                key={item.id}
                className="w-80 bg-gray-800 rounded-xl p-6 flex-shrink-0 hover:bg-gray-750 transition-colors"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                {/* Date */}
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
