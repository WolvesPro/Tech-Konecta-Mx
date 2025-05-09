// src/app/home/page.tsx
import { Header } from '../../components/Header'
import { SolucionesSection } from '../../components/SolucionesSection'
import { Footer } from '../../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <SolucionesSection />
      <Footer />
    </div>
  )
}
