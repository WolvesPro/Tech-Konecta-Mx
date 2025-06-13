// src/app/home/page.tsx
import { Header } from '../../components/Header'
import { CasosSection } from '../../components/CasosDeExito'
import { Footer } from '../../components/Footer'


export default function Home() {
  return (
    <div>
      <Header />
      
      <CasosSection />
      <Footer />
    </div>
  )
}
