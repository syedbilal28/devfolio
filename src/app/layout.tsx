import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "../components/styles/styles.scss"
import { StructuredData } from '@/components/seo/structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Syed Bilal Ali - Developer & Systems Analyst | Python, Django, React Expert',
    template: '%s | Syed Bilal Ali'
  },
  description: 'Developer & Systems Analyst specializing in Python, Django, React, and Next.js. Building scalable web applications and solving complex problems. Former Google DSC Development Lead. Expert in full-stack development, systems architecture, and product ownership.',
  keywords: [
    'Syed Bilal Ali',
    'Developer',
    'Systems Analyst',
    'Python Developer',
    'Django Developer',
    'React Developer',
    'Full Stack Developer',
    'Software Engineer',
    'Web Developer',
    'Backend Developer',
    'Systems Architecture',
    'Product Owner',
    'Neural Lab',
    'Google DSC',
    'Python',
    'Django',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'PostgreSQL',
    'Database Design',
    'API Development',
    'Systems Integration'
  ],
  authors: [{ name: 'Syed Bilal Ali' }],
  creator: 'Syed Bilal Ali',
  publisher: 'Syed Bilal Ali',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://syedbilalali.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Syed Bilal Ali - Developer & Systems Analyst',
    description: 'Developer & Systems Analyst specializing in Python, Django, React, and Next.js. Building scalable web applications and solving complex problems.',
    siteName: 'Syed Bilal Ali Portfolio',
    images: [
      {
        url: '/profile-picture.png',
        width: 1200,
        height: 630,
        alt: 'Syed Bilal Ali - Developer & Systems Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Bilal Ali - Developer & Systems Analyst',
    description: 'Developer & Systems Analyst specializing in Python, Django, React, and Next.js. Building scalable solutions.',
    creator: '@bilalpydev',
    images: ['/profile-picture.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
