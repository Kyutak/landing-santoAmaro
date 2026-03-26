import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Grupo Santo Amaro | Raio-X e Análises Clínicas em Itabaiana-PB',
  description: 'Clínica de Raio-X, Análises Clínicas e Consultas Médicas em Itabaiana-PB. Oferecemos radiologia, ultrassonografia, ortopedia e diversas especialidades com atendimento humanizado.',
  keywords: 'raio-x itabaiana, análises clínicas itabaiana, clínica médica itabaiana, ultrassonografia, ortopedia, laboratório itabaiana pb',
  openGraph: {
    title: 'Grupo Santo Amaro | Raio-X e Análises Clínicas',
    description: 'Sua saúde em boas mãos. Exames laboratoriais, radiologia e consultas especializadas em Itabaiana-PB.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
