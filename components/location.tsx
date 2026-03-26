"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=%2B5583999420291&text&type=phone_number&app_absent=0"
const INSTAGRAM_LINK = "https://www.instagram.com/gruposantoamaro/"
const FACEBOOK_LINK = "https://www.facebook.com/profile.php?id=61562738833415"
const MAPS_LINK = "https://www.google.com/maps/place/Grupo+Santo+Amaro+-+Raio+X+e+An%C3%A1lises+Cl%C3%ADnicas/@-7.330706,-35.3341423,17z"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "R. Floriano Peixoto - Botafogo, Itabaiana - PB, 58360-000",
    link: MAPS_LINK,
    linkText: "Ver no Mapa",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(83) 99942-0291",
    link: WHATSAPP_LINK,
    linkText: "Chamar no WhatsApp",
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    content: "Segunda a Sexta: 7h às 17h | Sábado: 7h às 12h",
    link: null,
    linkText: null,
  },
]

export function Location() {
  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">Localização</span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Venha nos visitar
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty">
            Estamos localizados no centro de Itabaiana-PB, com fácil acesso e estacionamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="relative w-full h-64 sm:h-80 lg:h-full min-h-[280px] lg:min-h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8661235788367!2d-35.3341423!3d-7.330706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac65ba2ed814c7%3A0x9251731f0706a8e0!2sGrupo%20Santo%20Amaro%20-%20Raio%20X%20e%20An%C3%A1lises%20Cl%C3%ADnicas!5e0!3m2!1sen!2sbr!4v1710000000000!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Grupo Santo Amaro"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.content}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-xs sm:text-sm mt-2 inline-block"
                      >
                        {item.linkText}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-4">Siga-nos nas redes sociais</h3>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <Button 
              asChild 
              size="default" 
              className="mt-6 sm:mt-8 bg-primary hover:bg-primary/90 text-primary-foreground w-fit"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Agendar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
