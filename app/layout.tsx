import '../styles/global.css'
import { Analytics } from 'lib/analytics'
import { Plain } from 'layouts/plain'
import { Suspense } from 'react'

export const metadata = {
  title: 'Software Engineering — Marek Suscak',
  description: 'Oh hi! I\'m Marek. I share my experiments and spread the passion for computer systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Plain>
          {children}
        </Plain>
      </body>
    </html>
  )
}
