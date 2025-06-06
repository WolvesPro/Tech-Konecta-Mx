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




export function Contacto() {

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

 <section className="bg-white w-full px-4 py-16">
 
  
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

   
      
  </div>
</section>



    </>
  )
}
