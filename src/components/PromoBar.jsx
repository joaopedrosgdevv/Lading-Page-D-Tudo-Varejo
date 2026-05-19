const PromoBar = () => {
  return (
    <div className="fixed top-0 left-0 z-30 w-full overflow-hidden bg-black py-2 text-white">
      <div className="animate-marquee whitespace-nowrap font-montserrat text-sm font-bold">
        <span className="mx-8">🔥 Ofertas todos os dias</span>
        <span className="mx-8">🚚 Entrega rápida</span>
        <span className="mx-8">💳 Pagamento facilitado</span>
        <span className="mx-8">🛍️ Produtos variados</span>
        <span className="mx-8">📲 Atendimento pelo WhatsApp</span>
        <span className="mx-8">🔥 Ofertas todos os dias</span>
        <span className="mx-8">🚚 Entrega rápida</span>
        <span className="mx-8">💳 Pagamento facilitado</span>
      </div>
    </div>
  )
}

export default PromoBar