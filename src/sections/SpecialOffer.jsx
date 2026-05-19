import { arrowRight } from "../assets/icons"
import { tinta } from "../assets/images"
import Buttons from "../components/Buttons"
import { whatsappLink } from "../constants"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-16 max-container">
      
      <div className="flex-1 relative rounded-[40px] bg-black p-10 overflow-hidden">
        
        <div className="absolute -left-20 -top-20 w-[300px] h-[300px] bg-coral-red opacity-30 blur-[100px] rounded-full" />
        
        <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-yellow-400 opacity-20 blur-[100px] rounded-full" />

        <img
          src={tinta}
          alt="Promoção D’Tudo Varejo"
          width={773}
          height={687}
          className="object-contain w-full relative z-10 max-h-[520px]"
        />

        <div className="absolute top-8 left-8 z-20 rounded-full bg-coral-red px-5 py-2 text-white font-montserrat font-bold">
          OFERTA DA SEMANA
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        
        <p className="font-montserrat text-coral-red text-lg font-bold">
          Promoções especiais
        </p>

        <h2 className="mt-4 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Produtos com
          <span className="text-coral-red"> preços </span>
          que valem a pena
        </h2>

        <p className="mt-6 info-text">
          As ofertas da D’Tudo Varejo mudam com frequência. Fale com a equipe
          para consultar produtos disponíveis, condições e valores atualizados.
        </p>

        <p className="mt-6 info-text">
          Ideal para quem quer resolver compras de obra, reforma, casa e
          utilidades de forma rápida e prática.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          
          <a href={whatsappLink} target="_blank">
            <Buttons label="Chamar no WhatsApp" iconURL={arrowRight} />
          </a>

          <a href="#products">
            <Buttons
              label="Ver produtos"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </a>

        </div>
      </div>
    </section>
  )
}

export default SpecialOffer