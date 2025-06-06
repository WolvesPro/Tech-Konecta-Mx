// src/app/home/page.tsx
import { Header } from '../../components/Header'
import { HeroSection } from '../../components/HeroSection'
import { Footer } from '../../components/Footer'
import { HeroSlider } from '../../components/HeroSlider'
import { Contacto } from '../../components/Contacto'

export default function Home() {
  return (
    <div>
      <Header />

      <Contacto/>
      <Footer />
    </div>
  )
}
