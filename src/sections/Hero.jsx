import { useState } from "react"
import { motion } from "framer-motion"
import { arrowRight } from "../assets/icons"
import { furadeira } from "../assets/images"
import Buttons from "../components/Buttons"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics, whatsappLink } from "../constants"

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(furadeira)

  return (
    <section
      id="home"
      className="w-full min-h-screen max-container flex xl:flex-row flex-col justify-center gap-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-40 max-sm:pt-32"
      >
        <p className="text-xl max-sm:text-base font-montserrat text-coral-red font-bold">
          Ofertas, utilidades e materiais para o dia a dia
        </p>

        <h1 className="mt-8 font-palanquin text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-[48px] max-sm:leading-[58px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 max-sm:pr-0">
            D’Tudo para
          </span>

          <br />

          <span className="text-coral-red inline-block mt-3">
            sua casa
          </span>
        </h1>

        <p className="font-montserrat text-slate-gray text-lg max-sm:text-base leading-8 mt-6 mb-10 sm:max-w-md">
          Ferramentas, tintas, materiais elétricos, tubos, telas, utilidades e
          muito mais com atendimento rápido pelo WhatsApp.
        </p>

        <div className="flex flex-wrap gap-4 max-sm:w-full">
          <a href="#products" className="max-sm:w-full">
            <Buttons label="Ver ofertas" iconURL={arrowRight} fullWidth />
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-green-600 rounded-full text-white border-green-600 hover:bg-green-700 hover:scale-105 duration-300 max-sm:w-full"
          >
            Chamar no WhatsApp
          </a>
        </div>

        <div className="flex justify-start items-start flex-wrap w-full mt-14 gap-10 max-sm:gap-6">
          {statistics.map((stat) => (
            <div key={stat.label} className="max-sm:w-[45%]">
              <p className="text-4xl max-sm:text-3xl font-palanquin font-bold">
                {stat.value}
              </p>

              <p className="leading-7 font-montserrat text-slate-gray max-sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="xl:flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center xl:min-h-screen max-xl:pt-28 max-xl:pb-44 max-sm:pt-20 max-sm:pb-36 bg-[#fff5f0] overflow-visible rounded-bl-[50px]"
        >
          <div className="absolute w-[520px] h-[520px] max-sm:w-[280px] max-sm:h-[280px] bg-coral-red opacity-20 blur-[130px] rounded-full" />

          <div className="absolute right-10 top-24 w-40 h-40 bg-orange-300 opacity-30 blur-[80px] rounded-full" />

          <motion.img
            src={bigShoeImage}
            alt="Produto D’Tudo Varejo"
            width={760}
            height={520}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="object-contain relative z-10 max-xl:w-[600px] max-md:w-[430px] max-sm:w-[300px]"
          />

          <div className="absolute top-24 right-10 bg-white rounded-3xl shadow-2xl p-6 z-20 hidden lg:block">
            <p className="text-sm font-bold text-coral-red">PROMOÇÃO</p>

            <h3 className="text-3xl font-black mt-2">
              Ofertas do dia
            </h3>

            <p className="text-slate-gray mt-2">
              Consulte disponibilidade
            </p>
          </div>

          <div className="absolute bottom-16 left-10 bg-black rounded-3xl shadow-2xl p-6 z-20 hidden lg:block">
            <p className="text-sm font-bold text-yellow-400">
              ATENDIMENTO RÁPIDO
            </p>

            <h3 className="text-2xl font-black mt-2 text-white">
              Direto no WhatsApp
            </h3>
          </div>

          <div className="hidden xl:flex sm:gap-6 gap-3 absolute bottom-[-55px] left-1/2 -translate-x-1/2 z-30">
            {shoes.map((shoe) => (
              <div key={shoe.thumbnail}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) =>
                    setBigShoeImage(shoe)
                  }
                  bigShoeImage={bigShoeImage}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="xl:hidden flex justify-center gap-4 px-6 mt-4 mb-10 relative z-30">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) =>
                  setBigShoeImage(shoe)
                }
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero