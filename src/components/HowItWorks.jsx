import { SectionHeader } from './ui/SectionHeader'

const steps = [
  { num: 1, icon: '🛒', title: 'Clique e compre',    body: 'Toque no botão e finalize com Pix, cartão ou boleto. Leva menos de 1 minuto.' },
  { num: 2, icon: '📩', title: 'Receba no e-mail',   body: 'Assim que o pagamento é confirmado, o link de download chega no seu e-mail.' },
  { num: 3, icon: '🖨️', title: 'Imprima e pinte',   body: 'Baixe o PDF e imprima quantas vezes quiser, em casa ou na gráfica. É seu pra sempre.' },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="reveal">
          <SectionHeader
            label="Simples assim"
            title="Como funciona"
            body="Do clique ao desenho impresso em poucos minutos. Sem complicação."
          />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {/* Connector (desktop only) */}
          <div className="hidden md:block absolute top-[40px] left-[calc(50%/3+16.66%)] right-[calc(50%/3+16.66%)] h-0.5 bg-gradient-to-r from-copa-green via-copa-gold to-copa-green opacity-30" />

          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`reveal ${['delay-1','delay-2','delay-3'][i]} relative bg-[#F8FAFF] border border-gray-100 rounded-3xl px-6 pt-10 pb-7 text-center shadow-card hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-copa-green text-white font-display text-xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,155,58,.4)] border-[3px] border-white">
                {s.num}
              </div>
              <span className="text-4xl block mb-3">{s.icon}</span>
              <h3 className="font-display text-[1.35rem] text-navy-800 mb-2 tracking-wide">{s.title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
