import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Quem compra,
        <span className="text-coral-red"> recomenda</span>
      </h3>

      <p className="m-auto mt-4 max-w-2xl text-center info-text">
        Atendimento rápido, variedade e praticidade para quem quer encontrar
        produtos úteis sem complicação.
      </p>

      <div className="mt-20 flex flex-1 justify-evenly items-stretch max-lg:flex-col gap-10">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName + review.feedback} {...review} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews