import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ahamed Vahith K | AI Product Developer & Full Stack Developer Portfolio",
  description:
    "Portfolio of Ahamed Vahith K - AI Product Developer and Full Stack Developer specializing in AI products, Full Stack applications, and innovative digital solutions.",
  keywords: ["Ahamed Vahith K", "AI Product Developer", "Full Stack Developer", "AI Engineer", "Next.js", "Portfolio", "Computer Vision", "Deep Learning"],
  authors: [{ name: "Ahamed Vahith K" }],
  creator: "Ahamed Vahith K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahamedvahith-portfolio.vercel.app",
    title: "Ahamed Vahith K | AI Product Developer & Full Stack Developer Portfolio",
    description: "AI Product Developer and Full Stack Developer specializing in AI and innovative digital solutions.",
    siteName: "Ahamed Vahith Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahamed Vahith Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahamed Vahith K | AI Product Developer & Full Stack Developer",
    description: "AI Product Developer and Full Stack Developer portfolio.",
    creator: "@your_twitter_handle",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><linearGradient id=%22g%22 x1=%220%%22 y1=%220%%22 x2=%22100%%22 y2=%22100%%22><stop offset=%220%%22 stop-color=%22%231b3c53%22/><stop offset=%22100%%22 stop-color=%22%232a4d66%22/></linearGradient></defs><circle cx=%2250%22 cy=%2250%22 r=%2248%22 fill=%22url(%23g)%22/><text x=%2250%%22 y=%2254%%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2245%22 font-family=%22system-ui,sans-serif%22 font-weight=%22800%22 fill=%22%2360a5fa%22 tracking-tighter=%22-0.05em%22>AV</text></svg>"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ahamed Vahith K",
              url: "https://ahamedvahith-portfolio.vercel.app",
              jobTitle: "AI Product Developer & Full Stack Developer",
              description: "AI Product Developer and Full Stack Developer specializing in AI and innovative digital solutions.",
              sameAs: [
                "https://github.com/vahith33",
                "https://www.linkedin.com/in/vahith33",
                "https://www.instagram.com/vahith_33"
              ],
            }),
          }}
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
