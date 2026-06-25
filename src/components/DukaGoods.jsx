import { CTAButton } from './ui/CTAButton'

const items = [
  '✅ Dezenas de desenhos novos', '✅ Estilo HQ / Cartoon',
  '✅ PDF pronto para imprimir',  '✅ Impressões ilimitadas',
  '⚡ Acesso imediato no e-mail', '🛡️ Garantia de 7 dias',
]

export default function DukaGoods() {
  return (
    <section
      id="duka-goods"
      className="relative py-20 md:py-28 px-5 overflow-hidden border-t-2 border-b-2 border-white/10"
      style={{ background: 'linear-gradient(150deg, #C0175A, #8E0A40)' }}
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-copa-gold/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-white/8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex justify-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-display text-base tracking-wide px-5 py-2.5 rounded-full">
            ✨ Complete sua coleção
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Book image */}
          <div className="flex items-center justify-center relative order-last md:order-first reveal delay-1">
            <div className="absolute w-72 h-72 rounded-full bg-copa-gold/25 blur-[80px]" />
            <div className="relative z-10">
              <img
                src="livro2.png"
                alt="Livro de Colorir Duka Goods"
                className="w-72 max-w-[75vw] rounded-2xl animate-float2"
                style={{ filter: 'drop-shadow(0 28px 55px rgba(0,0,0,.55))' }}
              />
              <span className="absolute -top-2 -left-2 bg-copa-gold text-navy-800 font-display text-sm px-4 py-2 rounded-xl shadow-lg animate-wobble z-20">
                🆕 Novo!
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left reveal delay-2">
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/55 block mb-2.5">
              Mais um lançamento DukaShop
            </span>
            <h2 className="font-display text-[clamp(2rem,5.5vw,3.2rem)] leading-[.95] tracking-wide text-white mb-4">
              Livro de Colorir
              <em className="not-italic text-copa-gold block" style={{ WebkitTextStroke: '1px #E0C400' }}>
                Duka Goods
              </em>
            </h2>
            <p className="text-white/80 text-[15px] leading-relaxed font-medium max-w-[460px] mb-6 mx-auto md:mx-0">
              Mais desenhos, mais diversão! Um novo livro de colorir cheio de páginas em estilo HQ
              para a criançada pintar à vontade. Leve junto com o álbum da Copa!
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7 max-w-[460px] mx-auto md:mx-0 text-left">
              {items.map(item => (
                <li key={item} className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-5 flex-wrap justify-center md:justify-start">
              <div className="text-left">
                <p className="text-white/40 text-[13px] font-semibold line-through">De R$ 39,99</p>
                <p
                  className="font-display text-white animate-pricepop"
                  style={{
                    fontSize: 'clamp(3rem,9vw,4.4rem)',
                    lineHeight: '.88',
                    textShadow: '0 3px 0 #C2185B',
                  }}
                >
                  <sup className="text-[40%] align-super mt-2 inline-block">R$</sup>
                  9<sup className="text-[40%] align-super mt-2 inline-block">,99</sup>
                </p>
              </div>
              <CTAButton
                href="https://pay.lowify.com.br/checkout?product_id=t6NWvH"
                variant="gold"
              >
                🎨 QUERO ESSE TAMBÉM
              </CTAButton>
            </div>

            <p className="text-white/45 text-xs font-bold tracking-wide mt-4">
              🔒 Compra 100% segura · Pix, cartão ou boleto
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
