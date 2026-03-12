'use client'

const FLAKES = [
  { char: '❄', size: 14, left: 5,  dur: 9,  delay: 0   },
  { char: '❅', size: 10, left: 12, dur: 12, delay: 1.5 },
  { char: '❆', size: 16, left: 20, dur: 8,  delay: 3   },
  { char: '❄', size: 11, left: 28, dur: 14, delay: 0.8 },
  { char: '❅', size: 8,  left: 35, dur: 10, delay: 2   },
  { char: '❆', size: 14, left: 42, dur: 11, delay: 4.5 },
  { char: '❄', size: 9,  left: 50, dur: 9,  delay: 1   },
  { char: '❅', size: 13, left: 58, dur: 13, delay: 3.5 },
  { char: '❆', size: 10, left: 65, dur: 8,  delay: 2.2 },
  { char: '❄', size: 15, left: 72, dur: 15, delay: 0.5 },
  { char: '❅', size: 9,  left: 80, dur: 10, delay: 4   },
  { char: '❆', size: 12, left: 88, dur: 12, delay: 1.8 },
  { char: '❄', size: 8,  left: 94, dur: 9,  delay: 3.2 },
  { char: '❅', size: 11, left: 15, dur: 11, delay: 6   },
  { char: '❆', size: 13, left: 48, dur: 14, delay: 5   },
  { char: '❄', size: 10, left: 75, dur: 10, delay: 7   },
]

export default function SnowParticles() {
  return (
    <div
      className="snow-wrap"
      aria-hidden="true"
    >
      {FLAKES.map((f, i) => (
        <span
          key={i}
          className="flake select-none"
          style={{
            left:      `${f.left}%`,
            fontSize:  `${f.size}px`,
            opacity:   0.65,
            '--dur':   `${f.dur}s`,
            '--delay': `${f.delay}s`,
          }}
        >
          {f.char}
        </span>
      ))}
    </div>
  )
}
