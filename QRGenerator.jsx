'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

/* ─── SVG icons (inline, zero deps) ─── */
const IconDownload = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const IconCopy = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const IconRefresh = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
)

const IconAlert = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

/* ─── Countdown ring constants ─── */
const RADIUS      = 46
const CIRCUMF     = 2 * Math.PI * RADIUS  // ≈ 289
const TOTAL_SECS  = 60

/* ─── URL helpers ─── */
function normaliseUrl(raw) {
  const s = raw.trim()
  if (!s) return s
  if (/^https?:\/\//i.test(s)) return s
  return 'https://' + s
}

function isValidUrl(str) {
  try {
    const u = new URL(str)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

/* ═══════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════ */
export default function QRGenerator() {
  const [url,         setUrl]         = useState('')
  const [qrDataUrl,   setQrDataUrl]   = useState(null)
  const [isGenerating,setIsGenerating]= useState(false)
  const [error,       setError]       = useState('')
  const [countdown,   setCountdown]   = useState(TOTAL_SECS)
  const [isActive,    setIsActive]    = useState(false)
  const [copied,      setCopied]      = useState(false)
  const [downloaded,  setDownloaded]  = useState(false)

  const timerRef = useRef(null)
  const inputRef = useRef(null)

  /* ── reset everything ── */
  const reset = useCallback(() => {
    clearInterval(timerRef.current)
    setQrDataUrl(null)
    setIsActive(false)
    setCountdown(TOTAL_SECS)
    setError('')
    setCopied(false)
    setDownloaded(false)
    // keep URL so user doesn't have to retype
    setTimeout(() => inputRef.current?.focus(), 100)
  }, [])

  /* ── start countdown when QR appears ── */
  useEffect(() => {
    if (!isActive) return

    timerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          reset()
          return TOTAL_SECS
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timerRef.current)
  }, [isActive, reset])

  /* ── generate QR ── */
  const generateQR = async () => {
    const processed = normaliseUrl(url)

    if (!processed) {
      setError('Por favor, ingresá una URL.')
      inputRef.current?.focus()
      return
    }
    if (!isValidUrl(processed)) {
      setError('URL inválida. Ejemplo: https://google.com')
      return
    }

    setError('')
    setIsGenerating(true)

    try {
      // Dynamic import → avoids SSR issues, loaded once
      const QRCode = (await import('qrcode')).default
      const dataUrl = await QRCode.toDataURL(processed, {
        width:               320,
        margin:              2,
        errorCorrectionLevel:'H',
        color: {
          dark:  '#1A0000',
          light: '#FFFFFF',
        },
      })
      setQrDataUrl(dataUrl)
      setCountdown(TOTAL_SECS)
      setIsActive(true)
    } catch {
      setError('Ocurrió un error al generar el QR. Intentá de nuevo.')
    } finally {
      setIsGenerating(false)
    }
  }

  /* ── download PNG ── */
  const downloadQR = () => {
    const a      = document.createElement('a')
    const slug   = url.replace(/https?:\/\//, '').replace(/[^a-z0-9]/gi, '-').slice(0, 40)
    a.download   = `qr-${slug || 'code'}.png`
    a.href       = qrDataUrl
    a.click()
    setDownloaded(true)
  }

  /* ── copy URL ── */
  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(normaliseUrl(url))
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      /* clipboard not available */
    }
  }

  /* ── ring progress ── */
  const ringOffset    = CIRCUMF - (countdown / TOTAL_SECS) * CIRCUMF
  const isUrgent      = countdown <= 10
  const ringColor     = isUrgent ? '#FF4444' : countdown <= 20 ? '#FF8800' : '#1aaa1a'
  const ringGlowColor = isUrgent ? 'rgba(255,68,68,0.4)' : 'rgba(26,170,26,0.3)'

  /* ── key handler ── */
  const handleKey = (e) => {
    if (e.key === 'Enter') generateQR()
    if (e.key === 'Escape') { setUrl(''); setError('') }
  }

  /* ════════════════════════════════════════
     RENDER
  ════════════════════════════════════════ */
  return (
    <div className="w-full max-w-md mx-auto">

      {/* ── INPUT PANEL ── */}
      {!qrDataUrl && (
        <div className="card p-6 md:p-8 float-in">

          {/* Card header */}
          <div className="text-center mb-6">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-1"
              style={{ color: '#C8102E', fontFamily: 'Georgia, serif' }}
            >
              ✦ Paso 1 de 2 ✦
            </p>
            <h2
              className="text-2xl font-bold"
              style={{ color: '#1A0000', fontFamily: 'Georgia, serif' }}
            >
              Ingresá tu URL
            </h2>
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={url}
            onChange={e => { setUrl(e.target.value); setError('') }}
            onKeyDown={handleKey}
            placeholder="Pega aquí tu URL"
            className="url-input mb-3"
            autoFocus
            autoComplete="off"
            spellCheck={false}
            aria-label="URL para generar QR"
          />

          {/* Error */}
          {error && (
            <div className="error-msg mb-4">
              <IconAlert />
              <span>{error}</span>
            </div>
          )}

          {/* Generate button */}
          <button
            onClick={generateQR}
            disabled={isGenerating}
            className="btn-generate"
            aria-label="Generar código QR"
          >
            {isGenerating ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin" width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
                Generando...
              </span>
            ) : (
              'Generar QR'
            )}
          </button>

          {/* Hint */}
          <p
            className="text-center mt-4 text-xs"
            style={{ color: '#b09090', fontFamily: 'Georgia, serif' }}
          >
            Podés presionar <kbd className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono">Enter</kbd> para generar
          </p>
        </div>
      )}

      {/* ── QR DISPLAY PANEL ── */}
      {qrDataUrl && (
        <div className="qr-container w-full">
          <div className="card p-6 md:p-8">

            {/* Countdown ring + number */}
            <div className="flex flex-col items-center mb-5">
              <div className="relative inline-flex items-center justify-center mb-3">
                <svg width="110" height="110" aria-hidden="true">
                  {/* Glow filter */}
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Track */}
                  <circle
                    className="countdown-ring-bg"
                    cx="55" cy="55" r={RADIUS}
                  />
                  {/* Progress */}
                  <circle
                    className="countdown-ring-fill"
                    cx="55" cy="55" r={RADIUS}
                    stroke={ringColor}
                    strokeDasharray={CIRCUMF}
                    strokeDashoffset={ringOffset}
                    filter="url(#glow)"
                    style={{
                      transform: 'rotate(-90deg)',
                      transformOrigin: '55px 55px',
                      transition: 'stroke-dashoffset 1s linear, stroke 0.5s ease',
                      boxShadow: ringGlowColor,
                    }}
                  />
                  {/* Number */}
                  <text
                    x="55" y="55"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={isUrgent ? "28" : "26"}
                    fontWeight="bold"
                    fill={isUrgent ? '#FF4444' : '#1A0000'}
                    fontFamily="Georgia, serif"
                    className={isUrgent ? 'countdown-urgent' : ''}
                  >
                    {countdown}
                  </text>
                </svg>
              </div>

              <p
                className="text-center text-sm"
                style={{
                  color: isUrgent ? '#FF4444' : '#666',
                  fontFamily: 'Georgia, serif',
                  fontWeight: isUrgent ? 'bold' : 'normal',
                }}
              >
                {isUrgent
                  ? `⚠️ ¡Descargalo ahora! ${countdown}s`
                  : `Tu QR desaparece en ${countdown} segundos`}
              </p>
            </div>

            {/* QR image */}
            <div className="flex justify-center mb-5">
              <div className="qr-frame">
                {/* Corner holly */}
                <span
                  style={{
                    position: 'absolute', top: '-10px', right: '-10px',
                    fontSize: '20px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  }}
                  aria-hidden="true"
                >
                  🎄
                </span>
                <img
                  src={qrDataUrl}
                  alt="Código QR generado"
                  width={280}
                  height={280}
                  style={{ display: 'block', borderRadius: '8px' }}
                />
              </div>
            </div>

            {/* URL preview */}
            <div
              className="mb-5 px-3 py-2 rounded-lg text-center"
              style={{ background: '#fff0f0', border: '1px solid #ffd0d0' }}
            >
              <p
                className="text-xs truncate"
                style={{ color: '#888', fontFamily: 'Georgia, serif' }}
              >
                🔗 {normaliseUrl(url)}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={downloadQR}
                className="btn-download"
                aria-label="Descargar código QR como PNG"
              >
                <IconDownload />
                {downloaded ? '¡Descargado! Descargar de nuevo' : 'Descargar PNG'}
              </button>

              <button
                onClick={copyUrl}
                className={`btn-copy ${copied ? 'copied' : ''}`}
                aria-label="Copiar URL original"
              >
                {copied ? <IconCheck /> : <IconCopy />}
                {copied ? '¡URL copiada!' : 'Copiar URL original'}
              </button>
            </div>

            {/* Reset link */}
            <div className="flex justify-center mt-5">
              <button onClick={reset} className="btn-reset">
                <span className="inline-flex items-center gap-1.5">
                  <IconRefresh /> Generar otro QR
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
