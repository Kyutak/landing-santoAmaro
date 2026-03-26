import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Specialties } from "@/components/specialties"
import { Results } from "@/components/results"
import { About } from "@/components/about"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Specialties />
      <Results />
      <About />
      <Location />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}
