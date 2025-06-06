// src/app/page.tsx
'use client'


import { redirect } from 'next/navigation'
import './globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomeRedirect() {
  redirect('/Inicio')
}
