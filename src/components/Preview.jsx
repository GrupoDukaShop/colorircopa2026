import { useState, useRef } from 'react'
import { SectionHeader } from './ui/SectionHeader'

const pages = [
  { src: 'ney.png',            tag: 'Neymar Jr ⚡', tagColor: 'bg-copa-gold text-navy-800' },
  { src: 'pagina_endrick.png', tag: 'Endrick 👑',   tagColor: 'bg-copa-green text-white'  },
  { src: 'vini.png',           tag: 'Vini Jr 🔥',   tagColor: 'bg-copa-pink text-white'   },
  { src: 'at1.png',            tag: null },
  { src: 'at2.png',            tag: null },
  { src: 'duka1.png',          tag: null },
  { src: 'duka2.png',          tag: null },
]

export default function Preview() {
  const [slide, setSlide] = useState(0)
  const scrollRef = useRef(null)

  const handleScroll = () => {
    if (!scrollRef.current || !scrollRef.current.children[0]) return
    const cardWidth = scrollRef.current.children[0].offsetWidth + 12
    const index = Math.round(scrollRef.current.scrollLeft / cardWidth)
    setSlide(Math.max(0, Math.min(index, pages.length - 1)))
  }

  const goTo = (i) => {
    if (!scrollRef.current || !scrollRef.current.children[0]) return
    const cardWidth = scrollRef.current.children[0].offsetWidth + 12
    scrollRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' })
    setSlide(i)
  }

  return (
    <section className="py-20 md:py-28 bg-[#F0F4FF] overflow-hidden">
      <div className="max-w-4xl mx-auto px-5">
        <div className="reveal">
          <SectionHeader
            label="Veja por dentro"
            title="Algumas páginas dos álbuns"
            body="Traços grossos no estilo HQ — fácil de colorir com lápis, canetinha ou tinta."
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="pl-5 mt-10">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 pr-5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {pages.map((p, i) => (
            <div key={i} className="snap-center shrink-0 w-[78vw] sm:w-[300px] relative">
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-card bg-white aspect-[3/4]">
                <img src={p.src} alt={p.tag || ''} className="w-full h-full object-contain" />
              </div>
              {p.tag && (
                <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm ${p.tagColor}`}>
                  {p.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5">
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                slide === i ? 'bg-navy-800 w-5' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>

        <p className="text-center text-xs font-semibold text-gray-400 mt-5">
          ⚠️ Prévia em baixa resolução — o arquivo original tem qualidade total para impressão
        </p>
      </div>
    </section>
  )
}
