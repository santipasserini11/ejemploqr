import QRGenerator  from '@/components/QRGenerator'
import SantaClaus   from '@/components/SantaClaus'
import SnowParticles from '@/components/SnowParticles'

export default function Home() {
  return (
    <main className="relative vintage-bg vintage-dots min-h-screen flex flex-col">

      {/* ── Snow ── */}
      <SnowParticles />

      {/* ── Header ── */}
      <header className="relative z-10 text-center pt-10 pb-2 px-4">

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-12 bg-white/30 block" />
          <span
            className="text-white/70 text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            ✦ Edición Especial Navidad ✦
          </span>
          <span className="h-px w-12 bg-white/30 block" />
        </div>

        {/* Main title */}
        <h1 className="header-title">
          Generador de QR
        </h1>

        {/* Subtitle */}
        <p
          className="mt-3 text-white/75 text-lg tracking-wide"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Gratis · Sin registro · Listo en segundos
        </p>

        {/* Decorative Coca-Cola wave */}
        <div className="flex justify-center mt-5">
          <svg viewBox="0 0 340 28" className="w-72" aria-hidden="true">
            <path
              className="header-wave"
              d="M0 14 Q42.5 0 85 14 Q127.5 28 170 14 Q212.5 0 255 14 Q297.5 28 340 14"
            />
          </svg>
        </div>
      </header>

      {/* ── QR Generator ── */}
      <section className="relative z-10 flex-1 px-4 py-6 flex items-start justify-center">
        <QRGenerator />
      </section>

      {/* ── Santa Section ── */}
      <section className="relative z-10 flex justify-center items-end pb-2 mt-4">
        <SantaClaus />
      </section>

      {/* ── Ribbon divider ── */}
      <div className="ribbon-divider relative z-10" />

      {/* ── Footer ── */}
      <footer
        className="relative z-10 py-4 text-center text-white/35 text-xs tracking-[0.2em] uppercase"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        ✦ Hecho con ❤️ y mucho ☕ · {new Date().getFullYear()} ✦
      </footer>

    </main>
  )
}
