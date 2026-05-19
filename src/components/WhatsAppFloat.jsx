import { whatsappLink } from "../constants"

const WhatsAppFloat = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-3xl transition duration-300 hover:scale-110 hover:bg-green-700"
      aria-label="Chamar no WhatsApp"
    >
      <span className="text-3xl">☏</span>
    </a>
  )
}

export default WhatsAppFloat