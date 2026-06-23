import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { TranslationProvider } from '@/components/shared/translation-provider'
import { ScrollToTopButton } from '@/components/shared/scroll-to-top-button'
import { AuthProvider } from '@/lib/rbac/auth-context'
import { Toaster } from 'sonner'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'PSTC - Population Services and Training Center',
  description: 'Working towards sustainable development and social change across South Asia',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  keywords: ['NGO', 'social development', 'healthcare', 'education', 'PSTC'],
  authors: [{ name: 'PSTC' }],
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0D7D6D' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (() => {
              try {
                const theme = localStorage.getItem('pstc_theme');
                const root = document.documentElement;
                const isDark = theme === 'dark';
                root.classList.toggle('dark', isDark);
                root.style.colorScheme = isDark ? 'dark' : 'light';
              } catch (error) {
                document.documentElement.style.colorScheme = 'light';
              }
            })();
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <TranslationProvider>
            <AuthProvider>
              {children}
              <ScrollToTopButton />
              <Toaster position="bottom-right" richColors />
            </AuthProvider>
          </TranslationProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
