import React from 'react'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/ui/Header/Header'
import './globals.css'
import Footer from "@/components/ui/Footer/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton/ScrollToTopButton";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Patricia Segantine - Web Developer',
  description: 'Personal web developer portfolio',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
    <ThemeProvider attribute="class">
      <body className={`${inter.className} min-h-screen`}>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
      <ScrollToTopButton/>
      </body>
    </ThemeProvider>
    </html>
  )
}
