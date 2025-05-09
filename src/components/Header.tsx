'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState<string>('')

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash)
    console.log(window.location.hash)
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
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-0.5 flex items-center justify-between">
       
        <div className="flex items-center space-x-8">
          <div className="flex-shrink-0">
            <Image
              src="/logo-08.png"
              alt="Logo Tech Konecta"
              width={120}
              height={30}
              className="h-auto w-auto"
              priority
            />
          </div>

        
          <nav className="hidden md:flex space-x-6 text-sm font-semibold">
            <a href="/Inicio" className={linkClass('/Inicio')}>Nosotros</a>
            <a href="/Servicios" className={linkClass('/Servicios')}>Servicios</a>
            <a href="/Soluciones" className={linkClass('/Soluciones')}>Soluciones</a>
          </nav>
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round" strokeLinejoin="round"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

 
      {isOpen && (
      <div className="md:hidden bg-white px-4 py-4 pb-4 shadow-inner flex flex-col space-y-3">
        <a href="/Inicio" className={linkClass('/Inicio')}>Nosotros</a>
        <a href="/Servicios" className={linkClass('/Servicios')}>Servicios</a>
        <a href="/Soluciones" className={linkClass('/Soluciones')}>Soluciones</a>
      </div>
    )}

    </header>
  )
}
