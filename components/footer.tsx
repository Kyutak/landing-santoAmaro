"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Phone, MapPin } from "lucide-react"

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=%2B5583999420291&text&type=phone_number&app_absent=0"
const INSTAGRAM_LINK = "https://www.instagram.com/gruposantoamaro/"
const FACEBOOK_LINK = "https://www.facebook.com/profile.php?id=61562738833415"
const RESULTS_LINK = "https://portal.worklabweb.com.br/resultados-on-line/3047"

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#resultados", label: "Resultados Online" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#localizacao", label: "Localização" },
]

const services = [
  "Raio-X Digital",
  "Ultrassonografia",
  "Análises Clínicas",
  "Ortopedia",
  "Clínico Geral",
  "Fisioterapia",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/logo.png"
                alt="Grupo Santo Amaro"
                width={32}
                height={32}
                className="rounded-md"
                style={{ width: 32, height: 32 }}
              />
              <div>
                <span className="text-sm sm:text-base font-bold">Grupo Santo Amaro</span>
                <p className="text-[10px] sm:text-xs opacity-70">Raio-X e Análises Clínicas</p>
              </div>
            </Link>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm opacity-80 leading-relaxed">
              Cuidando da saúde de Itabaiana e região com excelência, tecnologia e atendimento humanizado.
            </p>
            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Links Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Serviços</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-xs sm:text-sm opacity-80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Contato</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  (83) 99942-0291
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm opacity-80">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                R. Floriano Peixoto - Botafogo, Itabaiana - PB
              </li>
              <li>
                <a
                  href={RESULTS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary text-primary-foreground rounded-lg text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors mt-2"
                >
                  Resultados Online
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-background/10 text-center">
          <p className="text-xs sm:text-sm opacity-60">
            {new Date().getFullYear()} Grupo Santo Amaro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
