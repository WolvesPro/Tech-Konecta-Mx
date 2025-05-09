'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      mensaje: formData.get("mensaje"),
    };
  
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    const result = await res.json();
    alert(result.message || result.error);
  };
  
  return (
    <>
      <section className="relative w-full h-[70vh] overflow-hidden text-white pt-[80px]">
      {/* se esaba renderinzando del lado del server y nodel cliente conesta validación se corrije error */}
      {isClient && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/background.mov" type="video/mp4" />
          Tu navegador no soporta videos en HTML5.
        </video>
      )}

        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold"
          >
            <span className="text-white">Tec</span>
            <span className="text-blue-600">h</span>
            <span className="text-yellow-400"> K</span>
            <span className="text-white">onecta</span>
            <span className="text-yellow-400"> Mx</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-xl md:text-2xl max-w-3xl"
          >
            Establecemos conexiones integrales entre personas, sistemas y negocios
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
            <Link href="#nosotros">
              <button className="bg-white bg-opacity-20 border border-white text-white px-6 py-3 rounded-full hover:bg-opacity-30 transition">
                Conócenos
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-black via-[#001f3f] to-blue-700 py-24 px-4 flex justify-center items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl max-w-5xl leading-relaxed font-light text-white"
        >
          Operamos a las necesidades de los usuarios para establecer <br />
          un lazo gratificante entre la tecnología y los operadores.
        </motion.p>
      </section>

      <section className="bg-black text-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-light leading-snug">
            Orquestamos tu <span className="font-semibold">ecosistema digital</span> para que todo opere en <span className="italic">armonía</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/img/diseñoarquitectura.png" 
                alt="Diseño y Arquitectura Escalable"
                width={600}
                height={400}
                className="transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110" 
              />
            </div>
            <h3 className="text-xl font-bold mt-6">Diseño y Arquitectura Escalable</h3>
            <p className="text-white/80 mt-2 max-w-md">
              Infraestructura pensada para crecer junto con tu negocio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
          <div className="group rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <Image
              src="/img/implementacion.png"
              alt="Diseño y Arquitectura Escalable"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
            <h3 className="text-xl font-bold mt-6">Implementación robusta y segura</h3>
            <p className="text-white/80 mt-2 max-w-md">
              Despliegue eficiente con altos estándares de seguridad.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/img/gestion.png" 
                alt="Diseño y Arquitectura Escalable"
                width={600}
                height={400}
                className="transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110" 
              />
            </div>
            <h3 className="text-xl font-bold mt-6">Gestión proactiva 24/7</h3>
            <p className="text-white/80 mt-2 max-w-md">
            Monitoreo continuo y soporte especializado en todo momento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
          <div className="group rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <Image
              src="/img/automatizacion.png"
              alt="Diseño y Arquitectura Escalable"
              width={600}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
            <h3 className="text-xl font-bold mt-6">Automatización de procesos TI</h3>
            <p className="text-white/80 mt-2 max-w-md">
            Reducción de errores y aumento de eficiencia operativa.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full  bg-white">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">

          <div className="bg-gradient-to-b from-[#0077BE] to-white flex items-center justify-center p-8 text-center md:text-left">
            <div>
              <h3 className="text-black text-5xl font-bold mb-2">Instalaciones Personalizadas</h3>
              <p className="text-4xl text-gray-700">
                Unimos tu tecnología para que todo fluya, rinda más y haga crecer tu negocio.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/img/instalacionesPersonalizadas.png" 
              alt="Instalaciones Personalizadas"
              width="1200"
              height="1200"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Image
              src="/img/hiperconectividad.png" 
              alt="Cableado"
              width="1200"
              height="1200"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-b from-[#C2E4FF] to-[#0077BE] text-white flex items-center justify-center p-8 text-center md:text-left">
            <div>
              <h3 className="text-black text-5xl font-bold mb-2">Servicio de hiperconectividad</h3>
              <p className="text-4xl text-black">
                Conectamos toda la matriz de conexión para tus servicios de manera óptima y eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#07172E] mb-8">Presencia con:</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
            <Image src="/img/gatsimed.png" alt="Gatsimed" width="120"
            height="120" className="h-12 object-contain" />
            <Image src="/img/dydetec.png" alt="DyDetec" width="120"
            height="120" className="h-20 object-contain" />
            <Image src="/img/logo-gea.png" alt="Hospital General" width="120"
            height="200"  className="h-20 object-contain" />
            <Image src="/img/logo-cofepris.png" alt="Cofepris" width="200"
            height="200" className="h-12 object-contain" />
          </div>
        </div>

        <div className="text-black text-center">
          <h2 className="text-3xl font-bold text-[#07172E] mb-8">Preguntas Frecuentes</h2>
          
          <div className="max-w-2xl mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-md text-left divide-y divide-gray-300">
            <details className="p-4">
              <summary className="font-semibold cursor-pointer">¿Qué es Tech Konecta Mx?</summary>
              <p className="mt-2 text-gray-700">
                En Tech Konecta Mx nos encargamos de dar el servicio de más alta calidad para las instalaciones tecnológicas y amplificar los negocios.
              </p>
            </details>

            <details className="p-4">
              <summary className="font-semibold cursor-pointer">¿Qué incluye el servicio de infraestructura?</summary>
              <p className="mt-2 text-gray-700">
                Nuestro servicio cubre diseño, implementación, monitoreo y mantenimiento de infraestructura tecnológica, incluyendo servidores, redes, almacenamiento, virtualización y servicios de la nube.
              </p>
            </details>

            <details className="p-4">
              <summary className="font-semibold cursor-pointer">¿Pueden migrar mi infraestructura actual a la nube?</summary>
              <p className="mt-2 text-gray-700">
                Sí, realizamos evaluaciones de infraestructura y migraciones completas a la nube, con mínima interrupción del servicio.
              </p>
            </details>
          </div>
        </div>
      </section>


      <section id="contacto" className="w-full bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#07172E] mb-8">Contacto</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 space-y-6"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="nombre"
                type="text"
                required
                placeholder="Nombre"
                className="flex-1 px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="flex-1 px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              name="mensaje"
              rows={5}
              required
              placeholder="Escribe tu mensaje o solicitud de cotización aquí..."
              className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>


    </>
  )
}
