"use client"

import { Button } from "@/components/ui/button"
import { 
  Heart, 
  Stethoscope,
  Sparkles, 
  Activity, 
  Baby, 
  Brain, 
  Apple, 
  Bone, 
  Scan, 
  MonitorCheck,
  Phone,
  File,
  ArrowRight
} from "lucide-react"

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=%2B5583999420291&text&type=phone_number&app_absent=0"

const specialties = [
  { icon: Heart, name: "Angiologia", description: "Tratamentos vasculares" },
  { icon: Stethoscope, name: "Clínico Geral", description: "Atendimento geral" },
  { icon: Sparkles, name: "Dermatologia", description: "Cuidados com a pele" },
  { icon: Activity, name: "Fisioterapia", description: "Reabilitação e movimento" },
  { icon: Baby, name: "Ginecologia e Obstetrícia", description: "Saúde da mulher" },
  { icon: Brain, name: "Neurocirurgia", description: "Cirurgias neurológicas" },
  { icon: Apple, name: "Nutricionista", description: "Alimentação saudável" },
  { icon: Bone, name: "Ortopedia", description: "Ossos e articulações" },
  { icon: Scan, name: "Radiologia", description: "Exames de imagem" },
  { icon: MonitorCheck, name: "Ultrassonografia", description: "Diagnóstico por imagem" },
  { icon: Activity, name: "Urologia", description: "Sistema urinário" },
  { icon: File, name: "Psquiatria", description: "Atendimento psicológico" },
]

export function Specialties() {
  return (
    <section id="especialidades" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">Especialidades</span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Diversas especialidades médicas
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty">
            Nossa equipe conta com profissionais qualificados em diversas áreas da medicina para cuidar de você e sua família.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {specialties.map((specialty, index) => (
            <a
              key={index}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                <specialty.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium sm:font-semibold text-xs sm:text-base text-foreground truncate">{specialty.name}</h3>
                <p className="text-xs text-muted-foreground truncate hidden sm:block">{specialty.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 hidden sm:block" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <Button 
            asChild 
            size="default" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-2" />
              Agendar Consulta
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
