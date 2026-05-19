const categories = [
  {
    title: "Casa",
    description: "Itens úteis para o dia a dia.",
    icon: "🏠",
  },
  {
    title: "Utilidades",
    description: "Produtos práticos e acessíveis.",
    icon: "🛒",
  },
  {
    title: "Eletrônicos",
    description: "Acessórios e novidades.",
    icon: "📱",
  },
  {
    title: "Promoções",
    description: "Ofertas por tempo limitado.",
    icon: "💲",
  },
]

const Categories = () => {
  return (
    <section className="max-container">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="font-montserrat text-lg font-semibold text-coral-red">
          Categorias
        </p>

        <h2 className="mt-2 font-palanquin text-4xl font-bold">
          Encontre de tudo na
          <span className="text-coral-red"> D’Tudo</span>
        </h2>

        <p className="mt-4 max-w-2xl font-montserrat text-lg leading-8 text-slate-gray">
          Uma seleção de produtos para casa, utilidades, presentes, acessórios e
          ofertas especiais.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <a
            key={category.title}
            href="#products"
            className="group rounded-[28px] bg-white p-8 shadow-3xl transition duration-300 hover:-translate-y-2"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-4xl transition duration-300 group-hover:bg-coral-red">
              <span className="transition duration-300 group-hover:scale-110">
                {category.icon}
              </span>
            </div>

            <h3 className="font-palanquin text-3xl font-bold">
              {category.title}
            </h3>

            <p className="mt-3 font-montserrat text-lg leading-7 text-slate-gray">
              {category.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Categories