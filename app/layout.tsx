import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@fontsource/montserrat/500.css"; 
import "@fontsource/montserrat/700.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WEB MAGNETISM',
  description: 'Generated by ismail',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
