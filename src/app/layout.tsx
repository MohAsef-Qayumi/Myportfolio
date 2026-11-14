import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider, themeScript } from "@/components/theme-provider"
import { profile } from "@/data/profile"

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

const description =
  "Full-stack web and mobile developer and AI engineer. I build web applications, Flutter apps and AI automation, from data model to production."

// Structured data so search engines and recruiter tools read the profile correctly.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  sameAs: Object.values(profile.socials),
}

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description,
    type: "website",
    images: [profile.photo],
  },
  twitter: { card: "summary", creator: "@AsefQayumi7989" },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0d" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        {/* Applies the saved theme before paint to avoid a light/dark flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
