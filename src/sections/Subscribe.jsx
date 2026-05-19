import Buttons from "../components/Buttons"
import { whatsappLink } from "../constants"

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container relative overflow-hidden rounded-[40px] bg-[#111] px-10 py-16 text-white flex justify-between items-center max-lg:flex-col gap-10"
    >
      <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-coral-red opacity-30 blur-[100px]" />
      <div className="absolute -right-20 -bottom-20 h-[300px] w-[300px] rounded-full bg-yellow-400 opacity-20 blur-[100px]" />

      <div className="relative z-10">
        <p className="font-montserrat text-yellow-400 font-bold">
          Atendimento rápido
        </p>

        <h3 className="mt-3 text-4xl leading-[56px] lg:max-w-xl font-palanquin font-bold">
          Quer consultar preços e produtos disponíveis?
        </h3>

        <p className="mt-5 max-w-xl font-montserrat text-white-400 text-lg leading-8">
          Clique no botão e fale com a D’Tudo Varejo pelo WhatsApp.
        </p>
      </div>

      <a href={whatsappLink} target="_blank" className="relative z-10 w-fit">
        <Buttons label="Chamar no WhatsApp" fullWidth />
      </a>
    </section>
  )
}

export default Subscribe