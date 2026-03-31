import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Clínica Amarena | Análises Clínicas em João Pessoa-PB',
  description: 'Clínica de Raio-X, Análises Clínicas e Consultas Médicas em João Pessoa-PB. Oferecemos radiologia, ultrassonografia, ortopedia e diversas especialidades com atendimento humanizado.',
  keywords: 'raio-x joão pessoa, análises clínicas brasil, clínica médica brasil, ultrassonografia, ortopedia, laboratório joão pessoa pb',
  openGraph: {
    title: 'Clínica Amarena | Análises Clínicas',
    description: 'Sua saúde em boas mãos. Exames laboratoriais, radiologia e consultas especializadas em João Pessoa-PB.',
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
