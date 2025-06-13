'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { CheckCircle, Mail, Wrench, PackageSearch, Plug, Headset,  ChevronDown, ArrowRight } from "lucide-react";


export function CasosSection() {

    const cards = [
    { image: "/img/Presencia/Dydetec.png" },
    { image: "/img/Presencia/Gatsimed.png" },
    { image: "/img/Presencia/Hospital_Gea.png" },
    { image: "/img/Presencia/Instalacion_Quirofanos.png" },
    { image: "/img/Presencia/tae.png" },
    { image: "/img/Presencia/Ventiladores mecanicos.png" },
    ];

      
const items = [
    {
      icon: "/img/iconos/icon-park_journey.png",
      title: "+ 10 años de experiencia",
      text: "Respaldamos cada proyecto con trayectoria, profesionalismo y excelencia operativa.",
    },
    {
      icon: "/img/iconos/Mexico.png",
      title: "Impacto Nacional",
      text: "Con presencia en más de 20 Estados, nuestros servicios han transformado instituciones públicas y privadas.",
    },
    {
      icon: "/img/iconos/Soluciones_integrales.png",
      title: "Soluciones Integrales",
      text: "Desde cableado estructurado hasta interoperabilidad entre sistemas. Nos encargamos de todo.",
    },
    {
      icon: "/img/iconos/respuetasrapidas.png",
      title: "Respuestas Rápidas",
      text: "Soporte técnico en tiempo real y atención personalizada en 7 días.",
    },
    {
      icon: "/img/iconos/Soluciones_medida.png",
      title: "Soluciones a medida",
      text: "Diseñamos cada solución según el entorno, uso y necesidades del cliente.",
    },
    {
      icon: "/img/iconos/Certificaciones_clave.png",
      title: "Certificaciones clave",
      text: "Contamos con personal certificado por fabricantes y normativas nacionales.",
    },
  ];
      
const pasos = [
    {
      titulo: "Diagnóstico",
      texto: "Evaluamos tus necesidades técnicas y operativas.",
      icono: "Nuestro_proceso.png",
    },
    {
      titulo: "Propuesta",
      texto:
        "Entregamos una solución con tiempos, inversión y alcances claros.",
      icono: "Propuesta.png",
    },
    {
      titulo: "Ejecución",
      texto: "Instalación o Implementación ágil con supervisión continua.",
      icono: "ejecucion.png",
    },
    {
      titulo: "Soporte",
      texto:
        "Asistencia continua, mejoras, actualizaciones y soporte técnico.",
      icono: "soporte.png",
    },
  ];
  
  return (
    <>
  <section className="relative w-full h-[100vh] overflow-hidden text-white pt-[80px]">
      <Image
        src="/img/Portada.png"
        alt="Casos de exito"
        width={1200}
        height={1200}
        className="absolute top-20 left-0 w-full h-full object-cover z-0"
        priority
      />


      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">


        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-5xl font-extrabold"
        >
          <span className="text-white">Resultados </span>
          <span className="text-blue-600">Tangibles </span>
            <span className="text-white">en Cada </span>
            <span className="text-blue-600">Proyecto</span>


        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-xl md:text-2xl max-w-3xl"
        >
          Desde instalaciones de software hasta hiperconectividad de servicios públicos y privados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 flex gap-4 flex-wrap justify-center"
        >
         <Link href="/Contacto">
          <button className="bg-green-600 bg-opacity-30 border border-green-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-100 transition">
            Contáctanos
          </button>
        </Link>

        <Link href="/Servicios">
          <button className="bg-blue-600 bg-opacity-30 border border-blue-300 text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-100 transition">
            Ver servicios
          </button>
        </Link>

        </motion.div>
      </div>

      <div className="absolute bottom-0 left-[calc(50%-20px)] transform -translate-x-1/2 animate-bounce z-30">
  <ChevronDown size={32} className="text-white" />
</div>

    </section>

    <section className="px-4 py-10 md:py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Presencia de nuestro trabajo
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
           <img
              src={card.image}
              alt="Card image"
              className="w-full h-auto object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>


<section className="bg-[#f3f3f3] px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0060ba] mb-4">
          ¿Por qué elegir Tech Konecta Mx?
        </h2>
        <p className="text-gray-800 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Combinamos experiencia, tecnología e innovación para ofrecer soluciones concretas. <br />
          Te acompañamos desde la planeación hasta la ejecución con resultados medibles
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-center transition hover:shadow-lg"
            //   style={{ background: "url('/img/papel-textura.png')" }} 
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-[#0060ba] font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-800 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

   <section className="py-16 px-4 bg-white text-center" id="nuestro-proceso">
      <h2 className="text-3xl md:text-4xl font-bold text-[#EB5E6F] mb-12">
        Nuestro Proceso
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {pasos.map((paso, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md p-6 h-full flex flex-col justify-between items-center text-center bg-white text-black transition-all duration-300 hover:bg-[#EB5E6F] hover:text-white"
          >
            <p className="text-sm mb-4">{paso.texto}</p>
            <img
              src={`/img/iconos/${paso.icono}`}
              alt={paso.titulo}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-medium">{paso.titulo}</h3>
          </div>
        ))}
      </div>
    </section>


 <section className="bg-[#011627] text-center text-white py-20 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-[#EFC75E] mb-6">
        ¿Listo para transformar tu infraestructura tecnológica?
      </h2>
      <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 text-gray-200">
        Nuestro equipo está listo para ayudarte a hacer que tus operaciones sean más seguras, rápidas y eficientes.
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=527226028263&text=Hola%2C%20quiero%20agendar%20una%20llamada%20para%20conocer%20más%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 border border-[#EFC75E] text-white bg-[#3E4A43] rounded-full hover:bg-[#EFC75E] hover:text-[#011627] transition-colors duration-300"
      >
        Agendar una llamada
      </a>
    </section>


    </>
  )
}
