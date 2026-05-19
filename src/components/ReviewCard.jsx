import { star } from "../assets/icons"

const ReviewCard = ({ customerName, imgURL, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col bg-white rounded-[30px] px-10 py-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 max-w-[430px] border border-gray-100">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[110px] h-[110px]"
      />

      <p className="mt-6 max-w-sm text-center info-text">“{feedback}”</p>

      <div className="mt-5 flex justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} alt="estrela" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>

      <h3 className="mt-2 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  )
}

export default ReviewCard