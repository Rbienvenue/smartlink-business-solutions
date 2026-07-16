import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SMART LINK Business Solutions LTD | Professional Business, Technology & Digital Solutions',
  description: 'SMART LINK Business Solutions LTD delivers professional technology, accounting, virtual assistance, business support, digital marketing, and creative services for startups, SMEs, NGOs, schools, government institutions, and large organizations.',
  keywords: 'business solutions, technology services, accounting, virtual assistant, digital marketing, graphic design, IT services, software development, website development, Rwanda',
  openGraph: {
    title: 'SMART LINK Business Solutions LTD',
    description: 'Professional business, technology, and digital solutions under one roof for organizations seeking efficiency, growth, and reliable support.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%230B2C5D'/%3E%3Ccircle cx='32' cy='50' r='10' fill='%23ffffff'/%3E%3Ccircle cx='68' cy='50' r='10' fill='%23ffffff'/%3E%3Crect x='32' y='45' width='36' height='10' fill='%23ffffff'/%3E%3C/svg%3E" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
