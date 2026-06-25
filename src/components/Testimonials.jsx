import { SectionHeader } from './ui/SectionHeader'

const reviews = [
  {
    quote: '"Meu filho ficou louco quando viu o Vini Jr no álbum! Imprimimos no mesmo dia, ficou lindo. Vale muito o preço."',
    name: 'Juliana M.',
    role: 'Mãe do Lorenzo, 6 anos · São Paulo',
    avatar: 'foto1.png',
    fallback: '👩',
  },
  {
    quote: '"Comprei de noite, baixei na hora e imprimi no dia seguinte pra minha sobrinha. Ela amou o Endrick! Super recomendo."',
    name: 'Camila R.',
    role: 'Tia orgulhosa · Belo Horizonte',
    avatar: 'foto2.png',
    fallback: '👩',
  },
  {
    quote: '"Usei na escola durante a semana da Copa. As crianças ficaram super animadas! Os traços grossos facilitam muito pra colorir."',
    name: 'Professora Ana Paula',
    role: 'Ensino Fundamental · Campinas',
    avatar: 'foto3.png',
    fallback: '👩‍🏫',
  },
]

function Stars() {
  return <span className="text-[15px] tracking-[2px] text-yellow-500">★★★★★</span>
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="reveal">
          <SectionHeader
            label="Quem já comprou aprovou"
            title="O que as famílias estão falando"
          />
          <div className="flex items-center gap-2.5 justify-center mt-3">
            <Stars />
            <span className="text-sm font-bold text-navy-800">4.9/5 de 1.240 avaliações</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`reveal ${['delay-1','delay-2','delay-3'][i]} bg-white border border-gray-100 rounded-3xl p-7 shadow-card flex flex-col`}
            >
              <span className="inline-flex items-center gap-1.5 bg-[#25D366] text-white text-[10px] font-bold tracking-[.5px] uppercase px-3 py-1 rounded-full mb-3 w-fit">
                📱 WhatsApp
              </span>
              <Stars />
              <blockquote className="text-[15px] text-gray-500 leading-relaxed font-medium italic mt-3 mb-5 flex-1">
                {r.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-copa-green border-2 border-gray-100 flex-shrink-0 overflow-hidden flex items-center justify-center text-xl">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-full h-full object-cover"
                    onError={e => { e.target.style.display = 'none'; e.target.parentNode.textContent = r.fallback }}
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-navy-800">{r.name}</p>
                  <p className="text-xs text-gray-400 font-medium">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
