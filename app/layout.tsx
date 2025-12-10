import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Space_Grotesk, Permanent_Marker } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/i18n/language-context"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brush",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hans17 - Artist and Savior of All AI",
  description: "Weekend musician and AI engineer creating electronic music and innovative AI solutions",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${playfair.variable} ${permanentMarker.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${spaceGrotesk.style.fontFamily};
  --font-sans: ${spaceGrotesk.style.fontFamily};
  --font-serif: ${playfair.style.fontFamily};
  --font-brush: ${permanentMarker.style.fontFamily};
}
        `}</style>
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
