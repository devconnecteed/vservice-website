export interface Service {
  id: string
  title: string
  slug: string
  description: string
  content: string
  icon: string
  image?: string
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Climatizzazione',
    slug: 'climatizzazione',
    description: 'Installazione e manutenzione di impianti di climatizzazione per ambienti civili e industriali.',
    content: 'Offriamo soluzioni complete per la climatizzazione, dal dimensionamento all\'installazione e manutenzione di impianti di ultima generazione.',
    icon: '❄️'
  },
  {
    id: '2',
    title: 'Riscaldamento',
    slug: 'riscaldamento',
    description: 'Soluzioni complete per il riscaldamento con caldaie a condensazione e pompe di calore.',
    content: 'Progettiamo e installiamo impianti di riscaldamento efficienti e a basso consumo, con le migliori tecnologie disponibili sul mercato.',
    icon: '🔥'
  },
  {
    id: '3',
    title: 'Manutenzione',
    slug: 'manutenzione',
    description: 'Servizi di manutenzione programmata per garantire efficienza e durata nel tempo.',
    content: 'La manutenzione programmata è essenziale per garantire l\'efficienza e la longevità dei tuoi impianti di climatizzazione e riscaldamento.',
    icon: '🔧'
  },
  {
    id: '4',
    title: 'Assistenza 24/7',
    slug: 'assistenza-24-7',
    description: 'Interventi rapidi e assistenza tecnica disponibile 24 ore su 24, 7 giorni su 7.',
    content: 'Il nostro team di tecnici è sempre disponibile per intervenire in caso di emergenze, garantendo assistenza rapida e risolutiva.',
    icon: '🚨'
  }
]
