import {
  instagram,
  shieldTick,
  support,
  truckFast,
} from "../assets/icons"

import {
  cabo,
  furadeira,
  cano,
  tela,
  pia,
  tinta,
  carro,
  customer1,
  customer2,
} from "../assets/images"

export const whatsappLink = "https://wa.me/5585992896703"

export const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#products", label: "Ofertas" },
    { href: "#about-us", label: "Sobre" },
    { href: "#contact-us", label: "Contato" },
]

export const shoes = [
    {
        thumbnail: furadeira,
        bigShoe: furadeira,
    },
    {
        thumbnail: cabo,
        bigShoe: cabo,
    },
    {
        thumbnail: cano,
        bigShoe: cano,
    },
]

export const statistics = [
    { value: "+500", label: "clientes atendidos" },
    { value: "+100", label: "produtos variados" },
    { value: "24h", label: "atendimento rápido" },
]

export const products = [
    {
        imgURL: cabo,
        name: "Cabos elétricos",
        price: "Consulte ofertas",
    },
    {
        imgURL: furadeira,
        name: "Ferramentas",
        price: "Preços especiais",
    },
    {
        imgURL: cano,
        name: "Tubos e conexões",
        price: "Linha completa",
    },
    {
        imgURL: tela,
        name: "Telas metálicas",
        price: "Sob consulta",
    },
    {
        imgURL: pia,
        name: "Pias e cubas",
        price: "A partir de ofertas",
    },
    {
        imgURL: tinta,
        name: "Tintas",
        price: "Consulte cores",
    },
    {
        imgURL: carro,
        name: "Carro de mão",
        price: "Preços especiais",
    },
    {
        imgURL: cabo,
        name: "Materiais elétricos",
        price: "Entrega rápida",
    },
]

export const services = [
    {
        imgURL: truckFast,
        label: "Entrega rápida",
        subtext: "Receba seus produtos com praticidade e agilidade.",
    },
    {
        imgURL: shieldTick,
        label: "Compra segura",
        subtext: "Atendimento direto, simples e confiável.",
    },
    {
        imgURL: support,
        label: "Atendimento fácil",
        subtext: "Fale com a equipe pelo WhatsApp e confira as ofertas.",
    },
]

export const reviews = [
    {
        imgURL: customer1,
        customerName: "Cliente D’Tudo",
        rating: 5,
        feedback:
            "Atendimento rápido, produtos variados e preços muito bons. Recomendo!",
    },
    {
        imgURL: customer2,
        customerName: "Cliente D’Tudo",
        rating: 5,
        feedback:
            "Gostei muito da praticidade de comprar direto pelo WhatsApp.",
    },
]

export const footerLinks = [
    {
        title: "Menu",
        links: [
            { name: "Início", link: "#home" },
            { name: "Ofertas", link: "#products" },
            { name: "Sobre", link: "#about-us" },
            { name: "Contato", link: "#contact-us" },
        ],
    },
    {
        title: "Categorias",
        links: [
            { name: "Utilidades", link: "#products" },
            { name: "Casa", link: "#products" },
            { name: "Eletrônicos", link: "#products" },
            { name: "Promoções", link: "#products" },
        ],
    },
    {
        title: "Contato",
        links: [
            { name: "WhatsApp", link: whatsappLink },
            {
                name: "Instagram",
                link: "https://www.instagram.com/loja.dtudovarejo/",
            },
        ],
    },
]

export const socialMedia = [
    { src: instagram, alt: "instagram logo" },
]