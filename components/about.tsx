"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Users, Award, Heart, Clock } from "lucide-react"

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=%2B5583999420291&text&type=phone_number&app_absent=0"

const values = [
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Tratamos cada paciente com carinho e dedicação",
  },
  {
    icon: Award,
    title: "Excelência Técnica",
    description: "Equipamentos modernos e profissionais qualificados",
  },
  {
    icon: Heart,
    title: "Compromisso com a Saúde",
    description: "Sua saúde é nossa prioridade número um",
  },
  {
    icon: Clock,
    title: "Agilidade",
    description: "Resultados rápidos sem perder a qualidade",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&q=80"
                alt="Clínica Grupo Santo Amaro"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 sm:w-48 h-32 sm:h-48 bg-primary/10 rounded-2xl sm:rounded-3xl -z-10" />
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 sm:w-32 h-20 sm:h-32 bg-secondary/10 rounded-2xl sm:rounded-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">Sobre Nós</span>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Cuidando da saúde de Itabaiana e região
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
              O Grupo Santo Amaro nasceu com a missão de levar saúde de qualidade para Itabaiana e toda a região. 
              Com uma equipe de profissionais dedicados e equipamentos de última geração, oferecemos um atendimento 
              completo que vai desde exames laboratoriais até consultas especializadas.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
              Nossa clínica é referência em Raio-X e Análises Clínicas, sempre buscando a excelência 
              no diagnóstico e no cuidado com nossos pacientes.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm lg:text-base text-foreground">{value.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1 hidden sm:block">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              size="default" 
              className="mt-6 sm:mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
