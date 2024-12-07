import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'
import FloatingButton from "@/components/FloatingButton";
import Footer from "@/components/Footer";

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
    <html lang="pt-BR" className="scroll-smooth">
    <body className={`${inter.className} bg-gray-50 text-dark`}>
    <Header/>
    <main>
      {children}
      <FloatingButton/>
    </main>
    <Footer/>
    </body>
    </html>
  )
}
