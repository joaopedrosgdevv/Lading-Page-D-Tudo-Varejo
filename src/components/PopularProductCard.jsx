import { star } from "../assets/icons"
import { whatsappLink } from "../constants"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="group flex flex-1 flex-col w-full rounded-[30px] bg-white p-5 shadow-lg hover:shadow-2xl hover:-translate-y-3 duration-300 overflow-hidden border border-gray-100">
      <div className="relative bg-[#f8f8f8] rounded-[24px] flex justify-center items-center h-[270px] max-sm:h-[230px] overflow-hidden">
        <div className="absolute top-4 left-4 z-20 bg-coral-red text-white text-sm font-bold px-4 py-1 rounded-full font-montserrat shadow-md">
          OFERTA
        </div>

        <div className="absolute w-[220px] h-[220px] bg-coral-red opacity-10 blur-[80px] rounded-full" />

        <img
          src={imgURL}
          alt={name}
          className="w-[250px] h-[210px] max-sm:w-[210px] max-sm:h-[170px] object-contain relative z-10 group-hover:scale-110 duration-500"
        />
      </div>

      <div className="mt-6 flex justify-start gap-2.5 items-center">
        <img src={star} alt="avaliação" width={22} height={22} />

        <p className="font-montserrat text-lg leading-normal text-slate-gray font-semibold">
          4.9
        </p>

        <span className="text-green-600 text-sm font-bold font-montserrat">
          • Disponível
        </span>
      </div>

      <h3 className="mt-3 text-2xl max-sm:text-xl leading-normal font-bold font-palanquin">
        {name}
      </h3>

      <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl max-sm:text-lg leading-normal">
        {price}
      </p>

      <p className="mt-2 text-slate-gray font-montserrat leading-6 text-sm">
        Consulte disponibilidade e condições diretamente no WhatsApp.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        className="mt-6 text-center bg-coral-red text-white font-montserrat font-bold py-3 rounded-full hover:scale-105 hover:bg-red-700 duration-300 shadow-md"
      >
        Chamar no WhatsApp
      </a>
    </div>
  )
}

export default PopularProductCard