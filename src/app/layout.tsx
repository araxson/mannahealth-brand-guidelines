import type { Metadata } from 'next'
import { brandGuidelines } from '@/data/brand/guidelines'
import './globals.css'

export const metadata: Metadata = {
  title: `${brandGuidelines.companyName} - Brand Guidelines`,
  description: brandGuidelines.promise,
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
