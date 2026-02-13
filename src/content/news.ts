export interface NewsArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  image?: string
  category: string
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Nuove pompe di calore: efficienza energetica al top',
    slug: 'nuove-pompe-calore-efficienza-energetica',
    excerpt: 'Le ultime generazioni di pompe di calore offrono prestazioni eccezionali con consumi ridotti.',
    content: 'Le nuove pompe di calore rappresentano il futuro del riscaldamento domestico e industriale...',
    date: '2024-01-15',
    category: 'Innovazione'
  },
  {
    id: '2',
    title: 'Manutenzione primaverile: perché è importante',
    slug: 'manutenzione-primaverile-importante',
    excerpt: 'La manutenzione stagionale dei tuoi impianti garantisce efficienza e durata nel tempo.',
    content: 'Con l\'arrivo della primavera è il momento ideale per effettuare la manutenzione degli impianti...',
    date: '2024-01-10',
    category: 'Consigli'
  },
  {
    id: '3',
    title: 'Bonus ristrutturazione 2024: come approfittarne',
    slug: 'bonus-ristrutturazione-2024-come-approfittarne',
    excerpt: 'Le novità sulle detrazioni fiscali per l\'efficientamento energetico degli edifici.',
    content: 'Il 2024 porta importanti novità per quanto riguarda i bonus fiscali...',
    date: '2024-01-05',
    category: 'Fiscalità'
  }
]
