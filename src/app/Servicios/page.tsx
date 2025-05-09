// src/app/home/page.tsx
import { Header } from '../../components/Header'
import { ServiceSection } from '../../components/ServiceSection'
import { Footer } from '../../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <ServiceSection />
      <Footer />
    </div>
  )
}
