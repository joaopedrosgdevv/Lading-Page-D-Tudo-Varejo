const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[30px] shadow-lg px-10 py-12 bg-white hover:shadow-2xl hover:-translate-y-2 duration-300 border border-gray-100">
      <div className="w-16 h-16 flex justify-center items-center bg-coral-red rounded-2xl shadow-md">
        <img src={imgURL} alt={label} width={32} height={32} />
      </div>

      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>

      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  )
}

export default ServiceCard