import { useState } from 'react'
import { SectionHeader } from './ui/SectionHeader'

const faqs = [
  { q: 'Posso pagar com Pix?', a: 'Sim! Você paga com Pix (aprovação na hora), cartão de crédito ou boleto. Com o Pix o acesso costuma liberar em poucos minutos.' },
  { q: 'Como vou receber os livros?', a: 'Após a confirmação do pagamento, o link para baixar o material é enviado automaticamente para o seu e-mail em poucos minutos.' },
  { q: 'É um produto físico?', a: 'Não. São produtos digitais em PDF. Você baixa e imprime em casa ou em uma gráfica, quantas vezes quiser, sem custo adicional.' },
  { q: 'Posso comprar os dois livros?', a: 'Pode sim! Cada livro tem o seu próprio botão de compra. Basta finalizar um e depois o outro — ambos chegam por e-mail.' },
  { q: 'E se eu não gostar?', a: 'Você tem 7 dias de garantia. Se não gostar por qualquer motivo, é só entrar em contato que devolvemos 100% do valor pago.' },
  { q: 'Posso imprimir mais de uma vez?', a: 'Sim! O arquivo fica seu para sempre. Você pode imprimir as páginas quantas vezes precisar, para uso pessoal.' },
  { q: 'Para qual faixa etária é indicado?', a: 'É indicado para crianças que gostam de futebol e atividades de colorir. Ideal a partir dos 4 anos, com supervisão adulta para as menores.' },
  { q: 'Funciona no celular?', a: 'Sim! Você pode baixar pelo celular. Para imprimir, recomendamos abrir o PDF no computador ou enviar para uma gráfica próxima.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 md:py-28 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="reveal">
          <SectionHeader
            label="Dúvidas frequentes"
            title="Ficou alguma dúvida?"
          />
        </div>

        <div className="max-w-[680px] mx-auto mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-card">
              <button
                className="w-full flex items-center justify-between gap-3 px-6 py-5 text-left text-base font-bold text-navy-800 hover:text-copa-green transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <span
                  className="text-xl text-copa-green flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-350 ease-in-out"
                style={{ maxHeight: open === i ? '200px' : '0' }}
              >
                <p className="px-6 pb-5 text-[15px] text-gray-500 font-medium leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
