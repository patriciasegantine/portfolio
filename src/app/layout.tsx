import React from 'react'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Header from '@/components/ui/Header/Header'
import Footer from "@/components/ui/Footer/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton/ScrollToTopButton";
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Patricia Segantine — Senior Frontend Developer',
  description: 'Senior Frontend Developer building reliable, maintainable interfaces for B2B and B2C SaaS with React, TypeScript, and Next.js.',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen flex flex-col font-sans`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
      <Header/>
      <main className="flex-1">
        {children}
      </main>
      <Footer/>
      <ScrollToTopButton/>
      </ThemeProvider>
      </body>
    </html>
  )
}
