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
    <body className={`${inter.className} min-h-screen bg-gray-50 text-dark`}>
    <ThemeProvider attribute="class">
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
      <ScrollToTopButton/>
    </ThemeProvider>
    </body>
    </html>
  )
}
