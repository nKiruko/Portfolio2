
import './globals.css'
import type { Metadata } from 'next'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Sidebar from '@/components/sidebar'
import { lato } from './fonts'

export const runtime = 'edge'

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
    <html lang="en" className={lato.className}>
      <body className="flex flex-col bg-main text-black select-none">
        <Navbar /> 
        <Sidebar />
        
        <main className=''>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
