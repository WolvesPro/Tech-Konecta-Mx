'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState<string>('')

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash)
    updateHash()
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  const linkClass = (target: string) =>
    (pathname === target || currentHash === target)
      ? 'text-black font-semibold'
      : 'text-blue-600 hover:text-blue-600 transition-colors'

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo + nav */}
        <div className="flex items-center space-x-8">
          <Image
            src="/logo-08.png"
            alt="Logo Tech Konecta"
            width={120}
            height={30}
            className="h-auto w-auto"
            priority
          />

          {/* Nav - Desktop */}
          <nav className="hidden md:flex space-x-6 text-sm font-semibold">
            <a href="/Inicio" className={linkClass('/Inicio')}>Nosotros</a>
            <a href="/Servicios" className={linkClass('/Servicios')}>Servicios</a>
            <a href="/CasosDeExito" className={linkClass('/CasosDeExito')}>Casos de éxito</a>
            <a href="/Contacto" className={linkClass('/Contacto')}>Contacto</a>
          </nav>
        </div>

 
        {/* Contact Info - Desktop */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700 font-medium">
          <div className="flex items-center space-x-2">
              <a href="https://api.whatsapp.com/send?phone=527226028263&text=Hola me gustaria obtener mas información!" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-green-600">

            <FaWhatsapp className="text-green-500 text-lg" />
            <span>+52 7226028263</span>
          </a>
          </div>
          <div className="flex items-center space-x-2">
            <HiOutlineMail className="text-blue-600 text-lg" />
            <span>contacto@tkonecta.com.mx</span>
          </div>
        </div>

        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

     {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-6 space-y-6">
          <nav className="flex flex-col space-y-4 text-sm font-semibold">
            <a href="/Inicio" className={linkClass('/Inicio')}>Nosotros</a>
            <a href="/Servicios" className={linkClass('/Servicios')}>Servicios</a>
            <a href="/CasosDeExito" className={linkClass('/CasosDeExito')}>Casos de Éxito</a>
            <a href="/Inicio" className={linkClass('/Casos')}>Contacto</a>
          </nav>
          <div className="mt-4 flex flex-col space-y-3 text-sm text-gray-700">
            <a href="https://api.whatsapp.com/send?phone=527226028263&text=Hola me gustaria obtener mas información!" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-green-600">
              <FaWhatsapp className="text-lg" />
              <span>+52 722 602 8263</span>
            </a>
            <a href="mailto:info@techkonecta.com" className="flex items-center space-x-2 hover:text-blue-600">
              <HiOutlineMail className="text-lg" />
              <span>contacto@tkonecta.com.mx</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
