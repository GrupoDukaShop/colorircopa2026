import { SectionHeader } from './ui/SectionHeader'

const features = [
  { icon: '⚽', title: 'Convocação Atualizada',    body: 'Os 26 jogadores convocados em 18/05/2026 — a lista mais recente da Seleção para a Copa!', color: 'bg-copa-green' },
  { icon: '🎨', title: 'Estilo HQ / Cartoon',      body: 'Traços grossos no estilo quadrinhos, perfeitos para crianças de todas as idades.', color: 'bg-copa-gold' },
  { icon: '🖨️', title: 'Imprima Infinitas Vezes', body: 'PDF que você baixa uma vez e imprime sempre. Ideal para presentear ou usar na escola.', color: 'bg-navy-600' },
  { icon: '🎁', title: '+30 Desenhos para Colorir', body: 'Jogadores, estádios, taças, bolas e muito mais — tudo em estilo HQ com traços divertidos!', color: 'bg-copa-gold' },
  { icon: '⚡', title: 'Acesso na Hora',            body: 'Após confirmar o pagamento, o link chega direto no seu e-mail em poucos minutos.', color: 'bg-copa-green' },
  { icon: '👨‍👩‍👧', title: 'Para Toda a Família',   body: 'Pais, tios e professores adoram! Uma atividade que tira a criança do celular com alegria.', color: 'bg-navy-600' },
]

export default function Features() {
  return (
    <section className="py-20 md:py-28 px-5 bg-[#F0F4FF]">
      <div className="max-w-5xl mx-auto">
        <div className="reveal">
          <SectionHeader
            label="Por que esse álbum é diferente"
            title="Feito pra divertir de verdade"
            body="Cada detalhe foi pensado para ser fácil de imprimir, colorir e aproveitar em família."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal ${['delay-1','delay-2','delay-3','delay-1','delay-2','delay-3'][i]} relative bg-white rounded-3xl p-7 shadow-card border border-gray-100 overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${f.color}`} />
              <span className="text-4xl block mb-3">{f.icon}</span>
              <h3 className="font-display text-[1.3rem] text-navy-800 mb-2 tracking-wide">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
