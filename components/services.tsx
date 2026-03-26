"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Scan, FlaskConical, Bone, Activity } from "lucide-react"

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=%2B5583999420291&text&type=phone_number&app_absent=0"

const services = [
  {
    icon: Scan,
    title: "Radiologia de Precisão",
    description: "Raio-X digital, Ultrassonografia e exames de imagem com equipamentos modernos e laudos precisos.",
    image: "https://images.unsplash.com/photo-1516069677018-378515003435?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: FlaskConical,
    title: "Análises Clínicas",
    description: "Exames laboratoriais completos com resultados confiáveis e rápidos. Hemograma, bioquímica e mais.",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Bone,
    title: "Ortopedia Especializada",
    description: "Tratamento especializado para problemas ósseos e articulares com foco na recuperação de movimentos.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Activity,
    title: "Consultas Médicas",
    description: "Diversas especialidades médicas com profissionais qualificados e atendimento humanizado.",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=400&fit=crop&q=80",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Cuidado completo para sua saúde
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty">
            Oferecemos uma ampla gama de serviços médicos com tecnologia avançada e profissionais dedicados ao seu bem-estar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-36 sm:h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 sm:mb-4">{service.description}</p>
                <Button 
                  asChild 
                  variant="ghost" 
                  size="sm"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    Agendar agora
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
