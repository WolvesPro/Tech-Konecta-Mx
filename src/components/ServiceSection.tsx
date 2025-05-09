'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react';

import Image from "next/image";

export function ServiceSection() {

    const getTitulo = (index: number) => [
        "VideoVigilancia",
        "Cableado Estructurado",
        "Control de Acceso",
        "Redes y Tecnologías de la Información",
        "IoT / GPS y Telemática y Señalización Audiovisual"
      ][index]
      
      const getTexto = (index: number) => [
        "Monitoreo en tiempo real con tecnología de video IP, análisis inteligente y acceso remoto seguro para una videovigilancia eficiente y continua.",
        "Infraestructura de red robusta y escalable con cableado estructurado de alto desempeño para garantizar velocidad, estabilidad y crecimiento tecnológico.",
        "Controle el ingreso con precisión mediante sistemas de acceso biométrico, tarjetas RFID e integración con videovigilancia, para una infraestructura segura, automatizada y trazable.",
        "Diseñamos y gestionamos la infraestructura tecnológica que mantiene tu negocio siempre conectado, seguro y listo para crecer.",
        "Transformamos datos, decisiones, conectando vehículos, espacios y personas con tecnología visual y telemática de última generación."
      ][index]
      
      const getImg = (index: number) => [
        "/img/videovigilancia.png",
        "/img/cableadoestructurado.png",
        "/img/controlacceso.png",
        "/img/redestecnologiasti.png",
        "/img/lot.png"
      ][index]
      
      const getAlt = (index: number) => [
        "VideoVigilancia",
        "Cableado Estructurado",
        "Control de Acceso",
        "Redes TI",
        "IoT GPS"
      ][index]
      
      const getColor = (index: number) => [
        "text-yellow-400",
        "text-blue-600",
        "text-red-600",
        "text-yellow-600",
        "text-blue-400"
      ][index]
      
  
  return (
    <>
      <section className="relative w-full h-[70vh] overflow-hidden text-white pt-[80px]">

        <Image
               src="/img/serviceHead.png"
               alt="Servicios"
               width={1200}
               height={1200}
               className="absolute top-0 left-0 w-full h-full object-cover z-0"

             />

        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold"
          >
            <span className="text-white">Servicios</span>
           
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-xl md:text-2xl max-w-3xl"
          >
            Ofrecemos infraestructuras inteligentes que no solo soportan tu operación, sino que impulsan tu evolución.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-10 flex gap-4 flex-wrap justify-center"
          >
            <Link href="#contacto">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
                Contáctanos
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

        <section className="w-full bg-white">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">

           
        {[...Array(5)].map((_, i) => (
  <React.Fragment key={i}>
    {i % 2 === 0 ? (
      <>
        <div className="bg-black h-[600px] flex items-center justify-center p-8 text-center">
          <div className="max-w-md">
            <h3 className={`text-2xl font-bold mb-2 ${getColor(i)}`}>{getTitulo(i)}</h3>
            <p className="text-white">{getTexto(i)}</p>
          </div>
        </div>
        <div className="h-[600px]">
          <Image
            src={getImg(i)}
            alt={getAlt(i)}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </>
    ) : (
      <>
        <div className="h-[600px]">
          <Image
            src={getImg(i)}
            alt={getAlt(i)}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="bg-black h-[600px] flex items-center justify-center p-8 text-center">
          <div className="max-w-md">
            <h3 className={`text-2xl font-bold mb-2 ${getColor(i)}`}>{getTitulo(i)}</h3>
            <p className="text-white">{getTexto(i)}</p>
          </div>
        </div>
      </>
    )}
  </React.Fragment>
))}



        </div>
        </section>

        <section className="w-full bg-black py-16">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-white">
                Impulsa tu negocio con nuestros servicios 
                </h2>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-8 px-4">
                <div className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 w-full md:w-1/3 shadow-lg">
                <Image src="/img/asesoriascapacitaciones.png" alt="Asesorías" width="120"
            height="120" className="h-64 w-full object-cover" />
                <div className="bg-blue-700 text-white p-6 h-full text-left">
                    <h3 className="text-xl font-semibold mb-2">Asesorías y capacitaciones</h3>
                    <p className="mb-4 text-sm">Dónde la experiencia técnica se convierte en tu ventaja.</p>
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Contáctanos
                    </button>
                </div>
                </div>

                <div className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 w-full md:w-1/3 shadow-lg">
                <Image src="/img/hiperconectividadyservicios.png" alt="Hiperconectividad" width="120"
            height="120" className="h-64 w-full object-cover" />
                <div className="bg-yellow-400 text-black p-6 h-full text-left">
                    <h3 className="text-xl font-semibold mb-2">Hiperconectividad y servicios personalizados</h3>
                    <p className="mb-4 text-sm">Formamos equipo que construye el futuro: capacitación especializada en infraestructura.</p>
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Contáctanos
                    </button>
                </div>
                </div>

                <div className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 w-full md:w-1/3 shadow-lg">
                <Image src="/img/instalaciones2.png" alt="Instalaciones" width={0} height={0} className="h-64 w-full object-cover" />
                <div className="bg-red-500 text-white p-6 h-full text-left">
                    <h3 className="text-xl font-semibold mb-2">Instalaciones</h3>
                    <p className="mb-4 text-sm">Impulsando tu infraestructura con conocimiento: asesoría y capacitación que transforma.</p>
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Contáctanos
                    </button>
                </div>
                </div>
            </div>
            </section>

    </>
  )
}
