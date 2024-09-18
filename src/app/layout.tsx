import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Pin-it',
  description: 'Share your favorite places with the world',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['maps', 'myMaps', 'pinPoints', 'pinIt'],
  authors: [
    {
      name: 'theoLalande',
      url: 'https://www.linkedin.com/in/theo-lalande/',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
      </head>
      <body>{children}</body>
    </html>
  )
}
