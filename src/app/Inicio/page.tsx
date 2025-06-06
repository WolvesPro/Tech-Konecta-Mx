// src/app/home/page.tsx
import { Header } from '../../components/Header'
import { HeroSection } from '../../components/HeroSection'
import { Footer } from '../../components/Footer'
import { HeroSlider } from '../../components/HeroSlider'
import { NosotrosServicios } from '../../components/NosotrosServicios'


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSlider/>
      {/* <HeroSection /> */}
      <NosotrosServicios/>
      <Footer />
    </div>
  )
}
