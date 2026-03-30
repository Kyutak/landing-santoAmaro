"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, FileText, ArrowRight } from "lucide-react"

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=%2B5583999420291&text&type=phone_number&app_absent=0"
const RESULTS_LINK = "https://portal.worklabweb.com.br/resultados-on-line/3047"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=1080&fit=crop&q=80"
          alt="Clínica médica moderna"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
              Excelência em saúde há mais de 10 anos
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance">
              Sua saúde em{" "}
              <span className="text-primary">boas mãos</span>
            </h1>
            
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              A Clínica Amare oferece atendimento humanizado com tecnologia de ponta. 
              Realizamos exames laboratoriais, radiologia e consultas com especialistas qualificados.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <Button 
                asChild 
                size="default" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-6 sm:px-8"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </a>
              </Button>
              <Button 
                asChild 
                size="default" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base px-6 sm:px-8 backdrop-blur-sm"
              >
                <a href={RESULTS_LINK} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  Ver Resultados
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">10+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Anos de experiência</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">15+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Especialidades</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">5k+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Pacientes atendidos</p>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="bg-card/80 backdrop-blur-md p-6 xl:p-8 rounded-3xl shadow-2xl border border-border max-w-md">
              <div className="flex items-center gap-3 xl:gap-4 mb-4 xl:mb-6">
                <div className="w-12 h-12 xl:w-14 xl:h-14 bg-primary rounded-2xl flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 xl:w-7 xl:h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-lg xl:text-xl font-bold text-foreground">Resultados Rápidos</p>
                  <p className="text-sm text-muted-foreground">Exames em até 24h</p>
                </div>
              </div>
              <div className="space-y-3 xl:space-y-4">
                <div className="flex items-center gap-3 p-2.5 xl:p-3 bg-primary/5 rounded-xl">
                  <div className="w-2.5 h-2.5 xl:w-3 xl:h-3 bg-green-500 rounded-full" />
                  <span className="text-sm text-foreground">Laboratório próprio</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 xl:p-3 bg-primary/5 rounded-xl">
                  <div className="w-2.5 h-2.5 xl:w-3 xl:h-3 bg-green-500 rounded-full" />
                  <span className="text-sm text-foreground">Equipamentos modernos</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 xl:p-3 bg-primary/5 rounded-xl">
                  <div className="w-2.5 h-2.5 xl:w-3 xl:h-3 bg-green-500 rounded-full" />
                  <span className="text-sm text-foreground">Resultados online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
