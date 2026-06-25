import { CTAButton } from './ui/CTAButton'
import { SectionHeader } from './ui/SectionHeader'

const items = [
  { ck: '✅', text: '+30 desenhos dos jogadores da Seleção para colorir' },
  { ck: '✅', text: 'Estádios, taças e elementos da Copa 2026' },
  { ck: '✅', text: 'Estilo HQ com traços grossos — fácil de pintar' },
  { ck: '⚡', text: 'Acesso imediato após a compra' },
  { ck: '🖨️', text: 'PDF — imprima quantas vezes quiser' },
  { ck: '🛡️', text: 'Garantia de 7 dias ou seu dinheiro de volta' },
]

export default function Offer() {
  return (
    <section
      id="oferta"
      className="relative py-20 md:py-28 px-5 overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #001035, #0A3070)' }}
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-copa-green/10 blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-copa-gold/8 blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-10 reveal">
          <SectionHeader
            label="Promoção de lançamento"
            title="Garanta agora antes que volte ao preço normal"
            labelColor="gold"
            titleColor="gold"
          />
        </div>

        {/* Box */}
        <div className="reveal max-w-[620px] mx-auto bg-white/5 backdrop-blur-sm border border-copa-gold/30 rounded-3xl p-8 md:p-14 text-center shadow-[0_0_80px_rgba(0,200,83,.15)]">
          <span className="inline-block bg-copa-green text-white text-[10px] font-bold tracking-[2px] uppercase px-5 py-1.5 rounded-full mb-6">
            🎨 Álbum de Colorir · Copa 2026
          </span>

          <ul className="text-left mb-6 divide-y divide-white/10">
            {items.map(item => (
              <li key={item.text} className="flex items-start gap-3 py-3 text-[14px] font-semibold text-white/90">
                <span className="text-base flex-shrink-0 mt-px">{item.ck}</span>
                {item.text}
              </li>
            ))}
          </ul>

          <p className="text-white/40 text-[15px] font-semibold line-through">De R$ 49,99</p>

          <div className="flex items-center justify-center gap-3 my-1">
            <span
              className="font-display text-white animate-pricepop"
              style={{
                fontSize: 'clamp(5rem,14vw,8rem)',
                lineHeight: '.88',
                textShadow: '0 4px 0 #007A2D, 0 8px 24px rgba(0,155,58,.5)',
              }}
            >
              <sup className="text-[36%] align-super mt-4 inline-block">R$</sup>
              9<sup className="text-[36%] align-super mt-4 inline-block">,99</sup>
            </span>
            <span className="bg-copa-green text-white font-display text-xl w-16 h-16 rounded-full flex items-center justify-center -rotate-12 shadow-[0_4px_16px_rgba(0,155,58,.5)] border-2 border-white/20 flex-shrink-0">
              -84%
            </span>
          </div>

          <p className="text-white/40 text-xs font-semibold mb-6 tracking-wide">
            Pagamento único · sem mensalidade · para sempre seu
          </p>

          <CTAButton
            href="https://pay.lowify.com.br/checkout?product_id=eCUU2y"
            size="lg"
            className="w-full sm:w-auto"
          >
            ⚽ QUERO O MEU ÁLBUM AGORA
          </CTAButton>

          <div className="inline-flex items-center gap-2.5 bg-copa-green/15 border border-copa-green/35 rounded-xl px-4 py-3 mt-5 text-[13px] font-semibold text-white/80">
            <span className="text-lg">🛡️</span>
            <span><strong>Garantia de 7 dias.</strong> Não gostou? Devolvemos cada centavo, sem perguntas.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
