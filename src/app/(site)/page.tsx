import { HeroSection } from '@/components/sections/HeroSection'
import { TwentyYearsSection } from '@/components/sections/TwentyYearsSection'
import { QuoteServicesSection } from '@/components/sections/QuoteServicesSection'
import { SplitSection } from '@/components/sections/SplitSection'
import { NewsStripSection } from '@/components/sections/NewsStripSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'

export default function HomePage() {
  return (
    <div className="bg-v-white">
      <HeroSection />

      {/* TwentyYears deve stare su bianco */}
      <TwentyYearsSection />

      {/* Spacer bianco per “staccare” dal blocco dopo (come in Figma) */}
      <div className="h-16 md:h-20 bg-v-white" />

      {/* QuoteServices ha il suo bg-v-faded, NON wrappare dentro bg-v-white */}
      <QuoteServicesSection />

      <SplitSection />
      <NewsStripSection />
      <CertificationsSection />
    </div>
  )
}
