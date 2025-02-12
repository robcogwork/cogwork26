import CTAAbout from '../components/CTAAbout/CTAAbout'
import ContactSection from '../components/ContactSection/ContactSection'
import HeroAbout from '../components/HeroAbout/HeroAbout'
import USPAbout from '../components/USPAbout/USPAbout'
import Vision from '../components/Vision/Vision'

export const metadata = {
  title: 'Våra tjänster',
  // description: "",
}

export default function Services() {
  return (
    <main>
      <HeroAbout />
      <USPAbout />
      <Vision />
      <CTAAbout />
      <ContactSection />
    </main>
  )
}
