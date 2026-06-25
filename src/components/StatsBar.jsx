import { useEffect, useRef, useState } from 'react'

function useCountUp(target, start = 1180, duration = 1200) {
  const [value, setValue] = useState(null)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        let current = start
        const step = Math.ceil((target - start) / (duration / 25))
        const id = setInterval(() => {
          current = Math.min(current + step, target)
          setValue(current)
          if (current >= target) clearInterval(id)
        }, 25)
      },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, start, duration])
  return { ref, value: value ?? start }
}

const stats = [
  { num: '26',    label: 'Jogadores\nda Seleção' },
  { num: '30+',   label: 'Páginas para\ncolorir'    },
  { num: null,    label: null, isBuyers: true        },
  { num: '∞',    label: 'Impressões\npermitidas'   },
]

export default function StatsBar() {
  const { ref, value } = useCountUp(1240)

  return (
    <div className="bg-white border-b border-gray-100 py-5 px-4">
      <div className="max-w-5xl mx-auto flex justify-center items-center gap-6 md:gap-14 flex-wrap">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-0">
            {i > 0 && <div className="hidden sm:block w-px h-9 bg-gray-200 mr-6 md:mr-14" />}
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              {s.isBuyers ? (
                <>
                  <span className="font-display text-[2.2rem] leading-none text-copa-green-d">★★★★★</span>
                  <span ref={ref} className="text-sm font-bold text-navy-800 leading-tight">
                    {value.toLocaleString('pt-BR')} famílias<br />aprovaram
                  </span>
                </>
              ) : (
                <>
                  <span className="font-display text-[2.4rem] leading-none text-copa-green">{s.num}</span>
                  <span className="text-xs font-bold text-navy-800 leading-tight max-w-[80px]" style={{ whiteSpace: 'pre-line' }}>
                    {s.label}
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
