import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { LanguageProvider } from "@/context/LanguageContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const siteUrl = "https://atlas-fitness-club.vercel.app"

export const metadata: Metadata = {
  title: "Atlas Fitness Club | Salle de sport à Alger",
  description:
    "Rejoignez Atlas Fitness Club à Alger. Équipements modernes, coachs professionnels, cours collectifs et abonnements adaptés à tous.",
  keywords: [
    "salle de sport",
    "Alger",
    "fitness",
    "musculation",
    "gym",
    "Algérie",
    "coach sportif",
    "abonnement salle",
  ],
  openGraph: {
    title: "Atlas Fitness Club | Dépassez vos limites",
    description:
      "Rejoignez Atlas Fitness Club et transformez votre corps avec nos équipements de pointe et nos coachs professionnels.",
    url: siteUrl,
    siteName: "Atlas Fitness Club",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/hero-bg.jpg`,
        width: 1920,
        height: 1080,
        alt: "Atlas Fitness Club - Salle de sport à Alger",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Fitness Club | Dépassez vos limites",
    description:
      "Rejoignez Atlas Fitness Club et transformez votre corps avec nos équipements de pointe et nos coachs professionnels.",
    images: [`${siteUrl}/images/hero-bg.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      fr: siteUrl,
      en: siteUrl,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="alternate" hrefLang="fr" href={siteUrl} />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <meta name="geo.region" content="DZ" />
        <meta name="geo.placename" content="Alger" />
      </head>
      <body className="min-h-screen bg-[#0a0a0a] font-sans text-white">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
