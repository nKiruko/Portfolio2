import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/componants/navbar'
import Footer from '@/componants/footer'
export const runtime = 'edge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  <body className=" min-h-screen flex flex-col bg-primary text-white font-spartan">
        <nav className={inter.className}> 
        <Navbar /> 
        </nav>

        <main className="flex-grow">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
