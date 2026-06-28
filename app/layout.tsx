import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import HeaderMegaMenu from "@/components/landing/HeaderMegaMenu";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { TranslationProvider } from "@/components/shared/translation-provider";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top-button";
import { AuthProvider } from "@/lib/rbac/auth-context";
import { Toaster } from "sonner";
import Footer from "@/components/landing/Footer";
import WhatWeDoSection from "@/components/landing/WhatWeDoSection";
import OurPartnersSection from "@/components/landing/OurPartnersSection";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PSTC - Population Services and Training Center",
  description:
    "Working towards sustainable development and social change across South Asia",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  keywords: ["NGO", "social development", "healthcare", "education", "PSTC"],
  authors: [{ name: "PSTC" }],
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0D7D6D" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Script id="pstc-theme-init" strategy="beforeInteractive">
          {`(function () {
  try {
    var storageKey = "pstc-theme";
    var themes = ["theme-pstc-blue-green", "theme-pstc-red-grey"];
    var savedTheme = localStorage.getItem(storageKey);
    var theme = themes.indexOf(savedTheme) >= 0 ? savedTheme : "theme-pstc-blue-green";
    document.documentElement.classList.remove("theme-pstc-blue-green", "theme-pstc-red-grey");
    document.documentElement.classList.add(theme);
  } catch (e) {}
})();`}
        </Script>
        <ThemeProvider>
          <TranslationProvider>
            <AuthProvider>
              <HeaderMegaMenu />
              {children}
              <Footer />
              <ScrollToTopButton />
              <Toaster position="bottom-right" richColors />
            </AuthProvider>
          </TranslationProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
