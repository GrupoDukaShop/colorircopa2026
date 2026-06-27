export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/40 text-center py-8 px-5 text-[13px] font-semibold">
      <div className="flex justify-center gap-6 flex-wrap mb-2">
        {['Política de Privacidade', 'Termos de Uso', 'Suporte'].map(link => (
          <a key={link} href="#" className="text-white/55 hover:text-copa-gold transition-colors">
            {link}
          </a>
        ))}
      </div>
      <p>© 2026 DukaShop · Todos os direitos reservados</p>
    </footer>
  )
}
