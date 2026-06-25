import { CTAButton } from './ui/CTAButton'
import { SectionHeader } from './ui/SectionHeader'

const items = [
  '+30 desenhos para colorir', '26 jogadores da Seleção',
  'Estádios e taças',          'Estilo HQ / Cartoon',
  'PDF para imprimir',         'Impressões ilimitadas',
]

export default function AlbumContents() {
  return (
    <section className="py-20 md:py-28 px-5 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-copa-green/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-copa-gold/6 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="reveal">
          <SectionHeader
            label="O que você recebe"
            title="O que tem no álbum?"
            body="Um álbum completo com mais de 30 desenhos dos jogadores da Seleção, estádios, taças e muito mais!"
            labelColor="white"
            titleColor="gold"
          />
        </div>

        <div className="reveal max-w-[680px] mx-auto mt-11 bg-white/5 backdrop-blur-sm border border-copa-gold/30 rounded-3xl p-8 md:p-11">
          <span className="text-5xl block mb-3">📖</span>
          <span className="inline-block bg-copa-green text-white text-[10px] font-bold tracking-[2px] uppercase px-3.5 py-1 rounded-full mb-3">
            Álbum Principal
          </span>
          <h3 className="font-display text-[1.7rem] text-white mb-2.5 leading-tight tracking-wide">
            Álbum de Colorir da Seleção Brasileira
          </h3>
          <p className="text-white/70 text-sm font-medium leading-relaxed mb-6">
            Todos os 26 convocados em páginas HQ estilo quadrinhos. +30 desenhos incríveis para colorir!
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {items.map(item => (
              <li key={item} className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                <span className="text-copa-green-g">✅</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center mt-10 reveal">
          <CTAButton href="https://pay.lowify.com.br/checkout?product_id=eCUU2y">
            ⚽ QUERO O ÁLBUM POR R$9,99
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
