'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from "next/image";

export function SolucionesSection() {

  return (
    <>
      <section className="relative w-full h-[70vh] overflow-hidden text-white pt-[80px]">

        <Image
               src="/img/solucionesHead.png"
               alt="Soluciones"
               width={600}
               height={0}
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
            <span className="text-white">Resultados </span>
            <span className="text-yellow-600">tangibles </span>
            <span className="text-white">en cada </span>
            <span className="text-yellow-600">proyecto</span>

           
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-xl md:text-2xl max-w-3xl"
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
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
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
      </section>

      <section className="bg-white py-16">
            <div className="max-w-5xl mx-auto text-center px-4">
                <h2 className="text-4xl font-bold mb-2 text-gray-900">Presencia en nuestro trabajo</h2>
                <div className="text-sm text-gray-600 mb-10 space-x-4">
                <a href="#" className="hover:underline">Instagram</a>
                <a href="#" className="hover:underline">Twitter</a>
                <a href="#" className="hover:underline">Email</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                <div className="rounded-xl overflow-hidden shadow-md">
                    <Image src="/img/softwarehospital.png" alt="Hospital Gea" width="1200"
                     height="1200" className="w-full h-64 object-cover" />
                    <div className="p-4 text-left">
                    <h3 className="text-sm font-medium text-gray-800">Instalación de Software / Hospital Gea</h3>
                    <p className="text-xs text-gray-500">Jan 23, 2025</p>
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md">
                    <Image src="/img/instalacionventiladores.png" alt="Ventiladores Mecánicos" width="1200"
                     height="1200" className="w-full h-64 object-cover" />
                    <div className="p-4 text-left">
                    <h3 className="text-sm font-medium text-gray-800">Intalación de 500 Ventiladores Mecánicos</h3>
                    <p className="text-xs text-gray-500">Jun 7, 2022</p>
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md">
                    <Image src="/img/interoperabilidad.png" alt="inter" width="1200"
                        height="1200" className="w-full h-64 object-cover" />
                    <div className="p-4 text-left">
                    <h3 className="text-sm font-medium text-gray-800">Interoperabilidad de sistemas/Dydetec</h3>
                    <p className="text-xs text-gray-500">Jun 6, 2023</p>
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md">
                    <Image src="/img/instalacioncableado.png" alt="inss" width="1200"
                    height="1200" className="w-full h-64 object-cover" />
                    <div className="p-4 text-left">
                    <h3 className="text-sm font-medium text-gray-800">Intalaciones de cableado/Gätsimed</h3>
                    <p className="text-xs text-gray-500">Dec 27, 2020</p>
                    </div>
                </div>
                </div>
            </div>
            </section>

    </>
  )
}
