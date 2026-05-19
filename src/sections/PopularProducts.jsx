import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <p className="font-montserrat text-coral-red text-lg font-semibold">
          Promoções e novidades
        </p>

        <h2 className="text-4xl font-palanquin font-bold">
          Ofertas em <span className="text-coral-red">destaque</span>
        </h2>

        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Confira algumas categorias e produtos mais procurados na D’Tudo
          Varejo. Fale pelo WhatsApp para consultar disponibilidade e valores.
        </p>
      </div>

      <div className="mt-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-6 gap-10">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts