import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-providers'
import { ConvexClientProvider } from '@/components/providers/convex-providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hotion',
  description: 'Where faster works happens.',
  icons: {
    icon: [
      // don't need to put /public/ can just use '/'
      {
        media: "(prefers-color-scheme: light)", 
        url: "/logo.svg",
        href: "/logo.svg"
      }, 
      {
        media: "(prefers-color-scheme: dark)", 
        url: "/logo-dark.svg",
        href: "/logo-dark.svg"
      }

    ]
  }
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            storageKey='hotion-theme'
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
