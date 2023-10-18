import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FooterIcons from './components/FooterIcons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Auth',
  description: 'Designed IbnDev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          
          {children}

        <Footer />

        <FooterIcons />
      </body>
    </html>
  )
}
