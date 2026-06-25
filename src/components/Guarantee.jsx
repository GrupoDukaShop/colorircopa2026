export default function Guarantee() {
  return (
    <section
      className="py-16 md:py-20 px-5 border-t-2 border-b-2 border-white/15"
      style={{ background: 'linear-gradient(135deg, #007A2D, #009B3A)' }}
    >
      <div className="max-w-4xl mx-auto flex items-center gap-8 flex-wrap justify-center text-center reveal">
        <img
          src="selo-garantia.png"
          alt="Garantia 7 dias"
          className="w-32 md:w-36 flex-shrink-0 -rotate-6"
          style={{ filter: 'drop-shadow(4px 5px 0 rgba(0,0,0,.25))' }}
        />
        <div className="max-w-[440px] text-left" style={{ textAlign: 'left' }}>
          <h2 className="font-display text-[clamp(1.9rem,5vw,2.8rem)] text-white leading-tight tracking-wide mb-3">
            Risco zero pra você
          </h2>
          <p className="text-white/90 text-[15px] font-medium leading-relaxed">
            Você tem 7 dias para conhecer o álbum. Se por qualquer motivo não gostar,
            é só pedir e devolvemos 100% do valor. O risco é todo nosso.
          </p>
        </div>
      </div>
    </section>
  )
}
