// src/app/home/page.tsx
import { Header } from '../../components/Header'
import { ServiceSection } from '../../components/ServiceSection'
import { Footer } from '../../components/Footer'
import { HeroSlider } from '../../components/HeroSlider'


export default function Home() {
  return (
    <div>
      <Header />
      
      <ServiceSection />
      <Footer />
    </div>
  )
}
