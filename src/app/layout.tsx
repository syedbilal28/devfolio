import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "../components/styles/styles.scss"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Syed Bilal Ali - Full Stack Developer',
  description: 'Full Stack Developer @ Meistery Global Team | Former Google DSC Development Lead | Python | Django | Flask | React | Nextjs | Vue',
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
