import type React from "react"
import type { Metadata } from "next"
import { Nunito, Space_Grotesk } from "next/font/google"
import { LayoutProvider } from "./layout-provider"
import { ProductsProvider } from "@/contexts/products-context"
import { SectionsProvider } from "@/contexts/sections-context"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CodeSnapGC - Premium Digital Assets & Code Resources",
  description:
    "Discover and purchase stunning digital assets, code snippets, and development resources from talented creators worldwide using our coin system.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${nunito.variable} ${spaceGrotesk.variable} antialiased`}>
        <ProductsProvider>
          <SectionsProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </SectionsProvider>
        </ProductsProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
