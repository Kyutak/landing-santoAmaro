"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, Shield, Clock, CheckCircle } from "lucide-react"

const RESULTS_LINK = "https://portal.worklabweb.com.br/resultados-on-line/3047"

const features = [
  {
    icon: Shield,
    title: "Acesso Seguro",
    description: "Seus dados protegidos com criptografia",
  },
  {
    icon: Clock,
    title: "Disponível 24h",
    description: "Acesse a qualquer hora do dia",
  },
  {
    icon: CheckCircle,
    title: "Fácil e Rápido",
    description: "Interface simples para visualizar",
  },
]

export function Results() {
  return (
    <section id="resultados" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop&q=80"
          alt="Laboratório de análises clínicas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
              Resultados Online
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-balance">
              Acesse seus resultados de exames online
            </h2>
            
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg opacity-90 leading-relaxed text-pretty">
              Não precisa mais ir até a clínica para pegar seus resultados. 
              Acesse o portal online e visualize seus exames de forma prática e segura.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm lg:text-base">{feature.title}</h3>
                  <p className="text-xs opacity-80 mt-1 hidden sm:block">{feature.description}</p>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              size="default" 
              className="mt-6 sm:mt-8 bg-white text-primary hover:bg-white/90 text-sm sm:text-base px-6 sm:px-8"
            >
              <a href={RESULTS_LINK} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                Acessar Resultados
              </a>
            </Button>
          </div>

          {/* Card */}
          <div className="relative hidden lg:block">
            <div className="bg-card/95 backdrop-blur-md text-card-foreground p-6 xl:p-8 rounded-3xl shadow-2xl">
              <div className="flex items-center gap-3 xl:gap-4 mb-4 xl:mb-6">
                <div className="w-12 h-12 xl:w-14 xl:h-14 bg-primary rounded-2xl flex items-center justify-center">
                  <FileText className="w-6 h-6 xl:w-7 xl:h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-lg xl:text-xl font-bold">Portal Seguro</p>
                  <p className="text-sm text-muted-foreground">WorkLabWeb</p>
                </div>
              </div>
              <div className="space-y-3 xl:space-y-4">
                <div className="flex items-center gap-3 p-3 xl:p-4 bg-primary/5 rounded-xl">
                  <CheckCircle className="w-4 h-4 xl:w-5 xl:h-5 text-green-500" />
                  <span className="text-sm text-foreground">Acesse com seu CPF</span>
                </div>
                <div className="flex items-center gap-3 p-3 xl:p-4 bg-primary/5 rounded-xl">
                  <CheckCircle className="w-4 h-4 xl:w-5 xl:h-5 text-green-500" />
                  <span className="text-sm text-foreground">Baixe em PDF</span>
                </div>
                <div className="flex items-center gap-3 p-3 xl:p-4 bg-primary/5 rounded-xl">
                  <CheckCircle className="w-4 h-4 xl:w-5 xl:h-5 text-green-500" />
                  <span className="text-sm text-foreground">Compartilhe com seu médico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
