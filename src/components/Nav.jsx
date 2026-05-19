import { useState } from "react"
import { hamburger } from "../assets/icons"
import { logo } from "../assets/images"
import { navLinks, whatsappLink } from "../constants"

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="padding-x py-4 fixed top-0 left-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="relative flex justify-between items-center max-container">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="D'Tudo Varejo"
            className="w-[165px] max-sm:w-[125px] object-contain"
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-14 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg font-semibold text-slate-gray hover:text-coral-red duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink}
          target="_blank"
          className="max-lg:hidden bg-coral-red text-white font-montserrat font-bold px-6 py-3 rounded-full hover:scale-105 duration-300 shadow-md"
        >
          WhatsApp
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="hidden max-lg:flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f5f5]"
        >
          <img src={hamburger} alt="menu" width={24} height={24} />
        </button>

        {open && (
          <div className="absolute right-0 top-16 w-[260px] rounded-3xl bg-white p-6 shadow-2xl border border-gray-100 lg:hidden">
            <ul className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-montserrat text-lg font-semibold text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              className="mt-6 block rounded-full bg-coral-red px-6 py-3 text-center font-montserrat font-bold text-white"
            >
              WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Nav