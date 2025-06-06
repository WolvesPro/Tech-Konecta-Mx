// components/ServicesSection.tsx
'use client'


import React, { useState, useEffect } from "react";
import ServiceCard from './ServiceCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from "next/image";
import Slider from "react-slick";

const services = [
  {
    title: 'Asesorías y Soporte Técnico',
    image: '/img/Cartas Tech Konecta Mx/Carta-Asesorias-Soporte-Tecnico.png',
    features: [
      'Diagnóstico de red y auditoría de CCTV',
      'Redes inalámbricas',
      'Propuestas de mejora y expansión',
      'Sistemas de Alarma',
      'Soporte remoto y presencial',
    ],
  },
  {
    title: 'Desarrollo Web y Diseño Web',
    image: '/img/Cartas Tech Konecta Mx/Carta-Desarrollo-Web-Diseno-Web.png',
    features: [
      'Levantamiento de requerimientos',
      'Conceptualización de Diseño y Experiencia',
      'Wireframes de Alta Fidelidad',
      'Desarrollo y Testing',
      'Mantenimiento de plataformas',
    ],
  },
  {
    title: 'Instalaciones Personalizadas',
    image: '/img/Cartas Tech Konecta Mx/Carta-Instalaciones-Personalizadas.png',
    features: [
      'Conexión de Matriz Empresarial',
      'Redes inalámbricas',
      'Hiperconectividad',
      'Migración de Datos Físicos y Digitales',
    ],
  },
  {
    title: 'Venta y distribución',
    image: '/img/Cartas Tech Konecta Mx/Carta-Venta-Distribucion.png',
    features: [
      'Distribuidores autorizados: Cisco, Ubiquiti, Hikvision',
      'Cámaras, DVR, NVR',
      'Routers, Switches',
      'Fuentes de poder',
      'Puntos de acceso',
    ],
  },
  {
    title: 'Accesorios y Adicionales',
    image: '/img/Cartas Tech Konecta Mx/Carta-Accesorios-Adicionales.png',
    features: [
      'Gabinetes, racks, organizadores',
      'Conectores RJ45',
      'Canaletas de red, patchcords',
      'Canaletas, tubería, organizadores',
      'Herrajes, soportes, adaptadores',
    ],
  },
  {
    title: 'Instalaciones y Mantenimiento',
    image: '/img/Cartas Tech Konecta Mx/Carta-Instalaciones-Mantenimiento.png',
    features: [
      'Redes LAN/WAN',
      'Videovigilancia',
      'Redes inalámbricas',
      'Quirófanos',
      'Sistemas de alarma',
      'Energía solar: paneles, inversores, baterías',
      'Climatización: mini splits, automatización',
      'Redes eléctricas',
    ],
  },
]

const slides = [
  {
    image: "/img/Imagenes carrusel/Carrusel 1.png",
    title: "Diseño y Arquitectura Escalable",
    points: [
      "Planificación centrada en el crecimiento",
      "Infraestructura modular y optimizable",
      "Alineación estratégica con tus objetivos"
    ]
  },
  {
    image: "/img/Imagenes carrusel/Carrusel 2.png",
    title: "Conectividad Segura y Eficiente",
    points: [
      "Redes robustas y confiables",
      "Acceso remoto seguro",
      "Monitoreo y control continuo"
    ]
  },
  {
    image: "/img/Imagenes carrusel/Carrusel 3.png",
    title: "Automatización de Procesos",
    points: [
      "Reducción de errores humanos",
      "Mayor eficiencia operativa",
      "Integración con sistemas existentes"
    ]
  },
  {
    image: "/img/Imagenes carrusel/Carrusel 4.png",
    title: "Supervisión Operativa",
    points: [
      "Visibilidad completa en tiempo real",
      "Alertas proactivas",
      "Análisis de desempeño"
    ]
  },
  {
    image: "/img/Imagenes carrusel/Carrusel 5.png",
    title: "Soporte y Mantenimiento",
    points: [
      "Atención especializada 24/7",
      "Prevención de fallos",
      "Actualizaciones constantes"
    ]
  },
  {
    image: "/img/Imagenes carrusel/Carrusel 6.png",
    title: "Transformación Tecnológica",
    points: [
      "Adopción de nuevas tecnologías",
      "Acompañamiento en cada paso",
      "Resultados medibles y sostenibles"
    ]
  },
  {
    image: "/img/Imagenes carrusel/Carrusel 7.png",
    title: "Infraestructura Escalable",
    points: [
      "Crecimiento alineado a objetivos",
      "Ahorro de costos a largo plazo",
      "Soporte técnico especializado"
    ]
  }
];


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



export const NosotrosServicios = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePage, setActivePage] = useState(0);
   const [slidesPerView, setSlidesPerView] = useState(3);
   const [current, setCurrent] = useState(0);
   const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  afterChange: (index:number) => setCurrentSlide(index), 
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

const goTo = (index: number) => setCurrent(index);


  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const totalPages = Math.ceil(services.length / slidesPerView);
  return (
    <>
      <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4 text-white"
      style={{
        backgroundImage:
          "url(/img/Cartas%20Tech%20Konecta%20Mx/nosotros.png)",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-blue-500">Tech</span>{" "}
          <span className="text-white">Konecta</span>{" "}
          <span className="text-yellow-400">Mx</span>
        </h1>
        <p className="text-xl font-medium">
          Tecnologías Inteligentes de precisión y confianza
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <a
            href="#conocenos"
            className="px-6 py-2 rounded-full border border-blue-600 bg-blue-600/30 text-white hover:bg-blue-600 hover:text-white transition"
          >
            Conócenos
          </a>
          <a
            href="#contacto"
            className="px-6 py-2 rounded-full border border-[#4eac8c] bg-[#4eac8c]/30 text-white hover:bg-[#4eac8c] hover:text-white transition"
          >
            Contáctanos
          </a>
        </div>

        <p className="mt-6 text-xl md:text-2xl font-semibold">
          Ofrecemos{" "}
          <span className="text-white font-bold">conexiones</span> entre{" "}
          <span className="text-white font-bold">
            personas, sistemas y negocios
          </span>
        </p>
      </div>

     
      <div className="relative z-10 mt-12 max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop
          onSlideChange={(swiper) => {
            const page = Math.floor(swiper.realIndex / slidesPerView);
            setActivePage(page);
          }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            
          }}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-2 justify-center mt-6">
        {Array.from({ length: totalPages }).map((_, idx) => (
            <div
            key={idx}
            className="w-20 h-1 bg-white/30 rounded-full overflow-hidden"
            >
            <div
                className={`h-full bg-yellow-400 transition-all duration-\\[5000ms\\] ${
                idx === activePage ? "w-full" : "w-0"
                }`}
            ></div>
            </div>
        ))}
        </div>

    
      </div>
    </section>

    <section className="bg-gray-500 text-white w-full py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="text-center text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
            <p>
              <span className="text-[#e2495a] font-bold">Conectamos</span> tu negocio con{' '}
              <span className="text-[#e9c573] font-bold">soluciones digitales</span> escalables,{' '}
              <span className="text-[#1c6eb7] font-bold">seguras</span> y{' '}
              <span className="text-[#1c6eb7] font-bold">automatizadas</span> para que todo funcione en{' '}
              <span className="text-[#e9c573] font-bold">armonía</span>
            </p>
            <p className="text-lg mt-2">
              Desde la <span className="text-[#e2495a]">planeación arquitectónica</span> hasta la{' '}
              <span className="text-[#e2495a]">supervisión operativa</span>, te acompañamos en cada paso de tu{' '}
              <span className="text-[#e2495a]">transformación tecnológica</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              <ul className="list-disc pl-5 space-y-2 text-lg">
                {slides[current].points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
        <div className="w-full md:w-1/2 relative h-64 md:h-96">
            <Image
                src={slides[current].image}
                alt={slides[current].title}
                fill
                className="rounded-lg shadow-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
            />
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-8 rounded-full transition-all ${
                  index === current ? "bg-blue-500" : "bg-white/30"
                }`}
                onClick={() => goTo(index)}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>


      <section className="bg-white w-full px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-[#07172E] mb-2">Presencia con:</h2>
        <p className="text-gray-600 mb-8">Organizaciones que confían en nuestra tecnología</p>
    
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          <Image src="/img/gatsimed.png" alt="Gatsimed" width={120} height={120} className="h-12 object-contain  transition" />
          <Image src="/img/tae.png" alt="Tae" width={120} height={120} className="h-12 object-contain  transition" />
    
          <Image src="/img/dydetec.png" alt="DyDetec" width={180} height={180} className="h-20 object-contain  transition" />
          <Image src="/img/iconos-botones/biossman.png" alt="biossman" width={180} height={128} className="h-20 object-contain transition" />

          <Image src="/img/logo-gea.png" alt="Hospital General" width={120} height={200} className="h-20 object-contain transition" />
          <Image src="/img/logo-cofepris.png" alt="Cofepris" width={200} height={200} className="h-12 object-contain transition" />

        </div>
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-[#07172E] mb-16">
        <div>
          <h3 className="text-4xl font-bold">+10</h3>
          <p className="text-gray-600">Instituciones ya confiarón en Tech Konecta Mx para transformar su tecnología</p>
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



<div className="mt-16 text-center">


<section
  className="relative bg-cover bg-center bg-no-repeat text-white min-h-[20vh] flex flex-col justify-between"
  style={{ backgroundImage: "url(/img/Opiniones/Opiniones.png)" }}
>
  <div className="flex-1 flex items-center justify-center px-4 py-16">
    <Slider {...sliderSettings} className="w-full max-w-4xl mx-auto">
      {testimonios.map((t, index) => (
        <div key={index} className="px-4">
          <p className="italic text-gray-800 text-base sm:text-lg max-w-3xl mx-auto text-center">
            “{t.texto}”
          </p>
          <p className="text-right font-medium text-[#07172E] mt-4 max-w-3xl mx-auto">
            – {t.autor}
          </p>
        </div>
      ))}
    </Slider>
  </div>

  <div className="flex justify-center items-center gap-2 pb-6 px-4">
    {testimonios.map((_, index) => (
      <div
        key={index}
        className={`h-1 rounded transition-all duration-300 ${
          index === currentSlide ? "bg-blue-600 w-20" : "bg-gray-300 w-16"
        }`}
      />
    ))}
  </div>
</section>



</div>

<section className="mt-[120px] px-4 text-center">
  <h2 className="text-3xl font-light text-[#07172E] mb-2">
    Ofrecemos <strong className="font-bold">soluciones integrales</strong> para
  </h2>
  <p className="text-xl text-[#07172E] mb-12">tu empresa o negocio</p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-10">
    <div>
      <div className="flex justify-center mb-4">
        <Image
          src="/img/iconos-botones/Asesoria-personalizada.png"
          alt="Asesoría personalizada"
          width={200}
          height={200}
          className="h-12 object-contain transition"
        />
      </div>
      <h4 className="text-xl font-bold text-[#07172E]">Asesoría personalizada</h4>
      <p className="text-gray-600 mt-2 text-sm">
        Te ayudamos a encontrar la mejor solución tech para tu empresa
      </p>
    </div>

    <div>
      <div className="flex justify-center mb-4">
        <Image
          src="/img/iconos-botones/Respuestas en menos de 24 horas.png"
          alt="Respuestas rápidas"
          width={200}
          height={200}
          className="h-12 object-contain transition"
        />
      </div>
      <h4 className="text-xl font-bold text-[#07172E]">Respuestas en menos de 24 hrs</h4>
      <p className="text-gray-600 mt-2 text-sm">
        Estamos comprometidos a responder rápido y con claridad
      </p>
    </div>

    <div>
      <div className="flex justify-center mb-4">
        <Image
          src="/img/iconos-botones/Soluciones inteligentes.png"
          alt="Soluciones inteligentes"
          width={200}
          height={200}
          className="h-12 object-contain transition"
        />
      </div>
      <h4 className="text-xl font-bold text-[#07172E]">Soluciones Inteligentes</h4>
      <p className="text-gray-600 mt-2 text-sm">
        Desarrollamos conexiones óptimas y eficientes con velocidad y estabilidad
      </p>
    </div>

    <div>
      <div className="flex justify-center mb-4">
        <Image
          src="/img/iconos-botones/Soluciones escalables.png"
          alt="Soluciones escalables"
          width={200}
          height={200}
          className="h-12 object-contain transition"
        />
      </div>
      <h4 className="text-xl font-bold text-[#07172E]">Soluciones escalables</h4>
      <p className="text-gray-600 mt-2 text-sm">
        Nos adaptamos a tus necesidades actuales y futuras
      </p>
    </div>
  </div>
</section>


      

    
      <div className="text-black mt-9 text-center">
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
          <Link href="/Contacto">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Escríbenos directamente
            </button>
          </Link>
        </div>
      </div>
    </section>

      </>
  );
}

export default NosotrosServicios
