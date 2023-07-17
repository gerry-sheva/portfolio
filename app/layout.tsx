import Navbar from './components/Navbar'
import './globals.css'
import { Cormorant, Urbanist } from 'next/font/google'

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant'
  })
const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist'
  })

export const metadata = {
  title: 'Gerry Sheva',
  description: "Gerry Sheva's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${urbanist.variable}`}>
      <body >{children}</body>
    </html>
  )
}
