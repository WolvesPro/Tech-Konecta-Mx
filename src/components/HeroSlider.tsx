

'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from "../components/ServiceCard";
import { useRef, useEffect, useState } from 'react'

const banners = [
  {
    src: '/img/Banners/Banner 1 Infra.png',
    buttonPos: 'left-1 lg:left-2 bottom-10 lg:bottom-20',
  },
  {
    src: '/img/Banners/Cableado estructurado banner.png',
    buttonPos: 'left-1/2 bottom-10 top-50  lg:bottom-20 lg:top-50 transform -translate-x-1/2',
  },
  {
    src: '/img/Banners/Control de acceso baner.png',
    buttonPos: 'right-1 lg:right-4 bottom-10 lg:bottom-20',
  },
  {
    src: '/img/Banners/gps-y-senalizacion.png',
    buttonPos: 'left-1 lg:left-4 bottom-10 lg:bottom-20 ',
  },
  {
    src: '/img/Banners/Hiperconectividad banner.png',
    buttonPos: 'left-1/2 bottom-10 top-50 lg:left-1/2 lg:top-1/3 transform -translate-x-1/2',
  },
  {
    src: '/img/Banners/Redes y TI banner.png',
    buttonPos: 'left-1 lg:left-4 bottom-10 lg:bottom-20',
  },
  {
    src: '/img/Banners/UI UX Banner.png',
    buttonPos: 'right-1 lg:right-4 bottom-10 lg:bottom-20',
  },
  {
    src: '/img/Banners/Videovigilancia.png',
    buttonPos: 'left-1 lg:left-4 bottom-10 lg:bottom-20',
  },
];





export const HeroSlider = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const paginationRef = useRef(null)
  const [isReady, setIsReady] = useState(false)
  return   (
    <section className="relative w-full pt-[80px]">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        autoplay={{ delay: 1000 }}
        loop
        className="w-full"
      >
        {banners.map((banner, idx) => (
         <SwiperSlide key={idx}>
            <div className="relative w-full h-[40vh] lg:h-[70vh] bg-white">
                <div className="flex items-center justify-between w-full h-full px-4">
           
                <button ref={prevRef} className="z-30 bg-white/70 hover:bg-white p-2 rounded-full shadow">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

              
         <div className="relative flex-1 h-full flex items-center justify-center">
          <Image
            src={banner.src}
            alt={`Banner ${idx + 1}`}
            fill 
            className="object-contain" 
            priority
          />
          <div className={`absolute ${banner.buttonPos} z-20`}>
            <Link href="#nosotros">
              <button className="bg-blue-600/70 hover:bg-blue-700/80 text-white px-3 py-1 text-sm rounded-full font-medium transition shadow lg:px-6 lg:py-2 lg:text-base lg:font-semibold">
                Conócenos
              </button>
            </Link>
          </div>
        </div>


            
                <button ref={nextRef} className="z-30 bg-white/70 hover:bg-white p-2 rounded-full shadow">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                </div>
            </div>
            </SwiperSlide>
        ))}

    
        <button ref={prevRef} className="swiper-button-prev-custom absolute z-30 top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button ref={nextRef} className="swiper-button-next-custom absolute z-30 top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </Swiper>

 
      <div className="custom-pagination mt-4 mb-12 flex justify-center" />


 
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #cbd5e1;
          border-radius: 9999px;
          margin: 0 6px;
          opacity: 1;
          transition: background-color 0.3s ease;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #2563eb;
        }
      `}</style>
    </section>

    
  )
  
}
export default HeroSlider;