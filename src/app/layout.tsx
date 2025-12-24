import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | MERN Stack Developer",
  description: "Full-stack developer specializing in MERN stack, Machine Learning, AI, and Java applications. Creating innovative solutions with modern technologies.",
  keywords: ["MERN Stack", "React", "Node.js", "MongoDB", "Machine Learning", "AI", "Java", "Full Stack Developer"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | MERN Stack Developer",
    description: "Full-stack developer specializing in MERN stack, Machine Learning, AI, and Java applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          // attribute="class"
          defaultTheme="system"
          // enableSystem
          // disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
