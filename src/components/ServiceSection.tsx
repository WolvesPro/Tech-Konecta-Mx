'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { Wrench, PackageSearch, Plug, Headset, ChevronDown } from "lucide-react"

export function ServiceSection() {

    const services = [
        {
          title: "VideoVigilancia",
          text: "Protege lo que más importa con vigilancia IP inteligente, visión nocturna avanzada y monitoreo en tiempo real desde cualquier dispositivo.",
          img: "/img/videovigilancia.png",
          color: "text-yellow-400",
        },
        {
          title: "Cableado Estructurado",
          text: "Conecta cada rincón de tu empresa con cableado certificado y preparado para el futuro: rendimiento estable, orden y expansión garantizados.",
          img: "/img/cableadoestructurado.png",
          color: "text-blue-600",
        },
        {
          title: "Control de Acceso",
          text: "Accede con huella, tarjeta o rostro. Nuestra tecnología de acceso combina seguridad y trazabilidad en entornos de alta demanda.",
          img: "/img/controlacceso.png",
          color: "text-red-600",
        },
        {
          title: "Redes y TI",
          text: "Maximizamos tu conectividad: redes LAN, WiFi y servidores optimizados para mantener tu operación fluida y protegida contra amenazas.",
          img: "/img/redestecnologiasti.png",
          color: "text-yellow-600",
        },
        {
          title: "IoT / GPS y Señalización",
          text: "Integración total entre sensores, GPS, pantallas LED y plataformas digitales para transformar datos en decisiones inmediatas.",
          img: "/img/lot.png",
          color: "text-blue-400",
        },
      ]

      const servicios = [
        {
          titulo: "Servicios Profesionales",
          icono: <Wrench size={32} className="text-blue-600" />,
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
          icono: <PackageSearch size={32} className="text-yellow-600" />,
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
          icono: <Plug size={32} className="text-red-600" />,
          color: "bg-red-100",
          imagen: "/img/instalaciones2.png", // Puedes cambiarla por otra más específica si tienes
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
          icono: <Headset size={32} className="text-green-600" />,
          color: "bg-green-100",
          imagen: "/img/asesoriascapacitaciones.png",
          contenido: [
            "Diagnóstico de red y auditoría de CCTV",
            "Propuestas de mejora y expansión",
            "Capacitación al personal",
            "Soporte remoto y presencial",
          ],
        },
      ]

    const getTitulo = (index: number) => [
        "VideoVigilancia",
        "Cableado Estructurado",
        "Control de Acceso",
        "Redes y Tecnologías de la Información",
        "IoT / GPS y Telemática y Señalización Audiovisual"
      ][index]
      
      const getTexto = (index: number) => [
        "Protege lo que más importa con vigilancia IP inteligente, visión nocturna avanzada y monitoreo en tiempo real desde cualquier dispositivo.",
        "Conecta cada rincón de tu empresa con cableado certificado y preparado para el futuro: rendimiento estable, orden y expansión garantizados.",
        "Accede con huella, tarjeta o rostro. Nuestra tecnología de acceso combina seguridad y trazabilidad en entornos de alta demanda.",
        "Maximizamos tu conectividad: redes LAN, WiFi y servidores optimizados para mantener tu operación fluida y protegida contra amenazas.",
        "Integración total entre sensores, GPS, pantallas LED y plataformas digitales para transformar datos en decisiones inmediatas."
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
        priority
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="uppercase text-sm md:text-base tracking-widest text-cyan-400 mb-2"
        >
          Tecnología que transforma
        </motion.p>

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

          <Link href="#servicios">
            <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Ver servicios
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-[calc(50%-20px)] transform -translate-x-1/2 animate-bounce z-30">
  <ChevronDown size={32} className="text-white" />
</div>

    </section>

      <section className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-6 text-white-800">¿Por qué elegirnos?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-white text-2xl font-bold mb-4">✔</div>
                <p className="text-white-700">Implementación profesional desde el diagnóstico hasta la instalación.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-white text-2xl font-bold mb-4">🔒</div>
                <p className="text-white-700">Seguridad, trazabilidad y conectividad garantizadas.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl font-bold mb-4">⚡</div>
                <p className="text-white-700">Soluciones a medida que escalan contigo.</p>
            </div>
            </div>
        </div>
        </section>


        <section id='servicios' className="bg-black py-20 px-4 text-white">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-bold mb-12"
        >
            Nuestros Servicios
        </motion.h2>

        <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
            640: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2.5,
            },
            1280: {
                slidesPerView: 3,
            },
            }}
            coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            }}
            pagination={{ clickable: true }}
            className="max-w-7xl mx-auto"
        >
            {services.map((service, i) => (
            <SwiperSlide
                key={i}
                className="bg-white rounded-2xl overflow-hidden w-[90%] md:w-[80%] lg:w-[500px] shadow-xl"
            >
                <Image
                src={service.img}
                alt={service.title}
                width={800}
                height={500}
                className="w-full h-64 object-cover"
                loading="lazy"
                />
                <div className="p-6 text-black flex flex-col justify-between h-[260px] md:h-[240px]">
                <div>
                    <h3 className={`text-xl font-bold mb-2 ${service.color}`}>{service.title}</h3>
                    <p className="text-sm leading-relaxed">{service.text}</p>
                </div>
                <Link href="#contacto">
                    <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
                    Más información
                    </button>
                </Link>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>

        <div className="text-center mt-16">
            <Link href="#contacto">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transition duration-300">
                Solicita una propuesta personalizada
            </button>
            </Link>
        </div>
        </section>

        <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold">Soluciones Integrales para tu Empresa</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Desde la instalación hasta el soporte técnico, somos tu aliado tecnológico.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        {servicios.map((serv, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md overflow-hidden w-full md:w-[45%] xl:w-[30%] ${serv.color} text-black`}
          >
            <Image
              src={serv.imagen}
              alt={serv.titulo}
              width={1200}
              height={800}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {serv.icono}
                <h3 className="text-xl font-semibold">{serv.titulo}</h3>
              </div>
              <ul className="list-disc pl-6 text-sm leading-relaxed">
                {serv.contenido.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button className="mt-6 inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                Solicita información
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

            <section className="bg-black text-white py-16 px-4 text-center">
                <h3 className="text-3xl md:text-4xl font-light mb-4">
                    Tu infraestructura tecnológica es el corazón de tu negocio.
                </h3>
                <p className="text-white/70 max-w-2xl mx-auto mb-6">
                    Déjala en manos expertas. Implementamos soluciones con visión, precisión y compromiso.
                </p>

                <p className="text-white/70 max-w-2xl mx-auto mb-6">
                Todos nuestros servicios incluyen la venta de equipos y accesorios, asesoría técnica, soporte postventa y garantía.
                Ofrecemos facturación, entregas programadas, instalación profesional y contratos de mantenimiento.
                </p>
                <Link href="#contacto">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
                    Solicita una propuesta personalizada
                    </button>
                </Link>
                </section>


    </>
  )
}
