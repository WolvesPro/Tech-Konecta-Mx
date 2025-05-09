'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
        <div className="text-sm leading-tight space-y-1 text-left md:text-left md:flex-1">
          <p>Contacto</p>
          <p>+55 5555 5555</p>
          <p>Correo</p>
          <p>techkonectamx@gmail.com</p>
          <p>Ubicación</p>
          <p>loremipsumipsumlorem</p>
        </div>
        <div className="flex flex-col items-center md:flex-1">
          <Image
            src="/logo-08.png"
            alt="Logo Tech Konecta blanco con iconos tecnológicos"
            className="w-40 h-auto mb-1"
            width="120"
            height="120"
          />
          <p className="text-[9px] leading-tight text-center">
            (C) TECH KONECTA 2025
            <br />
            Todos los derechos reservados | Aviso de Privacidad
          </p>
        </div>
        <div className="text-sm text-right md:flex-1">
          <p className="mb-1">Síguenos en:</p>
          <div className="flex justify-end space-x-3 text-white text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-gray-400">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
