'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import { ShieldCheck, Cpu, Users, ChevronDown } from "lucide-react";




const testimonios = [
  {
    texto:
      "Gracias a Tech Konecta Mx modernizamos nuestra infraestructura en tiempo récord. Su equipo fue profesional, atento y resolvió todo sin complicaciones.",
    autor: "Ing. Alfredo Hernández, DYDETEC",
  },
  {
    texto:
      "Tech Konecta Mx nos ofreció una solución escalable y efectiva para nuestras necesidades tecnológicas. Muy recomendados.",
    autor: "Ing. Ricardo Ballesteros, GATSIMED",
  },
  {
    texto:
      "El equipo fue muy profesional y siempre estuvo disponible para resolver nuestras dudas. Excelente experiencia.",
    autor: "Mtra. Laura Gómez, H. GEA",
  },

  {
    texto:
      "El equipo fue muy profesional y siempre estuvo disponible para resolver nuestras dudas. Excelente experiencia.",
    autor: "Ing. Gabriel Montiel, COFEPRIS",
  },
];

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 6000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
};

export default function Contacto() {
  return (
    <section id="contacto" className="w-full bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-[#07172E] mb-6">Lo que opinan nuestros clientes</h3>
          <Slider {...sliderSettings}>
            {testimonios.map((t, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <p className="italic text-gray-700 text-center max-w-2xl mx-auto">“{t.texto}”</p>
                  <p className="text-right font-semibold text-gray-800 mt-2">– {t.autor}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}


export function HeroSection() {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const data = { nombre, email, mensaje };
  
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    const result = await res.json();
    alert(result.message || result.error);
  
    
    if (res.ok) {
      setNombre("");
      setEmail("");
      setMensaje("");
    }
  };
  
  
  return (
    <>
<section className="relative w-full h-[70vh] overflow-hidden text-white pt-[80px] font-montserrat">
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

  {/* Capa oscura sobre video */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

  {/* Contenido */}
  <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
    <motion.h1
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-7xl font-extrabold font-ibm"
    >
      <span className="text-white">Tec</span>
      <span className="text-konecta-blue">h</span>
      <span className="text-konecta-yellow"> K</span>
      <span className="text-white">onecta</span>
      <span className="text-konecta-yellow"> Mx</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="mt-6 text-xl md:text-2xl max-w-3xl font-light text-konecta-blueLight"
    >
      “Conectamos tecnología, instalamos confianza”
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="mt-10 flex gap-4 flex-wrap justify-center"
    >
      <Link href="#contacto">
        <button className="bg-konecta-blue hover:bg-konecta-blueDark text-white font-semibold px-6 py-3 rounded-full transition">
          Contáctanos
        </button>
      </Link>
      <Link href="#nosotros">
        <button className="bg-white bg-opacity-20 border border-white text-white px-6 py-3 rounded-full hover:bg-opacity-30 transition">
          Conócenos
        </button>
      </Link>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 1 }}
      className="mt-8 flex gap-6 flex-wrap justify-center items-center"
    >
      <div className="flex items-center space-x-2">
        <ShieldCheck className="text-konecta-green w-6 h-6" />
        <span className="text-sm text-white">Certificaciones</span>
      </div>
      <div className="flex items-center space-x-2">
        <Cpu className="text-konecta-blue w-6 h-6" />
        <span className="text-sm text-white">Infraestructura de alto rendimiento</span>
      </div>
      <div className="flex items-center space-x-2">
        <Users className="text-konecta-yellow w-6 h-6" />
        <span className="text-sm text-white">Clientes en sector salud y gubernamental</span>
      </div>
    </motion.div>
  </div>

  <div className="absolute bottom-8 animate-bounce z-20">
    <Link href="#informes">
      <ChevronDown className="w-8 h-8 text-white opacity-70" />
    </Link>
  </div>

  <div className="absolute bottom-0 w-full bg-black bg-opacity-0 py-2 text-sm text-center text-konecta-blueLight z-10">
    +10 instituciones ya confiaron en Tech Konecta Mx para transformar su tecnología
  </div>
</section>


    <section className="w-full bg-gradient-to-b from-black via-[#001f3f] to-blue-700 py-24 px-4 flex flex-col justify-center items-center text-center space-y-10">
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

      {/* Línea divisoria animada */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-[2px] w-24 bg-yellow-400 origin-left"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-8 text-white text-center max-w-4xl"
      >
        <div className="flex flex-col items-center">
          <Cpu className="w-10 h-10 text-yellow-400 mb-2" />
          <p className="text-lg font-semibold">Soluciones Inteligentes</p>
        </div>
        <div className="flex flex-col items-center">
          <ShieldCheck className="w-10 h-10 text-yellow-400 mb-2" />
          <p className="text-lg font-semibold">Seguridad y Confiabilidad</p>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-10 h-10 text-yellow-400 mb-2" />
          <p className="text-lg font-semibold">Soporte Personalizado</p>
        </div>
      </motion.div>
    </section>


    <section id='informes' className="bg-black text-white py-20 px-4">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl md:text-5xl font-light leading-snug">
      Conectamos tu negocio con soluciones digitales <span className="font-semibold text-cyan-400">escalables, seguras y automatizadas</span> para que todo funcione en <span className="italic">armonía</span>.
    </h2>
    <p className="text-white/70 mt-4 text-lg max-w-3xl mx-auto">
      Desde la planeación arquitectónica hasta la supervisión operativa, te acompañamos en cada paso de tu transformación tecnológica.
    </p>
  </motion.div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
    {/* Tarjeta 1 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-500"
    >
      <div className="rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/img/diseñoarquitectura.png"
          alt="Diseño y Arquitectura Escalable"
          width={600}
          height={400}
          className="transition duration-700 hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mt-6">Diseño y Arquitectura Escalable</h3>
      <p className="text-white/80 mt-2 max-w-sm">
        ✔ Planificación centrada en el crecimiento<br />
        ✔ Infraestructura modular y optimizable<br />
        ✔ Alineación estratégica con tus objetivos
      </p>
    </motion.div>

    {/* Tarjeta 2 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-500"
    >
      <div className="rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/img/implementacion.png"
          alt="Implementación robusta y segura"
          width={600}
          height={400}
          className="transition duration-700 hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mt-6">Implementación Robustecida y Segura</h3>
      <p className="text-white/80 mt-2 max-w-sm">
        ✔ Ciberseguridad desde el diseño<br />
        ✔ Despliegue sin interrupciones<br />
        ✔ Protocolos de respaldo y contingencia
      </p>
    </motion.div>

    {/* Tarjeta 3 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-500"
    >
      <div className="rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/img/gestion.png"
          alt="Gestión proactiva 24/7"
          width={600}
          height={400}
          className="transition duration-700 hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mt-6">Gestión Proactiva 24/7</h3>
      <p className="text-white/80 mt-2 max-w-sm">
        ✔ Monitoreo continuo de rendimiento<br />
        ✔ Resolución anticipada de incidentes<br />
        ✔ Asistencia inmediata y humana
      </p>
    </motion.div>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 mt-16">
    {/* Tarjeta 4 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-500"
    >
      <div className="rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/img/automatizacion.png"
          alt="Automatización de procesos TI"
          width={600}
          height={400}
          className="transition duration-700 hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mt-6">Automatización de Procesos TI</h3>
      <p className="text-white/80 mt-2 max-w-sm">
        ✔ Eliminación de tareas repetitivas<br />
        ✔ Mayor eficiencia operativa<br />
        ✔ Escenarios automatizados a medida
      </p>
    </motion.div>

    {/* Tarjeta 5 nueva */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-500"
    >
      <div className="rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/img/integracion.png"
          alt="Integración total de sistemas"
          width={600}
          height={400}
          className="transition duration-700 hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mt-6">Integración Total de Sistemas</h3>
      <p className="text-white/80 mt-2 max-w-sm">
        ✔ Conectividad entre plataformas<br />
        ✔ Sincronización de datos en tiempo real<br />
        ✔ Compatibilidad con infraestructura existente
      </p>
    </motion.div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
    className="text-center mt-20"
  >
    <p className="text-xl mb-2 italic text-white/80">Creamos entornos tecnológicos que simplemente funcionan.</p>
    <p className="text-xl mb-6">¿Listo para transformar tu ecosistema digital?</p>
    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition duration-300">
      Solicita tu diagnóstico gratuito
    </button>
  </motion.div>
</section>




      <section id='nosotros' className="w-full bg-white">
      <div className="max-w-8xl mx-auto flex flex-col gap-0 md:grid md:grid-cols-2">
        <div className="bg-gradient-to-b from-[#C2E4FF] to-[#0077BE] flex flex-col items-center justify-center p-6 md:p-12 text-center md:text-left animate-fade-in relative">
          <div className="bg-gradient-to-b from-transparent to-[#0077BE] absolute inset-0 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-black text-3xl md:text-5xl font-bold mb-4">
              Instalaciones Personalizadas
            </h3>
            <p className="text-xl md:text-3xl text-gray-100 mb-6">
              Unimos tu tecnología para que todo fluya, rinda más y haga crecer tu negocio.
            </p>

            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center text-lg text-gray-200">
                <svg className="w-5 h-5 text-black mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
                Instalación rápida y profesional
              </li>
              <li className="flex items-center text-lg text-gray-200">
                <svg className="w-5 h-5 text-black mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
                Adaptado 100% a tus necesidades
              </li>
              
              <li className="flex items-center text-lg text-gray-200">
              <svg className="w-5 h-5 text-black mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
              Soporte técnico garantizado
              </li>
            </ul>

            <button className="mt-2 px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-[#005f9e] transition duration-300">
              Solicita tu instalación
            </button>
          </div>
        </div>

          <div className="animate-fade-in">
            <Image
              src="/img/instalacionesPersonalizadas.png"
              alt="Instalaciones Personalizadas"
              width={1200}
              height={1200}
              className="w-full h-auto md:h-full object-cover aspect-[4/3] md:aspect-auto"
            />
          </div>

          <div className="order-2 md:order-none animate-fade-in">
            <Image
              src="/img/hiperconectividad.png"
              alt="Cableado"
              width={1200}
              height={1200}
              className="w-full h-auto md:h-full object-cover aspect-[4/3] md:aspect-auto"
            />
          </div>
          <div className="bg-gradient-to-b from-[#C2E4FF] to-[#0077BE] flex flex-col items-center justify-center p-6 md:p-12 text-center md:text-left animate-fade-in relative">
            <div className="bg-gradient-to-b from-transparent to-[#0077BE] absolute inset-0 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-black text-3xl md:text-5xl font-bold mb-4">
                Servicio de hiperconectividad
              </h3>
              <p className="text-xl md:text-3xl text-gray-100 mb-6">
                Conectamos toda la matriz de conexión para tus servicios de manera óptima y eficiente.
              </p>

              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-lg text-gray-200">
                <svg className="w-5 h-5 text-black mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
                Velocidad y estabilidad garantizadas
                </li>
                <li className="flex items-center text-lg text-gray-200">
                <svg className="w-5 h-5 text-black mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
                Configuración a medida
                </li>
                <li className="flex items-center text-lg text-gray-200">
                <svg className="w-5 h-5 text-black mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
                Integración con sistemas existentes
                </li>
              </ul>

              <button className="mt-2 px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition duration-300">
                Mejora tu conectividad
              </button>

              <p className="mt-4 italic text-sm text-gray-100">Varias empresas ya confían en nosotros.</p>
            </div>
          </div>
        </div>
      </section>




      <section className="bg-white w-full px-4 py-16">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold text-[#07172E] mb-2">Presencia con:</h2>
    <p className="text-gray-600 mb-8">Organizaciones que confían en nuestra tecnología</p>

    <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
      <Image src="/img/gatsimed.png" alt="Gatsimed" width={120} height={120} className="h-12 object-contain grayscale hover:grayscale-0 transition" />
      <Image src="/img/tae.png" alt="Tae" width={120} height={120} className="h-12 object-contain grayscale hover:grayscale-0 transition" />

      <Image src="/img/dydetec.png" alt="DyDetec" width={120} height={120} className="h-20 object-contain grayscale hover:grayscale-0 transition" />
      <Image src="/img/logo-gea.png" alt="Hospital General" width={120} height={200} className="h-20 object-contain grayscale hover:grayscale-0 transition" />
      <Image src="/img/logo-cofepris.png" alt="Cofepris" width={200} height={200} className="h-12 object-contain grayscale hover:grayscale-0 transition" />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-[#07172E] mb-16">
    <div>
      <h3 className="text-4xl font-bold">+10</h3>
      <p className="text-gray-600">Empresas atendidas</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold">99.9%</h3>
      <p className="text-gray-600">Disponibilidad en infraestructura</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold">+10 años</h3>
      <p className="text-gray-600">de experiencia combinada</p>
    </div>
  </div>

  <div className="text-black text-center">
    <h2 className="text-3xl font-bold text-[#07172E] mb-8">Preguntas Frecuentes</h2>

    <div className="max-w-2xl mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-md text-left divide-y divide-gray-300">
      <details className="p-4">
        <summary className="font-semibold cursor-pointer">¿Qué es Tech Konecta Mx?</summary>
        <p className="mt-2 text-gray-700">
        Somos una empresa mexicana dedicada a la distribución, instalación y mantenimiento de soluciones tecnológicas integrales 
        en telecomunicaciones, redes, seguridad electrónica y energía. Trabajamos con marcas líderes y somos distribuidor autorizado, 
        garantizando calidad, respaldo técnico y disponibilidad inmediata de equipos y accesorios.
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

    <div className="text-center mt-12">
      <p className="text-gray-700 text-lg mb-4">¿Tienes más dudas o necesitas atención personalizada?</p>
      <Link href="#contacto">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Escríbenos directamente
        </button>
      </Link>
    </div>
  </div>
</section>



      <section id="contacto" className="w-full bg-white py-20 px-4">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-[#07172E] mb-4">Contacto</h2>

    <p className="text-lg text-gray-700 mb-6">
      ¿Listo para llevar tu infraestructura tecnológica al siguiente nivel? Nuestro equipo está aquí para ayudarte. Cuéntanos qué necesitas y te responderemos en menos de 24 horas.
    </p>

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
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="flex-1 px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      </div>

      <textarea
        name="mensaje"
        rows={5}
        required
        placeholder="Escribe tu mensaje o solicitud de cotización aquí..."
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-md font-semibold hover:from-blue-700 hover:to-blue-900 transition"
      >
        ¡Solicita tu cotización ahora!
      </button>
    </form>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
      <div className="flex items-start space-x-4">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
        <div>
          <h4 className="font-bold text-[#07172E]">Asesoría personalizada</h4>
          <p className="text-sm text-gray-600">Te ayudamos a encontrar la mejor solución para tu empresa.</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <h4 className="font-bold text-[#07172E]">Respuestas en menos de 24h</h4>
          <p className="text-sm text-gray-600">Nos comprometemos a responderte rápido y con claridad.</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>
        <div>
          <h4 className="font-bold text-[#07172E]">Soluciones escalables</h4>
          <p className="text-sm text-gray-600">Nos adaptamos a tus necesidades actuales y futuras.</p>
        </div>
      </div>
    </div>

    <div className="mt-16">
          <h3 className="text-2xl font-semibold text-[#07172E] mb-6">Lo que opinan nuestros clientes</h3>
          <Slider {...sliderSettings}>
            {testimonios.map((t, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <p className="italic text-gray-700 text-center max-w-2xl mx-auto">“{t.texto}”</p>
                  <p className="text-right font-semibold text-gray-800 mt-2">– {t.autor}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      
  </div>
</section>



    </>
  )
}
