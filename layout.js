import { Pacifico } from 'next/font/google'
import './globals.css'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

export const metadata = {
  title: 'Generador de QR — Edición Navidad 🎄',
  description:
    'Creá tu código QR al instante. Sin registro, 100% gratis. Descargalo en segundos.',
  openGraph: {
    title: 'Generador de QR — Edición Navidad',
    description: 'Creá tu código QR al instante.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={pacifico.variable}>
      <body>{children}</body>
    </html>
  )
}
