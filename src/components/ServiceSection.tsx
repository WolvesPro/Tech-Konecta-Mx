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


export function ServiceSection() {

    const services = [
        {
          title: "VideoVigilancia",
          text: "Protege lo que más importa con vigilancia IP inteligente, visión nocturna avanzada y monitoreo en tiempo real desde cualquier dispositivo.",
          img: "/img/videovigilancia.png",
         color: "text-white",
        },
        {
          title: "Cableado Estructurado",
          text: "Conecta cada rincón de tu empresa con cableado certificado y preparado para el futuro: rendimiento estable, orden y expansión garantizados.",
          img: "/img/cableadoestructurado.png",
          color: "text-white",
        },
        {
          title: "Control de Acceso",
          text: "Accede con huella, tarjeta o rostro. Nuestra tecnología de acceso combina seguridad y trazabilidad en entornos de alta demanda.",
          img: "/img/controlacceso.png",
          color: "text-white",
        },
        {
          title: "Redes y TI",
          text: "Maximizamos tu conectividad: redes LAN, WiFi y servidores optimizados para mantener tu operación fluida y protegida contra amenazas.",
          img: "/img/redestecnologiasti.png",
          color: "text-white",
        },
        {
          title: "IoT / GPS y Señalización",
          text: "Integración total entre sensores, GPS, pantallas LED y plataformas digitales para transformar datos en decisiones inmediatas.",
          img: "/img/lot.png",
          color: "text-white",
        },
      ]

      const servicios = [
  {
    titulo: "Servicios Profesionales",
    icono: <Wrench size={24} className="text-blue-600" />,
    color: "bg-blue-100",
    imagen: "/img/instalaciones2.png",
    contenido: [
      "Redes LAN/WAN: cableado estructurado, fibra, racks",
      "Videovigilancia: CCTV analógico/IP, cámaras, grabadores",
      "Redes inalámbricas: WiFi empresarial, enlaces PTP",
      "Control de acceso y videoporteros",
      "Sistemas de alarma e intrusión",
      "Energía solar: paneles, inversores, baterías",
      "Climatización: minisplits, automatización",
      "Redes eléctricas: canalización, tierras físicas",
    ],
  },
  {
    titulo: "Venta y Distribución",
    icono: <PackageSearch size={24} className="text-yellow-600" />,
    color: "bg-yellow-100",
    imagen: "/img/hiperconectividadyservicios.png",
    contenido: [
      "Distribuidores autorizados: Cisco, Ubiquiti, Hikvision...",
      "Cámaras, DVR, NVR, cables coaxiales/UTP",
      "Herramientas, conectores, abrazaderas",
      "Routers, switches, puntos de acceso",
      "Fuentes de poder, supresores, baterías",
    ],
  },
  {
    titulo: "Accesorios y Adicionales",
    icono: <Plug size={24} className="text-red-600" />,
    color: "bg-red-100",
    imagen: "/img/instalaciones2.png",
    contenido: [
      "Gabinetes, racks, organizadores",
      "Canaletas, tubería, charolas tipo malla",
      "Cables de red, patchcords, conectores RJ45",
      "Herrajes, soportes, adaptadores",
      "Kits de herramientas de instalación",
    ],
  },
  {
    titulo: "Asesoría y Soporte Técnico",
    icono: <Headset size={24} className="text-green-600" />,
    color: "bg-green-100",
    imagen: "/img/asesoriascapacitaciones.png",
    contenido: [
      "Diagnóstico de red y auditoría de CCTV",
      "Propuestas de mejora y expansión",
      "Capacitación al personal",
      "Soporte remoto y presencial",
    ],
  },
];


      

      
  
  return (
    <>
  <section className="relative w-full h-[100vh] overflow-hidden text-white pt-[80px]">
      <Image
        src="/img/Portada servicios.png"
        alt="Servicios"
        width={1200}
        height={1200}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        priority
      />

      {/* <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-10" /> */}

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        {/* <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="uppercase text-sm md:text-base tracking-widest text-cyan-400 mb-2"
        >
          Tecnología que transforma
        </motion.p> */}

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
          TECNOLOGÍA QUE ESCALA, INFRAESTRUCTURA QUE LIDERA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 flex gap-4 flex-wrap justify-center"
        >
         <Link href="#contacto">
          <button className="bg-green-600 bg-opacity-30 border border-green-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-100 transition">
            Contáctanos
          </button>
        </Link>

        <Link href="#servicios">
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

      {/* <section className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-6 text-white-800">¿Por qué elegirnos?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-white text-2xl font-bold mb-4">✔</div>
                <p className="text-white">Implementación profesional desde el diagnóstico hasta la instalación.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-white text-2xl font-bold mb-4">🔒</div>
                <p className="text-white">Seguridad, trazabilidad y conectividad garantizadas.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl font-bold mb-4">⚡</div>
                <p className="text-white">Soluciones a medida que escalan contigo.</p>
            </div>
            </div>
        </div>
        </section> */}




      <section id='servicios' className="bg-[#3c3c3c] py-20 px-4 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-bold mb-16 leading-tight"
        >
          Ofrecemos <span className="text-red-500">infraestructuras inteligentes</span> que no solo 
          <br className="hidden md:block" />
          <span className="text-blue-400"> soportan tu operación</span>, sino que 
          <span className="text-yellow-400"> impulsan tu evolución</span>
        </motion.h2>

        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={40}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="max-w-7xl mx-auto"
        >
          {services.map((service, i) => (
            <SwiperSlide
              key={i}
              className="bg-opacity-30 rounded-3xl overflow-hidden w-full shadow-xl transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={800}
                height={500}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="relative p-6 flex flex-col justify-between h-[260px] md:h-[240px] text-white">

              <div 
                className="absolute inset-0 bg-cover bg-center filter blur-md brightness-50"
                style={{ backgroundImage: `url(${service.img})` }}
                aria-hidden="true"
              ></div>


              <div className="relative z-10">
                <h3 className={`text-xl font-bold mb-2 ${service.color}`}>{service.title}</h3>
                <p className="text-sm leading-relaxed">{service.text}</p>
              </div>

              <Link href="#contacto" className="relative z-10 mt-4 self-start">
                <button className="bg-black bg-opacity-70 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
                  Más información
                </button>
              </Link>
            </div>

            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-16">
          <Link href="#contacto">
            <button className="bg-[#54afa1] bg-opacity-30 border border-[#54afa1] hover:bg-[#54afa1] text-white font-bold px-6 py-3 rounded-full shadow-lg transition duration-300">
              Solicita una propuesta personalizada
            </button>
          </Link>
        </div>
      </section>


       <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-20 max-w-6xl mx-auto">
        {servicios.map((serv, index) => {
          const isLast = index === servicios.length - 1;
          const isOdd = servicios.length % 3 === 1 && isLast;

          return (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden shadow hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 bg-white 
              ${isOdd ? "xl:col-span-full xl:justify-self-center xl:w-1/3" : ""}`}
            >
              <div className="relative">
                <Image
                  src={serv.imagen}
                  alt={serv.titulo}
                  width={1200}
                  height={800}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow">
                  {serv.icono}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{serv.titulo}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {serv.contenido.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                  <Mail size={16} />
                  Solicita información
                </button>
              </div>
            </div>
          );
        })}
      </div>


           <section className="bg-white py-20 px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                Tu infraestructura tecnológica es el corazón de tu negocio.
              </h3>

              <p className="text-gray-600 text-lg mb-4">
                Déjala en manos expertas. Implementamos soluciones con visión, precisión y compromiso.
              </p>

              <p className="text-gray-700 font-medium mb-8 leading-relaxed">
                Todos nuestros servicios incluyen la venta de equipos y accesorios, asesoría técnica, soporte postventa y garantía.
                Ofrecemos facturación, entregas programadas, instalación profesional y contratos de mantenimiento.
              </p>

              <Link href="#contacto">
                <button className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
                  Solicita una propuesta personalizada
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </section>


    </>
  )
}
