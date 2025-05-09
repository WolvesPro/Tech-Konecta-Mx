// src/app/page.tsx
'use client'
import './globals.css'

import { redirect } from 'next/navigation'

export default function HomeRedirect() {
  redirect('/Inicio')
}
