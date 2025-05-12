'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from "next/image";
import { Wrench, PackageSearch, Plug, Headset, ChevronDown } from "lucide-react"

export function SolucionesSection() {

  return (
    <>
<section className="relative w-full h-[70vh] overflow-hidden text-white pt-[80px] bg-[#006AC6]">
  <Image
    src="/img/solucionesHead.png"
    alt="Soluciones"
    width={600}
    height={0}
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
  <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
    <motion.h1
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-7xl font-extrabold"
    >
      <span className="text-white">Resultados </span>
      <span className="text-[#EECB71]">tangibles </span>
      <span className="text-white">en cada </span>
      <span className="text-[#EECB71]">proyecto</span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="mt-6 text-xl md:text-2xl max-w-3xl text-[#C0DDEA]"
    >
      Desde instalaciones de software hasta hiperconectividad de servicios público y privados
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="mt-10 flex gap-4 flex-wrap justify-center"
    >
      <Link href="#">
        <button className="bg-[#EECB71] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#e5b95f] transition">
          Ver más
        </button>
      </Link>
      <Link href="#contacto">
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
          Contáctanos
        </button>
      </Link>
    </motion.div>
  </div>
  <div className="absolute bottom-4 left-[48%] transform -translate-x-1/2 animate-bounce z-30">
    <ChevronDown size={32} className="text-[#EECB71]" />
  </div>
</section>

<section className="bg-white py-16">
  <div className="max-w-5xl mx-auto text-center px-4">
    <h2 className="text-4xl font-bold mb-2 text-[#006AC6]">Presencia en nuestro trabajo</h2>
    <div className="text-sm text-[#98989A] mb-10 space-x-4">
      <a href="#" className="hover:underline">Instagram</a>
      <a href="#" className="hover:underline">Twitter</a>
      <a href="#" className="hover:underline">Email</a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
      <div className="rounded-xl overflow-hidden shadow-md">
        <Image src="/img/softwarehospital.png" alt="Hospital Gea" width="1200" height="1200" className="w-full h-64 object-cover" />
        <div className="p-4 text-left">
          <h3 className="text-sm font-medium text-[#0B0F19]">Instalación de Software / Hospital Gea</h3>
          <p className="text-xs text-gray-500">Jan 23, 2025</p>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden shadow-md">
        <Image src="/img/instalacionventiladores.png" alt="Ventiladores Mecánicos" width="1200" height="1200" className="w-full h-64 object-cover" />
        <div className="p-4 text-left">
          <h3 className="text-sm font-medium text-[#0B0F19]">Intalación de 500 Ventiladores Mecánicos</h3>
          <p className="text-xs text-gray-500">Jun 7, 2022</p>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden shadow-md">
        <Image src="/img/interoperabilidad.png" alt="inter" width="1200" height="1200" className="w-full h-64 object-cover" />
        <div className="p-4 text-left">
          <h3 className="text-sm font-medium text-[#0B0F19]">Interoperabilidad de sistemas/Dydetec</h3>
          <p className="text-xs text-gray-500">Jun 6, 2023</p>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden shadow-md">
        <Image src="/img/instalacioncableado.png" alt="inss" width="1200" height="1200" className="w-full h-64 object-cover" />
        <div className="p-4 text-left">
          <h3 className="text-sm font-medium text-[#0B0F19]">Intalaciones de cableado/Gätsimed</h3>
          <p className="text-xs text-gray-500">Dec 27, 2020</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-[#F9FAFB] py-20">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-[#006AC6] mb-6">¿Por qué elegir Tech Konecta MX?</h2>
    <p className="text-[#385E9D] text-lg max-w-3xl mx-auto">
      Combinamos experiencia, tecnología e innovación para ofrecer soluciones concretas. Te acompañamos desde la planeación hasta la ejecución con resultados medibles.
    </p>
    <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-[#006AC6] mb-2">+10 años de experiencia</h3>
        <p className="text-[#0B0F19]">Respaldamos cada proyecto con trayectoria, profesionalismo y excelencia operativa.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-[#006AC6] mb-2">Impacto Nacional</h3>
        <p className="text-[#0B0F19]">Con presencia en más de 20 estados, nuestros servicios han transformado instituciones públicas y privadas.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-[#006AC6] mb-2">Soluciones integrales</h3>
        <p className="text-[#0B0F19]">Desde cableado estructurado hasta interoperabilidad entre sistemas. Nos encargamos de todo.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-[#E03E52]">Respuestas rápidas</h3>
        <p className="text-sm text-gray-600">Soporte técnico en tiempo real y atención personalizada los 7 días.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-[#E03E52]">Soluciones a medida</h3>
        <p className="text-sm text-gray-600">Diseñamos cada solución según el entorno, uso y necesidades del cliente.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-[#E03E52]">Certificaciones clave</h3>
        <p className="text-sm text-gray-600">Contamos con personal certificado por fabricantes y normativas nacionales.</p>
      </div>
    </div>
  </div>
</section>


<section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-[#006AC6] mb-10">Nuestro Proceso</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-[#006AC6]">1. Diagnóstico</h3>
        <p className="text-sm text-gray-700">Evaluamos tus necesidades técnicas y operativas.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-[#006AC6]">2. Propuesta</h3>
        <p className="text-sm text-gray-700">Entregamos una solución con tiempos, inversión y alcances claros.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-[#006AC6]">3. Ejecución</h3>
        <p className="text-sm text-gray-700">Instalación o implementación ágil con supervisión continua.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-[#006AC6]">4. Soporte</h3>
        <p className="text-sm text-gray-700">Asistencia continua, mejoras, actualizaciones y soporte técnico.</p>
      </div>
    </div>
  </div>
</section>

<section className="bg-[#0B0F19] text-white py-20 text-center">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-4">¿Listo para transformar tu infraestructura tecnológica?</h2>
    <p className="text-lg text-gray-400">
      Nuestro equipo está listo para ayudarte a hacer que tus operaciones sean más seguras, rápidas y eficientes.
    </p>
    <div className="mt-8">
      <Link href="#contacto">
        <button className="bg-[#EECB71] hover:bg-[#e5b95f] text-black px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
          Agendar una llamada
        </button>
      </Link>
    </div>
  </div>
</section>





    </>
  )
}
