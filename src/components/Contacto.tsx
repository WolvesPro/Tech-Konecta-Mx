'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import { Facebook, Instagram, Linkedin } from "lucide-react";




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


  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    servicio: "",
    asunto: "",
    mensaje: "",
  });

  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alerta, setAlerta] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAlerta("");

    if (!form.nombre || !form.email || !form.mensaje) {
      setAlerta("Por favor llena los campos obligatorios.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (res.ok) {
        setAlerta("Mensaje enviado correctamente.");
        setForm({
          nombre: "",
          apellido: "",
          email: "",
          servicio: "",
          asunto: "",
          mensaje: "",
        });
      } else {
        setAlerta(result.error || "Ocurrió un error.");
      }
    } catch (error) {
      setAlerta("Error al enviar el formulario.");
    } finally {
      setLoading(false);
    }
  };

  if (!isClient) return null;
  
  
  return (
    <>

 <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{ backgroundImage: 'url("img/fondo contacto.png")' }}
    >
          <div className="text-center py-16">
          <h2 className="text-4xl font-bold mb-2">Nuestra Ubicación y Horarios</h2>
          <p className="text-lg text-gray-700">
            Estamos aquí para servirte en el momento que nos necesites
          </p>
        </div>
      <div className="bg-white/70 rounded-xl shadow-lg p-6 md:p-12 text-black max-w-7xl mx-auto space-y-12">
    

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-2xl">Dirección:</h4>
              <p>
                María C. MARÍA Ortega Monroy 1,<br />
                52030 San Pedro Tultepec, Mex,<br />
                Estado de México
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-2xl">Ventas:</h4>
              <p>
                Tel: +55 722 222 2222<br />
                ventas@techkonectamx.com
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-2xl">Soporte:</h4>
              <p>
                Tel: +55 722 222 2222<br />
                techkonectamx@techkonectamx.com
              </p>
            </div>
           <div>
            <h4 className="font-semibold text-2xl">Redes Sociales:</h4>
            <div className="flex gap-4 mt-2 text-xl">
              <a href="#" className="hover:text-[#53aea0]">
                <Facebook />
              </a>
              <a href="#" className="hover:text-[#53aea0]">
                <Instagram />
              </a>
              <a href="#" className="hover:text-[#53aea0]">
                <Linkedin />
              </a>
            </div>
          </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-6">
          <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="nombre"
                placeholder="*Nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="bg-[#53aea0]/40 hover:bg-[#53aea0] border-2 border-[#53aea0] text-black placeholder-black px-4 py-2 rounded"
              />
              <input
                type="text"
                name="apellido"
                placeholder="*Apellido"
                value={form.apellido}
                onChange={handleChange}
                className="bg-[#53aea0]/40 hover:bg-[#53aea0] border-2 border-[#53aea0] text-black placeholder-black px-4 py-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="*Correo electrónico"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-[#53aea0]/40 hover:bg-[#53aea0] border-2 border-[#53aea0] text-black placeholder-black px-4 py-2 rounded col-span-2"
              />
              <input
                type="text"
                name="servicio"
                placeholder="Servicio de Interés"
                value={form.servicio}
                onChange={handleChange}
                className="bg-[#53aea0]/40 hover:bg-[#53aea0] border-2 border-[#53aea0] text-black placeholder-black px-4 py-2 rounded"
              />
              <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                value={form.asunto}
                onChange={handleChange}
                className="bg-[#53aea0]/40 hover:bg-[#53aea0] border-2 border-[#53aea0] text-black placeholder-black px-4 py-2 rounded"
              />
              <textarea
                name="mensaje"
                placeholder="Cuéntanos sobre ti"
                value={form.mensaje}
                onChange={handleChange}
                rows={4}
                required
                className="bg-[#53aea0]/40 hover:bg-[#53aea0] border-2 border-[#53aea0] text-black placeholder-black px-4 py-2 rounded col-span-2"
              />
              <button
                type="submit"
                disabled={loading}
                className="col-span-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-full transition"
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>
              {alerta && (
                <div className="col-span-2 text-center text-sm text-black mt-2">{alerta}</div>
              )}
            </form>
          </div>

          <div className="w-full h-64 md:h-full rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.181003240087!2d-99.51064482533002!3d19.274493345712173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf54fc51a836f%3A0x5df3586846ee197!2zR8OEVFNJTUVE!5e0!3m2!1ses-419!2smx!4v1749776307139!5m2!1ses-419!2smx"              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              className="w-full h-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
 



    </>
  )
}
