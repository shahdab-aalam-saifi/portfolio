import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { siteConfig } from '@/config/site.config'
import { profileName, personalTitle, personalBio } from '@/lib/config-utils'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://shahdab-aalam-saifi.vercel.app'),
  title: `${profileName()} - ${personalTitle()}`,
  description: personalBio(),
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'TypeScript', 'Next.js', 'Web Development'],
  authors: [{ name: profileName() }],
  creator: profileName(),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shahdab-aalam-saifi.vercel.app',
    title: `${profileName()} - ${personalTitle()}`,
    description: personalBio(),
    siteName: `${profileName()} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profileName()} - ${personalTitle()}`,
    description: personalBio(),
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-mono min-h-screen bg-white text-gray-900 dark:bg-[#10151a] dark:text-[#e6e6e6]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
} 