import Buttons from "../components/Buttons"
import { arrowRight } from "../assets/icons"
import { carro } from "../assets/images"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-16 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <p className="font-montserrat text-coral-red text-lg font-bold">
          Sobre a D’Tudo Varejo
        </p>

        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Variedade, preço e
          <span className="text-coral-red"> praticidade </span>
          para sua rotina
        </h2>

        <p className="mt-6 lg:max-w-lg info-text">
          A D’Tudo Varejo reúne produtos para obra, reforma, casa e dia a dia,
          com atendimento direto e soluções práticas para quem busca agilidade
          na compra.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Ferramentas, tintas, materiais elétricos, tubos, telas, utilidades e
          muito mais em um só lugar.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          <div className="rounded-3xl bg-white p-5 shadow-lg">
            <p className="text-3xl font-palanquin font-bold text-coral-red">
              +100
            </p>
            <p className="font-montserrat text-slate-gray">produtos</p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-lg">
            <p className="text-3xl font-palanquin font-bold text-coral-red">
              24h
            </p>
            <p className="font-montserrat text-slate-gray">atendimento</p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-lg">
            <p className="text-3xl font-palanquin font-bold text-coral-red">
              Fácil
            </p>
            <p className="font-montserrat text-slate-gray">pelo WhatsApp</p>
          </div>
        </div>

        <div className="mt-11">
          <a href="#contact-us">
            <Buttons label="Falar com a loja" iconURL={arrowRight} />
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center relative rounded-[40px] bg-[#fff5f0] p-10 overflow-hidden">
        <div className="absolute w-[420px] h-[420px] bg-coral-red opacity-10 blur-[100px] rounded-full" />

        <img
          src={carro}
          alt="Produtos D’Tudo Varejo"
          width={570}
          height={522}
          className="object-contain relative z-10 max-h-[430px]"
        />
      </div>
    </section>
  )
}

export default SuperQuality